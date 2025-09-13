import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import WorkSection from "./components/WorkSection/WorkSection";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-black min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        {activeSection === "home" && <Home setActiveSection={setActiveSection} />}
        {["mobile", "web", "others"].includes(activeSection) && (
          <WorkSection type={activeSection} />
        )}
        {activeSection === "about" && <About />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
};

export default App;
