import React from 'react'
import { useState, useEffect } from 'react';

export const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState(() => {
        const saved = localStorage.getItem("text");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    })

    useEffect(() => {
        localStorage.setItem("text", JSON.stringify(text));
    }, [text]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return;
        onAdd(text);
        setText('');
    }
    return (
        <form onSubmit={handleSubmit} className='flex items-center gap-3 mt-4'>
            <input 
                type="text"
                placeholder='Agregar nueva tarea'
                className='border-2 border-purple-500 rounded-lg p-2 w-80'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type='submit' className='cursor-pointer bg-purple-200 p-3 rounded-lg hover:bg-purple-300 transition-all duration-300 ease-in-out'>Agregar</button>
        </form>
    )
}

export default TodoForm;