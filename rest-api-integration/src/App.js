import {useState,useEffect} from "react";
import './App.css';

function App() {
   const [note,setNote]=useState('');
   const [notes,setNotes]=useState([
      {id:1, title: "Note 1"},
      {id:2, title: "Note 2"}
   ]);
   const [edit, setEdit]=useState(false);
   const [editable,setEditable]=useState(null);

   useEffect(()=>{
      fetch(`http://localhost:4000/notes`)
      .then((res)=>res.json())
      .then((data)=>setNotes(data));
   },[]);


   const changeNoteHandler=(e)=>{
      setNote(e.target.value);
   }

   const submitHandler=(e)=>{
      e.preventDefault();
      if(note.trim()===""){
         return alert(`Please provide a valid note`);
      }
      edit? editHandler():createHandler();
   }

   const createHandler=()=>{
      const newNote={
         id:Date.now()+"",
         title:note,
      }
      fetch(`http://localhost:4000/notes`,{
         method:"POST",
         body:JSON.stringify(newNote),
         headers:{
            "Content-type":"application/json",
         },
      }).then(()=>{
         //refetch
         fetch(`http://localhost:4000/notes`)
         .then((res)=>res.json())
         .then((data)=>setNotes(data));
      });
      //setNotes([newNote,...notes]);
      setNote("");
   }

   const editHandler=()=>{
      const {id,...rest}=editable;
      const updatedNote={...rest,title:note};
      fetch(`http://localhost:4000/notes/${editable.id}`,{
         method:"PUT",
         body:JSON.stringify(updatedNote),
         headers:{
            "Content-type":"application/json"
         },
      }).then(()=>{
         //refetch
         fetch(`http://localhost:4000/notes`)
         .then((res)=>res.json())
         .then((data)=>setNotes(data));
         setNote('');
         setEdit(false);
      })

   }

   const deleteHandler=(id)=>{
      fetch(`http://localhost:4000/notes/${id}`,{
         method: "DELETE",
      }).then(()=>{
         //refetch
         fetch(`http://localhost:4000/notes`)
         .then((res)=>res.json())
         .then((data)=>setNotes(data));
      });
   }

   const updateHandler=(note)=>{
      setEdit(true);
      setEditable(note);
      setNote(note.title);
   }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
         <input
         type="text"
         value={note}
         onChange={changeNoteHandler}
         />
         <button type="submit">{edit?"Edit Note":"Add Note"}</button>
      </form>
      <h2>All Notes</h2>
      <div>
         {notes.map((singleNote)=>(
            <>
            <li key={singleNote.id}>
               {singleNote.title}
               <button onClick={()=> updateHandler(singleNote)}>Update</button>
               <button onClick={()=> deleteHandler(singleNote.id)}>Delete</button>
            </li>
            </>
            ))}
      </div>
    </div>
  );
}

export default App;
