import { experiences } from '@/lib/experience'

import { ExperienceItem } from '@/components/experience-item'

export const SectionExperience = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center text-center gap-4 mb-8 max-w-screen-md mx-auto">
        <h2 className="text-3xl font-bold text-indigo-500">Experiências</h2>
        <h3 className="text-4xl font-bold">Fortalecendo a criatividade</h3>
        <p>
          Atuando desde 2010 na área de desenvolvimento sendo a mesma adquirida
          na atuação em projetos de sistemas para empresas de médio e grande
          porte no ramo de tecnologia.
        </p>
      </div>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  )
}
