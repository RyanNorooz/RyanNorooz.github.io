import { Icon } from '@iconify/react'

export default function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid blur-content">
        <div className="contact__info">
          <h3 className="contact__subtitle flex items-center">
            <Icon icon="bx:bx-at" className="m-1" />
            EMAIL
          </h3>
          <span className="contact__text">ryan.norooz@gmail.com</span>

          <h3 className="contact__subtitle flex items-center">
            <Icon icon="bx:bxs-phone" className="m-1" />
            PHONE
          </h3>
          <span className="contact__text">+98 916 523 3246</span>

          <h3 className="contact__subtitle flex items-center">
            <Icon icon="bx:bxs-location-plus" className="m-1" />
            ADDRESS
          </h3>
          <span className="contact__text">HELL</span>
        </div>

        <form className="contact__form">
          <div className="contact__inputs">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="mail" placeholder="Email" className="contact__input" />
          </div>

          <textarea
            name=""
            id=""
            cols={0}
            rows={10}
            className="contact__input"
          />

          <input
            type="submit"
            value="SEND"
            className="contact__button font-bold"
          />
        </form>
      </div>
    </section>
  )
}
