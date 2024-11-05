import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Student Testimonials Section */}
    <div className="bg-black text-white"><section className="max-w-7xl mx-auto py-10 px-4 ">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Students Say</h2>
        <div className="flex flex-col space-y-4">
          <blockquote className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 italic">"The Web Development Bootcamp changed my life! I landed a job within three months of completing the course."</p>
            <footer className="text-gray-400 mt-2">– John D.</footer>
          </blockquote>
          <blockquote className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 italic">"The instructors are fantastic and truly care about your success. I highly recommend Sciastra!"</p>
            <footer className="text-gray-400 mt-2">– Sarah K.</footer>
          </blockquote>
        </div>
      </section></div>

      {/* Call to Action Section */}
      <section className="bg-black py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-gray-300 mb-6">Join our community of learners today and take the first step towards achieving your career goals.</p>
        <a href="/signup" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">
          Sign Up Now
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>© {new Date().getFullYear()} Sciastra. All Rights Reserved. | <a href="/privacy" className="text-blue-400">Privacy Policy</a> | <a href="/terms" className="text-blue-400">Terms of Service</a></p>
      </footer></>
  )
}

export default Footer
