import { FC } from 'react'
import { FieldRenderProps } from 'react-final-form'

type Props = FieldRenderProps<string>

const TextInput: FC<Props> = ({ input, meta, ...rest }) => {
  return (
    <>
      <input {...input} {...rest} />
      {meta.error && meta.touched && <span className="field-error">{meta.error}</span>}
    </>
  )
}

export default TextInput
