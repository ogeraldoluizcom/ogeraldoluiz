import { render, screen } from '@testing-library/react'
import { TechSection } from '.'
import { FaReact } from 'react-icons/fa'

describe('TechSection', () => {
  it('renders the title', () => {
    render(<TechSection title="Frontend" icons={[]} />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
  })

  it('renders all icons', () => {
    const icons = [
      <FaReact data-testid="icon" key="1" />,
      <FaReact data-testid="icon" key="2" />
    ]
    render(<TechSection title="Frontend" icons={icons} />)
    expect(screen.getAllByTestId('icon')).toHaveLength(2)
  })
})
