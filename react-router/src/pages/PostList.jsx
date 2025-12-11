import {Link, useLoaderData} from "react-router-dom";

const PostList=()=>{
   const posts=useLoaderData();
   
   return(
      <div>
         <h2>All of your posts</h2>
         <ul>
            {posts.map((post)=>(
               <li key={post.id}>
                  <Link to ={`/posts/${post.id}`}>{post.title}</Link>
               </li>
            ))}
         </ul>
      </div>
   )
}
export default PostList;