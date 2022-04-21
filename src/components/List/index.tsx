import { useContext, useEffect } from "react"
import { TodoContext } from "../../contexts/TodoContext"

export default function List(){
    const {todo, setTodo} = useContext(TodoContext)

    return(
        <section className="list-items">
            <div className="list">
                {todo && todo.map((element) => {
                    return(
                        <div key={element.id} className="item">{element.task}</div>
                    )
                })}
            </div>
        </section>
    )
}