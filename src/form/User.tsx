import React, { MouseEventHandler, ChangeEventHandler, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
export type UserFormState = {
    name: string,
    username: string
}

const InitialValue: UserFormState = {
    name: '',
    username: ''
}

interface UserFormProps {
    handleSubmit: (user: UserFormState) => void
}
const User = ({ handleSubmit }: UserFormProps) => {
    const [form, setForm] = useState(InitialValue)
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const name = e.target.name as keyof UserFormState
        setForm({ ...form, [name]: e.target.value })
    }
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        handleSubmit(form)
        setForm(InitialValue)
    }

    return (
        <>

            <Input value={form.name} name='name' handleChange={handleChange} placeholder="name" />
            <Input value={form.username} name='username' handleChange={handleChange} placeholder="username" />
            <Button handleClick={handleClick}>
                Enviar
            </Button>
        </>
    )
}

export default User