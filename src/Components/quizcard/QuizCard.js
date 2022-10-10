import React, { useState } from 'react';

const QuizCard = ({ question, name, options }) => {
    let handleInput = e => {
        const buttonValue = e.target.value;
        console.log(buttonValue);

  }
    return (
        <div className="card w-full bg-base-100 shadow-sm mb-5 ">
            <div className="card-body">
                <h2 className="card-title mx-[50%] text-3xl">{name}!</h2>
                <h2 className="card-title">Questions:- {question}!</h2>
                <div className=" mt-5 card-actions justify-start grid lg:grid-cols-2 md:grid-cols-2 mx-[20%] lg:mx-0 md:mx-0">
                    {
                        options.map(option => <button onClick={e => handleInput(e, "value")} className="btn btn-primary" value={option}>
                            {option}
                        </button>)
                    }

                </div>
            </div>
        </div>
    );
};

export default QuizCard;