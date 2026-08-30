const { Hero, SectionHeading, Button, TestimonialQuote, ImageStrip } = window.SecretSpotsIcelandDesignSystem_2d8cbc;

function About({ onNavigate }) {
  return (
    <Page active="About" onNavigate={onNavigate}>
      <Hero height={440} image={IMG + 'hero-luke-highlands.jpg'}
        title={<>Meet Luke | Private Guide &amp; Photographer in Hidden Iceland</>}
        subtitle="Secret Spots of Iceland was founded by Luke — a professional photographer and private guide in Iceland who has been exploring Iceland's most remote, hidden landscapes since 2006, creating private Iceland tours for travelers looking beyond the typical routes." />

      <Section tight>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 'var(--space-13)', alignItems: 'start' }}>
          <img src={IMG + 'basalt-sea-cliffs.jpg'} alt="" style={{ width: '100%', borderRadius: 'var(--radius-image)', aspectRatio: '3 / 4', objectFit: 'cover' }} />
          <SectionHeading eyebrow="The landscape" title="Born from a passion for exploration"
            lead={<>It didn't start as a business. It started as an obsession. For nearly 20 years Luke has been exploring Iceland's dramatic landscapes, hidden waterfalls, remote highlands, and lesser-known corners of the island — backroads that didn't appear on maps, unique viewpoints that many visitors never get to see, and these hidden gems of Iceland reveal a quieter side of the country, away from crowded tourist routes.<br /><br />What began as a passion for adventure and photography eventually became Secret Spots of Iceland — a way to share the places he loves most with travellers from around the world.</>} />
        </div>
      </Section>

      <Section tight style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-13)', alignItems: 'center' }}>
          <SectionHeading eyebrow="The experience" title={'Why "Secret Spots"'}
            lead="When Luke talks about Secret Spots, he doesn't mean places no one has ever visited. He means alternative viewpoints, lesser-known waterfalls, perfect timing, and the hidden corners of Iceland that most standard tours never reach. The kind of local knowledge that only comes from nearly two decades of dedicated exploration." />
          <ImageStrip columns={2} ratio="4 / 3" images={['basalt-sea-cliffs', 'tile-reykjanesviti-lighthouse', 'tile-lake-kleifarvatn', 'tile-krysuvik'].map((n) => IMG + n + '.jpg')} />
        </div>
      </Section>

      <Section tight style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 'var(--space-13)', alignItems: 'start' }}>
          <img src={IMG + 'luke-portrait.jpg'} alt="" style={{ width: '100%', borderRadius: 'var(--radius-image)', aspectRatio: '3 / 4', objectFit: 'cover' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)', alignItems: 'flex-start' }}>
            <SectionHeading eyebrow="The landscape" title="Luke the photographer"
              lead={<>Photography has always been a big part of Luke's life. As a certified tour guide, professional photographer, and private tour guide in Iceland specializing in Iceland photography tours during every tour Luke not only guides you to incredible locations but also helps capture the moments that make your adventure special — so you return home with both amazing memories and beautiful photographs.<br /><br />His work has taken him across every corner of Iceland — from the dramatic black sand beaches of the South Coast and the otherworldly lava fields of the Reykjanes Peninsula, to remote Highland canyons and the dancing colours of the Northern Lights over glacier lagoons, creating unforgettable Northern Lights photography experiences.</>} />
            <Button variant="outline" onClick={() => onNavigate('Tours')}>Explore Our Tour Gallery</Button>
          </div>
        </div>
      </Section>

      <Section tight style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 'var(--space-13)', alignItems: 'start' }}>
          <img src={IMG + 'waterfall-camera.jpg'} alt="" style={{ width: '100%', borderRadius: 'var(--radius-image)', aspectRatio: '3 / 4', objectFit: 'cover' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)', alignItems: 'flex-start' }}>
            <SectionHeading eyebrow="The memories" title="How Luke runs his tours"
              lead={<>As a private tour guide in Iceland, Luke creates every private Iceland tour around the same foundation — flexibility, authenticity, and genuine passion.<br /><br />No fixed itineraries, no tour buses, no crowds. Just you, your group, and a guide who knows Iceland's hidden side intimately.<br /><br />Luke works with a small team of trusted local guides who share the same values and deep local knowledge — ensuring the Secret Spots experience is always consistent, personal and unforgettable.</>} />
            <Button variant="link" iconAfter="arrow-right" onClick={() => onNavigate('How it works')}>Learn how it works</Button>
          </div>
        </div>
      </Section>

      <Section tone="alt" tight>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 'var(--space-13)', alignItems: 'center' }}>
          <img src={IMG + 'waterfall-camera.jpg'} alt="" style={{ width: '100%', borderRadius: 'var(--radius-image)', aspectRatio: '4 / 5', objectFit: 'cover' }} />
          <TestimonialQuote align="left"
            quote={'"I started Secret Spots because I genuinely believe Iceland is best experienced privately, slowly, and with someone who knows where to look. I look forward to welcoming you and sharing the hidden places that have inspired me for nearly two decades."'}
            author="Luke, Founder of Secret Spots of Iceland" meta="United States · Tripadvisor Review" />
        </div>
      </Section>
    </Page>
  );
}
Object.assign(window, { About });
