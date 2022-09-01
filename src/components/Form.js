import React from 'react'

const Form = ({setStatus,setInputText,todos,setTodos,inputText}) =>{
// here i can write javascript code and function

const inputTextHandler =(e)=>{
   
   setInputText(e.target.value)
}
const statusHandler=(e) =>{
   setStatus(e.target.value)
   
}
const submitTodoHandler = (e)=>{
   e.preventDefault();
   console.log(todos)
   setTodos([
      ...todos,{text:inputText,completed: false, id:Math.random()*1000}
   ])
   setInputText('')
   
}
 return(
   <form>
      <input  value={inputText} onChange={inputTextHandler} type='text' className='todo-input'/>
      <button onClick={submitTodoHandler} className='todo-button' type='submit'>
         <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
         <select name='todos' onChange={statusHandler}className='filter-todo'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
         </select>
      </div>

   </form>
 )
}
export default Form