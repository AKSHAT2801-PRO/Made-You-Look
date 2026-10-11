import { Fragment } from 'react'
import Sparkle from './Sparkle.jsx'

const labels = ['Basic polish', 'Nail art', 'Rhinestones', 'Gel + soft gel extensions']

export default function Strip() {
  return (
    <section className="strip" aria-label="What we offer">
      {labels.map((label, i) => (
        <Fragment key={label}>
          {i > 0 && <Sparkle width={18} height={22} />}
          <span className="strip__item">{label}</span>
        </Fragment>
      ))}
    </section>
  )
}
