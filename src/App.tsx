import React, { MouseEventHandler, ChangeEventHandler } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Button from './components/Button';
import Input from './components/Input';
function App() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e.target.value)
  }
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log(`Hola Mundo`)
  }
  return (
    <div className="App">
      <Button handleClick={handleClick}>
        Hola Mundo!
      </Button>
      <Input handleChange={handleChange} placeholder="hola" />
    </div>
  );
}

export default App;
