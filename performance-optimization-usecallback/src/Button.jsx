import {memo} from "react";
const Button =memo(({handler})=>{
   console.log("aikhane aita hocce.");
   return <button onClick={handler}>Increase by 8</button>
});
export default Button;