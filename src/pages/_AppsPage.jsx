import React from "react";
import { Link } from "react-router-dom";

const _AppsPage = () => {
  return (
    <div>
      <h2 className='text-3xl text-blue-600'>Apps Page</h2>
      <div className='grid grid-cols-3'>
        <Link to='/about' className='block'>
          <div className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
            <p>About Me</p>
          </div>
        </Link>

        <Link to='/dashboard' className='block'>
          <div className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
            <p>MainDashboard</p>
          </div>
        </Link>

        <Link to='/kazoga-v2' className='block'>
          <div className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
            <p>Kazoga Search V2</p>
          </div>
        </Link>

        <Link to='/book'>
          <div className='cursor-pointer hover:bg-gray-100 p-2 rounded'>
            <p>Book Flights</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default _AppsPage;
