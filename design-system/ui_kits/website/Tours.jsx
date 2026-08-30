const { Hero, SectionHeading, TourCard, ImageStrip, Button, ReviewCard, Rating } = window.SecretSpotsIcelandDesignSystem_2d8cbc;

const DAY_TOURS = [
  { image: 'hero-geothermal', duration: '7 hours', title: 'Secret Reykjanes', price: '€149', description: 'Volcanic craters, geothermal fields and dramatic sea cliffs near Reykjavik, with professional photography guidance.' },
  { image: 'tile-brimketill-lava-pool', duration: '10 hours', title: 'South Coast & Waterfalls', price: '€189', description: 'Black sand beaches, basalt sea stacks and the two waterfalls you can walk behind — timed away from the buses.' },
  { image: 'tile-lake-kleifarvatn', duration: '8 hours', title: 'Golden Circle, Quietly', price: '€169', description: 'The classic route run backwards, with hidden stops and craters most itineraries drive straight past.' },
  { image: 'waterfall-camera', duration: '6 hours', title: 'Northern Lights Night', price: '€159', description: 'Chasing clear sky with a photographer who knows which valley to be standing in when it starts.' },
];
const MULTI_DAY = [
  { image: 'hero-luke-highlands', duration: '3 days', title: 'Remote Highlands', price: '€1,290', description: 'Three days into the interior in a custom 4x4 — river crossings, empty roads and camera time at every stop.' },
  { image: 'basalt-sea-cliffs', duration: '5 days', title: 'Full Ring Road, Private', price: '€2,450', description: 'The whole island at your pace, with the route rebuilt each morning around the forecast and the light.' },
];

function Tours({ onNavigate }) {
  const [booked, setBooked] = React.useState(null);
  return (
    <Page active="Tours" onNavigate={onNavigate}>
      <Hero height={460} image={IMG + 'hero-sea-cliffs.jpg'}
        title={<>Iceland Photography Tours — Book Now</>}
        subtitle="From day trips to multi-day adventures, every tour is fully private and built around you. Choose a classic private Iceland tour or a dedicated photography tour with Luke — a local guide and professional photographer with nearly 20 years exploring Iceland's most remote landscapes."
        onPrimary={() => setBooked('Secret Reykjanes')} />

      <Section tight>
        <SectionHeading align="center" eyebrow="Tours in Iceland" title="Private Iceland Day Tours"
          lead="Every tour is private and shaped around the weather, the light, and what you actually want to see — with a local guide who knows where the crowds aren't." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--grid-gap)', marginTop: 'var(--space-11)' }}>
          {DAY_TOURS.map((t) => <TourCard key={t.title} {...t} image={IMG + t.image + '.jpg'} onClick={() => setBooked(t.title)} />)}
        </div>
      </Section>

      <Section tight style={{ paddingTop: 0 }}>
        <SectionHeading align="center" eyebrow="Tours in Iceland" title="Private Iceland Multi day Tours"
          lead="Every tour is private and shaped around the weather, the light, and what you actually want to see — with a local guide who knows where the crowds aren't." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 'var(--grid-gap)', marginTop: 'var(--space-11)' }}>
          {MULTI_DAY.map((t) => <TourCard key={t.title} layout="wide" {...t} image={IMG + t.image + '.jpg'} onClick={() => setBooked(t.title)} />)}
        </div>
      </Section>

      <Section tight style={{ paddingTop: 0 }}>
        <ImageStrip ratio="5 / 4" images={['gallery-puffin', 'gallery-ice-cave-group', 'gallery-seljalandsfoss-group', 'gallery-bruarfoss-pair'].map((n) => IMG + n + '.jpg')} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)', marginTop: 'var(--space-12)' }}>
          <h2 style={{ font: 'var(--type-display-md)', textAlign: 'center' }}>Our photography guide &amp; tips</h2>
          <p style={{ font: 'var(--type-body)', textAlign: 'center', maxWidth: 520, margin: 0 }}>Every tour is private and shaped around the weather, the light, and what you actually want to see — with a local guide who knows where the crowds aren't.</p>
          <Button variant="outline">See Our Photography Guide</Button>
        </div>
      </Section>

      <Section tone="alt" tight>
        <h2 style={{ font: 'var(--type-display-md)', textAlign: 'center', marginBottom: 'var(--space-11)' }}>What our customers say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', background: 'var(--surface-raised)', borderRadius: 'var(--radius-card)', overflow: 'hidden' }}>
          <img src={IMG + 'gallery-bruarfoss-pair.jpg'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ padding: 'var(--space-12) var(--space-11)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <img src={IMG + 'gallery-puffin.jpg'} alt="" style={{ width: 34, height: 34, borderRadius: 'var(--radius-pill)', objectFit: 'cover' }} />
              <div>
                <div style={{ font: 'var(--type-body-sm)', fontWeight: 700, color: 'var(--text-heading)' }}>Britta Hormann</div>
                <div style={{ font: 'var(--type-body-xs)', color: 'var(--amber-600)' }}>August 2026</div>
              </div>
            </div>
            <Rating value={5} size={13} />
            <p style={{ font: 'var(--type-display-xs)', lineHeight: 1.55, color: 'var(--text-heading)', margin: 0 }}>
              Luke was seriously the best guide we could have asked for! He was knowledgeable, funny, easygoing, and somehow always knew where we should go. O <a href="#" style={{ textDecoration: 'underline' }}>Read More</a>
            </p>
          </div>
        </div>
      </Section>

      {booked ? (
        <div onClick={() => setBooked(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(23,32,40,.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: 'var(--surface-raised)', borderRadius: 'var(--radius-panel)', padding: 'var(--panel-pad)', maxWidth: 420, boxShadow: 'var(--shadow-float)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <h3 style={{ font: 'var(--type-display-sm)' }}>{booked}</h3>
            <p style={{ font: 'var(--type-body)', margin: 0 }}>Availability requests go straight to Luke — usually answered within 24 hours. Scroll down to the enquiry form to send your dates.</p>
            <Button variant="dark" onClick={() => setBooked(null)}>Got it</Button>
          </div>
        </div>
      ) : null}
    </Page>
  );
}
Object.assign(window, { Tours });
