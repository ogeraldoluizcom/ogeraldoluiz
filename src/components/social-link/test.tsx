import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SocialLink } from '.'

describe('<SocialLink />', () => {
  it('renders without crashing', () => {
    render(<SocialLink href="https://example.com">Example</SocialLink>)
    const linkElement = screen.getByRole('link', { name: /example/i })
    expect(linkElement).toBeInTheDocument()
  })

  it('applies the correct href prop', () => {
    render(<SocialLink href="https://example.com">Example</SocialLink>)
    const linkElement = screen.getByRole('link', { name: /example/i })
    expect(linkElement).toHaveAttribute('href', 'https://example.com')
  })

  it('renders children correctly', () => {
    render(<SocialLink href="https://example.com">Example</SocialLink>)
    const linkElement = screen.getByText(/example/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('applies the correct CSS classes', () => {
    render(<SocialLink href="https://example.com">Example</SocialLink>)
    const linkElement = screen.getByRole('link', { name: /example/i })
    expect(linkElement).toHaveClass(
      'bg-indigo-500 rounded-full p-3 duration-300 transition-transform ease-in-out transform hover:scale-110'
    )
  })
})
