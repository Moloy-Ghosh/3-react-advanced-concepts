import {Outlet} from "react-router-dom";

export default function Root(){
   return(
      <>
      <div id="sidebar">
         <h1>React Router Contacts</h1>
         <nav>
            <ul>
               <li>
                  <a href={'/'}>Home</a>
               </li>
               <li>
                  <a href={'/about'}>About</a>
               </li>
            </ul>
         </nav>
      </div>
      <div id="detail">
         <Outlet/>
      </div>
      </>
   );
}