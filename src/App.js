import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';
//imporitn components
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  //state stuff
  const [inputText,setInputText]=useState('')
  const [todos,setTodos]=useState([])
  const [status,setStatus]=useState("all")
  const [filteredTodos,setFilteredTodos]=useState([])
  //use effect
  useEffect(() => {
    console.log('look for state',filteredTodos);
    filterHandler();
  }, [todos,status])
  
  //functions
  const filterHandler= ()=>{
    switch (status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=> todo.completed === true))
        break;
    case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));

        break;
    default:setFilteredTodos(todos);
      break;

    }
  }
  return (
    <div className="App">
     <headers>
      <h1>ES's Todo list app-{inputText}</h1>
     </headers>
     <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}
     setStatus={setStatus}/>
     <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
     
    </div>
  );
}

export default App;
