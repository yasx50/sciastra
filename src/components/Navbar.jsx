import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-500 transition">Sciastra</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-blue-500 transition">Home</a>
          </li>
          <li>
            <a href="#course" className="hover:text-blue-500 transition">Courses</a>
          </li>
          <li>
            <a href="#blog" target="" className="hover:text-blue-500 transition">Blog</a>
          </li>
          <li>
            <a href="/payment" className="hover:text-blue-500 transition">Payment</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
