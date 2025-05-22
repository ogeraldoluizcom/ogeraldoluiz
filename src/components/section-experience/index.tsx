import { experiences } from '@/lib/experience'

import { ExperienceItem } from '@/components/experience-item'
import { Title } from '@/components/title'

export const SectionExperience = () => {
  return (
    <div className="py-10">
      <Title
        title="Experiências"
        subtitle="Fortalecendo a criatividade"
        description="Atuando desde 2010 na área de desenvolvimento sendo a mesma adquirida
          na atuação em projetos de sistemas para empresas de médio e grande
          porte no ramo de tecnologia."
      />
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  )
}
