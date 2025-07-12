import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
  <nav className="bg-purple-700 p-2">
    <div className="h-12 p-2 flex justify-between items-center ">
      <div className='text-white font-bold'>Portfolio</div>
      <ul className="flex text-white font-bold gap-6 hidden sm:flex px-6 ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/proj">Project</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/skills">Contact Us</Link>
        </li>
      </ul>

     

    </div>

     <ul className=" text-white font-semi-bold bg-gray-600  w-full gap-4  sm:hidden p-2  space-y-1">
        
         <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>

  </nav>
  );
}

export default Navbar;
