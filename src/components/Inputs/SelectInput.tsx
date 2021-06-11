import React, { FC } from 'react'

interface Props {
  input: any,
  meta: any,
  value: string
}

const SelectInput: FC<Props> = React.forwardRef<HTMLSelectElement, Props>(({ input, meta, value, ...rest }, ref) => {
  return (
    <select ref={ref} onChange={input.onChange(value)} {...rest} />
  )
})

export default SelectInput


