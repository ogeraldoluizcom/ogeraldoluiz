import { AboutMe } from './components/about-me'
import { Stack } from './components/stack'
import { SoftSkills } from './components/soft-skills'

const About = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <div className="space-y-4 p-8">
        <AboutMe />
        <Stack />
        <SoftSkills />
      </div>
    </section>
  )
}

export default About
