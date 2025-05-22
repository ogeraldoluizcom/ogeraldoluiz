/* eslint-disable react/display-name */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Footer } from '.'

describe('Footer', () => {
  it('should be able render text', () => {
    render(<Footer />)
    expect(screen.getByText('Construído com muito amor ❤️‍🔥')).toBeInTheDocument()
  })
})
