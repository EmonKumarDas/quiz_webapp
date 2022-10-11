import React from 'react';
import {
  useLoaderData,
} from "react-router-dom";
import Cart from './quizcard/Cart';
const Home = () => {
  const quizData = useLoaderData();
  const data = quizData.data;
  let getid=(id)=>{
    console.log(id);
  }
  return (
    <div>
      <h1 className="font-bold text-4xl my-5">✍ Which Best Matches Your Skill Prefernce?</h1>
      <p>This application is developed for educational purpose, allowing the users to prepare the multiple choice questions for different examinations conducted on provincial and national level.</p>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 m-5'>
      {
        data.map(quiz=><Cart getid={getid} key={quiz.id} quiz={quiz}></Cart>)
      }
    </div>
    </div>
    
  );
};

export default Home;