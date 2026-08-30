const { Hero, StatBar, FeaturedOnBar, SectionHeading, IconBullet, ReviewCard, Chip, Button, ImageStrip, StepItem, FaqItem } = window.SecretSpotsIcelandDesignSystem_2d8cbc;

const BULLETS = [
  { icon: 'user', title: 'Hidden locations, not tour-bus stops', description: 'Nearly 20 years of local exploration means routes away from the crowds.' },
  { icon: 'clock', title: 'Flexible, weather-adaptive itineraries', description: 'The plan changes with the weather and the light — never the other way around.' },
  { icon: 'briefcase', title: 'Professional photography guidance', description: 'Luke is a photographer first — every stop is timed and framed for the shot.' },
  { icon: 'truck', title: 'Comfortable, capable vehicles', description: "Built for Iceland's terrain, so weather and road conditions don't cancel the day." },
  { icon: 'heart', title: 'Real local recommendations', description: 'Restaurants, hot springs and viewpoints Luke actually uses — not a sponsored list.' },
];

const REVIEWS = [
  { name: 'Britta Hormann', date: 'August 2026', quote: 'Luke was seriously the best guide we could have asked for! He was knowledgeable, funny, easygoing, and somehow always knew where we should go' },
  { name: 'Alexandra Klinke', date: 'August 2026', quote: 'An unforgettable day exploring Iceland! Luke took us to breathtaking places away from the crowds, including a beautiful waterfall hike that felt' },
  { name: 'Ronald Ashby', date: 'August 2026', initial: 'R', quote: 'The whole process with Secret Spots of Iceland from the beginning to the end could not have been done better. Luke and Fifi were very responsive wit' },
  { name: 'Marta Nowak', date: 'July 2026', initial: 'M', quote: 'We had two private days with Luke and both were completely different — he read the forecast and rebuilt the route each morning' },
];

const STEPS = [
  { number: '01', title: 'Tell us your dates', description: 'Send your travel dates, group size and interests via WhatsApp or the form below.' },
  { number: '02', title: 'Get a custom plan', description: 'Luke builds a route around the forecast, the light, and what you actually want to see.' },
  { number: '03', title: 'Private tour day', description: 'Pickup in a comfortable vehicle, flexible pace, and stops most visitors never find.' },
  { number: '04', title: 'Photos, delivered', description: 'Your best moments, shot and shared after the tour — not just memories on a phone.' },
];

const FAQS = [
  { question: 'Are your tours private, or do you join a group?', answer: "Every Secret Spots tour is 100% private — it's just you (and whoever you bring), Luke, and the vehicle. No strangers, no fixed bus schedule.", defaultOpen: true },
  { question: "What's included in the price?" , answer: 'Private guiding, the vehicle and fuel, photography guidance, and edited photos after the tour.' },
  { question: 'What happens if the weather is bad?', answer: 'The route changes, not the day. Luke rebuilds the plan around the forecast every morning.' },
  { question: 'Do I need to be in good physical shape?', answer: 'No. Tours are all levels — walks are short and optional unless you ask for something harder.' },
  { question: 'Can you customize a multi-day itinerary?', answer: 'Yes. Multi-day routes are built from scratch around your dates and interests.' },
  { question: 'How far in advance should I book?', answer: 'Summer dates fill months ahead; winter is often possible within a couple of weeks.' },
];

