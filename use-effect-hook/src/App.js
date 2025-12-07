import {useState,useEffect} from "react";
import './App.css';

function App() {
   const [posts,setPosts]=useState([]);
   useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
      .then(res=>res.json())
      .then(data=>{
         setPosts(data);
      });
   },[])
  return (
    <div className="App">
      <h2>Posts:</h2>
      <p>{posts.map((post)=>(
         <li key={posts.id}>{post.title}</li>
      ))}</p>
    </div>
  );
}

export default App;
