import React, {useState} from "react";
import './App.css';
function App(){
  const [count, setCount]= useState(0);
  const handleIncrement=()=>{
    setCount(count +1);
  };
  const handleDecrement=()=>{
    if(count===0){
      return
    }else{
    setCount(count -1);
    }
  };
  return(
    

    <div id="main"> 
    
      <h1>Count: {count}</h1>
      <button type="button" className="btn clr1" onClick={handleIncrement}>
        Increment 
      </button>
      <button type="button"  className="btn clr2" onClick={handleDecrement}>
        Decrement 
      </button>
    </div>
  );
}
export default App;