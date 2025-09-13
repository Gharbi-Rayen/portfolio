import React from "react";
import rayenImg from "../../assets/rayen gharbi.jpg";

const Home = ({ setActiveSection }) => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden py-24 px-6">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Profile */}
                <div className="mb-16">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-2xl border-4 border-gray-300 overflow-hidden flex items-center justify-center">
                        <img
                            src={rayenImg}
                            alt="Profile"
                            className="w-full h-full object-cover"
                            style={{ transform: "translateX(12px) translateY(20px) scale(1.2" }}

                        />
                    </div>
                </div>

                {/* Title */}
                <div className="mb-20">
                    <p className="text-lg tracking-[0.3em] text-gray-300 mb-4">The</p>
                    <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-white mb-8">
                        RAYEN GHARBI <br /> EXPERIENCE
                    </h1>
                    <div className="w-24 h-px bg-white mx-auto mb-8"></div>
                </div>

                {/* Intro */}
                <div className="max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                        Not an AI-generated bio (trust me bro) : I’m Rayen Gharbi, 24, curious by nature, and I enjoy building things that work — regardless of the technology.
                    </p>
                    <button
                        onClick={() => setActiveSection("work")}
                        className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        VIEW MY WORK
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Home;
