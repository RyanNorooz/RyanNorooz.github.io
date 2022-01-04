import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useTranslation } from 'next-i18next'
import developer1 from '@/public/img/developer1.svg'

export default function AboutMeSection() {
  const { t } = useTranslation('home')
  return (
    <section className="about section" id="about">
      <h2 className="section-title">{t('sections.about')}</h2>

      <div className="about__container bd-grid">
        {/* <div className="about__img">
        </div> */}

        <Image src={developer1} alt="developer art graphic" />

        <div>
          <h2 className="about__subtitle font-extrablack">{t('about.title')}</h2>
          <span className="about__profession">{t('about.subtitle')}</span>

          <p className="about__text">{t('about.text')}</p>

          <div className="about__social">
            <a
              href="https://github.com/RyanNorooz"
              title="Github"
              className="about__social-icon"
            >
              <Icon icon="bx:bxl-github" />
            </a>
            <a
              href="https://t.me/RyanNorooz"
              title="Telegram"
              className="about__social-icon" //
            >
              <Icon icon="bx:bxl-telegram" />
            </a>
            <a
              href="https://discord.com/users/701974919864385577"
              title="Discord"
              className="about__social-icon"
            >
              <Icon icon="bx:bxl-discord-alt" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
