import {useState,useMemo} from "react";
const Againcall=()=>{
   const [call,setCall]=useState(3);
   const [lastmsg,setLastmsg]=useState("");

   const isMoreCall=useMemo(()=>{
      let i;
      for(i=0;i<26;i++){
         i++;
      }
      console.log("Call is being counted");
      return "it's more ${i} times";
   },[]);

   const buttonHandler=()=>{
      setLastmsg("Button is clicked");
   };

   return(
      <div>
         <p>Already called {call} times</p>
         <p>After that it's counted from a function that</p>
         {isMoreCall};
         <button onClick={buttonHandler}>Check from browser console that I am saying wrong or what, unnecessery it's not be counted.</button>
         <p>{lastmsg}</p>
      </div>
   )
}
export default Againcall;