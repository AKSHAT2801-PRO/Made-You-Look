import Sparkle from './Sparkle.jsx'
import { whatsappLink } from '../config.js'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__art-wrap">
        <div className="about__art">
          <img
            className="about__photo"
            src="/samiksha.webp"
            alt="Samiksha, the artist behind Made You Look"
            loading="lazy"
          />
          <Sparkle width={56} height={68} className="about__sparkle" />
        </div>
      </div>
      <div className="about__text">
        <p className="eyebrow eyebrow--spaced">About</p>
        <h2 className="about__title">
          Hi, I am <em>Samiksha.</em>
        </h2>
        <p className="about__lede">
          I believe your nails should feel as individual as you are. I create
          thoughtful, playful sets inspired by your style, from a little colour
          to details that make people look twice.
        </p>
        <p className="about__note">
          Made with care in Mumbai, every set is a chance to express yourself
          and leave with something that feels completely you.
        </p>
        <a
          href={whatsappLink}
          className="btn btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book with me on WhatsApp
        </a>
      </div>
    </section>
  )
}
