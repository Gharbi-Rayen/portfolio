import React, { useState, useEffect } from "react";

const About = () => {
  const [stars, setStars] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Generate initial stars
    const initialStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.4,
      speed: Math.random() * 20 + 10,
      direction: Math.random() * 360,
      twinkleSpeed: Math.random() * 3 + 1,
      isActive: Math.random() < 0.4,
    }));
    setStars(initialStars);
    setIsLoaded(true);

    // Animate stars position
    const animateStars = () => {
      setStars(prevStars =>
        prevStars.map(star => {
          const radians = (star.direction * Math.PI) / 180;
          let newX = star.x + Math.cos(radians) * (star.speed * 0.01);
          let newY = star.y + Math.sin(radians) * (star.speed * 0.01);

          // Wrap around screen edges
          if (newX > 100) newX = -2;
          if (newX < -2) newX = 100;
          if (newY > 100) newY = -2;
          if (newY < -2) newY = 100;

          // Randomly change activity state
          const shouldChangeState = Math.random() < 0.002;
          const newIsActive = shouldChangeState ? !star.isActive : star.isActive;

          return {
            ...star,
            x: newX,
            y: newY,
            isActive: newIsActive,
          };
        })
      );
    };

    const interval = setInterval(animateStars, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 py-20 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute transition-all duration-1000 ${star.isActive ? 'animate-pulse' : ''
              }`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.isActive ? 1 : Math.max(star.opacity, 0.5),
              transform: `scale(${star.isActive ? 2 : 1.2})`,
              filter: star.isActive ? 'blur(0.3px) brightness(1.5)' : 'brightness(1.2)',
            }}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-1000 ${star.isActive
                ? 'bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-lg shadow-blue-300/70'
                : 'bg-gradient-to-r from-gray-100 via-white to-gray-100 shadow-sm shadow-white/30'
                }`}
              style={{
                animationDuration: `${star.twinkleSpeed}s`,
              }}
            />
            {star.isActive && (
              <>
                <div
                  className="absolute inset-0 rounded-full bg-white/40 animate-ping"
                  style={{
                    animationDuration: '2s',
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full bg-blue-200/30 animate-pulse"
                  style={{
                    animationDuration: '1.5s',
                    transform: 'scale(1.5)',
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              left: `${-10 + (i * 40)}%`,
              top: `${20 + (i * 30)}%`,
              animation: `shooting-star-${i} ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 3}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes shooting-star-0 {
          0% {
            transform: translateX(0) translateY(0) scaleX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateX(50px) translateY(25px) scaleX(1);
          }
          90% {
            opacity: 1;
            transform: translateX(150vw) translateY(75vh) scaleX(1);
          }
          100% {
            opacity: 0;
            transform: translateX(160vw) translateY(80vh) scaleX(0);
          }
        }
        
        @keyframes shooting-star-1 {
          0% {
            transform: translateX(0) translateY(0) scaleX(0);
            opacity: 0;
          }
          15% {
            opacity: 1;
            transform: translateX(40px) translateY(30px) scaleX(1);
          }
          85% {
            opacity: 1;
            transform: translateX(140vw) translateY(70vh) scaleX(1);
          }
          100% {
            opacity: 0;
            transform: translateX(150vw) translateY(75vh) scaleX(0);
          }
        }
        
        @keyframes shooting-star-2 {
          0% {
            transform: translateX(0) translateY(0) scaleX(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: translateX(60px) translateY(20px) scaleX(1);
          }
          80% {
            opacity: 1;
            transform: translateX(160vw) translateY(65vh) scaleX(1);
          }
          100% {
            opacity: 0;
            transform: translateX(170vw) translateY(70vh) scaleX(0);
          }
        }
      `}</style>

      {/* Title */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-light tracking-widest mb-16 relative text-center">
          About Me
        </h2>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto mb-6"></div>

        <br />
        <br />

        <div className="max-w-5xl space-y-20">
          {/* Education */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400 uppercase tracking-wider">
              Education
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              My academic path started with a{" "}
              <span className="font-medium text-white">
                Baccalaureate in Computer Science
              </span>{" "}
              at Jendouba High School (2021).
              Since then, I've been pursuing an{" "}
              <span className="font-medium text-white">
                Engineering Degree in Computer Science
              </span>{" "}
              at Esprit School of Engineering (2021 – Present), where I've built a
              strong foundation in software development, mobile applications, and
              modern web technologies.
            </p>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-blue-400 uppercase tracking-wider text-center">
              Professional Experience
            </h3>
            <div className="space-y-12">
              {/* Segus Engineering */}
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Segus Engineering (Remote) — Internship
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Jul 2025 – Aug 2025</p>
                  <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
                    <li>
                      <span className="font-medium text-white">Showcase Website (Vitrine) :</span>
                      <ul className="list-disc list-inside ml-6 text-gray-400 text-base space-y-1">
                        <li>Introduced the company, services, and offerings.</li>
                        <li>Designed a clean, modern, and fully responsive Angular frontend.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-medium text-white">Admin Dashboard :</span>
                      <ul className="list-disc list-inside ml-6 text-gray-400 text-base space-y-1">
                        <li>Managed users, projects, and tasks with a Trello-like board system.</li>
                        <li>Implemented employee time-tracking and performance statistics.</li>
                        <li>Added a real-time <span className="font-medium">WebSocket notification system</span>.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-medium text-white">Employee Portal :</span>
                      <ul className="list-disc list-inside ml-6 text-gray-400 text-base space-y-1">
                        <li>Implemented check-in / clock-in system for work.</li>
                        <li>Enabled task progress tracking via a Trello-style board.</li>
                        <li>Provided visibility into assigned tasks and completed work.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-medium text-white">Backend (NestJS) :</span>
                      <ul className="list-disc list-inside ml-6 text-gray-400 text-base space-y-1">
                        <li>Developed APIs for tasks, projects, and user management.</li>
                        <li>Integrated secure authentication and role-based access control.</li>
                        <li>Implemented performance analytics and reporting features.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ITpedia */}
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    IT
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    ITpedia (Remote) — Internship
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Jan 2025 – Mar 2025</p>
                  <ul className="list-disc list-inside text-lg text-gray-300 space-y-1">
                    <li>
                      <span className="font-medium text-white">Frontend (Angular) :</span>
                      <ul className="list-disc list-inside ml-6 text-gray-400 text-base space-y-1">
                        <li>Built a <span className="font-medium">component-based architecture</span> focusing on reusability, maintainability, and clean design.</li>
                        <li>Gained hands-on experience in designing and optimizing <span className="font-medium">responsive layouts</span> for multiple devices.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-medium text-white">Backend (ASP.NET) :</span>
                      <ul className="list-disc list-inside ml-6 text-gray-400 text-base space-y-1">
                        <li>Implemented <span className="font-medium">secure JWT authentication with RSA encryption</span> to protect user sessions and streaming access.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-medium text-white">Code Quality & Documentation :</span>
                      <ul className="list-disc list-inside ml-6 text-gray-400 text-base space-y-1">
                        <li>Learned and applied <span className="font-medium">best practices</span> for writing <span className="font-medium">organized, well-documented code</span>.</li>
                        <li>Created clear <span className="font-medium">README files</span> to help future developers understand the project.</li>
                      </ul>
                    </li>

                    <li>
                      <span className="font-medium text-white">Project Outcome :</span>
                      <ul className="list-disc list-inside ml-6 text-gray-400 text-base space-y-1">
                        <li>Developed a fully <span className="font-medium">responsive podcast streaming platform</span> integrating both frontend and backend functionalities.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Telecom */}
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    TT
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Telecom Jendouba — Internship
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Jul 2022 – Aug 2022</p>
                  <ul className="list-disc list-inside text-lg text-gray-300 space-y-1">
                    <li>
                      Gained overall understanding of{" "}
                      <span className="font-medium">telecom operations and infrastructure</span>.
                    </li>
                    <li>
                      Learned how different departments{" "}
                      <span className="font-medium">collaborate to maintain service quality</span>.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Projects & Skills */}
          <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
            {/* Projects / Educational Projects */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400 uppercase tracking-wider">
                Projects & Educational Experience
              </h3>

              <div className="space-y-6 text-left text-gray-300 text-base">
                {/* SmartFarming App */}
                <div>
                  <h4 className="font-semibold text-white text-lg">SmartFarming App</h4>
                  <p className="ml-2 text-gray-400">
                    An AI-powered application providing personalized farming recommendations.
                  </p>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Contributed to the <span className="font-medium text-white">Marketplace module</span> for buying and selling agricultural tools and products.</li>
                    <li>Integrated a <span className="font-medium text-white">Large Language Model (LLM)</span> for smart product recommendations based on user behavior and orders.</li>
                    <li>Optimized AI recommendation algorithms for efficiency and accuracy.</li>
                  </ul>
                </div>

                {/* Recetta App */}
                <div>
                  <h4 className="font-semibold text-white text-lg">Recetta App</h4>
                  <p className="ml-2 text-gray-400">
                    A cross-platform recipe management app with inventory tracking and AI-powered recipe suggestions.
                  </p>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Frontend developed with <span className="font-medium text-white">Flutter, SwiftUI, and Jetpack Compose</span> for Android and iOS.</li>
                    <li>Backend built with <span className="font-medium text-white">NestJS</span> to manage recipes, inventory, and user data.</li>
                    <li>Implemented AI-based recipe suggestions based on available ingredients.</li>
                  </ul>
                </div>

                {/* A9thilie */}
                <div>
                  <h4 className="font-semibold text-white text-lg">A9thilie</h4>
                  <p className="ml-2 text-gray-400">
                    A secure podcast streaming platform providing responsive streaming and content management.
                  </p>
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Frontend developed using <span className="font-medium text-white">Angular</span>.</li>
                    <li>Backend implemented with <span className="font-medium text-white">ASP.NET</span> and <span className="font-medium text-white">JWT with RSA encryption</span> for secure authentication.</li>
                    <li>Focused on clean, component-based architecture and comprehensive documentation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills & Certifications */}
            <div className="max-w-5xl mx-auto px-4 py-12 space-y-6 text-left">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-400 uppercase tracking-wider">
                  Skills & Certifications
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-3">
                <li>
                  <span className="font-medium text-white">Frontend:</span> Flutter, Jetpack Compose, SwiftUI, React, Angular
                </li>
                <li>
                  <span className="font-medium text-white">Backend & Databases:</span> NestJS, .NET, MongoDB, SQL
                </li>
                <li>
                  <span className="font-medium text-white">DevOps & Tools:</span> Docker, Git, CI/CD, JWT Authentication
                </li>
                <li>
                  <span className="font-medium text-white">Problem-Solving & Full-Stack Development:</span> Hands-on experience designing, coding, and deploying complete applications
                </li>
                <li>
                  <span className="font-medium text-white">Certifications & Learning:</span> Completed courses in full-stack development, cloud services, and secure backend architectures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;