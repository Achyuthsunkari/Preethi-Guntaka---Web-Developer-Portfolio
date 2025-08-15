import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">22kq1a4710iot@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+91-7671908321</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <a href="http://www.linkedin.com/in/preethi-guntaka-41b848300" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-300 transition-colors duration-200">
                    linkedin.com/in/preethi-guntaka-41b848300
                  </a>
                </div>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Let's Connect</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or potential collaborations. 
              </p>
              <div className="flex gap-4 justify-start">
                <button
                  onClick={() => window.location.href = 'mailto:22kq1a4710iot@gmail.com'}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold"
                >
                  Email Me
                </button>
                <button
                  onClick={() => window.open('http://www.linkedin.com/in/preethi-guntaka-41b848300', '_blank')}
                  className="px-6 py-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300 font-semibold"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;