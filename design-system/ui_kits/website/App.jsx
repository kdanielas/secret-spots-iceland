function App() {
  const [page, setPage] = React.useState('Home');
  const go = (label) => {
    const known = ['Home', 'Tours', 'About'];
    setPage(known.includes(label) ? label : label === 'How it works' ? 'Home' : 'TourDetail');
    window.scrollTo({ top: 0 });
  };
  const Screen = { Home, Tours, About, TourDetail }[page] || Home;
  return (
    <div>
      <Screen onNavigate={go} />
      <div style={{ position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, background: 'var(--surface-dark)', padding: 6, borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-float)', zIndex: 60 }}>
        {['Home', 'Tours', 'TourDetail', 'About'].map((p) => (
          <button key={p} onClick={() => { setPage(p); window.scrollTo({ top: 0 }); }} style={{
            border: 'none', cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: '7px 14px',
            font: 'var(--type-body-sm)', background: page === p ? 'var(--amber-400)' : 'transparent',
            color: page === p ? 'var(--espresso-900)' : 'var(--text-on-dark)',
          }}>{p === 'TourDetail' ? 'Tour page' : p}</button>
        ))}
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
