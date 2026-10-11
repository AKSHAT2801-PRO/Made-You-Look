import { whatsappLink } from '../config.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function StickyBook() {
  return (
    <div className="sticky-book">
      <a
        href={whatsappLink}
        className="btn btn--whatsapp sticky-book__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        <span>Book on WhatsApp</span>
      </a>
    </div>
  )
}
