import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HeaderMobileLinks } from '.'

describe('<HeaderMobileLinks />', () => {
  it('should render all navigation links', () => {
    render(<HeaderMobileLinks />)

    // Verifica se os botões com os textos corretos estão presentes
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sobre/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /cases/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument()
  })

  it('should have correct href attributes for each link', () => {
    render(<HeaderMobileLinks />)

    // Verifica se os links possuem os hrefs corretos
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/'
    )
    expect(screen.getByRole('link', { name: /sobre/i })).toHaveAttribute(
      'href',
      '/about'
    )
    expect(screen.getByRole('link', { name: /cases/i })).toHaveAttribute(
      'href',
      '/cases'
    )
    expect(screen.getByRole('link', { name: /contato/i })).toHaveAttribute(
      'href',
      '/contact'
    )
  })
})
