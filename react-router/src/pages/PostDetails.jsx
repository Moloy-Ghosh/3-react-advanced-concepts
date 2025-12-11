import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const PostDetails =() =>{
   
   const [post,setPost]=useState({});
   const {id}=useParams();
   useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res)=>res.json())
      .then((data)=>setPost(data));
   },[])

   console.log("porblem is");
   console.log(post);
   console.log(id);

   return <div>
      <div>
         <h1>Your Post</h1>
         <h2>{post?.title}</h2>
         <br></br>
         <p>{post?.body}</p>
      </div>
   </div>;
};

export default PostDetails;