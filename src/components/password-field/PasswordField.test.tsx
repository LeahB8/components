import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import * as React from 'react'

import { PasswordField } from '.'

describe(`Password component`, () => {
  it('renders a password field', async () => {
    const { container } = render(
      <PasswordField css={{ m: 'auto', height: 100, width: 100 }} />
    )

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('toggles password visibility', async () => {
    render(<PasswordField />)

    const input = screen.getByLabelText('Password')

    expect(input).toHaveAttribute('type', 'password')

    userEvent.click(screen.getByLabelText('Show password'))
    expect(input).toHaveAttribute('type', 'text')

    userEvent.click(screen.getByLabelText('Hide password'))
    expect(input).toHaveAttribute('type', 'password')
  })
})
