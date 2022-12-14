
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoEye } from "react-icons/go";
const QuizCard = ({ question, name, options, correctAnswer, score, seeAns, id }) => {
    let [disable, setdisable] = useState(false);
    console.log(id);
    let handleInput = e => {
        const buttonValue = e.target.value;
        if (buttonValue === correctAnswer) {
            console.log("true");
            toast.success('Your Answer is correct!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000
            });
            score(1);
            setdisable(true);

        }
        else {
            console.log("false");
            toast.error('Incorrect answer !', {
                position: toast.POSITION.TOP_RIGHT
            });
            setdisable(true);
        }

    }
    return (
        <div className="card w-full bg-base-100 shadow-md mb-5 ">
            <div className="card-body">
                <h2 className="card-title mx-[40%] text-3xl">{name}!  </h2>
                <button onClick={() => seeAns(correctAnswer)} className="mx-[80%]"><GoEye /></button>
                <h2 className="card-title text-green-400">Questions:- {question}!</h2>
                <div className=" mt-5 card-actions justify-start grid lg:grid-cols-2 md:grid-cols-2 mx-[20%] lg:mx-0 md:mx-0">
                    {
                        options.map(option => <button disabled={disable} onClick={e => handleInput(e, "value")} className="btn btn-outline" value={option}>
                            {option}
                        </button>)
                    }

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuizCard;