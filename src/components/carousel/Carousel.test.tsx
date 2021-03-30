import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import * as React from 'react'

import { Image } from '../'
import { Carousel } from '.'

const ExampleCarousel = () => (
  <Carousel
    slideWidth={200}
    slideHeight={300}
    numSlides={4}
    css={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
  >
    <Carousel.Arrows />
    <Carousel.Slider aria-label="Example carousel" trayTag="div">
      {[0, 1, 2, 3].map((num) => (
        <Carousel.Slide
          key={num}
          index={num}
          aria-label={`slide ${num}`}
          css={{
            opacity: '0.7',
            transition: 'all 0.25s ease-in',
            '&[aria-selected="true"]': {
              opacity: 1,
              // apply box shadow to the Slide content directly,
              // not the wrappers added internally
              '& > div > div > *': {
                boxShadow: '$1'
              }
            }
          }}
        >
          <Image alt="" src="https://placekitten.com/200/300" />
        </Carousel.Slide>
      ))}
    </Carousel.Slider>
    <Carousel.Pagination />
  </Carousel>
)

describe('Carousel component', () => {
  it('renders', async () => {
    const { container } = render(<ExampleCarousel />)

    expect(container).toMatchSnapshot()
  })

  it('has no programatically detectable accesibility issues', async () => {
    const { container } = render(<ExampleCarousel />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
