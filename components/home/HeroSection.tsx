import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import stickDudeArt from '@/public/img/stick-dude.png'
import {
  setLocalStorageWithExpiry,
  getLocalStorageWithExpiry,
} from '@/lib/utils'

const quotes = [
  'Thank you for invading my space.',
  'I make stuff.',
  'I break stuff.',
  "I'm so good at breaking stuff.",
  'I am a stick figure.',
  "Knock, knock. Who's there?",
  "IT'S A ME MARIO!",
  'Im so lazy I became a programmer.',
  "They said don't give up on your dreams, so I went back to sleep.",
  "I'm not a great programmer, I'm just a good programmer with great habits.",
  "If you are a programmer, you can't do anything until you can do something else.",
  "You're still here?",
  'Stop refreshing for fuck sake.',
  'Seriously, stop.',
  "There's nothin ahead.",
  'I lied.',
  'There is something ahead.',
  'Stay tuned for the grand reveal.',
]

export default function HeroSection() {
  const { t } = useTranslation('home')
  const [theQuote, setQuote] = useState<string>()

  // Get the quote index from local storage
  // get function checks if value is expired
  useEffect(() => {
    const lastIndex = parseInt(getLocalStorageWithExpiry('quoteIndex') || 0)
    setQuote(quotes[lastIndex])
    const nextIndex = lastIndex + 1 >= quotes.length ? 0 : lastIndex + 1
    // expire 5 minutes after last refresh
    setLocalStorageWithExpiry('quoteIndex', nextIndex.toString(), 300000)
  }, [])

  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <h1 className="home__title font-extrablack drop-shadow-[-.06em_-.06em_.07em_rgba(23,32,133,.5)]">
          HE
          <br />
          LLO.
        </h1>

        <p className="pl-2 home__subtitle font-semibold max-w-[35ch]">
          {theQuote}
        </p>

        <div className="home__scroll">
          <a href="#about" className="flex items-center home__scroll-link">
            <Icon icon="bx:bx-up-arrow-alt" />
            {t('hero.scrollDown')}
          </a>
        </div>

        <div className="home__img drop-shadow-[0_0_5px_rgba(0,0,0,.5)]">
          <Image src={stickDudeArt} alt="stick dude graphic art" />
        </div>
      </div>
    </section>
  )
}
