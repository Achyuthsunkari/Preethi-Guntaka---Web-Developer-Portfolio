import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <img src="./src/assets/preethi-guntaka.png" alt="Preethi Guntaka" className="w-full h-full object-cover rounded-full" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Preethi Guntaka
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Web Developer & Computer Science Student
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions with expertise in Java, Python, and modern web technologies. 
            Currently pursuing B.Tech in Computer Science with specialization in IoT, Cybersecurity, and Blockchain.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/25"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300 font-semibold"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;