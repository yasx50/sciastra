import React from 'react';
import webdev from '../assets/webdev.jpg';
import datascience from '../assets/datascience.jpg';
import ml from '../assets/ml.jpeg';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Learn full-stack web development from scratch.",
      imageUrl: webdev,
    },
    {
      id: 2,
      title: "Data Science with Python",
      description: "Master data analysis and visualization using Python.",
      imageUrl: datascience,
    },
    {
      id: 3,
      title: "Machine Learning A-Z",
      description: "Become a machine learning expert with practical applications.",
      imageUrl: ml,
    },
  ];

  return (
    <section id='course'>
      <div className="bg-black w-full min-h-screen py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Available Courses</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <a
                  href="/payment.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Enroll Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
