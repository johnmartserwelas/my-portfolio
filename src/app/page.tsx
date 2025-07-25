'use client';
import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [aboutContentVisible, setAboutContentVisible] = useState(false);
  const [projectsContentVisible, setProjectsContentVisible] = useState(false);
  const [servicesContentVisible, setServicesContentVisible] = useState(false);
  const [heroContentVisible, setHeroContentVisible] = useState(false);
  const roles = [
    'Full Stack Developer',
    'Web Designer',
    'UI/UX Architect',
    'Problem Solver'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroContentVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    const element = document.getElementById('hero');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAboutContentVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Add auto-sliding functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev === 0 ? 1 : 0));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setProjectsContentVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setServicesContentVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-8 md:px-20 relative overflow-hidden">
        {/* Animated background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl animate-blob
                        transition-all duration-1000 ease-out transform
                        ${heroContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute -bottom-[40%] -right-[20%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl animate-blob animation-delay-2000
                        transition-all duration-1000 ease-out transform delay-300
                        ${heroContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] transition-opacity duration-1000
                        ${heroContentVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-4 sm:space-y-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-12">
              <div className={`w-full md:max-w-xl relative mt-8 sm:mt-12 md:mt-0 transition-all duration-1000 ease-out transform
                ${heroContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Decorative elements */}
                <div className={`absolute -left-4 sm:-left-8 -top-4 sm:-top-8 w-16 sm:w-20 h-16 sm:h-20 bg-blue-600/10 rounded-full blur-xl
                              transition-all duration-1000 ease-out transform delay-200
                              ${heroContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
                <div className={`absolute -right-4 sm:-right-8 -bottom-4 sm:-bottom-8 w-16 sm:w-20 h-16 sm:h-20 bg-purple-600/10 rounded-full blur-xl
                              transition-all duration-1000 ease-out transform delay-400
                              ${heroContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
                
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 
                             text-transparent bg-clip-text leading-tight text-center md:text-left animate-gradient-x
                             transition-all duration-1000 delay-300 ease-out transform
                             ${heroContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Hi, I'm John Mart
                </h1>
                <div className={`mt-3 sm:mt-4 h-6 sm:h-8 flex items-center gap-2 transition-all duration-1000 delay-500 ease-out transform
                              ${heroContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                  <div className="relative overflow-hidden h-6 sm:h-8 w-[180px] sm:w-[220px]">
                    {roles.map((role, idx) => (
                      <span
                        key={role}
                        className={`
                          absolute left-0 top-0 w-full transition-all duration-500 ease-in-out
                          ${idx === currentRoleIndex
                            ? 'opacity-100 translate-y-0'
                            : idx < currentRoleIndex ||
                              (currentRoleIndex === 0 && idx === roles.length - 1)
                            ? 'opacity-0 -translate-y-8'
                            : 'opacity-0 translate-y-8'
                          }
                          text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light flex items-center
                        `}
                        style={{ transitionProperty: 'opacity, transform' }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={`mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 transition-all duration-1000 delay-700 ease-out transform text-center md:text-left
                            ${heroContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  A passionate Full Stack Developer crafting digital experiences with creativity and precision
                </p>
                <div className={`mt-6 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6 transition-all duration-1000 delay-1000 ease-out transform
                              ${heroContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="group w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full 
                             hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 
                             relative overflow-hidden cursor-pointer text-sm font-medium tracking-wide"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 
                                   group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      View Projects
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" 
                              d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('footer')}
                    className="group w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3.5 border-2 border-blue-600 text-blue-600 dark:border-blue-400 
                             dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 
                             hover:scale-105 hover:border-opacity-80 transition-all duration-300 cursor-pointer
                             text-sm font-medium tracking-wide"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Contact Me
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" 
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </button>
                  <a 
                    href="/Resume.pdf"
                    download
                    className="group w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full 
                             hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 
                             relative overflow-hidden cursor-pointer text-sm font-medium tracking-wide text-center"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 
                                   group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-2">
                      Download CV
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-y-[-2px] transition-transform" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" 
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </span>
                  </a>
                </div>
                {/* Add Social Icons */}
                <div className={`mt-6 sm:mt-8 flex gap-4 sm:gap-6 justify-center md:justify-start transition-all duration-1000 delay-[1200ms] ease-out transform
                              ${heroContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <a href="https://github.com/johnmartserwelas" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-[#333] dark:text-gray-400 dark:hover:text-white transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/john-mart-516389369/" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-[#0077b5] dark:text-gray-400 dark:hover:text-[#0077b5] transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/john.mart.455281" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-[#1877f2] dark:text-gray-400 dark:hover:text-[#1877f2] transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/john.marttt/" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-[#e4405f] dark:text-gray-400 dark:hover:text-[#e4405f] transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.227-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44zm0 13.5c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44zm0 13.5c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className={`flex-shrink-0 relative -mt-8 sm:-mt-24 md:-mt-48 transform 
                            translate-y-8 sm:translate-y-0 sm:-translate-y-12 transition-all duration-[1500ms] ease-out
                            ${heroContentVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-16 scale-90'}`}>
                <div className={`absolute inset-[-8px] sm:inset-[-12px] bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl
                              transition-all duration-[2000ms] delay-500
                              ${heroContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`} />
                <div className={`absolute inset-[-6px] sm:inset-[-8px] bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full blur-2xl
                              transition-all duration-[2000ms] delay-700
                              ${heroContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`} />
                <div className={`absolute inset-[-3px] sm:inset-[-4px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl
                              transition-all duration-[2000ms] delay-1000
                              ${heroContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} />
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 animate-float">
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full 
                                shadow-lg shadow-purple-500/30 transition-all duration-1000 delay-300
                                ${heroContentVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}></div>
                  <div className="absolute inset-[3px] bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                    <Image
                      src="/pic.png"
                      alt="John Mart"
                      fill
                      className={`rounded-full object-cover transition-all duration-[2000ms] delay-500
                                ${heroContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-full blur-3xl
                        transition-all duration-1000 ease-out transform
                        ${aboutContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
          <div className={`absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-full blur-3xl
                        transition-all duration-1000 ease-out transform delay-300
                        ${aboutContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
        </div>

        <div className="max-w-4xl mx-auto px-8 sm:px-20 relative">
          <h2 className={`text-3xl sm:text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 
                        text-transparent bg-clip-text tracking-tight drop-shadow-md flex justify-center items-center gap-4
                        transition-all duration-1000 ease-out transform
                        ${aboutContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            About <span className="animate-pulse text-pink-500">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Description */}
            <div className={`relative transition-all duration-1000 ease-out transform
              ${aboutContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: aboutContentVisible ? '0.1s' : '0s' }}
            >
              <div className={`absolute -left-4 -top-4 w-20 h-20 bg-blue-600/10 rounded-full blur-xl
                            transition-all duration-1000 ease-out transform
                            ${aboutContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
              <div className={`absolute -right-4 -bottom-4 w-20 h-20 bg-purple-600/10 rounded-full blur-xl
                            transition-all duration-1000 ease-out transform delay-300
                            ${aboutContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
              <div className="relative space-y-6">
                <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light tracking-wide
                            transition-all duration-1000 ease-out transform
                            ${aboutContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                   style={{ transitionDelay: aboutContentVisible ? '0.2s' : '0s' }}>
                  I am a Full Stack Developer passionate about creating seamless digital experiences. 
                  With expertise in modern web technologies, I combine technical skills with creative 
                  problem-solving to deliver user-centric solutions.
                </p>
              </div>
            </div>

            {/* Right Column: Editor */}
            <div className={`relative group transition-all duration-1000 ease-out transform
              ${aboutContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: aboutContentVisible ? '0.3s' : '0s' }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 
                            group-hover:opacity-50 transition duration-1000
                            ${aboutContentVisible ? 'opacity-25' : 'opacity-0'}`}></div>
              <div className={`relative bg-gray-900 rounded-xl p-6 shadow-xl transform hover:-rotate-1 transition-all duration-500
                            ${aboutContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Editor Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-mono">developer.js</span>
                  </div>
                </div>
                {/* Editor Content */}
                <div className="space-y-3 font-mono text-sm relative overflow-hidden group">
                  <div className={`relative ${aboutContentVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 1s' }}>
                    <div className={`text-blue-400 font-semibold ${aboutContentVisible ? 'typing-animation' : ''}`} style={{ animationDelay: '1s' }}>
                      const developer = {`{`}
                    </div>
                    <div className={`pl-4 ${aboutContentVisible ? 'typing-animation' : ''}`} style={{ animationDelay: '1.5s' }}>
                      <span className="text-green-400">name:</span>{' '}
                      <span className="text-orange-400">'John Mart A. Serwelas'</span>,
                    </div>
                    <div className={`pl-4 ${aboutContentVisible ? 'typing-animation' : ''}`} style={{ animationDelay: '2s' }}>
                      <span className="text-green-400">role:</span>{' '}
                      <span className="text-orange-400">'Full Stack Developer'</span>,
                    </div>
                    <div className={`pl-4 text-green-400 ${aboutContentVisible ? 'typing-animation' : ''}`} style={{ animationDelay: '2.5s' }}>
                      loves: [
                    </div>
                    <div className={`pl-8 text-orange-400 ${aboutContentVisible ? 'typing-animation' : ''}`} style={{ animationDelay: '3s' }}>
                      'Clean Code',
                    </div>
                    <div className={`pl-8 text-orange-400 ${aboutContentVisible ? 'typing-animation' : ''}`} style={{ animationDelay: '3.5s' }}>
                      'Web Development',
                    </div>
                    <div className={`pl-8 text-orange-400 ${aboutContentVisible ? 'typing-animation' : ''}`} style={{ animationDelay: '4s' }}>
                      'Problem Solving'
                    </div>
                    <div className={`pl-4 text-green-400 ${aboutContentVisible ? 'typing-animation' : ''}`} style={{ animationDelay: '4.5s' }}>
                      ]
                    </div>
                    <div className={`text-blue-400 font-semibold ${aboutContentVisible ? 'typing-animation' : ''}`} style={{ animationDelay: '5s' }}>
                      {`}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Section - Full Width */}
          <div className={`mt-12 transition-all duration-1000 ease-out transform
                        ${aboutContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: aboutContentVisible ? '0.4s' : '0s' }}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', style: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/40', minWidth: '120px' },
                { name: 'Next.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', style: 'bg-black/[0.05] hover:bg-black/[0.08] dark:bg-black/30 dark:hover:bg-black/40', minWidth: '120px' },
                { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', style: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/40', minWidth: '140px' },
                { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', style: 'bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-800/40', minWidth: '120px' },
                { name: 'Tailwind', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', style: 'bg-cyan-50 hover:bg-cyan-100 dark:bg-cyan-900/30 dark:hover:bg-cyan-800/40', minWidth: '120px' },
                { name: 'CSS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', style: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/40', minWidth: '100px' },
                { name: 'PHP', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg', style: 'bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/30 dark:hover:bg-purple-800/40', minWidth: '100px' },
                { name: 'MySQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg', style: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-800/40', minWidth: '120px' },
                { name: 'HTML', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', style: 'bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/30 dark:hover:bg-orange-800/40', minWidth: '100px' },
                { name: 'Bootstrap', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg', style: 'bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/30 dark:hover:bg-purple-800/40', minWidth: '130px' },
                { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', style: 'bg-yellow-50 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:hover:bg-yellow-800/40', minWidth: '140px' },
                { name: 'Figma', logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', style: 'bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/30 dark:hover:bg-purple-800/40', minWidth: '110px' }
              ].map((tech, idx) => (
                <div 
                  key={tech.name} 
                  className={`group relative px-3 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer ${tech.style}
                            transition-transform duration-200 ease-out hover:shadow-md active:shadow-inner
                            hover:-translate-y-0.5 active:translate-y-0 touch-none`}
                  style={{ 
                    minWidth: tech.minWidth,
                    transform: aboutContentVisible 
                      ? 'translateY(0) scale(1) rotate(0)' 
                      : 'translateY(50px) scale(0.8) rotate(-10deg)',
                    opacity: aboutContentVisible ? 1 : 0,
                    transition: `all 600ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                    transitionDelay: aboutContentVisible ? `${0.5 + idx * 0.15}s` : '0s'
                  }}
                >
                  <div className="flex-shrink-0 relative z-10">
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="w-5 h-5 transition-transform duration-200 ease-out
                               group-hover:scale-110 group-hover:rotate-3 group-hover:animate-bounce
                               group-active:scale-95 group-active:rotate-0 group-active:animate-none
                               touch-manipulation" 
                      style={{
                        transform: aboutContentVisible 
                          ? 'translateY(0) rotate(0)' 
                          : 'translateY(20px) rotate(-45deg)',
                        transition: `transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                        transitionDelay: aboutContentVisible ? `${0.7 + idx * 0.15}s` : '0s'
                      }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200 z-10
                                 transition-colors duration-200 ease-out
                                 group-hover:text-gray-900 dark:group-hover:text-white 
                                 group-hover:font-semibold group-active:font-medium
                                 whitespace-nowrap"
                        style={{
                          transform: aboutContentVisible 
                            ? 'translateX(0)' 
                            : 'translateX(-20px)',
                          opacity: aboutContentVisible ? 1 : 0,
                          transition: `all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
                          transitionDelay: aboutContentVisible ? `${0.8 + idx * 0.15}s` : '0s'
                        }}>
                    {tech.name}
                  </span>
                  <div className="absolute inset-0 bg-white/5 dark:bg-white/10 opacity-0 
                               group-hover:opacity-100 group-active:opacity-50
                               rounded-lg transition-opacity duration-200 ease-out pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-8 sm:px-20">
          <h2 className={`text-3xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 
                        text-transparent bg-clip-text tracking-tight flex items-center justify-center gap-3 drop-shadow-md
                        transition-all duration-1000 ease-out transform
                        ${projectsContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <span>
              Featured <span className="animate-pulse text-blue-500">Projects</span>
            </span>
          </h2>
          <div className="space-y-16">
            {/* Main Project */}
            <div className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform 
                          transition-all duration-1000 ease-out relative
                          ${projectsContentVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-8 -rotate-2 scale-95'}`}
                 style={{ transitionDelay: projectsContentVisible ? '0.2s' : '0s' }}>
              
              {/* Live Project Badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 
                           rounded-lg shadow-lg flex items-center gap-2 group z-[9999] transition-all duration-700 transform
                           backdrop-blur-sm backdrop-filter
                           ${projectsContentVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-50'}`}
                   style={{ transitionDelay: projectsContentVisible ? '1.4s' : '0s' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-medium">Live Project</span>
              </div>

              <div className="relative h-64 sm:h-80 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 transition-opacity duration-700
                              ${projectsContentVisible ? 'opacity-100' : 'opacity-0'}`} />
                {['/1.png', '/2.png'].map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Project screenshot ${index + 1}`}
                    fill
                    className={`object-contain transition-all duration-1000 ease-in-out transform
                      ${index === currentImage ? 'opacity-100 scale-100 translate-x-0' : 
                        'opacity-0 scale-95 translate-x-full'}
                      ${projectsContentVisible ? 'translate-y-0' : 'translate-y-full'}`}
                    style={{ transitionDelay: projectsContentVisible ? '0.4s' : '0s' }}
                  />
                ))}
              </div>
              <div className={`p-8 relative transition-all duration-700 transform
                            ${projectsContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                   style={{ transitionDelay: projectsContentVisible ? '1.2s' : '0s' }}>
                <h3 className={`text-2xl font-bold mb-2 transition-all duration-700 transform
                              ${projectsContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    style={{ transitionDelay: projectsContentVisible ? '1.6s' : '0s' }}>
                  God's Handiwork Printees
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 mb-4 transition-all duration-700 transform
                            ${projectsContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                   style={{ transitionDelay: projectsContentVisible ? '1.8s' : '0s' }}>
                  An e-commerce platform for custom printing services with integrated design tools
                  and order management system.
                </p>
                <div className={`flex flex-wrap gap-2.5 mb-6 transition-all duration-700
                              ${projectsContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                     style={{ transitionDelay: projectsContentVisible ? '2s' : '0s' }}>
                  {[
                    { name: 'PHP', color: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
                    { name: 'MySQL', color: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
                    { name: 'HTML', color: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
                    { name: 'CSS', color: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300' },
                    { name: 'Bootstrap', color: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
                    { name: 'JavaScript', color: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' }
                  ].map((tech, idx) => (
                    <span 
                      key={tech.name} 
                      className={`px-3.5 py-1.5 ${tech.color} rounded-lg text-sm font-medium
                                border border-transparent hover:border-current/20
                                transition-all duration-300 ease-in-out
                                hover:shadow-md hover:-translate-y-0.5
                                ${projectsContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: projectsContentVisible ? `${2.2 + idx * 0.1}s` : '0s' }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 transition-all duration-700 transform
                              ${projectsContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                     style={{ transitionDelay: projectsContentVisible ? '2.8s' : '0s' }}>
                  <a 
                    href="https://godshandiworkprintees.shop/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 
                             text-white rounded-lg hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02]
                             relative overflow-hidden animate-gradient-x"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 opacity-0 
                                   group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative flex items-center gap-2">
                      <span className="relative">
                        <span className="absolute -inset-1 bg-white/20 rounded-lg blur-sm group-hover:bg-white/30 
                                       transition-colors duration-500"></span>
                        <span className="relative text-sm font-bold tracking-wide">Visit Project</span>
                      </span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    </span>
                  </a>
                  <a 
                    href="https://github.com/sti-thesis/gods-handy-work" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                             text-white rounded-lg hover:shadow-2xl transition-all duration-500 group hover:scale-[1.02]
                             relative overflow-hidden animate-gradient-x border border-gray-700/50"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 
                                   group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative flex items-center gap-2">
                      <span className="relative">
                        <span className="absolute -inset-1 bg-white/10 rounded-lg blur-sm group-hover:bg-white/20 
                                       transition-colors duration-500"></span>
                        <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" 
                             fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                      </span>
                      <span className="relative">
                        <span className="absolute -inset-1 bg-white/10 rounded-lg blur-sm group-hover:bg-white/20 
                                       transition-colors duration-500"></span>
                        <span className="relative text-sm font-bold tracking-wide">GitHub</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Future Projects */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  id: 1, 
                  image: '/3.png',
                  gradient: 'from-blue-600/20 to-purple-600/20'
                },
                { 
                  id: 2, 
                  image: '/4.png',
                  gradient: 'from-purple-600/20 to-pink-600/20'
                }
              ].map((project, index) => (
                <div key={project.id} 
                  className={`group bg-gradient-to-br dark:bg-gray-800 rounded-xl p-8 border-2 border-dashed 
                           border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all cursor-pointer
                           transform duration-1000 ease-out
                           ${projectsContentVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-3'}`}
                  style={{ transitionDelay: projectsContentVisible ? `${3 + index * 0.2}s` : '0s' }}
                >
                  <div className={`relative h-48 rounded-lg mb-6 overflow-hidden transition-transform duration-700
                                ${projectsContentVisible ? 'scale-100' : 'scale-95'}`}
                       style={{ transitionDelay: projectsContentVisible ? `${3.2 + index * 0.2}s` : '0s' }}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} ${projectsContentVisible ? 'animate-pulse' : ''}`} />
                    <div className={`absolute inset-0 backdrop-blur-[8px] group-hover:backdrop-blur-0 transition-all duration-700
                                  ${projectsContentVisible ? 'opacity-100' : 'opacity-0'}`}
                         style={{ transitionDelay: projectsContentVisible ? `${3.4 + index * 0.2}s` : '0s' }}>
                      <Image
                        src={project.image}
                        alt={`Future Project ${project.id} Preview`}
                        fill
                        className={`object-cover transition-all duration-700
                                  ${projectsContentVisible ? 'opacity-75 scale-100' : 'opacity-0 scale-110'}
                                  group-hover:opacity-90`}
                        style={{ transitionDelay: projectsContentVisible ? `${3.6 + index * 0.2}s` : '0s' }}
                      />
                    </div>
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700
                                  ${projectsContentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                         style={{ transitionDelay: projectsContentVisible ? `${3.8 + index * 0.2}s` : '0s' }}>
                      <span className="px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white 
                                   font-medium group-hover:bg-black/70 transition-all">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 text-gray-800 dark:text-white transition-all duration-700
                                ${projectsContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                      style={{ transitionDelay: projectsContentVisible ? `${4 + index * 0.2}s` : '0s' }}>
                    Future Project {project.id}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 transition-all duration-700
                              ${projectsContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                     style={{ transitionDelay: projectsContentVisible ? `${4.2 + index * 0.2}s` : '0s' }}>
                    An exciting project currently in development.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-8 sm:px-20">
          <h2 className={`text-3xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
                        text-transparent bg-clip-text tracking-tight flex items-center gap-4 justify-center drop-shadow-md
                        transition-all duration-1000 ease-out transform
                        ${servicesContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <span>
              <span className={`${servicesContentVisible ? 'animate-pulse' : ''} text-yellow-400`}>My&nbsp;</span>Services
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom web applications built with modern technologies.',
                icon: '🚀',
                gradient: 'from-blue-600/10 to-purple-600/10'
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design solutions that enhance user experience.',
                icon: '🎨',
                gradient: 'from-purple-600/10 to-pink-600/10'
              },
              {
                title: 'Full Stack Solutions',
                description: 'End-to-end development from database to frontend.',
                icon: '⚡',
                gradient: 'from-yellow-600/10 to-orange-600/10'
              }
            ].map((service, index) => (
              <div key={service.title} 
                className={`group relative bg-white dark:bg-gray-900 p-8 rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden
                          transition-all duration-1000 ease-out transform
                          ${servicesContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: servicesContentVisible ? `${index * 200}ms` : '0s' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`text-5xl mb-6 transform transition-all duration-500
                               ${servicesContentVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-4 rotate-45'}`}
                       style={{ transitionDelay: servicesContentVisible ? `${index * 200 + 300}ms` : '0s' }}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-4 text-gray-800 dark:text-white transition-all duration-500
                                ${servicesContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: servicesContentVisible ? `${index * 200 + 500}ms` : '0s' }}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 transition-all duration-500
                              ${servicesContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                     style={{ transitionDelay: servicesContentVisible ? `${index * 200 + 700}ms` : '0s' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
