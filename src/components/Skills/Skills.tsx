import React from 'react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "C", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 }
  ];

  const softSkills = [
    "Hard Working", 
    "Self Motivated", 
    "Open Minded", 
    "Problem Solving", 
    "Team Collaboration", 
    "Adaptability"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-500/20 text-center hover:bg-white/10 transition-all duration-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;