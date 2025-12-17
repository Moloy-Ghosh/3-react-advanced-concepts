import {useState} from "react";
import Title from "./Title.jsx";
import CounterValue from "./CounterValue";

const CounterApp=()=>{
   const [number,setNumber]=useState(13);

   const incHandeler=()=>{
      setNumber(number+1);
   }

   const decHandeler=()=>{
      setNumber(number-2);
   }
   
   return(
      <div>
         <Title />
         <CounterValue value={number}/>
         <button onClick={incHandeler}>Increase by 1</button>
         <button onClick={decHandeler}>Decrease by 2</button>
      </div>
   );
};
export default CounterApp;