import React, { useReducer, useState } from "react"
import Todo from './components/Todo';

type todoType = {
    todoDescription: string;
    todoDone: boolean
}

type actionType = {
    type: string
}

const initialTodos = {
    todos: [] as todoType[],
};


const reducer = (state: todoType, action: actionType) => {
    switch (action.type) {
        case 'add-todo':
            return { ...state, count: state.count + 1 };
        case 'delete-todo':
            return { ...state, count: state.count - 1 };
    }

    return state;
}



    export const App2 = () => {

        const [inputInfo, setInputInfo] = useState('');

        const [todo, dispatch] = useReducer(reducer, initialTodos)

        const handleInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputInfo(e.currentTarget.value);
        }

        const handleSubmit = (e: React.FormEvent) => {
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