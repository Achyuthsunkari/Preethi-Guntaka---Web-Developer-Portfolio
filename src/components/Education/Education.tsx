import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "IoT & Cybersecurity with Blockchain",
      institution: "Pace Institute of Technology and Sciences, Ongole",
      year: "2022 - 2026",
      cgpa: "7.79 CGPA"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Amrutha Junior College",
      year: "2020 - 2022",
      cgpa: "8.6 CGPA"
    },
    {
      degree: "SSC",
      institution: "St. Xavier's High School, Ongole",
      year: "2018 - 2020",
      cgpa: "9.8 CGPA"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">{edu.degree}</h3>
                  {edu.specialization && (
                    <p className="text-purple-200 text-sm italic">Specialization: {edu.specialization}</p>
                  )}
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 font-medium">{edu.year}</p>
                  <p className="text-green-400 font-semibold">{edu.cgpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;