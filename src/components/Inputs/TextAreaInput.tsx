import React, { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<string>

const TextAreaInput: FC<Props> = ({ input, meta, ...rest }) => {
  return <textarea {...input} {...rest} />
}

export default TextAreaInput
