import {createContext,useState} from "react";

export const StudentCtx=createContext();

const StudentProvider= (props)=>{
   const{children}=props;
      const [studentName,setStudentName]=useState("");
      const [students,setStudents]=useState([{}]);
      const [editMode,setEditMode]=useState(false);
      const [editableStudent,setEditableStudent]=useState(null);

     
      const presentHandler=(std)=>{
         if(std.isPresent!==undefined){
            return alert(`already in the ${std.isPresent===true?`present`:`absent`} list`)
         }
         const updatedStudentList= students.map((item)=>{
            if(item.id===std.id){
               return {...item, isPresent:true};
            }
            return item;
         });
         setStudents(updatedStudentList);
      }

      const ctxValue={
         studentName,
         setStudentName,
         students,
         setStudents,
         editMode,
         setEditMode,
         editableStudent,
         setEditableStudent,
         presentHandler
      }

      return(
          <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>
      );
}

export default StudentProvider;