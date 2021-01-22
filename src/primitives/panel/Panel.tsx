import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { styled } from '../../stitches'
import { Box } from '../'

const BasePanel = styled(Box, {
  backgroundColor: 'white',
  padding: '$5',
  boxShadow: '$2',
  borderRadius: '$4',
  variants: {
    size: {
      sm: {},
      md: { width: '355px' },
      lg: {}
    }
  }
})

export const Panel = ({
  css,
  ...props
}: StitchesProps<typeof BasePanel>): React.ReactElement => (
  <BasePanel as="section" css={css} {...props} />
)

Panel.defaultProps = {
  size: 'md'
}
