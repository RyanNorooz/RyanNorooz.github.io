import Image from 'next/image'
import developer2 from '@/public/img/developer2.svg'

export default function SkillsSection() {
  const devSkills = [
    'Html',
    'Css',
    'Sass',
    'TailwindCss',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
  ]
  const designSkills = ['Figma', 'Adobe XD', 'Photoshop', 'illustrator']

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div className="skills__img">
          <Image src={developer2} alt="developer graphic art" />
        </div>

        <div className="skills__box">
          <h3 className="skills__subtitle">Development</h3>
          {devSkills.map((skill, index) => (
            <span key={index} className="skills__name">
              {skill}
            </span>
          ))}

          <h3 className="skills__subtitle">Design</h3>
          {designSkills.map((skill, index) => (
            <span key={index} className="skills__name">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
