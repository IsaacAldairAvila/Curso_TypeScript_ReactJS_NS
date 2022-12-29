import React, { ChangeEventHandler } from 'react'
interface Props {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>,
  name: string,
  value: string
}
const Input = ({ placeholder, handleChange, name, value }: Props) => {
  return (
    <input 
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={handleChange}
    />
  )
}

export default Input