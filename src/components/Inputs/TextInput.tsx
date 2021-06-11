import React, { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<string>

const TextInput: FC<Props> = ({ input, meta, ...rest }) => {
  return (
    <input {...input} {...rest} />
  )
}

export default TextInput
