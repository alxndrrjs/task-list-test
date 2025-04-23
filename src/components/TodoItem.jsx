import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <li className='flex items-center justify-between bg-purple-200 p-3 rounded-lg mt-2'>
        {todo}
        <button onClick={onDelete} className='bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg cursor-pointer text-white transition-all duration-300 ease-in-out'>Eliminar</button>
    </li>
  )
}

export default TodoItem;