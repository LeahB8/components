import { StitchesProps } from '@stitches/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { reset } from 'stitches-reset'

import { Box, css, styled } from '../dist'
import logo from './atom-logo.png'
import { Sandbox } from './Sandbox'

css.global(reset)()

const StyledLabel = styled('label', {
  fontFamily: 'sans',
  fontWeight: '500',
  display: 'block'
})

const Label = (
  props: React.LabelHTMLAttributes<HTMLLabelElement> &
    StitchesProps<typeof StyledLabel>
) => {
  return <StyledLabel {...props} />
}

const StyledInput = styled('input', {
  display: 'block',
  p: '$3',
  appearance: 'none',
  width: '100%',
  height: '50px',
  borderRadius: '$1',
  border: '1px solid $tonal500',
  boxShadow: 'none', // necessary to remove default iOS default styling
  fontSize: 'md', // necessary to prevent iOS zooming on focus
  fontFamily: 'sans',
  color: '$tonal100',
  transition: 'all 75ms ease-out',
  ':focus': {
    boxShadow: 'inset 0 0 0 1px $primary900',
    borderColor: '$primary900',
    outline: 'none'
  }
})

const Input = (
  props: React.InputHTMLAttributes<HTMLInputElement> &
    StitchesProps<typeof StyledInput>
) => {
  return <StyledInput {...props} />
}

const InputField = ({ label, name }) => {
  return (
    <>
      <Label htmlFor={name} css={{ mb: '$2', color: '$secondary300' }}>
        {label}
      </Label>
      <Input name={name} id={name} css={{ mb: '$3' }} />
    </>
  )
}

const StyledAnchor = styled('a', {
  textDecoration: 'none',
  color: '$primary500',
  ':visited': { color: '$primary500' },
  ':hover': { color: '$primary900' },
  ':active': { color: '$primary900' },
  cursor: 'pointer'
})

const ForgotPasswordLink = () => (
  <StyledAnchor href="https://app.atomlearning.co.uk/forgotten">
    Forgot your password?
  </StyledAnchor>
)

const PasswordField = ({ name }) => {
  return (
    <>
      <Box
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '$2',
          fontFamily: 'sans',
          fontSize: 'sm'
        }}
      >
        <Label htmlFor={name} css={{ color: '$secondary300', fontSize: 'md' }}>
          Password
        </Label>
        <ForgotPasswordLink />
      </Box>
      <Input name={name} id={name} css={{ mb: '$3' }} type="password" />
    </>
  )
}

const StyledButton = styled('button', {
  padding: 'unset',
  border: 'unset',
  background: 'unset'
})

const LogInButton = () => (
  <StyledButton
    css={{
      borderRadius: '$1',
      padding: '$2 $4',
      backgroundColor: '$primary500',
      border: '1px solid $primary500',
      width: '100%',
      color: 'white',
      fontSize: 'md'
    }}
  >
    Log in
  </StyledButton>
)

const App = () => {
  return (
    <Sandbox>
      <Box
        css={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'ebf5ff'
        }}
      >
        <img src={logo} alt="" className={css({ width: '400px', mb: '$5' })} />
        <Box
          as="section"
          css={{
            height: '295px',
            width: '355px',
            backgroundColor: 'white',
            padding: '$5',
            boxShadow: '$2',
            borderRadius: '$4'
          }}
        >
          <form className={css({ mb: '$4' })}>
            <InputField label="Email or username" name="user" />
            <PasswordField name="pass" />
            <LogInButton />
          </form>
          <p
            className={css({
              fontFamily: 'sans',
              fontSize: 'sm',
              color: '$tonal400',
              textAlign: 'center'
            })}
          >
            Don't have an account yet? <StyledAnchor>Sign up!</StyledAnchor>{' '}
          </p>
        </Box>
      </Box>
    </Sandbox>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
