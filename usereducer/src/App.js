import {useReducer} from "react";
import './App.css';



const counterReducer=(state,action)=>{
   switch(action.type){
      case "increase_by_2":{
         return state+action.payload;
      }
      case "increase_by_4":{
         return state+action.payload;
      }
      case "decrease_by_5":{
         return state-action.payload;
      }
   }
};

function App() {
   const [counter,dispatch]=useReducer(counterReducer,10);
  return (
    <div className="App">
      <p>The value is {counter}</p>
      <button onClick={()=>dispatch({type:"increase_by_2", payload:2})}>Increase by 2</button>
      <button onClick={()=>dispatch({type:"increase_by_4", payload:4})}>Increase by 4</button>
      <button onClick={()=>dispatch({type:"decrease_by_5", payload:5})}>Increase by 5</button>
    </div>
  );
}

export default App;
