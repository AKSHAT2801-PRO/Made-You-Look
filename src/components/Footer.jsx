import { siteConfig, whatsappLink } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <div className="footer__name">MADE YOU LOOK</div>
        <div className="footer__script">by Samiksha</div>
      </div>

      <div className="footer__col">
        <p className="footer__label">Connect</p>
        <div className="footer__qr-list">
          <a
            className="footer__qr-card"
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer__qr-title">Instagram</span>
            <img
              className="footer__qr"
              src="/instagram-qr.webp"
              alt="Scan to visit Made You Look by Samiksha on Instagram"
            />
            <span className="footer__qr-hint">Scan to follow</span>
          </a>
          <a
            className="footer__qr-card"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer__qr-title">WhatsApp</span>
            <img
              className="footer__qr"
              src="/whatsapp-qr.png"
              alt="Scan to chat with Samiksha on WhatsApp"
            />
            <span className="footer__qr-hint">{siteConfig.whatsappDisplay}</span>
          </a>
        </div>
      </div>

      <div className="footer__legal">
        © {new Date().getFullYear()} Made You Look by Samiksha. All rights reserved.
      </div>
    </footer>
  )
}
