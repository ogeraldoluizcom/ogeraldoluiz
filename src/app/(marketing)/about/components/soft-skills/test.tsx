import { render, screen } from '@testing-library/react'
import { SoftSkills } from '.'

describe('SoftSkills', () => {
  it('renders the title and all soft skills', () => {
    render(<SoftSkills />)

    expect(screen.getByText('🤝 Soft Skills')).toBeInTheDocument()
    expect(
      screen.getByText(/Comunicação clara e colaboração ativa/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Pensamento estratégico voltado para resultados/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Foco em performance, escalabilidade e manutenção/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Curiosidade constante por novas tecnologias/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Compromisso com entregas de alto impacto/i)
    ).toBeInTheDocument()
  })
})
