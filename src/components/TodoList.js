import React, {useState} from 'react'
import Todo from './Todo';
import ToDoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    };

    const completeTodo = id => {
        let updatedToDos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
        })
    }

  return (
    <div>
        <h1>What's the Plan for today?</h1>
        <ToDoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  )
}

export default TodoList