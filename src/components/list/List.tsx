import * as React from 'react'

import { styled } from '~/stitches'

const StyledListItem = styled('li', {})

const StyledUL = styled('ul', {
  fontFamily: '$sans',
  pl: '$2',
  [`& ${StyledListItem}`]: {
    pl: '$1',
    '&::marker': {
      content: '"•"',
      fontWeight: 'bold'
    }
  },
  variants: {
    theme: {
      primary: {
        [`& ${StyledListItem}`]: {
          '&::marker': { color: '$primary500' }
        }
      },
      secondary: {
        [`& ${StyledListItem}`]: {
          '&::marker': { color: '$secondary500' }
        }
      }
    },
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' }
    }
  }
})

type ListProps = React.ComponentProps<typeof StyledUL> & {
  theme?: 'primary' | 'secondary'
}

export const List: React.FC<ListProps> & { Item: typeof StyledListItem } = ({
  theme = 'primary',
  size = 'md',
  ...remainingProps
}) => <StyledUL theme={theme} size={size} {...remainingProps} />

List.Item = StyledListItem
