import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.165-2.052-.48-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-purple-300">Attendance Management System</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  A comprehensive attendance tracking system developed using Java for backend logic with HTML, CSS, and JavaScript for the frontend interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java", "HTML", "CSS", "JavaScript"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  <p><strong>Key Features:</strong> Real-time attendance tracking, Automated reporting, User authentication, Data persistence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;