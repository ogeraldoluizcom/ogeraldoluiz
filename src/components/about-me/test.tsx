import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AboutMe } from '.'

describe('<AboutMe />', () => {
  it('renders without crashing', () => {
    render(<AboutMe />)
    expect(
      screen.getByText(/Especialista em desenvolvimento full stack/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Meu objetivo é criar soluções digitais personalizadas/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/- Desenvolvimento de aplicações web e APIs robustas/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/- Implantação e gestão de pipelines DevOps modernas/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/- Automações com n8n, integração de sistemas/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /- Consultoria técnica e mentoria para times de engenharia/i
      )
    ).toBeInTheDocument()
  })
})
