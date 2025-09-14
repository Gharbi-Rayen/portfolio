import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const WorkSection = ({ type }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const departments = [
    {
      id: 'mobile',
      title: 'Mobile Development',
      subtitle: 'iOS & Android Applications',
      description: 'Native and cross-platform mobile solutions crafted with precision and innovation',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      gradient: 'from-slate-800 via-violet-900 to-purple-900',
      borderGradient: 'from-violet-400 to-purple-400',
      accentColor: 'bg-violet-500/20'
    },
    {
      id: 'web',
      title: 'Web Development',
      subtitle: 'Modern Web Applications',
      description: 'Responsive, performant web experiences built with cutting-edge technologies',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      gradient: 'from-slate-800 via-blue-900 to-indigo-900',
      borderGradient: 'from-blue-400 to-indigo-400',
      accentColor: 'bg-blue-500/20'
    },/*
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent Solutions',
      description: 'Leveraging artificial intelligence to create smart, adaptive digital experiences',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5Z"/>
          <path d="M8 11h8"/>
          <path d="M8 15h5"/>
        </svg>
      ),
      gradient: 'from-slate-800 via-emerald-900 to-teal-900',
      borderGradient: 'from-emerald-400 to-teal-400',
      accentColor: 'bg-emerald-500/20'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      subtitle: 'Digital Experiences',
      description: 'Thoughtful design systems that bridge aesthetics with functionality',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.29,7 12,12 20.71,7"/>
          <line x1="12" y1="22" x2="12" y2="12"/>
        </svg>
      ),
      gradient: 'from-slate-800 via-rose-900 to-pink-900',
      borderGradient: 'from-rose-400 to-pink-400',
      accentColor: 'bg-rose-500/20'
    }*/
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-white to-gray-400 opacity-30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 py-20">
        {/* Title Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-thin tracking-[0.3em] mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            MY WORK
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl">
            Explore my expertise across different domains of digital innovation
          </p>
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {departments.map((dept, index) => (
            <div
              key={dept.id}
              className={`group relative transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(dept.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-80 cursor-pointer">
                {/* Glowing Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${dept.borderGradient} p-[1px] transition-all duration-500 ${hoveredCard === dept.id ? 'opacity-100 scale-105 shadow-2xl' : 'opacity-40 scale-100'
                  }`}>
                  <div className="w-full h-full bg-black rounded-2xl"></div>
                </div>

                {/* Main Card Content */}
                <div className={`relative h-full rounded-2xl bg-gradient-to-br ${dept.gradient} overflow-hidden transition-all duration-500 ${hoveredCard === dept.id ? 'scale-105' : 'scale-100'
                  }`}>

                  {/* Background Pattern */}
                  <div className="absolute inset-0">
                    {/* Geometric patterns */}
                    <div className="absolute top-6 right-6 w-24 h-24 border border-white/10 rounded-full"></div>
                    <div className="absolute -bottom-12 -left-12 w-32 h-32 border border-white/5 rounded-full"></div>
                    <div className="absolute top-1/2 right-0 w-16 h-16 border border-white/5 rounded-lg rotate-45"></div>

                    {/* Accent color overlay */}
                    <div className={`absolute top-4 right-4 w-20 h-20 ${dept.accentColor} rounded-full blur-2xl`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className={`mb-6 transform transition-all duration-500 text-white/90 ${hoveredCard === dept.id ? 'scale-110 rotate-1' : 'scale-100 rotate-0'
                        }`}>
                        <div className="relative">
                          <div className={`absolute inset-0 blur-sm transition-opacity duration-500 ${hoveredCard === dept.id ? 'opacity-60' : 'opacity-0'
                            }`}>
                            {dept.icon}
                          </div>
                          <div className="relative">
                            {dept.icon}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-wide text-white">
                        {dept.title}
                      </h3>
                      <p className="text-lg text-white/80 font-light mb-4">
                        {dept.subtitle}
                      </p>
                    </div>

                    <div>
                      <p className="text-white/70 leading-relaxed mb-6 text-sm">
                        {dept.description}
                      </p>

                      {/* CTA Button */}
                      <div className={`inline-flex items-center space-x-2 text-white font-medium transition-all duration-300 group-hover:text-white/90 ${hoveredCard === dept.id ? 'translate-x-2' : 'translate-x-0'
                        }`}>
                        <NavLink to={"/" + dept.id} className="text-sm tracking-wide">Explore Work</NavLink>
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${hoveredCard === dept.id ? 'translate-x-1' : 'translate-x-0'
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay with subtle shimmer */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 transition-opacity duration-300 ${hoveredCard === dept.id ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-white/30"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;