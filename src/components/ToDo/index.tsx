import { useContext } from "react"
import { TodoContext } from "../../contexts/TodoContext"

export default function Todo(){
    const {inputValue, setInputValue, todo, setTodo} = useContext(TodoContext)

    type inputElement = React.FormEvent<HTMLInputElement> 

    const handleInput = ( event:inputElement) => {
        setInputValue(event.currentTarget.value)  
    }

    const addTodo = () => {
        todo.push(inputValue)
        console.log(todo)
    }
    
    return(
        <section className="to-do-component">
            <div className="input-content">
                <label htmlFor="input">O que você precisa fazer hoje?</label>
                <input type={"text"} className="to-do-input" name="input" onChange={handleInput}/>
            </div>
            <button className="to-do-button" onClick={addTodo}>ADICIONAR</button>
        </section>
    )
}