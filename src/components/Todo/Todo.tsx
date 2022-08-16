import { FC } from 'react'
import { MdCheckCircleOutline, MdCheckCircle, MdHighlightOff } from "react-icons/md"

import { ITodo } from '../../Interfaces'
import './Todo.css'

interface Props {
    todo: ITodo
    onComplete: (todoID: number) => void
    onDelete: (todoID: number) => void
}

const Todo: FC<Props> = ({ todo, onComplete, onDelete }: Props) => {
  return (
    <div className='todo'>
        <div className='todo__content'>
            <p className={`todo__title ${todo.isComplete ? 'todo-complete' : ''}`}>{todo.title}</p>
            <p className={`todo__date ${todo.isComplete ? 'todo-complete' : ''}`}> criado em {todo.createdAt}</p>
        </div>
        <div className='todo__buttons'>
            <button className='todo__button done-btn' onClick={() => onComplete(todo.id)}>
                {todo.isComplete ? <MdCheckCircle size={24} color='lightgreen' /> : <MdCheckCircleOutline size={24} />}
            </button>

            <button className='todo__button delete-btn' onClick={() => onDelete(todo.id)}>
                <MdHighlightOff size={24} />
            </button>
        </div>
    </div>
  )
}

export default Todo
