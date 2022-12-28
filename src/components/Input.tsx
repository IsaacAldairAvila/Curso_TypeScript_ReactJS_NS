import React, { ChangeEventHandler } from 'react'
interface Props {
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLInputElement>
}
const Input = ({ placeholder, handleChange }: Props) => {
  return (
    <input 
    placeholder={placeholder}
    onChange={handleChange}
    />
  )
}

export default Input