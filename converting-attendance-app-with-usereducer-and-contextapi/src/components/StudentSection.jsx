import AllStudentList from './AllStudentList.jsx';
import PresentStudentList from './PresentStudentList.jsx';
import AbsentStudentList from "./AbsentStudentList.jsx";

const StudentSection =()=>{

   return(
      <div>
         <AllStudentList />
         <PresentStudentList />
         <AbsentStudentList />
      </div>
   )
}

export default StudentSection;