import { gallery } from '../data.js'

export default function Gallery() {
  return (
    <section id="gallery" className="section section--blush">
      <div className="gallery__head">
        <div>
          <p className="eyebrow eyebrow--berry">Gallery</p>
          <h2 className="section-title">The work</h2>
        </div>
        <p className="gallery__script">sets that made people look twice</p>
      </div>
      <p className="gallery__hint" aria-hidden="true">Swipe to see more →</p>
      <div
        className="gallery__grid"
        role="region"
        aria-label="Gallery of nail art looks"
        tabIndex={0}
      >
        {gallery.map((item, i) => {
          const number = String(i + 1).padStart(2, '0')
          return (
            <figure className="gallery__item" key={number}>
              {item.image ? (
                <img
                  className="arch arch--photo"
                  src={item.image}
                  alt={`Nail art look ${number}`}
                  loading="lazy"
                />
              ) : (
                <div className="arch" style={{ background: item.bg, color: item.fg }}>
                  <span className="placeholder-label">[Photo {number}]</span>
                </div>
              )}
              <figcaption className="gallery__caption">
                Look {number} · {item.name}
              </figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
