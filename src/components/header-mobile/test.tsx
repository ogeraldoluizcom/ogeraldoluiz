import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { HeaderSidebar } from '.'

describe('<HeaderSidebar />', () => {
  it('should render the menu trigger button', () => {
    render(<HeaderSidebar />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should open the sidebar when the menu button is clicked', async () => {
    render(<HeaderSidebar />)
    const user = userEvent.setup()

    const menuButton = screen.getByRole('button')
    await user.click(menuButton)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toHaveAttribute(
      'aria-describedby',
      'sidebar-description'
    )
  })
})
