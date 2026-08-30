const { Hero, FactBar, SectionHeading, Button, HighlightTile, TestimonialQuote, Icon } = window.SecretSpotsIcelandDesignSystem_2d8cbc;

const HIGHLIGHTS = [
  { image: 'tile-valahnukamol-sea-cliffs', title: 'Valahnúkamöl Sea Cliffs', description: 'Stunning ocean views, dramatic sea stacks, and hundreds of nesting seabirds along a jagged shoreline.' },
  { image: 'tile-reykjanesviti-lighthouse', title: 'Reykjanesviti Lighthouse', description: "Iceland's oldest standing lighthouse, perched elegantly on a volcanic hill overlooking raw coastlines." },
  { image: 'tile-brimketill-lava-pool', title: 'Brimketill Lava Rock Pool', description: 'A beautiful natural rock pool carved into black volcanic basalt by the sheer force of the Atlantic ocean.' },
  { image: 'tile-krysuvik', title: 'Gunnuhver Geothermal Area', description: 'A highly active geothermal zone with hissing vents, boiling mud pools, and colorful mineral deposits.' },
  { image: 'tile-lake-kleifarvatn', title: 'Lake Kleifarvatn', description: 'A deep, mysterious lake surrounded by black volcanic sands and dramatic steep mountains.' },
  { image: 'tile-krysuvik', title: 'Krýsuvík Geothermal Area', description: 'A steaming, multi-colored valley of volcanic hot springs, sulfur deposits, and beautiful wooden walking paths.' },
  { image: 'tile-hidden-lava-fields', title: 'Hidden Lava Fields & Secret Locations', description: 'Exclusive access to private off-the-beaten-path locations, hidden cave structures, and ancient untouched volcanic flows.' },
];

const WHO = [
  'Creative souls longing for distinct geothermal and volcanic backdrops.',
  'Photographers searching for dramatic light, steam, ocean stacks and raw geologic textures.',
  'Solo travellers or couples seeking a highly personal and exclusive private experience.',
  'Families wanting dynamic Icelandic adventure without crowded tour bus timetables.',
  'Anyone desiring beautiful, professional landscape portraits from their journey in Iceland.',
];

function TourDetail({ onNavigate }) {
  return (
    <Page active="Tours" onNavigate={onNavigate}>
      <Hero height={420} image={IMG + 'hero-geothermal.jpg'}
        title={<>The Hidden Side of Reykjanes</>}
        subtitle={<>Private Tour &amp; Photography Experience with a Local Guide<br />Private · Customized Pick-up from Keflavík Airport · Photography Focused · Custom 4X4</>} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-9)' }}>
        <FactBar items={[
          { label: 'Duration', value: '7 hours' }, { label: 'Group', value: 'Private only' },
          { label: 'From', value: '$1,700 / group' }, { label: 'Pickup', value: 'Reykjavík · Keflavík' },
          { label: 'Season', value: 'Year-round' },
        ]} />
      </div>

      <Section tight>
        <div style={{ display: 'grid', gridTemplateColumns: '440px 1fr', gap: 'var(--space-13)', alignItems: 'start' }}>
          <img src={IMG + 'tile-krysuvik.jpg'} alt="" style={{ width: '100%', borderRadius: 'var(--radius-image)', aspectRatio: '4 / 3', objectFit: 'cover' }} />
          <SectionHeading eyebrow="The landscape" title={<>Another planet. One hour from Reykjavík.</>}
            lead={<>The Reykjanes Peninsula is home to dramatic geothermal activity, steaming mud pools, vast moss-covered lava fields, and rugged volcanic coastlines. It is a region of raw beauty and constant change — a true representation of Iceland's fiery volcanic spirit, often overlooked by major tour buses.<br /><br />This private custom tour allows us to explore the hidden nooks of Reykjanes at your own pace, with professional photography guidance to capture your memories against the most alien backdrops imaginable.</>} />
        </div>
      </Section>

      <Section tight style={{ paddingTop: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: 'var(--space-13)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)', alignItems: 'flex-start' }}>
            <SectionHeading eyebrow="The experience" title="What to Expect on the Reykjanes Tour"
              lead={<>Prepare for a day of dramatic contrasts. We'll pick you up in our custom-built 4X4 and immediately leave the paved highways behind to venture into active geothermal fields and volcanic craters.<br /><br />You'll walk along towering sea cliffs where the roaring Atlantic waves crash against dark basalt pillars, witness boiling hot springs up close, and enjoy gourmet local refreshments prepared right in the wild.</>} />
            <Button variant="outline">Get in touch</Button>
          </div>
          <img src={IMG + 'basalt-sea-cliffs.jpg'} alt="" style={{ width: '100%', borderRadius: 'var(--radius-image)', aspectRatio: '4 / 5', objectFit: 'cover' }} />
        </div>
      </Section>

      <Section tone="dark" tight>
        <h2 style={{ font: 'var(--type-display-md)', color: 'var(--text-on-dark)', textAlign: 'center', marginBottom: 'var(--space-11)' }}>Reykjanes Highlights</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--grid-gap)' }}>
          {HIGHLIGHTS.slice(0, 4).map((h) => <HighlightTile key={h.title} {...h} image={IMG + h.image + '.jpg'} />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--grid-gap)', marginTop: 'var(--space-9)' }}>
          {HIGHLIGHTS.slice(4).map((h) => <HighlightTile key={h.title} {...h} image={IMG + h.image + '.jpg'} />)}
        </div>
      </Section>

      <Section tight>
        <div style={{ display: 'grid', gridTemplateColumns: '440px 1fr', gap: 'var(--space-13)', alignItems: 'start' }}>
          <img src={IMG + 'waterfall-camera.jpg'} alt="" style={{ width: '100%', borderRadius: 'var(--radius-image)', aspectRatio: '4 / 5', objectFit: 'cover' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)', alignItems: 'flex-start' }}>
            <SectionHeading eyebrow="The memories" title="Photographing the Reykjanes Peninsula"
              lead={<>As a professional photographer, I don't just guide you: I help you capture the true scale of Iceland's raw landscapes. Whether you are using a professional DSLR, mirrorless system, or simply your smartphone, I'll advise you on composition, lighting, and camera settings.<br /><br />Additionally, I will capture professional portraits of you throughout the journey, providing high-resolution digital files after the trip so you can always relive the adventure.</>} />
            <Button variant="outline">See the Gallery</Button>
          </div>
        </div>
      </Section>

      <Section tone="alt" tight>
        <TestimonialQuote align="center"
          quote={'"Our afternoon with Luke was wonderful! He is very patient, accommodating and knowledgeable of the area. He took us to so many beautiful places out of the crowds and took AMAZING photos that captured our memories forever. I highly recommend Luke if you are visiting Reykjavik!"'}
          author="Deborah F" meta="United States · Tripadvisor Review" />
      </Section>

      <Section tight>
        <h2 style={{ font: 'var(--type-display-md)', marginBottom: 'var(--space-9)' }}>Who This Reykjanes Tour Is For</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: 720 }}>
          {WHO.map((w) => (
            <li key={w} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start', font: 'var(--type-body)', color: 'var(--text-body)' }}>
              <span style={{ color: 'var(--blue-500)', marginTop: 3 }}><Icon name="dot" size={16} /></span>{w}
            </li>
          ))}
        </ul>
      </Section>
    </Page>
  );
}
Object.assign(window, { TourDetail });
