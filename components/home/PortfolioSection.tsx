import Image from 'next/image'

import { useTranslation } from 'next-i18next'
import work1 from '@/public/img/work1.jpg'
import work2 from '@/public/img/work2.jpg'
import work3 from '@/public/img/work3.jpg'
import work4 from '@/public/img/work4.jpg'
import work5 from '@/public/img/work5.jpg'
import work6 from '@/public/img/work6.jpg'

export default function PortfolioSection() {
  const { t } = useTranslation('home')
  const projects = [
    {
      title: 'Project ALPHA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: work1,
      link: '#',
    },
    {
      title: 'Project ALPHA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: work2,
      link: '#',
    },
    {
      title: 'Project ALPHA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: work3,
      link: '#',
    },
    {
      title: 'Project ALPHA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: work4,
      link: '#',
    },
    {
      title: 'Project ALPHA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: work5,
      link: '#',
    },
    {
      title: 'Project ALPHA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: work6,
      link: '#',
    },
  ]

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section-title">{t('sections.portfolio')}</h2>

      <div className="portfolio__container bd-grid blur-content">
        {projects.map((project, index) => (
          <div key={index} className="portfolio__img">
            <Image src={project.image} alt={project.title} />

            <div className="portfolio__link flex flex-col">
              <h3 className="text-white">{project.title}</h3>
              {/* <p>{project.description}</p> */}

              <a href={project.link} className="portfolio__link-name">
                {t('portfolio.card.viewDetails')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
