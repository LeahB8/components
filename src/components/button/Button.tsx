import { StitchesProps } from '@stitches/react'
import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const getButtonOutlineVariant = (baseColor: string, interactColor: string) => ({
  color: baseColor,
  backgroundColor: 'white',
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    color: interactColor,
    backgroundColor: 'white'
  },
  ':active': {
    color: baseColor
  },
  '&[disabled]': {
    color: interactColor
  }
})

const getButtonSolidVariant = (baseColor: string, interactColor: string) => ({
  backgroundColor: baseColor,
  color: 'white',
  '&[disabled]': {
    backgroundColor: '$tonal300',
    color: '$tonal600'
  },
  '&:not([disabled]):hover, &:not([disabled]):focus': {
    backgroundColor: interactColor
  },
  ':active': {
    backgroundColor: baseColor
  }
})

const StyledButton = styled('button', {
  background: 'unset',
  border: 'none',
  borderRadius: '$0',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '$sans',
  fontSize: '$md',
  fontWeight: 500,
  height: '$2',
  letterSpacing: '0.02em',
  lineHeight: 1.4,
  transition: 'all 125ms ease-out',
  textDecoration: 'none',
  px: '$4',
  py: '$2',
  whiteSpace: 'nowrap',
  width: 'max-content',
  '&[disabled]': {
    opacity: 0.35,
    cursor: 'not-allowed'
  },
  variants: {
    theme: {
      primary: {},
      secondary: {},
      tertiary: {},
      success: {},
      warning: {},
      danger: {}
    },
    appearance: {
      solid: {},
      outline: {
        boxShadow: 'inset 0 0 0 2px',
        backgroundColor: 'white',
        '&:not([disabled]):hover, &:not([disabled):focus': {
          textDecoration: 'none',
          backgroundColor: 'white'
        },
        '&[disabled]': { backgroundColor: 'white' }
      }
    }
  }
})

StyledButton.compoundVariant(
  { theme: 'primary', appearance: 'solid' },
  getButtonSolidVariant('$primary500', '$primary900')
)

StyledButton.compoundVariant(
  {
    theme: 'secondary',
    appearance: 'solid'
  },
  getButtonSolidVariant('$secondary500', '$secondary700')
)

StyledButton.compoundVariant(
  {
    theme: 'tertiary',
    appearance: 'solid'
  },
  getButtonSolidVariant('$tertiary500', '$tertiary700')
)

StyledButton.compoundVariant(
  {
    theme: 'success',
    appearance: 'solid'
  },
  getButtonSolidVariant('$success', '$successDark')
)

StyledButton.compoundVariant(
  {
    theme: 'warning',
    appearance: 'solid'
  },
  getButtonSolidVariant('$warning', '$warningDark')
)

StyledButton.compoundVariant(
  {
    theme: 'danger',
    appearance: 'solid'
  },
  getButtonSolidVariant('$danger', '$dangerDark')
)

StyledButton.compoundVariant(
  {
    theme: 'primary',
    appearance: 'outline'
  },
  getButtonOutlineVariant('$primary500', '$primary900')
)

StyledButton.compoundVariant(
  {
    theme: 'secondary',
    appearance: 'outline'
  },
  getButtonOutlineVariant('$secondary500', '$secondary900')
)

StyledButton.compoundVariant(
  {
    theme: 'tertiary',
    appearance: 'outline'
  },
  getButtonOutlineVariant('$tertiary500', '$tertiary700')
)

type ButtonProps = Override<
  StitchesProps<typeof StyledButton>,
  {
    theme:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'success'
      | 'warning'
      | 'danger'
    appearance: 'solid' | 'outline'
  }
>

export const Button = ({
  theme,
  appearance,
  ...rest
}: ButtonProps): React.ReactElement => {
  return <StyledButton theme={theme} appearance={appearance} {...rest} />
}

Button.defaultProps = {
  theme: 'primary',
  appearance: 'solid'
} as Partial<ButtonProps>