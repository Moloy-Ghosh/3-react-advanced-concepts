import {useContext} from "react";
import {StudentCtx} from "../contexts/Students";


const StudentForm=()=>{
   const {studentStates, submitHandler, changeNameHandler}=useContext(StudentCtx);

   return(
      <div>
         <form onSubmit={submitHandler}>
         <input type="text" value={studentStates.studentName} onChange={changeNameHandler} />
         <button type="submit">{studentStates.editMode? "Update" : "Add Student"}</button>
      </form>
      </div>
   )
}
export default StudentForm;