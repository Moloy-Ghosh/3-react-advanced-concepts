import {createContext, useReducer} from "react"
export const StudentCtx=createContext();
const initState={
   studentName:"",
   students:[],
   editMode:false,
   editableStudent:null,
}
const studentReducer=(state=initState,action)=>{
   switch(action.type){
      case "change_student_name" :{
         return{
            ...state,
            studentName:action.payload,
         };
      }
      case "create_student":{
         const newStudent={
            id:Date.now()+"",
            name:state.studentName,
            isPresent:undefined,
         };
         return{
            ...state,
            students:[...state.students,newStudent],
            studentName:"",
         }
      }
      case "edit_student":{
         return{
            ...state,
            editMode:true,
            editableStudent:action.payload,
            studentName:action.payload.name,
         };
      }
      case "update_student":{
         return{
            ...state,
            students: state.students.map((item)=>{
               if(item.id===state.editableStudent.id){
                  return{...item,name:state.studentName};
               }
               return item;
            }),
            editMode:false,
            editableStudent:null,
            studentName:"",
         };
      }
      case "remove_student":{
         return{
            ...state,
            students:state.students.filter(
               (student)=>student.id!==action.payload,
            ),
         };
      }
      case "change_isPresent_status_of_a_student":{
         return{
            ...state,
            students: state.students.map((item)=>{
               if(item.id===action.payload.id){
                  return {...item,isPresent:action.payload.isPresent};
               }
               return item;
            }),
         };
      }
      default:{
         return state;
      }
   }
}

const StudentProvider=(props)=>{
   const {children}=props;

   const [studentStates, dispatch]=useReducer(studentReducer, initState);

   const changeNameHandler=(e)=>{
      dispatch({type:"change_student_name",payload:e.target.value});
   };

   const submitHandler=(e)=>{
      e.preventDefault();
      if(studentStates.studentName.trim()===""){
         return alert(`Plese Provide a valid name`);
      }
      studentStates.editMode
      ? dispatch({type:"update_student"})
      : dispatch ({type:"create_student"})
   };

   const makePresentHandler =(student)=>{
      if(student.isPresent!==undefined){
         return alert(
            `This stuent is allready in the ${
               student.isPresent=== true?"Present List":"Absent List"
            }`,
         );
      }
      dispatch({
         type:"change_isPresent_status_of_a_student",
         payload:{id:student.id,isPresent:true}
      });
   }

   const makeAbsentHandler=(student)=>{
      if(student.isPresent!==undefined){
         return alert(`already in the.........`);
      }
      dispatch({
         type:"change_isPresent_status_of_a_student",
         payload:{id:student.id,isPresent:false},
      });
   };

   const toggleList=(student)=>{
      dispatch({
         type: "change_isPresent_status_of_a_student",
         payload:{id:student.id,isPresent:!student.isPresent}
      })
   }

   const ctxValue={
      studentStates,
      dispatch,
      submitHandler,
      makePresentHandler,
      makeAbsentHandler,
      toggleList,
      changeNameHandler,
   };

   return(
      <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>
   );
}
export default StudentProvider;