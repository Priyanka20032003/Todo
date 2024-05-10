import { useState } from "react";

function Todo() {
  let [todoInput, updateInput] = useState("")
  let [todoList, updateTodos] = useState([

  ]);


  function addNewTodo(){
    if(todoInput==""){
        alert("Add Some Task")
    }
    else{

        var newTodo=[
            ...todoList,todoInput
            

        ]
        console.log(newTodo)
        updateTodos(newTodo)
        updateInput("")

    }

  }
  function deleteTodo(todoToDelete) {
    var updatedTodos = todoList.filter((todo) => todo !== todoToDelete);
    updateTodos(updatedTodos);
  }
  return (
    <div className="container w-50">
      <div className="input-group mt-5">
        <input type="text" className="form-control" value={todoInput} onChange={(e)=>{
          
            updateInput(e.target.value)

        }} />
        <button onClick={addNewTodo} className="btn btn-primary ">Add</button>
      </div>

      <ul className="list-group mt-4">
        {todoList.map((todo,index) => {
          return (
            <li key={index} className="list-group-item d-flex justify-content-between align-center">
              <p>{todo}</p>
              <button onClick={()=>{
                deleteTodo(todo)
              }} className="btn">❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
