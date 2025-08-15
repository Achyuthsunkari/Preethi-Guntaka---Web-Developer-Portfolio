import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Career Objective</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              To pursue a challenging career with dedication and contribute my full efficiency in a professional organizational environment, where my potential can be recognized and utilized to the fullest.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Strengths</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Excellent time management skills
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Self-motivated and quick learner
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Unwavering commitment to continuous learning
              </li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">Achievements</h3>
            <div className="space-y-4">
              <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-200">Elite Certification</h4>
                <p className="text-gray-300">66% in Introduction to Internet of Things – SWAYAM NPTEL</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-purple-200">Elite Certification</h4>
                <p className="text-gray-300">68% in Privacy and Security in Online Social Media – SWAYAM NPTEL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;