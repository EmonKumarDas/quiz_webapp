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
      {
        data.map(quiz=><Cart key={quiz.id} quiz={quiz}></Cart>)
      }
    </div>
  );
};

export default Home;