import React, { useReducer, useState } from "react"
import Todo from './components/Todo';

type todoType = {
    todoDescription: string;
    todoDone: boolean
}

const initialTodos : todoType[] = {
    
}

export const App2 = () => {

    const [inputInfo, setInputInfo] = useState('');

    const [todo, dispatch] = useReducer(reducer, <initialTodos[]>) 

    const handleInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputInfo(e.currentTarget.value);
    }

    const handleSubmit = (e: React.FormEvent)=> {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" onChange={handleInputTodo} />
            </form>
            <Todo></Todo>

        </div>
    )
}