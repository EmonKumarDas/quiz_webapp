import React from 'react';

const QuizCard = ({ question, name, options }) => {
    return (
        <div className="card w-full bg-base-100 shadow-sm mb-5 ">
            <div className="card-body">
                <h2 className="card-title mx-[50%] text-3xl">{name}!</h2>
                <h2 className="card-title">Questions:- {question}!</h2>
                <div className=" mt-5 card-actions justify-start grid lg:grid-cols-2 md:grid-cols-2 mx-[20%] lg:mx-0 md:mx-0">
                    {
                        options.map(option => <button className="btn btn-primary">
                            {option}
                        </button>)
                    }

                </div>
            </div>
        </div>
    );
};

export default QuizCard;