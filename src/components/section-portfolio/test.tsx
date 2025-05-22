import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SectionPortfolio } from '.'

describe('SectionPortfolio', () => {
  it('should be able renders the title, subtitle, description and portfolio item', () => {
    render(<SectionPortfolio />)

    expect(screen.getAllByText('Portfolio')).toHaveLength(2)
    expect(
      screen.getByText('Transformando ideias em soluções')
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Abaixo estão alguns dos meus projetos mais recentes, onde apliquei minhas habilidades.'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Um portfólio pessoal construído com Next.js e Tailwind CSS.'
      )
    ).toBeInTheDocument()
    expect(screen.getByAltText('Portfolio')).toBeInTheDocument()
  })
})
