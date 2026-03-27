import { useState, useEffect } from 'react';
import { useLang } from '../LangContext';

const PHOTOS = [
  { id: 1,  alt: 'Keynote presentation on stage' },
  { id: 2,  alt: 'Networking session in the lobby' },
  { id: 3,  alt: 'Panel discussion with industry experts' },
  { id: 4,  alt: 'Workshop attendees collaborating' },
  { id: 5,  alt: 'Speaker addressing the audience' },
  { id: 6,  alt: 'Attendees during coffee break' },
  { id: 7,  alt: 'Breakout session discussion' },
  { id: 8,  alt: 'Evening reception' },
  { id: 9,  alt: 'Award ceremony highlights' },
].map(p => ({
  ...p,
  thumb: `https://picsum.photos/seed/summit${p.id}/400/300`,
  full:  `https://picsum.photos/seed/summit${p.id}/1200/800`,
}));

function Gallery() {
  const { t } = useLang();
  const g = t.gallery;
  const [index, setIndex] = useState(null);

  function open(i)  { setIndex(i); }
  function close()  { setIndex(null); }
  function prev(e)  { e?.stopPropagation(); setIndex(i => (i - 1 + PHOTOS.length) % PHOTOS.length); }
  function next(e)  { e?.stopPropagation(); setIndex(i => (i + 1) % PHOTOS.length); }

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = 'hidden';
    function onKey(e) {
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index]);

  return (
    <section className="section section-light" id="gallery">
      <div className="container">
        <div className="section-label">{g.label}</div>
        <h2 className="section-title">{g.title1}<br />{g.title2}</h2>

        <div className="gallery-grid">
          {PHOTOS.map((photo, i) => (
            <button key={photo.id} className="gallery-item" onClick={() => open(i)} aria-label={photo.alt}>
              <img src={photo.thumb} alt={photo.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-zoom">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label={g.close}>✕</button>
          <button className="lightbox-arrow lightbox-prev" onClick={prev} aria-label={g.prev}>‹</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={PHOTOS[index].full} alt={PHOTOS[index].alt} />
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={next} aria-label={g.next}>›</button>
          <div className="lightbox-counter">{index + 1} / {PHOTOS.length}</div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
