import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import developer2 from '@/public/img/developer2.svg'

export default function SkillsSection() {
  const { t } = useTranslation('home')
  const devSkills = [
    'HTML',
    'CSS',
    'SASS',
    'TailwindCss',
    'JavaScript',
    'TypeScript',
    'React',
    'NextJS',
    'Vue',
    'NuxtJS',
  ]
  const designSkills = ['Figma', 'Adobe XD', 'Photoshop', 'illustrator']

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">{t('sections.skills')}</h2>

      <div className="skills__container bd-grid">
        <div className="skills__img">
          <Image src={developer2} alt="developer graphic art" />
        </div>

        <div className="skills__box">
          <h3 className="skills__subtitle">{t('skills.developmentTitle')}</h3>

          <ul className="skills__list">
            {devSkills.map((skill, index) => (
              <li key={index}>
                <span className="skills__name">{skill}</span>
              </li>
            ))}
          </ul>

          <h3 className="skills__subtitle">{t('skills.designTitle')}</h3>
          <ul className="skills__list">
            {designSkills.map((skill, index) => (
              <li key={index}>
                <span className="skills__name">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
