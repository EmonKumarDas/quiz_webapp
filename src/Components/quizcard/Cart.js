import React from 'react';

const Cart = ({quiz}) => {
    const {name,logo,total} = quiz;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
<img src={logo} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">{name}!</h2>
          <p>Number of quiz:{total}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Start Quiz</button>
          </div>
        </div>
      </div>
    );
};

export default Cart;