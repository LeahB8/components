import * as React from 'react'

import { InlineFieldWrapper } from '~/components/field-wrapper'
import { ValidationOptions } from '~/components/form'
import { RadioButton } from '~/components/radio'
import { CSS } from '~/stitches'

type RadioFieldProps = {
  css?: CSS
  defaultChecked?: boolean
  error?: string
  label: string
  validation?: ValidationOptions
} & React.ComponentProps<typeof RadioButton>

export const RadioField: React.FC<RadioFieldProps> = ({
  css,
  label,
  value,
  ...remainingProps
}) => {
  // each radio in the group has the same name, so we can't use them
  // as unique IDs

  return (
    <InlineFieldWrapper css={css} label={label} fieldId={value}>
      <RadioButton id={value} value={value} {...remainingProps} />
    </InlineFieldWrapper>
  )
}

RadioField.displayName = 'RadioField'
