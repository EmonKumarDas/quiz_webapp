import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Home from "../Components/Home";
import Main from "../Components/Main"
import Quiz from "../Components/Quiz";
import Statistic from "../Components/Statistic";

const router = createBrowserRouter([
  {
    path: "/",
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
        path:"/quizid/:id",
        loader:({id})=>fetch(`https://openapi.programming-hero.com/api/quiz/${id}`),
        element: <Quiz></Quiz>,
      },
      {
        path:"/blog",
        element: <Blog></Blog>,
      },
      {
        path:"/statistic",
        element: <Statistic></Statistic>,
      }
    ]
   
  },
]);
  
  export default router;