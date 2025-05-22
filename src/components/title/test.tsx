import { render, screen } from '@testing-library/react'
import { Title } from '.'

describe('Title', () => {
  it('renderiza o título, subtítulo e descrição corretamente', () => {
    render(
      <Title
        title="Título Teste"
        subtitle="Subtítulo Teste"
        description="Descrição de exemplo"
      />
    )

    expect(screen.getByText('Título Teste')).toBeInTheDocument()
    expect(screen.getByText('Subtítulo Teste')).toBeInTheDocument()
    expect(screen.getByText('Descrição de exemplo')).toBeInTheDocument()
  })
})
