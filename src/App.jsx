import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Registration from './components/Registration';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#program', label: 'Program' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() { setMenuOpen(false); }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="nav-logo">AI<span>Summit</span></a>

          <div className="nav-links">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href="#registration" className="nav-cta">Register</a>
          </div>

          <button
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
            ))}
            <a href="#registration" className="nav-cta mobile-cta" onClick={closeMenu}>Register</a>
          </div>
        )}
      </nav>

      <Hero />
      <About />
      <Program />
      <Speakers />
      <Gallery />
      <FAQ />
      <Registration />

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 AI in Business Summit. All rights reserved.</p>
          <p>Madrid, Spain · April 20, 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
