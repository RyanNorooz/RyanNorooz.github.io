import { Icon } from '@iconify/react'

export default function TheFooter() {
  return (
    <footer className="footer section">
      <div className="pb-10 footer__container bd-grid">
        <div className="footer__data">
          <h2 className="footer__title">Ryan Norooz</h2>
          <p className="footer__text">
            Web Developer, Designer, and Entrepreneur.
          </p>
        </div>

        <div className="footer__data">
          <h2 className="footer__title">EXPLORE</h2>
          <ul>
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#Contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__data">
          <h2 className="footer__title">REACH ME</h2>

          <div className="flex">
            <a
              href="https://github.com/RyanNorooz"
              title="Github"
              className="footer__social" //
            >
              <Icon icon="bx:bxl-github" />
            </a>
            <a
              href="https://t.me/RyanNorooz"
              title="Telegram"
              className="footer__social" //
            >
              <Icon icon="bx:bxl-telegram" />
            </a>
            <a
              href="https://discord.com/users/701974919864385577"
              title="Discord"
              className="footer__social"
            >
              <Icon icon="bx:bxl-discord-alt" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
