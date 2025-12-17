import {useState, useCallback} from "react";
import Button from "./Button.jsx";

const CounterApp=()=>{
   const [num,setNum]=useState(16);

   const incHandler=useCallback(()=>{
      setNum((hlw)=>hlw+8);
   },[]);

   const decHandler=useCallback(()=>{
      setNum((hlw)=>hlw-3);
   },[]);

   return(
      <div>
         <p>The number is: {num}</p>
         <Button handler={incHandler}/>
         <button onClick={decHandler}>Decreace by 3</button>
      </div>
   )
}
export default CounterApp;