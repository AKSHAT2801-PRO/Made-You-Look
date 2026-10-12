import Sparkle from './Sparkle.jsx'
import { siteConfig, whatsappLink } from '../config.js'
import heroOne from '../../public/gallery/Hero1.webp'
import heroTwo from '../../public/gallery/Hero2.webp'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <p className="eyebrow eyebrow--spaced">Nail art · {siteConfig.city}</p>
        <h1 className="hero__title" aria-label="Made You Look">
          <span className="hero__line">Made</span>
          <span className="hero__line hero__line--you">
            <span>
              Y
              <span className="hero__letter-o">
                O
                <Sparkle
                  width="0.3em"
                  height="0.7em"
                  color="var(--gold)"
                  className="hero__inner-sparkle"
                />
              </span>
              U
            </span>
            <Sparkle width="0.34em" height="0.42em" className="hero__sparkle" />
          </span>
          <span className="hero__line">
            L
            <span className="hero__letter-o">
              O
              <Sparkle
                width="0.3em"
                height="0.7em"
                color="var(--gold)"
                className="hero__inner-sparkle"
              />
            </span>
            OK
          </span>
        </h1>
        <p className="hero__script">by Samiksha</p>
        <p className="hero__lede">
          Polish, gel and soft gel extensions, and nail art finished with
          colourful details.
        </p>
        <div className="hero__actions">
          <a
            href={whatsappLink}
            className="btn btn--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book on WhatsApp
          </a>
          <a href="#gallery" className="btn btn--outline">See the work</a>
        </div>
      </div>

      <div className="hero__art-wrap">
        <div className="hero__art">
          <div className="hero__arch hero__arch--big">
            <img className="hero__photo" src={heroOne} alt="Colourful nail art on a set of hands" />
          </div>
          <div className="hero__arch hero__arch--small">
            <img className="hero__photo" src={heroTwo} alt="Detailed nail art displayed on both hands" />
          </div>
          <Sparkle width={64} height={76} className="hero__art-sparkle" />
        </div>
      </div>
    </section>
  )
}
