import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({quiz}) => {
    const {name,logo,total,id} = quiz;
    return (
        <div className="card lg:w-[30vw] bg-base-100 shadow-xl image-full">
<img src={logo} alt="Shoes" />
        <div className="card-body">
          <h2 className="card-title">{name}!</h2>
          <p>Number of quiz:{total}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link to={`/details/${id}`}> Start Quiz </Link> </button>
          </div>
        </div>
      </div>
    );
};

export default Cart;