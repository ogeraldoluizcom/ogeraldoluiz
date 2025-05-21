import { Hero } from '@/components/hero'
import { SectionExperience } from '@/components/section-experience'

const Home = () => {
  return (
    <div className="px-4 space-y-8">
      <section>
        <Hero />
      </section>
      <section>
        <SectionExperience />
      </section>
      <div className="bg-slate-300">Roolback</div>
    </div>
  )
}

export default Home
