import DefaultLayout from '@/components/DefaultLayout'
import HeroSection from '@/components/home/HeroSection'
import AboutMeSection from '@/components/home/AboutMeSection'
import SkillsSection from '@/components/home/SkillsSection'
import PortfolioSection from '@/components/home/PortfolioSection'
import ContactSection from '@/components/home/ContactSection'

Home.layout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <PortfolioSection />

      <div className="blur-content">
        <ContactSection />
      </div>
    </>
  )
}
