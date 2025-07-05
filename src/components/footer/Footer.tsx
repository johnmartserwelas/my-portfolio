const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl animate-blob"></div>
        <div className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact */}
          <div className="text-center sm:text-left transform transition-all duration-500 hover:translate-y-[-5px]">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <a href="mailto:johnmartserwelas@gmail.com" 
                 className="flex items-center gap-2 group hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="relative">
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  johnmartserwelas@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-2 group hover:-translate-y-1 transition-transform duration-300">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Silang, Cavite, Philippines</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left transform transition-all duration-500 hover:translate-y-[-5px]">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              {['Web Development', 'UI/UX Design', 'Full Stack Development'].map((service) => (
                <li key={service} className="flex items-center gap-2 group hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-4 h-4 text-purple-500 dark:text-purple-400 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors relative">
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left transform transition-all duration-500 hover:translate-y-[-5px]">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white relative inline-block">
              Connect
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-600 to-blue-600 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
            </h3>
            <div className="flex justify-center sm:justify-start gap-6">
              <a href="https://github.com/johnmartserwelas" target="_blank" rel="noopener noreferrer" 
                 className="group flex flex-col items-center gap-2 text-gray-600 hover:text-[#333] dark:text-gray-300 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#333] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="text-sm relative">
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#333] transition-all duration-300 group-hover:w-full"></span>
                  GitHub
                </span>
              </a>
              <a href="https://www.linkedin.com/in/john-mart-serwelas-516389369/" target="_blank" rel="noopener noreferrer" 
                 className="group flex flex-col items-center gap-2 text-gray-600 hover:text-[#0077b5] dark:text-gray-300 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#0077b5] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-sm relative">
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0077b5] transition-all duration-300 group-hover:w-full"></span>
                  LinkedIn
                </span>
              </a>
              <a href="https://www.facebook.com/john.mart.455281" target="_blank" rel="noopener noreferrer" 
                 className="group flex flex-col items-center gap-2 text-gray-600 hover:text-[#1877f2] dark:text-gray-300 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#1877f2] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </div>
                <span className="text-sm relative">
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1877f2] transition-all duration-300 group-hover:w-full"></span>
                  Facebook
                </span>
              </a>
              <a href="https://www.instagram.com/john.marttt/" target="_blank" rel="noopener noreferrer" 
                 className="group flex flex-col items-center gap-2 text-gray-600 hover:text-[#e4405f] dark:text-gray-300 transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#e4405f] rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <svg className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.227-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-sm relative">
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e4405f] transition-all duration-300 group-hover:w-full"></span>
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 group">
            © {new Date().getFullYear()} 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-medium animate-gradient-x group-hover:animate-pulse"> John Mart A. Serwelas</span>. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
