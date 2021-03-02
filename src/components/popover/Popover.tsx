import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities/types'

const getTriangle = (position) => {
  const size = 8
  const border = '$tonal400'

  return {
    '&::after': {
      // Pseudo-classes need to be separated ($::after, $::before: doesn't work in stitches work)
      borderStyle: 'solid',
      borderColor: 'transparent',
      content: "''", //  quotes need to be escapted as a stitches workaround for pseudoclasses
      height: 0,
      pointerEvents: 'none',
      position: 'absolute',
      top: '100%',
      width: 0,
      borderTopColor: 'white',
      borderWidth: size,
      ml: -size,
      ...position
    },
    '&::before': {
      borderStyle: 'solid',
      borderColor: 'transparent',
      content: "''",
      height: 0,
      pointerEvents: 'none',
      position: 'absolute',
      top: '100%',
      width: 0,
      borderTopColor: border,
      borderWidth: size + 1,
      ml: -(size + 1),
      ...position
    }
  }
}

const Visibility = () => ''

Visibility.toString = () => '.visible' // Gives the ability to apply a class to show and hide the popover

const StyledPopover = styled('div', {
  boxShadow: '$0',
  borderRadius: '$1',
  backgroundColor: 'white',
  border: '1px solid $tonal400',
  bottom: `calc(100%  + $3)`,
  listStyleType: 'none',
  minWidth: 140,
  maxWidth: 354,
  p: '$3',
  position: 'absolute',
  transition: 'all 150ms ease-in-out',
  width: 'max-content',
  opacity: 0,
  visibility: 'hidden',
  [`&${Visibility}`]: {
    opacity: 1,
    visibility: 'visible'
  },
  variants: {
    align: {
      left: {
        ...getTriangle({ left: 40 }),
        left: 0,
        transformOrigin: '60px bottom',
        transform: 'translate(-20px, $2) scale(0.9)'
      },
      center: {
        ...getTriangle({ left: '50%' }),
        transformOrigin: 'center bottom',
        transform: 'translate(-50%, $2) scale(0.9)'
      },
      right: {
        ...getTriangle({ right: 31 }),
        right: 0,
        transformOrigin: 'calc(100% - 51px) bottom',
        transform: 'translate(0, $2) scale(0.9)'
      }
    } //,
    // show: {
    //   true: {
    //     opacity: 1,
    //     visibility: 'visible'
    //   }
    // }
  }
})

type PopoverProps = Override<
  React.ComponentPropsWithRef<typeof StyledPopover>,
  {
    content: string
    align: 'right' | 'center' | 'left'
    // show?: boolean
    visible: boolean
    children: React.ReactNode
  }
>

// We need a component that can accept a ref for the popover to target
// TODO: replace with a Box once we make that accept a ref
const TriggerWrapper = React.forwardRef<
  HTMLSpanElement,
  {
    children: React.ReactNode
  }
>((props, ref) => <span ref={ref} {...props} />)

export const Popover: React.FC<PopoverProps> = ({
  align = 'center',
  // show,
  children,
  content,
  visible,
  ...remainingProps
}) => {
  const triggerContainerRef = React.useRef<HTMLDivElement>(null)
  console.log('in component', visible)
  return (
    <span style={{ position: 'relative' }}>
      <TriggerWrapper ref={triggerContainerRef}>{children}</TriggerWrapper>
      <StyledPopover
        role="tooltip"
        align={align}
        // show={show}
        className={visible ? 'visible' : ''}
        aria-hidden={!visible}
        {...remainingProps}
      >
        {content}
      </StyledPopover>
    </span>
  )
}

Popover.displayName = 'Popover'
