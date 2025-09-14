import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import WorkSection from "./components/WorkSection/WorkSection";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Mobile from "./components/Mobile/mobile";
import Web from "./components/Web/web";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <main className="pt-20"> {/* padding so content isn’t hidden behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<Mobile/>} />
          <Route path="/web" element={<Web />} />
          <Route path="/work" element={<WorkSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
