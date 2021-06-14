import { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<string>

const NumberInput: FC<Props> = ({ input, meta, ...rest }) => {
  return (
    <>
      <input type="number" step={100} {...input} {...rest} />
      {meta.error && meta.touched && <span className="field-error">{meta.error}</span>}
    </>
  )
}

export default NumberInput
