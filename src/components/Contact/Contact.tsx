import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and collaborations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a 
            href="mailto:preethiguntaka186@gmail.com"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200 group"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Mail className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
          </a>
          
          <a 
            href="tel:+917671908321"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200 group"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Phone className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
          </a>
          
          <a 
            href="http://www.linkedin.com/in/preethi-guntaka-41b848300"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-200 group"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Linkedin className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
          </a>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-purple-300 mb-6">Let's Work Together</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = 'mailto:preethiguntaka186@gmail.com'}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-purple-500/25"
            >
              Send Message
            </button>
            <button
              onClick={() => window.open('http://www.linkedin.com/in/preethi-guntaka-41b848300', '_blank')}
              className="px-8 py-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300 font-semibold"
            >
              LinkedIn Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;