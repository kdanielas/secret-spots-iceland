/**
 * POST /api/contact — receives the inquiry from the form on /contact, verifies
 * the reCAPTCHA token, re-validates every field and emails it to Luke (#21).
 *
 * This is a Vercel Function in the platform's `/api` directory, not an Astro
 * route: the site stays `output: 'static'`, and the function runs on whatever
 * Node version the Vercel project is set to. (The Astro adapter that Astro 4
 * can use, @astrojs/vercel v7, hard-codes `nodejs18.x`, which Vercel no longer
 * offers.) Nothing here is imported by the Astro build.
 */

// Reached through globalThis because the project carries no @types/node; the
// Vercel Node runtime provides `process`.
const env =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};

/** Secrets: Vercel > Settings > Environment Variables. See .env.example. */
const RESEND_API_KEY = env.RESEND_API_KEY;
const RECAPTCHA_SECRET_KEY = env.RECAPTCHA_SECRET_KEY;
/** Verified sender on the Resend domain — not the visitor, or the mail bounces. */
const CONTACT_FROM_EMAIL = env.CONTACT_FROM_EMAIL;
/**
 * Luke's inbox. Mirrors BUSINESS.email in src/data/site.ts, copied rather than
 * imported because Vercel bundles this file on its own, outside the Astro build.
 */
const CONTACT_TO_EMAIL = env.CONTACT_TO_EMAIL || 'hello@secretspotsiceland.com';

/** Caps per field, so a bot cannot push a megabyte of text into the inbox. */
const LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  experience: 4000,
  countryCode: 8,
  phone: 32,
  tour: 120,
  tourDate: 10,
  foundUs: 80,
  guests: 4,
  token: 4000,
  honeypot: 100,
} as const;

/** What the visitor sees when the failure is ours, not theirs. */
const UNREACHABLE = 'We could not send your inquiry right now.';

type Fields = Record<string, string>;

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

/** Deliberately vague for the visitor; the detail goes to the function log. */
function fail(status: number, logMessage: string, visitorMessage = UNREACHABLE): Response {
  console.error('[contact] ' + logMessage);
  return json(status, { ok: false, error: visitorMessage });
}

/** Trim, cap the length, and normalise the CRLF line breaks multipart sends. */
function clean(value: FormDataEntryValue | null, max: number): string {
  return typeof value === 'string' ? value.replace(/\r\n/g, '\n').trim().slice(0, max) : '';
}

/**
 * Same shape the browser accepts for `<input type="email">`: something before
 * the @, a dot-separated domain after it. Anything subtler is for the mail
 * server to reject, not for us to guess at.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

/** Server-side mirror of the browser validation — the browser can be bypassed. */
function validate(f: Fields, guests: number, consent: boolean): string | null {
  if (!f.firstName) return 'First name is required.';
  if (!f.lastName) return 'Last name is required.';
  if (!EMAIL_RE.test(f.email)) return 'A valid email address is required.';
  if (!f.experience) return 'Please tell us about your ideal Iceland experience.';
  if (!f.countryCode) return 'Country code is required.';
  if (!f.phone) return 'Phone number is required.';
  if (!f.tour) return 'Please pick the tour you are interested in.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(f.tourDate) || Number.isNaN(Date.parse(f.tourDate))) {
    return 'Please pick a valid tour date.';
  }
  if (!Number.isInteger(guests) || guests < 1 || guests > 40) {
    return 'Number of guests must be between 1 and 40.';
  }
  if (!consent) return 'Please accept the Privacy Policy to send your inquiry.';
  return null;
}

/** reCAPTCHA v2 checkbox: the token is single-use and expires after two minutes. */
async function recaptchaPasses(token: string, ip: string | null): Promise<boolean> {
  const body = new URLSearchParams({ secret: RECAPTCHA_SECRET_KEY!, response: token });
  if (ip) body.set('remoteip', ip);
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!res.ok) throw new Error('siteverify HTTP ' + res.status);
  const data = (await res.json()) as { success?: boolean; 'error-codes'?: string[] };
  if (!data.success) {
    console.error('[contact] reCAPTCHA rejected: ' + (data['error-codes'] ?? []).join(', '));
  }
  return data.success === true;
}

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (c) => ESCAPES[c]);

