import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { MdOutlineAddCircleOutline } from 'react-icons/md'

import { ITodo } from '../../Interfaces'
import './Header.css'

interface Props {
    onAdd: (title: string) => void
    todos: ITodo[]
}

const Header: FC<Props> = ({ onAdd, todos }: Props) => {
  const [todo, setTodo] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (todo) {
      onAdd(todo)
      setTodo('')
    }
  }

  return (
    <header className='header'>
      <div className="header__container">
        <h1 className='header__title'>Sua lista de tarefas:</h1>
        <form className='header__form' onSubmit={handleSubmit}>
            <input className='form__input' type="text" placeholder='Adicionar uma tarefa' value={todo} onChange={handleChange} />
            <button className='form__button'>
              <MdOutlineAddCircleOutline size={32} />
            </button>
        </form>
        <div className='header__tasks'>
          { (todos.length === 1) ? <span>1 tarefa</span> : <span>{todos.length} tarefas</span> }
        </div>
      </div>
    </header>
  )
}

export default Header
