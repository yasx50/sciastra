// src/components/Blog.jsx
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Our Blog</h1>
      <div className="max-w-2xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="mb-4 p-4 border-b border-gray-600">
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
