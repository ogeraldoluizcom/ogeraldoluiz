import { Title } from '@/components/title'
import { PortfolioItem } from '@/components/portfolio-item'

export const SectionPortfolio = () => {
  return (
    <div className="py-10">
      <Title
        title="Portfolio"
        subtitle="Transformando ideias em soluções"
        description="Abaixo estão alguns dos meus projetos mais recentes, onde apliquei minhas habilidades."
      />
      <PortfolioItem
        imageUrl="/img/cover-wongames.png"
        title="Portfolio"
        description="Um portfólio pessoal construído com Next.js e Tailwind CSS."
        url="#"
      />
    </div>
  )
}
