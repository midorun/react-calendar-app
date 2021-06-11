import React, { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<number>

const NumberInput: FC<Props> = ({ input, meta, ...rest }) => {
  return (
    <input type="number" {...input} {...rest} />
  )
}

export default NumberInput
