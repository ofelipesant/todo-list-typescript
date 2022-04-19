import { useContext, useEffect } from "react"
import { TodoContext } from "../../contexts/TodoContext"

export default function List(){
    const {todo, setTodo} = useContext(TodoContext)

    return(
        <section className="list-items">
            <div className="list">
            
            </div>
        </section>
    )
}