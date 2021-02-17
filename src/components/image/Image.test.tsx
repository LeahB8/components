import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Image } from '.'

describe(`Image component`, () => {
  it('renders an image', async () => {
    const { container } = render(
      <Image src="http://placekitten.com/200/300" alt="" />
    )

    await screen.getByRole('img')

    expect(container).toMatchSnapshot()
    expect(await axe(container)).toHaveNoViolations()
  })
})
