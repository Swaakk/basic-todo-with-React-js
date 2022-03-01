import React,{useState} from 'react'
import './App.css';


function App() {

  const[todos,setTodos]=useState([]);
  const[todo,setTodo]=useState("")

  
  return (
    <div className="App">
      <div className="input">
        {/* <h1>Welcome</h1> */}
        <input type="text" value={todo}  onChange={(e)=>setTodo(e.target.value)} placeholder="Type your todo" />
        <button key={todo} onClick={()=>setTodos([...todos,todo])}>Add</button>
      </div>
        {
          todos.map((value)=>{
            return(
              <div className="todos">
                <div className="todoContent">
                  <p>{value}</p>
                </div>
              </div>
            )
          })
        }
      
    </div>
  );
}

export default App;
