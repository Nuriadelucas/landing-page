import { useState } from 'react';
import { LangProvider, useLang } from './LangContext';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Registration from './components/Registration';

function AppInner() {
  const { t, lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() { setMenuOpen(false); }

  const NAV_LINKS = [
    { href: '#about',        label: t.nav.about },
    { href: '#program',      label: t.nav.program },
    { href: '#speakers',     label: t.nav.speakers },
    { href: '#gallery',      label: t.nav.gallery },
    { href: '#faq',          label: t.nav.faq },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="nav-logo">AI<span>Summit</span></a>

          <div className="nav-links">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href="#registration" className="nav-cta">{t.nav.register}</a>
            <div className="lang-switcher">
              <button className={lang === 'en' ? 'lang-active' : ''} onClick={() => setLang('en')}>EN</button>
              <span className="lang-divider">|</span>
              <button className={lang === 'ru' ? 'lang-active' : ''} onClick={() => setLang('ru')}>RU</button>
            </div>
          </div>

          <div className="nav-right-mobile">
            <div className="lang-switcher">
              <button className={lang === 'en' ? 'lang-active' : ''} onClick={() => setLang('en')}>EN</button>
              <span className="lang-divider">|</span>
              <button className={lang === 'ru' ? 'lang-active' : ''} onClick={() => setLang('ru')}>RU</button>
            </div>
            <button
              className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle navigation"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={closeMenu}>{l.label}</a>
            ))}
            <a href="#registration" className="nav-cta mobile-cta" onClick={closeMenu}>{t.nav.register}</a>
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
          <p>{t.footer.rights}</p>
          <p>{t.footer.location}</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}

export default App;
