import 'regenerator-runtime/runtime'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, Carousel, globalCss, Image, Text } from '../dist'
globalCss(reset)()

const App = () => {
  return (
    <Box css={{ width: '500px', p: '$3', m: '0 auto' }}>
      <Carousel
        slideWidth={200}
        slideHeight={300}
        name="Example carousel"
        type="overflow"
      >
        {[0, 1, 2, 3].map((num) => (
          <Carousel.Slide
            key={num}
            index={num}
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
            <Image src="https://placekitten.com/200/300" alt="" />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
