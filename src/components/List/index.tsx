import { useContext, useEffect } from "react"
import { TodoContext } from "../../contexts/TodoContext"
import {AiOutlineEdit, AiOutlineCheckCircle} from "react-icons/ai"
import {BiTrash} from "react-icons/bi"

export default function List(){
    const {todo, setTodo} = useContext(TodoContext)

    return(
        <section className="list-items">
                {todo && todo.map((element) => {
                    return(
                        <div key={element.id} className="item">
                            <div className="item-container">
                                <button className="btn check"><AiOutlineCheckCircle size={"18px"}/></button>
                                <span className="item-content">{element.task}</span>
                                <button className="btn edit"><AiOutlineEdit size={"18px"}/></button>
                                <button className="btn trash"><BiTrash size={"18px"}/></button>
                            </div>
                        </div>
                    )
                })}  
        </section>
    )
}