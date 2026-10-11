import { siteConfig, whatsappLink } from '../config.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function Booking() {
  return (
    <section id="book" className="section booking">
      <div className="booking__intro">
        <p className="eyebrow eyebrow--gold">Let’s chat</p>
        <h2 className="booking__title">
          Your next <em>set.</em>
        </h2>
        <p className="booking__lede">
          Tell Samiksha what you have in mind and find a time for your next set.
        </p>
      </div>

      <a
        className="btn btn--whatsapp booking__cta"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        <span>
          Chat on WhatsApp
          <small>{siteConfig.whatsappDisplay}</small>
        </span>
      </a>
    </section>
  )
}
