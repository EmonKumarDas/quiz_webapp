import React from 'react';
import {
  useLoaderData,
} from "react-router-dom";
import Cart from './quizcard/Cart';
const Home = () => {
  const quizData = useLoaderData();
  const data = quizData.data;
  return (
    <div>
      <h1 className="font-bold text-4xl my-5">Which Best Matches Your Skill Prefernce?</h1>
      <div className='grid grid-cols-3 gap-5 m-5'>
      {
        data.map(quiz=><Cart key={quiz.id} quiz={quiz}></Cart>)
      }
    </div>
    </div>
    
  );
};

export default Home;