function Home({ onNavigate }) {
  return (
    <Page active="Home" onNavigate={onNavigate}>
      <Hero
        height={480}
        image={IMG + 'hero-black-sand.jpg'}
        title={<>Private Iceland Tours with a Local Guide &amp; Photographer</>}
        subtitle="Discover Iceland through photography tours designed around your pace, interests, and the best light. Explore hidden landscapes with a local Iceland private tour guide."
        onPrimary={() => onNavigate('Tours')} onSecondary={() => onNavigate('Tours')}
      >
        <StatBar style={{ width: '100%', marginTop: 'var(--space-9)' }} items={[
          { value: '99%', label: 'Would recommend' }, { value: '7+', label: 'Years in Iceland' },
          { value: '5.0 ☆', label: 'Average rating' }, { value: '300+', label: 'Travelers guided' },
        ]} />
      </Hero>
      <FeaturedOnBar platforms={[{ name: 'Tripadvisor', rating: 5 }, { name: 'Airbnb Experiences' }, { name: 'GetYourGuide' }, { name: 'Viator' }]} />

      <Section tight>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 'var(--space-13)', alignItems: 'start' }}>
          <img src={IMG + 'black-sand-stack.jpg'} alt="" style={{ width: '100%', borderRadius: 'var(--radius-image)', aspectRatio: '3 / 4', objectFit: 'cover' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>
            <SectionHeading size="xl" eyebrow="Why choose a private tour"
              title="Private Iceland tours offer a completely different way to explore the country"
              lead="Our private tours of Iceland are created for travelers who want flexibility, comfort, and a deeper connection with the country. Every tour is just you and your group — designed around what you want to see, how you want to move, and what the weather and light make possible that day." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              {BULLETS.map((b) => <IconBullet key={b.title} {...b} />)}
            </div>
          </div>
        </div>
      </Section>

      <Section tight style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2 style={{ font: 'var(--type-display-md)', textAlign: 'center', marginBottom: 'var(--space-9)' }}>What our customers say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 'var(--grid-gap)', padding: '0 var(--space-9)' }}>
          {REVIEWS.map((r) => <ReviewCard key={r.name} {...r} />)}
        </div>
      </Section>

      <Section tight>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 'var(--space-13)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)', alignItems: 'flex-start' }}>
            <SectionHeading size="xl" eyebrow="Meet your guide" title={<>Luke — Local Guide &amp;<br />Photographer</>}
              lead={<>For nearly 20 years, I've been exploring Iceland's most dramatic landscapes, hidden waterfalls, remote highlands, and lesser-known corners of the island. Through my <a href="#" style={{ textDecoration: 'underline' }}>Iceland photography tours</a>, I help travelers capture waterfalls, glaciers, volcanic landscapes, and the Northern Lights at their best — showcasing the lesser-known locations that most visitors never find.</>} />
            <Button variant="primary" onClick={() => onNavigate('About')}>Meet the man behind the lens</Button>
          </div>
          <div style={{ position: 'relative' }}>
            <img src={IMG + 'luke-portrait.jpg'} alt="Luke on location in the Icelandic highlands" style={{ width: '100%', borderRadius: 'var(--radius-image)', aspectRatio: '4 / 5', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: -14, left: -14 }}><Chip tone="light">~20 Years in Iceland</Chip></div>
          </div>
        </div>
      </Section>

      <Section tight style={{ paddingTop: 0 }}>
        <ImageStrip ratio="5 / 4" images={['gallery-puffin', 'gallery-ice-cave-group', 'gallery-seljalandsfoss-group', 'gallery-bruarfoss-pair'].map((n) => IMG + n + '.jpg')} />
      </Section>

      <Section tight style={{ paddingTop: 0 }}>
        <SectionHeading align="center" eyebrow="How it works" title={<>From first message to the<br />photos in your hands</>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-9)', marginTop: 'var(--space-12)' }}>
          {STEPS.map((s) => <StepItem key={s.number} {...s} />)}
        </div>
      </Section>

      <Section tone="alt" tight>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'var(--space-13)', alignItems: 'start' }}>
          <SectionHeading eyebrow="Questions" title={<>Frequently Asked<br />Questions</>}
            lead="Starter answers below — flag any that need a fact-check against your real policies before this goes live." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {FAQS.map((q) => <FaqItem key={q.question} {...q} />)}
          </div>
        </div>
      </Section>
    </Page>
  );
}
Object.assign(window, { Home });
