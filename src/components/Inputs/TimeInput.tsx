import { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<any>

const TimeInput: FC<Props> = ({ input, meta, ...rest }) => {
  return (
    <>
      <input type="time" {...input}  {...rest} />
      {meta.error && meta.touched && <span className="field-error">{meta.error}</span>}
    </>
  )
}

export default TimeInput
