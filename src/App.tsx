import { FC, useEffect, useState } from 'react';

import './App.css';
import { ITodo } from './Interfaces'
import Todo from './components/Todo/Todo';
import Header from './components/Header/Header';
import Background from './components/Background/Background';

const App: FC = () => {
  const savedStorage = JSON.parse(localStorage.getItem('savedTodos') || '[]')

  const [todos, setTodos] = useState<ITodo[]>(savedStorage)
  
  const saveTodos = (): void => {
    localStorage.setItem('savedTodos', JSON.stringify(todos))
  }

  const addTodo = (todoTitle: string): void => {

    const newTodo: ITodo = {
      id: Date.now(),
      title: todoTitle,
      createdAt: new Date().toLocaleTimeString("pt-br", {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      isComplete: false
    }
    setTodos((current) => [...current, newTodo])
  }

  const toggleTodoCompletion = (todoID: number): void => {
    const updateTodos = (current: ITodo[]) => current.map((todo) => {
      if (todo.id === todoID) {
        return {
          ...todo,
          isComplete: !todo.isComplete
        }
      }
      return todo
    })
    setTodos(updateTodos)
  }

  const deleteTodo = (todoID: number): void => {
    setTodos(current => current.filter((todo) => todo.id !== todoID))
  }

  useEffect(saveTodos, [todos])

  return (
    <div className="App">
      <Header 
        onAdd={addTodo}
        todos={todos}
      />
      { todos.length > 0 ? todos.map((t: ITodo) => 
          <Todo 
            key={t.id} 
            todo={t} 
            onComplete={toggleTodoCompletion}
            onDelete={deleteTodo}
          />
      ) : <Background /> }
    </div>
  );
}

export default App;
