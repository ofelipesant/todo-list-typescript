import { createContext, useState } from "react";

const initialValue = {
    todo:[],
    setTodo: () => {},
    inputValue:'',
    setInputValue: () => {}

}

type TodoContextType = {
    todo:string[],
    setTodo: (newState:[]) => void,
    inputValue: string,
    setInputValue: (newState:string) => void
}

interface props{
    children: JSX.Element | JSX.Element[]
} 

export const TodoContext = createContext<TodoContextType>(initialValue)

export function TodoContextProvider  ( {children}:props ){ 
    const [todo, setTodo] = useState(initialValue.todo)
    const [inputValue, setInputValue] = useState(initialValue.inputValue)

    return(
        <TodoContext.Provider value={{
            todo,
            setTodo,
            inputValue,
            setInputValue
        }}>
            {children}
        </TodoContext.Provider>
    )
}