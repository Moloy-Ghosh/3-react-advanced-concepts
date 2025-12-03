const AbsentStudentList =(props)=>{
   const {students,toggleList}=props;

   return(
      <div className="list absent-students">
            <h2>Absent Students</h2>
            <ul>
               {students.filter((item)=>item.isPresent===false).map((student)=>(
                  <li key={student.id}>
                     {student.name}
                     <button onClick={()=>toggleList(student)}>Accidently Added</button>
                  </li>
                  ))}
            </ul>
         </div>
   )
}

export default AbsentStudentList;