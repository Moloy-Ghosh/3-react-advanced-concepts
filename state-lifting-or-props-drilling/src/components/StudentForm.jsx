const StudentForm=(props)=>{
   const {students,setStudents,editMode,setEditMode,editableStudent,setEditableStudent,studentName,setStudentName}=props;

   

   const changeNameHandler=(e)=>{
      setStudentName(e.target.value);
   }
   const submitHandler =(e)=>{
      e.preventDefault();
      if(studentName.trim()===""){
         return alert(`Please provide a valid name.`);
      }

      editMode? updateHandler() : createHandler();
   }

   const createHandler=()=>{
      const newStudent={
         id:Date.now()+"",
         name:studentName,
         isPresent: undefined
      }
      setStudents([...students, newStudent]);
      setStudentName("");
   }

   const updateHandler=()=>{
      const updatedStudentList=students.map((item)=>{
         if (item.id===editableStudent.id){
            return {...item, name:studentName}
         }
         return item;
      });
      setStudents(updatedStudentList);
      setEditMode(false);
      setEditableStudent(null);
      setStudentName("");
   }
   return(
      <div>
         <form onSubmit={submitHandler}>
         <input type="text" value={studentName} onChange={changeNameHandler} />
         <button type="submit">{editMode? "Update" : "Add Student"}</button>
      </form>
      </div>
   )
}
export default StudentForm;