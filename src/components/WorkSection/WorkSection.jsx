import React from "react";

const WorkSection = ({ type }) => {
  const workTitles = {
    mobile: "Mobile Apps",
    web: "Web Projects",
    others: "Other Works",
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      <h2 className="text-4xl md:text-6xl font-light tracking-widest mb-12">
        {workTitles[type] || "My Work"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Example project cards */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition transform duration-300">
          <h3 className="text-2xl font-semibold mb-4">Project Title 1</h3>
          <p className="text-gray-300">Description of the project goes here.</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition transform duration-300">
          <h3 className="text-2xl font-semibold mb-4">Project Title 2</h3>
          <p className="text-gray-300">Another project description goes here.</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transition transform duration-300">
          <h3 className="text-2xl font-semibold mb-4">Project Title 3</h3>
          <p className="text-gray-300">Another project description goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
