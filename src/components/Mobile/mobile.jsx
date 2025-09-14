
import React, { useState, useEffect } from "react";


const Mobile = () => {
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

        </div>


    );
};

export default Mobile;