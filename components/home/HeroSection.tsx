import Image from 'next/image'
import { Icon } from '@iconify/react'
import stickDudeArt from '@/public/img/stick-dude.png'

export default function HeroSection() {
  const quotes = [
    'Thank you for invading my space.',
    "One day i'm gonna make the onions cry.",
    'I am the one who knocks.',
    'They said dont give up on your dreams. so i went back to sleep',
    'Im always lazy, so I became a programmer',
    "I'm not a great programmer, I'm just a good programmer with great habits.",
    'The best way to predict the future is to create it.',
    '“The best way to predict the future is to invent it.”',
    "If you are a programmer, you can't do anything until you can do something else.",
  ]
  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <h1 className="home__title font-extrablack drop-shadow-[.07em_.1em_.07em_rgba(0,0,0,.4)]">
          HE
          <br />
          LLO.
        </h1>

        <p className="pl-2 home__subtitle font-semibold">
          {quotes[Math.floor(Math.random() * quotes.length)]}
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
