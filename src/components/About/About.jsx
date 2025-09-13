import React from "react";
import itpediaLogo from "../../assets/fill.png";
import telecomLogo from "../../assets/TT.png";
import segus_logo from "../../assets/Segus-Logo.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-20">
      {/* Title */}
      <h2 className="text-4xl md:text-6xl font-light tracking-widest mb-16 relative">
        About Me
        <span className="block w-20 h-0.5 bg-blue-500 mx-auto mt-4"></span>
      </h2>

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
            Since then, I’ve been pursuing an{" "}
            <span className="font-medium text-white">
              Engineering Degree in Computer Science
            </span>{" "}
            at Esprit School of Engineering (2021 – Present), where I’ve built a
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
                <img
                  src={segus_logo}
                  alt="Segus Engineering"
                  className="w-full h-full object-contain rounded-full bg-white p-2"
                />
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
                <img
                  src={itpediaLogo}
                  alt="ITpedia"
                  className="w-full h-full object-contain rounded-full bg-white p-2"
                />
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
                <img
                  src={telecomLogo}
                  alt="Telecom Jendouba"
                  className="w-full h-full object-contain rounded-full bg-white p-2"
                />
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
  );
};

export default About;
