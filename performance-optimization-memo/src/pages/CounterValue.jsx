import {memo} from "react";
const CounterValue =memo(({value})=>{
   return <p>The value is: {value}</p>
});
export default CounterValue;