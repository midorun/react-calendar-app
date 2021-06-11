import React, { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<any>

const TimeInput: FC<Props> = ({ input, meta, ...rest }) => {
  return (
    <input type="time" {...input}  {...rest} />
  )
}

export default TimeInput
