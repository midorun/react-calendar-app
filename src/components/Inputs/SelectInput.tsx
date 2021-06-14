import React, { ChangeEvent, FC } from 'react'

interface Props {
  input: any,
  meta: any,
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
}

const SelectInput: FC<Props> = React.forwardRef<HTMLSelectElement, Props>(({ input, onChange, meta, ...rest }, ref) => {

  const customInput = {
    ...input,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => {
      input.onChange(e);
      onChange(e)
    }
  }

  return (
    <>
      <select ref={ref} {...customInput} {...rest} />
      {meta.error && meta.touched && <span className="field-error">{meta.error}</span>}
    </>
  )
})

export default SelectInput


