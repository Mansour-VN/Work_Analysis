import { Button } from "components";
import PropTypes from "prop-types";

export const Todo = ({data, checkTodo, deleteTodo})=>{
    return(
        <div className="App__footer__todo">
            <div className={`App__footer__todo__title ${data.checked && "todo-done"}`}>{data.title}</div>
            <div className="App__footer__todo__action">
                <Button type="success" text="👍" Click={()=>checkTodo (data)} />
                <Button type="warning" text="❌" Click={()=>deleteTodo (data.id)} />
            </div>
        </div>
    )
}

Todo.propTypes = {
    data: PropTypes.object,
    checkTodo: PropTypes.func,
    deleteTodo: PropTypes.func
}