import './App.css';
import { useState, useRef } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null)


  const addTask = () => {
    setTodoList([...todoList, currentTask]);
    inputTask.current.value = "";
    setCurrentTask("");
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((task)=> {
      return task !== taskToDelete;
    })
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input ref={inputTask} type="text" placeholder='Task....' onChange={(event) => {
          setCurrentTask(event.target.value);
        }}/> 
        <button onClick={addTask}>Add Task </button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key)=> {
          return (
            <div id='task'>
            <li key={key}> {val} </li>
            <button onClick={()=>deleteTask(val)}> X </button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
