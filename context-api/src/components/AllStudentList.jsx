import {useContext} from "react";
import {StudentCtx} from "./Student";

const AllStudentList=()=>{
   const {setStudentName, 
      setEditMode, 
      setEditableStudent,
      students,
      setStudents,
      presentHandler}=useContext(StudentCtx);



   const editHandler=(student)=>{
      setEditMode(true);
      setEditableStudent(student);
      setStudentName(student.name);
   }

   const removeHandler=(studentId)=>{
      const updatedStudentList=students.filter(
         (student)=>student.id!==studentId,
      );
      setStudents(updatedStudentList);
   };



   const absentHandler=(std)=>{
      if(std.isPresent!==undefined){
         return alert(`already in the ${std.isPresent===true?"present":"absent"} list`)
      }
      const updatedStudentList= students.map((item)=>{
         if(item.id===std.id){
            return {...item, isPresent:false};
         }
         return item;
      });
      setStudents(updatedStudentList);
   }

   return(
      <div className="list all-students">
            <ul>
               <h2>All Students</h2>
               {students.map(student=>(
                  <li key={student.id}>
                     <span>{student.name}</span>
                     <button onClick={()=>editHandler(student)}>Edit</button>
                     <button onClick={()=>removeHandler(student.id)}>Delete</button>
                     <button onClick={()=>presentHandler(student)}>Make Present</button>
                     <button onClick={()=>absentHandler(student)}>Make Absent</button>
                  </li>   
               ))}
            </ul>
         </div>
   )
}

export default AllStudentList;