import { Hero } from '@/components/hero'
import { SectionExperience } from '@/components/section-experience'
import { SectionPortfolio } from '@/components/section-portfolio'
import { SectionTech } from '@/components/section-tech'

const Home = () => {
  return (
    <div className="px-4 space-y-8">
      <section>
        <Hero />
      </section>
      <section>
        <SectionExperience />
      </section>
      <section>
        <SectionTech />
      </section>
      <section>
        <SectionPortfolio />
        <p className="bg-black text-white p-6">Rollback</p>
      </section>
    </div>
  )
}

export default Home
