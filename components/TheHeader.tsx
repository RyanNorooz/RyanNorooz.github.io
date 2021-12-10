import { Icon } from '@iconify/react'
import { useEffect } from 'react'

function makeHeaderTransparent() {
  const header = document.getElementsByClassName('l-header')[0]

  window.scrollY > 700
    ? header.classList.add('opaque')
    : header.classList.remove('opaque')
}

export default function TheHeader() {
  useEffect(() => {
    window.addEventListener('scroll', makeHeaderTransparent)
    return () => window.removeEventListener('scroll', makeHeaderTransparent)
  }, [])

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav__logo">
            Ryan Norooz
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <Icon icon="bx:bx-menu" />
        </div>
      </nav>
    </header>
  )
}
