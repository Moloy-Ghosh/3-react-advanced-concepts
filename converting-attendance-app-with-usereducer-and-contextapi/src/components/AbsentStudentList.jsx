import {useContext} from "react";
import {StudentCtx} from "../contexts/Students";

const PresentStudentList=()=>{
   const {studentStates, toggleList}=useContext(StudentCtx);


   const presentStudentList=studentStates.students.filter(
      (item)=>item.isPresent===false,
   ); //derived state
   return(
      <div className="list present-students">
            <h2>Absent Students</h2>
            <ul>
               {presentStudentList.map((student)=>(
                  <li key={student.id}>
                     {student.name}
                     <button onClick={()=>toggleList(student)}>Accidently Added</button>
                  </li>
                  ))}
            </ul>
         </div>
   )
}

export default PresentStudentList;