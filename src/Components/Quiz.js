import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../Components/quizcard/QuizCard'

const Quiz = () => {
    let [correct, setCorrect] = useState(0);
    let scores = (num) => {
        setCorrect(num);
        let newScore = correct + 1;
        setCorrect(newScore);
    }
    const quiz = useLoaderData();

    return (
        <div className="m-5 gap-5">
            <h1 className='bg-sky-900 p-5 rounded font-bold text-xl text-white'>Your Score is : {correct}/{quiz.data.questions.length}</h1>
            {
                quiz.data.questions.map(question => <QuizCard
                    score={scores}
                    options={question.options}
                    key={question.id}
                    name={quiz.data.name}
                    correctAnswer={question.correctAnswer}
                    question={question.question}></QuizCard>)
            }
        </div>
    );
};

export default Quiz;