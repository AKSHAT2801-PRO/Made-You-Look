import { serviceGroups } from '../data.js'

export default function Services() {
  return (
    <section id="services" className="section">
      <p className="eyebrow eyebrow--spaced">What I do</p>
      <h2 className="section-title section-title--spaced">Services and prices</h2>
      <div className="services">
        {serviceGroups.map((group, i) => (
          <section className="service-group" key={group.title}>
            <div className="service-group__heading">
              <span className="service-group__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="service-group__title">{group.title}</h3>
                {group.note && <p className="service-group__note">{group.note}</p>}
              </div>
            </div>
            {group.items.map((service) => (
              <article className="service" key={service.title}>
                <h4 className="service__title">{service.title}</h4>
                <span className="service__price">{service.price}</span>
                {service.description && (
                  <p className="service__desc">{service.description}</p>
                )}
              </article>
            ))}
          </section>
        ))}
      </div>
    </section>
  )
}
