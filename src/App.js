// import {React, useState , useEffect, createContext} from "react";
import { useRef, useState } from "react";
import "./App.css"

function App(){
  const [x , setx] = useState([])
  const inputRef = useRef()
  const Add = ()=> {
    const value = inputRef.current.value
    const newData = {complete: false , value}
    setx([...x , newData])
    inputRef.current.value =""
  }
  const itemDone = (index)=>{
    const newx = [...x]
    newx[index].complete = !newx[index].complete
    setx(newx)
  }
  const DeleteTask = (index)=>{
    const newx = [...x]
    newx.splice(index , 1)
    setx(newx)
  }
  console.log(x)
  return(
    <div className="App" >
      <h2>To do list</h2>
      <ul>
        {
          x.map((item , index)=>{
            return <div>
              <div className="liContainer">
                <li className={item.complete ? "DoneStyle" : ""} onClick={()=>itemDone(index)}>{item.value}</li>
                <i className="fa-solid fa-xmark close" style={{color: "#ededed;"}} onClick={()=>DeleteTask(index)}></i>
              </div>
              
            </div> 
          })
        }
      </ul>
      <input ref={inputRef} placeholder="Enter new task..."/> 
      <button onClick={Add}>Add</button>
    </div>
  )
}  
export default App;