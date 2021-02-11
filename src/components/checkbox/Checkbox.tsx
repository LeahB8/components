import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as React from 'react'

import { StitchesProps, styled } from '~/stitches'

const StyledCheckbox = styled(RadixCheckbox.Root, {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '$0',
  boxShadow: 'inset 0 0 0 2px $secondary300',
  color: 'white',
  cursor: 'pointer',
  height: '16px',
  width: '16px',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 100ms ease-out',
  '&[data-state="unchecked"]:focus, &[data-state="unchecked"]:hover': {
    backgroundColor: '$tonal300',
    boxShadow: 'inset 0 0 0 2px $secondary700',
    outline: 'none'
  },
  '&[data-state="checked"]': {
    backgroundColor: '$secondary300'
  },
  '&[data-state="checked"]:hover, &[data-state="unchecked"]:focus': {
    backgroundColor: '$secondary700',
    boxShadow: 'inset 0 0 0 2px $secondary700',
    outline: 'none'
  },
  '&:focus-within': {
    outline: 'none'
  }
})

type CheckboxProps = StitchesProps<typeof StyledCheckbox>

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <StyledCheckbox {...props}>
      <RadixCheckbox.Indicator as={CheckIcon} />
    </StyledCheckbox>
  )
}
