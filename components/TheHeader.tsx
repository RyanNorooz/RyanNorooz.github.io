import { Icon } from '@iconify/react'
import { useEffect } from 'react'

function makeHeaderTransparent() {
  const headerBlurBackdrop = document.querySelector('.header-backdrop-blur')
  if (!headerBlurBackdrop) return

  window.scrollY > window.innerHeight - 30
    ? headerBlurBackdrop.classList.add('opaque')
    : headerBlurBackdrop.classList.remove('opaque')
}

export default function TheHeader() {
  useEffect(() => {
    window.addEventListener('scroll', makeHeaderTransparent)
    return () => window.removeEventListener('scroll', makeHeaderTransparent)
  }, [])

  return (
    <header className="l-header">
      <div className="header-backdrop-blur absolute w-full h-[var(--header-height)] pointer-events-none -z-10" />
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

        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => {
            document.getElementById('nav-menu')?.classList.toggle('show')
          }}
        >
          <Icon icon="bx:bx-menu" />
        </div>
      </nav>
    </header>
  )
}
