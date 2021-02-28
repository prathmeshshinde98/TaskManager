import './App.css';
import React, { useState, useEffect } from 'react';
//Importing Components
import Form from "./components/form";
import Todolist from "./components/todolist";
function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status , setStatus] = useState("all");
  const [filterTodos, setFilteredTodos] = useState([]);
  //Function
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;  
    }
  }
  //Useeffect
  useEffect(()=>{
    filterHandler();
  },[todos,status]);
  return (
    <div>
    <header className="head">Parth's Task Manager </header>
    <Form 
    todos={todos} 
    setTodos={setTodos} 
    inputText={inputText} 
    setInputText={setInputText}
    setStatus={setStatus}
    filterTodos={filterTodos}
    />
    <Todolist filterTodos={filterTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
