/**
 * Cookie consent configuration (#26, #27).
 *
 * Shared by ConsentMode.astro — the <head> script that sets the Consent Mode v2
 * defaults before Tag Manager loads — and CookieConsent.astro, the banner and
 * the preferences dialog. Both inject these values with define:vars rather than
 * importing them: the defaults have to run before every other script on the
 * page, and an inline script cannot import a module.
 */

/** First-party cookie that records the decision. Named in the Cookie Policy. */
export const CONSENT_COOKIE = 'ssi_consent';

/**
 * Bump this when a new category or a new vendor appears. Stored decisions from
 * an older version stop counting and the banner asks again, because consent
 * given for the old set of cookies does not cover the new one.
 */
export const CONSENT_VERSION = 1;

/** 12 months, matching what the Cookie Policy promises. */
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 365;

export interface ConsentCategory {
  id: string;
  title: string;
  /** Shown under the toggle in the preferences dialog. */
  description: string;
  /** Always on: the site cannot do its job without these, so there is nothing to ask. */
  required?: boolean;
  /** The Consent Mode v2 signals this category grants or denies. */
  signals: string[];
}

/**
 * The categories the visitor chooses between. Keep these in step with the
 * groups in cookie-policy.astro — the policy is the detailed inventory of what
 * each of these switches controls.
 */
export const CATEGORIES: ConsentCategory[] = [
  {
    id: 'necessary',
    title: 'Strictly necessary',
    description:
      'Needed for the site to work and to keep the contact form free of spam. They remember this cookie choice and let Google reCAPTCHA tell a person apart from an automated script.',
    required: true,
    signals: ['security_storage', 'functionality_storage'],
  },
  {
    id: 'analytics',
    title: 'Analytics and measurement',
    description:
      'Let Google Analytics count visits and record which pages are opened, how far they are scrolled and whether the contact form is submitted, so we can improve the site. No advertising or cross-site tracking.',
    signals: ['analytics_storage'],
  },
];

/**
 * Signals nothing on this site can ever grant. We run no advertising,
 * remarketing or personalisation tags, so these stay denied permanently
 * instead of appearing as a switch the visitor has no reason to see.
 */
export const DENIED_SIGNALS = [
  'ad_storage',
  'ad_user_data',
  'ad_personalization',
  'personalization_storage',
];
