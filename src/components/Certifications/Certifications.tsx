import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    "RDBMS - Spoken Tutorial",
    "Python Data Structures and Algorithm - Infosys Springboard",
    "Cybersecurity - Tech Mahindra"
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Internship & Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Internship</h3>
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <h4 className="font-semibold text-purple-200 mb-2">Java Programming Internship</h4>
                <p className="text-gray-300">42 Learn (JRSPF Technologies Pvt Ltd)</p>
                <p className="text-sm text-gray-400 mt-2">Gained hands-on experience in Java programming, OOP concepts, and software development practices.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;