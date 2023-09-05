import React from 'react'
import "./InputField.scss"
//interface
interface Todos {
    todo: string,
    settodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent<HTMLFormElement>) => void
}

const InputField:React.FC<Todos> = ({todo,settodo, handleAdd}) => {
    
const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    settodo(e.target.value)
}
  
  return (
    <form className='input' onSubmit={handleAdd}>
      <input
       type="input"
       placeholder='Enter a task'
       value={todo}
       onChange={handleChange}
       className='input-box'/>
      <button type="submit" className='input-sibmit'>Go</button>
    </form>
  )
}

export default InputField