function emailBody(rows: [string, string][], heading: string) {
  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');
  const cells = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;vertical-align:top"><strong>${escapeHtml(label)}</strong></td>` +
        `<td style="padding:4px 0">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`
    )
    .join('');
  return { text, html: `<h2>${escapeHtml(heading)}</h2><table>${cells}</table>` };
}

async function handlePost(request: Request): Promise<Response> {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, 'body was not form data', 'We could not read the form. Please try again.');
  }

  // Honeypot: a field no human sees or tabs into, so anything in it is a bot.
  // Answer 200 so the bot stops retrying, and send nothing.
  if (clean(form.get('company'), LIMITS.honeypot)) {
    console.warn('[contact] honeypot filled, dropping submission');
    return json(200, { ok: true });
  }

  const f: Fields = {
    firstName: clean(form.get('firstName'), LIMITS.firstName),
    lastName: clean(form.get('lastName'), LIMITS.lastName),
    email: clean(form.get('email'), LIMITS.email),
    experience: clean(form.get('experience'), LIMITS.experience),
    countryCode: clean(form.get('countryCode'), LIMITS.countryCode),
    phone: clean(form.get('phone'), LIMITS.phone),
    tour: clean(form.get('tour'), LIMITS.tour),
    tourDate: clean(form.get('tourDate'), LIMITS.tourDate),
    foundUs: clean(form.get('foundUs'), LIMITS.foundUs),
  };
  const guests = Number(clean(form.get('guests'), LIMITS.guests));
  const consent = form.get('privacyConsent') !== null;

  const invalid = validate(f, guests, consent);
  if (invalid) return json(400, { ok: false, error: invalid });

  // Missing configuration is a 503: the visitor did nothing wrong, and the page
  // shows them Luke's phone and email instead of swallowing the inquiry.
  if (!RECAPTCHA_SECRET_KEY) return fail(503, 'RECAPTCHA_SECRET_KEY is not set');
  if (!RESEND_API_KEY) return fail(503, 'RESEND_API_KEY is not set');
  if (!CONTACT_FROM_EMAIL) return fail(503, 'CONTACT_FROM_EMAIL is not set');

  const token = clean(form.get('g-recaptcha-response'), LIMITS.token);
  if (!token) return json(400, { ok: false, error: "Please confirm you're not a robot." });
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null;
    if (!(await recaptchaPasses(token, ip))) {
      return json(400, { ok: false, error: 'The robot check did not pass. Please tick the box again.' });
    }
  } catch (err) {
    return fail(502, 'reCAPTCHA verification failed: ' + err);
  }

  const name = `${f.firstName} ${f.lastName}`;
  const { text, html } = emailBody(
    [
      ['Name', name],
      ['Email', f.email],
      ['Phone', `${f.countryCode} ${f.phone}`],
      ['Tour', f.tour],
      ['Preferred date', f.tourDate],
      ['Guests', String(guests)],
      ['Found us via', f.foundUs],
      ['Message', f.experience],
    ],
    `New inquiry from ${name}`
  );

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${RESEND_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        // reply_to is the visitor, so hitting Reply in the inbox answers them.
        reply_to: f.email,
        subject: `New inquiry: ${f.tour} — ${name}`,
        text,
        html,
      }),
    });
    if (!res.ok) return fail(502, `Resend HTTP ${res.status}: ${await res.text()}`);
  } catch (err) {
    return fail(502, 'Resend request failed: ' + err);
  }

  // 200 only once the email is out the door.
  return json(200, { ok: true });
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
      return new Response(null, { status: 405, headers: { allow: 'POST' } });
    }
    return handlePost(request);
  },
};
