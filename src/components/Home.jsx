import React from 'react';

// Placeholder images for program categories
import webdev from '../assets/webdev.jpg';
import datascience from '../assets/datascience.jpg';
import ml from '../assets/ml.jpeg';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
        <Navbar/>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Sciastra</h1>
        <h2 className="text-3xl mb-2">Unlock Your Potential with Our Online Courses</h2>
        <p className="text-lg mb-8">Learn from industry experts and transform your career from the comfort of your home.</p>
        <a href="/courses" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
          Browse Courses
        </a>
      </section>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-300 mb-4">
          At Sciastra, we are dedicated to providing high-quality online education that empowers learners of all ages.
          Our mission is to make education accessible and engaging, helping you develop the skills you need to thrive 
          in today's competitive job market. With a diverse range of courses designed by industry professionals, we 
          cater to all learning styles and goals.
        </p>
        <p className="text-gray-300">
          Our platform offers a flexible learning experience, allowing you to study at your own pace, access materials 
          anytime, and connect with instructors and fellow students from around the globe. Join us in shaping the 
          future of learning!
        </p>
      </section>

    </div>
  );
};

export default Home;
