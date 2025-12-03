import AllStudentList from './AllStudentList.jsx';
import PresentStudentList from './PresentStudentList.jsx';
import AbsentStudentList from "./AbsentStudentList.jsx";

const StudentSection =(props)=>{
   const {students, setStudents,setEditMode,setEditableStudent,setStudentName}=props;
   const toggleList=(std)=>{
      const updatedStudentList= students.map((item)=>{
         if(item.id===std.id){
            return {...item, isPresent: !item.isPresent};
         }
         return item;
      });
      setStudents(updatedStudentList);
   }
   return(
      <div>
         <AllStudentList 
         setStudentName={setStudentName}
         students={students}
         setStudents={setStudents}
         setEditMode={setEditMode}
         setEditableStudent={setEditableStudent}
         />
         <PresentStudentList students={students} toggleList={toggleList}/>
         <AbsentStudentList students={students} toggleList={toggleList}/>
      </div>
   )
}

export default StudentSection;