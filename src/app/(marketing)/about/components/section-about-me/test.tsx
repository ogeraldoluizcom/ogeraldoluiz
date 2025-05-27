import { render, screen } from '@testing-library/react'
import { SectionAboutMe } from '.'

describe('SectionAboutMe', () => {
  it('renders the title and main content', () => {
    render(<SectionAboutMe />)

    expect(screen.getByText('💼 Sobre Mim')).toBeInTheDocument()
    expect(
      screen.getByText(/Sou Engenheiro de Software Sênior/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/No setor B2B, criei um dashboard de precificação/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/No setor B2C, participei da criação de e-commerces/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Também desenvolvi um painel de monitoramento de logs/i)
    ).toBeInTheDocument()
  })
})
