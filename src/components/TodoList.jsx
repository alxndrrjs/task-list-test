import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, onDelete }) => {
    return (
        <ul className='w-80 mt-6'>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
            ))}
        </ul>
    )
}

export default TodoList;