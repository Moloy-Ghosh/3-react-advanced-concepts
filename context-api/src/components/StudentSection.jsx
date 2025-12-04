import AllStudentList from './AllStudentList.jsx';
import PresentStudentList from './PresentStudentList.jsx';
import AbsentStudentList from "./AbsentStudentList.jsx";
import {useContext} from "react";
import {StudentCtx} from "./Student";

const StudentSection =(props)=>{
   const {students, setStudents}=useContext(StudentCtx);
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
         <AllStudentList />
         <PresentStudentList students={students} toggleList={toggleList}/>
         <AbsentStudentList students={students} toggleList={toggleList}/>
      </div>
   )
}

export default StudentSection;