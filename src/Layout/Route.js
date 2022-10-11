import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Main from "../Components/Main"
import Quiz from "../Components/Quiz";
import Statistic from "../Components/Statistic";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path:"/",
        loader:()=>fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path:"/home",
        loader:()=>fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/details/:Id",
        loader:({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`);
        },
        element:  <Quiz></Quiz>,
      },
      {
        path:"/blog",
        loader:()=>fetch("blog.json"),
        element: <Blog></Blog>,
      },
      {
        path:"/statistic",
        loader:()=>fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Statistic></Statistic>,
      }
    ]
   
  },
]);
  
  export default router;