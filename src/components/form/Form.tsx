import * as React from 'react'
import { useForm } from 'react-hook-form'

import { styled } from '~/stitches'
import { Override } from '~/utilities'

import { ValidationError } from './validation'

const StyledForm = styled('form', {})

type FormProps = Override<
  React.ComponentPropsWithoutRef<typeof StyledForm>,
  {
    defaultValues?: { [key: string]: string | number }
    onSubmit: (data: any) => void
    validationMode: 'onBlur' | 'onSubmit'
  }
>

export const Form: React.FC<FormProps> = ({
  children,
  defaultValues = {},
  onSubmit,
  validationMode = 'onBlur',
  ...remainingProps
}) => {
  const { errors, handleSubmit, register } = useForm({
    defaultValues,
    mode: validationMode
  })

  return (
    <StyledForm
      aria-label="form"
      {...remainingProps}
      onSubmit={handleSubmit(onSubmit)}
    >
      {React.Children.map(children, (child: React.ReactElement) => {
        const { validation, ...childProps } = child.props

        // Form fields require a name
        // If there is no name, assume it's not a form field
        if (!childProps.name) return child

        const fieldError = errors[childProps.name] as ValidationError

        return React.createElement(child.type, {
          ...childProps,
          error: fieldError ? fieldError.message : undefined,
          register: validation ? register(validation) : register,
          key: childProps.name,
          required: validation ? !!validation.required : false
        })
      })}
    </StyledForm>
  )
}

Form.displayName = 'Form'