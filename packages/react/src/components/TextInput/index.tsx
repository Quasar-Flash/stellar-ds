import { ComponentProps } from 'react'
import { Input, Prefix, Label, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  label?: string
  variant: 'fullfilled' | 'underscored'
}

export function TextInput({
  prefix,
  label,
  variant,
  ...props
}: TextInputProps) {
  return (
    <>
      {!!label && <Label>{label}</Label>}
      <TextInputContainer variant={variant}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
      </TextInputContainer>
    </>
  )
}

TextInput.displayName = 'TextInput'
