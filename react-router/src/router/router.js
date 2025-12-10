import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";

export const router = createBrowserRouter([
   {
      path:'/',
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children:[
         {index:true, element:<Home/>},
         {path:"about",element:<About/>},
         {path:"/contactwithme",element:<ContactPage/>},
         {path:"/all-notes", element:<App/>}
      ],
   }
]);