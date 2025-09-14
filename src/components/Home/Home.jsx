import React, { useState, useEffect } from "react";
import profileImg from "../../assets/rayen gharbi.jpg";
const Home = () => {
    const [stars, setStars] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Generate initial stars
        const initialStars = Array.from({ length: 80 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            speed: Math.random() * 20 + 10,
            direction: Math.random() * 360,
            twinkleSpeed: Math.random() * 3 + 1,
            isActive: Math.random() < 0.3, // 30% chance to start active
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

    const navigate = (path) => {
        window.location.href = path;
        // Replace with actual navigation logic
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden py-24 px-6">
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
                            opacity: star.isActive ? 1 : star.opacity,
                            transform: `scale(${star.isActive ? 1.5 : 1})`,
                            filter: star.isActive ? 'blur(0.5px)' : 'none',
                        }}
                    >
                        <div
                            className={`w-full h-full rounded-full transition-all duration-1000 ${star.isActive
                                    ? 'bg-gradient-to-r from-white via-blue-200 to-white shadow-lg shadow-blue-200/50'
                                    : 'bg-white'
                                }`}
                            style={{
                                animationDuration: `${star.twinkleSpeed}s`,
                            }}
                        />
                        {/* Glowing effect for active stars */}
                        {star.isActive && (
                            <div
                                className="absolute inset-0 rounded-full bg-white/30 animate-ping"
                                style={{
                                    animationDuration: '2s',
                                }}
                            />
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black/70 to-gray-800/60"></div>

            <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                {/* Profile */}
                <div className="mb-16">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-2xl border-4 border-gray-300 overflow-hidden flex items-center justify-center relative">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="w-full h-full object-cover"
                            style={{ transform: "translateX(12px) translateY(20px) scale(1.2)" }}
                        />
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
                    </div>
                </div>

                {/* Title */}
                <div className="mb-20">
                    <p className="text-lg tracking-[0.3em] text-gray-300 mb-4 transition-all duration-700 delay-300">
                        The
                    </p>
                    <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-white mb-8 transition-all duration-700 delay-500">
                        RAYEN GHARBI <br /> EXPERIENCE
                    </h1>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8 transition-all duration-700 delay-700"></div>
                </div>

                {/* Intro */}
                <div className="max-w-2xl mx-auto transition-all duration-700 delay-900">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
                        Not an AI-generated bio (trust me bro) : I'm Rayen Gharbi, 24, curious by nature, and I enjoy building things that work — regardless of the technology.
                    </p>
                    <button
                        onClick={() => navigate("/work")}
                        className="group px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden"
                    >
                        <span className="relative z-10">VIEW MY WORK</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                </div>
            </div>

            {/* Custom CSS for shooting star animations */}
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
        </div>
    );
};

export default Home;