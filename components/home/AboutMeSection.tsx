import Image from 'next/image'
import { Icon } from '@iconify/react'
import developer1 from '@/public/img/developer1.svg'

export default function AboutMeSection() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about__container bd-grid">
        {/* <div className="about__img">
        </div> */}
        
        <Image src={developer1} alt="developer art graphic" />

        <div>
          <h2 className="about__subtitle">I&apos;m Ryan Norooz</h2>
          <span className="about__profession">
            Web Developer, Designer, and Entrepreneur.
          </span>
          <p className="about__text">
            I&apos;m Ryan Norooz and I am a full-stack web developer. I have
            experience in building websites and web applications using
            JavaScript, React, and Next.js. I am currently looking for a
            position in the web development industry.
          </p>

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
