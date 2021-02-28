import React from "react";
//import Components
import Todo from "./todo";

function Todolist({todos,setTodos, filterTodos}) {
    //Events
    // const deleteHandler = () => {

    // }
    return (
        <div className="todo-container">
            <ul className="todo-list">
                    {filterTodos.map(todo => (
                    <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    )
}

export default Todolist;
