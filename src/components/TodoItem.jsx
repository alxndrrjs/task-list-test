import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <li>
        {todo}
        <button onClick={onDelete}>Eliminar</button>
    </li>
  )
}

export default TodoItem;