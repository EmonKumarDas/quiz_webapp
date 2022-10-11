import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../Components/quizcard/QuizCard'
const Quiz = () => {
    const quiz = useLoaderData();
console.log(quiz.data.questions[0].options);
    return (
        <div className="m-5 gap-5">
            {
                quiz.data.questions.map(question=><QuizCard 
                    options={question.options}
                    key = {question.id}
                    name={quiz.data.name}
                    correctAnswer={question.correctAnswer}
                    question={question.question}></QuizCard>)
            }
        </div>
    );
};

export default Quiz;