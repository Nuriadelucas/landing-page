import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Speakers from './components/Speakers';
import FAQ from './components/FAQ';
import Registration from './components/Registration';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="nav-logo">DH<span>Summit</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#program">Program</a>
            <a href="#speakers">Speakers</a>
            <a href="#faq">FAQ</a>
            <a href="#registration" className="nav-cta">Register</a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Program />
      <Speakers />
      <FAQ />
      <Registration />

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2025 Digital Horizons Summit. All rights reserved.</p>
          <p>Warsaw, Poland · September 18–19, 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
