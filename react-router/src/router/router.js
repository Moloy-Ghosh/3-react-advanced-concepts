import {createBrowserRouter} from "react-router-dom";
import Root from "../pages/RootLayout";
import About from "../pages/About";

export const router = createBrowserRouter([
   {
      path:'/',
      element:<Root/>,
      children:[{path:"about",element:<About/>}],
   }
]);