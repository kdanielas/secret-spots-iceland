const { Navbar, Footer, ContactPanel } = window.SecretSpotsIcelandDesignSystem_2d8cbc;
const IMG = '../../assets/img/';
const NAV = [
  { label: 'Home' }, { label: 'Tours' }, { label: 'About' }, { label: 'How it works' },
  { label: 'Photography Guide' }, { label: 'Our Vehicles' }, { label: 'Blog' }, { label: 'Reviews' }, { label: 'FAQ' },
];
const TOURS = ['Secret Reykjanes (7h)', 'South Coast & Waterfalls (10h)', 'Highlands 3-day', 'Northern Lights Night'];

function Section({ children, tone = 'page', tight = false, style }) {
  const bg = { page: 'var(--surface-page)', alt: 'var(--surface-page-alt)', dark: 'var(--surface-dark)', raised: 'var(--surface-raised)' }[tone];
  return (
    <section style={{ background: bg, padding: `${tight ? 'var(--section-py-tight)' : 'var(--section-py)'} var(--space-9)`, ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function Page({ active, onNavigate, children }) {
  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <Navbar logoSrc="../../assets/logo.png" items={NAV} active={active} onNavigate={onNavigate} />
      {children}
      <ContactPanel tours={TOURS} />
      <Footer />
    </div>
  );
}

Object.assign(window, { Section, Page, NAV, TOURS, IMG });
