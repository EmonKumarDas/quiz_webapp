import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img className="mx-[25%] my-[2%] w-[50%] rounded" src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7870.jpg?w=740&t=st=1665464183~exp=1665464783~hmac=73fa4242a37d71c605cdecedac5b313fbf6f5896623ef7dacfbcf4b9c57ed8a9" alt="" srcset="" />
        <button className='bg-green-900 text-white font-bold w-[10%] p-5 rounded'><Link to={"/home"}> Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;