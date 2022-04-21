import { useContext } from "react"
import { TodoContext } from "../../contexts/TodoContext"
import { todoListData } from "../../contexts/TodoContext"

export default function Todo() {
    const { inputValue, setInputValue, todo, setTodo } = useContext(TodoContext)

    type inputElement = React.FormEvent<HTMLInputElement>
    type formElement = React.FormEvent

    const handleInput = (event: inputElement) => {
        setInputValue(event.currentTarget.value)
    }

    const handleSubmit = (event:formElement) => {
        event.preventDefault()
        addTask(inputValue)
        setInputValue("")
    }

    const addTask = (inputValue:string) => {
       const idTask = Math.floor(Math.random() * 1000)
       let newTask:todoListData = {
           id: idTask,
           task: inputValue,
           complete: false
       }
       setTodo([...todo, newTask])
       console.log(todo)
    }

    return (
        <section className="to-do-component">
            <form className="to-do-form" onSubmit={handleSubmit}>
                <div className="input-content">
                    <label htmlFor="input">O que você precisa fazer hoje?</label>
                    <input 
                    type={"text"} 
                    className="to-do-input" 
                    name="input" 
                    onChange={handleInput}
                    value={inputValue}
                    autoComplete="off" />
                </div>
            </form>
        </section>
    )
}