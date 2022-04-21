import { createContext, useState } from "react";

interface props{
    children: JSX.Element | JSX.Element[]
} 

export interface todoListData {
    id:number
    task:string,
    complete:boolean
}

  type TodoContextType = {
    todo:Array<todoListData>,
    setTodo: React.Dispatch<React.SetStateAction<todoListData[]>>
    inputValue: string,
    setInputValue: (newState:string) => void
}


const initialValue = {
    todo:[{id:0, task:'', complete:false}],
    setTodo: () => {},
    inputValue:'',
    setInputValue: () => {}

}  

export const TodoContext = createContext<TodoContextType>(initialValue)

export function TodoContextProvider  ( {children}:props ){ 
    const [todo, setTodo] = useState<todoListData[]>([])
    const [inputValue, setInputValue] = useState<string>('')

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