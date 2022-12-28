import React, { MouseEventHandler, ReactNode } from 'react'
interface Props {
    children: ReactNode;
    handleClick: MouseEventHandler
}
const Button = ({ children, handleClick }: Props) => {
    return (
        <button 
            onClick={handleClick}
        className='button is-primary'>  {children} </button>
    )
}

export default Button