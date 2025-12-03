const PresentStudentList=(props)=>{
   const {students,toggleList}=props;
   const presentStudentList=students.filter(
      (item)=>item.isPresent===true,
   ); //derived state
   return(
      <div className="list present-students">
            <h2>Present Students</h2>
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