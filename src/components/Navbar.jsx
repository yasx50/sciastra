import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-500 transition">Sciastra</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/courses" className="hover:text-blue-500 transition">Home</Link>
          </li>
          <li>
            <a href="#course" className='hover:text-blue-500 transition'>Courses</a>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-500 transition">Blog</Link>
          </li>
          <li>
            <Link to="/payment" className="hover:text-blue-500 transition">Payment</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
