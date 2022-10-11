import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div  className="lg:my-[2%] md:my-[30%] my-[50%]">
            <img className="lg:mx-[25%] md:mx-[25%] mx-[14%] lg:w-[50%] md:w-[50%] w-[70%] rounded" src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg?w=740&t=st=1665464183~exp=1665464783~hmac=73fa4242a37d71c605cdecedac5b313fbf6f5896623ef7dacfbcf4b9c57ed8a9" alt="" srcset="" />
        <button className='bg-green-900 mt-5 text-white font-bold p-5 rounded'><Link to={"/home"}> Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;