import { useContext } from "react"
import { TodoContext } from "../../contexts/TodoContext"

export default function Todo(){
    
    return(
        <section className="to-do-component">
            <div className="input-content">
                <label htmlFor="input">O que você precisa fazer hoje?</label>
                <input type={"text"} className="to-do-input" name="input" />
            </div>
            <button className="to-do-button">ADICIONAR</button>
        </section>
    )
}