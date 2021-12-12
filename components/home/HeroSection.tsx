import Image from 'next/image'
import { Icon } from '@iconify/react'
import stickDudeArt from '@/public/img/stick-dude.png'

export default function HeroSection() {
  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <h1 className="home__title font-extrablack drop-shadow-[.07em_.1em_.07em_rgba(0,0,0,.4)]">
          HE
          <br />
          LLO.
        </h1>

        <p className="pl-2 home__subtitle font-semibold">
          Thank you for invading my space.
        </p>

        <div className="home__scroll">
          <a href="#about" className="flex items-center home__scroll-link">
            <Icon icon="bx:bx-up-arrow-alt" />
            Scroll down
          </a>
        </div>

        <div className="home__img drop-shadow-[0_0_5px_rgba(0,0,0,.5)]">
          <Image src={stickDudeArt} alt="stick dude graphic art" />
        </div>
      </div>
    </section>
  )
}
