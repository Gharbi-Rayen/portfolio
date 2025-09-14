import React, { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Send, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'collaboration',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [shake, setShake] = useState({});
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const triggerShake = (fieldName) => {
    // Check if vibration is supported and user hasn't disabled it
    const supportsVibration = 'vibrate' in navigator;

    if (supportsVibration) {
      try {
        // More reasonable vibration pattern: short, subtle feedback
        // Pattern: [vibrate, pause, vibrate] in milliseconds
        const vibrationPattern = [100, 50, 100]; // Two short pulses
        navigator.vibrate(vibrationPattern);
      } catch (error) {
        // Silently handle any vibration errors
        console.log('Vibration not available or failed');
      }
    }

    // Visual shake animation
    setShake(prev => ({ ...prev, [fieldName]: true }));
    setTimeout(() => {
      setShake(prev => ({ ...prev, [fieldName]: false }));
    }, 600); // Slightly longer for better visual feedback
  };

  const validateForm = () => {
    const newErrors = {};
    const fieldsToShake = [];

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      fieldsToShake.push('name');
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      fieldsToShake.push('email');
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      fieldsToShake.push('email');
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      fieldsToShake.push('message');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Trigger shake for all error fields with staggered timing
      fieldsToShake.forEach((field, index) => {
        setTimeout(() => triggerShake(field), index * 150);
      });
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    setErrors({});

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Success vibration
    if ('vibrate' in navigator) {
      try {
        // Success pattern: longer, more positive vibration
        navigator.vibrate([200]);
      } catch (error) {
        console.log('Vibration not available');
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const subject = `${formData.subject.charAt(0).toUpperCase() + formData.subject.slice(1)} Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:rayengharbi587@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(mailtoLink, '_blank');

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: 'collaboration', message: '' });
        setErrors({});
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-black text-white px-6 pt-20 pb-12 relative overflow-hidden">
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
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
          20%, 40%, 60%, 80% { transform: translateX(6px); }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .shake-animation {
          animation: shake 0.6s ease-in-out;
        }

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

      <div className="relative z-10 text-center mb-12">
        <br />
        <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto mb-6"></div>
        <br />
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Whether you have a project idea, collaboration in mind, or just want to say hello,
          feel free to reach out. Let's create something amazing together.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-12 relative z-10">
        <div className="flex-1">
          <div className="space-y-6">
            <div className={`relative group transition-all duration-300 ${shake.name ? 'animate-pulse' : ''}`}>
              <div className={`absolute inset-0 rounded-lg transition-all duration-300 `}></div>
              <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 z-10 ${errors.name
                ? 'text-red-400'
                : 'text-gray-400 group-focus-within:text-white'
                }`} size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`relative w-full bg-transparent rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 border-2 z-10 ${errors.name
                  ? 'border-red-500 focus:border-red-400'
                  : 'border-gray-600 hover:border-gray-400 focus:border-white'
                  }`}
               
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-2 ml-1 animate-fade-in">
                  {errors.name}
                </p>
              )}
            </div>

            <div className={`relative group transition-all duration-300 ${shake.email ? 'animate-pulse' : ''}`}>
              <div className={`absolute inset-0 rounded-lg transition-all duration-300 `}></div>
              <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 z-10 ${errors.email
                ? 'text-red-400'
                : 'text-gray-400 group-focus-within:text-white'
                }`} size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`relative w-full bg-transparent rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 border-2 z-10 ${errors.email
                  ? 'border-red-500 focus:border-red-400'
                  : 'border-gray-600 hover:border-gray-400 focus:border-white'
                  }`}
               
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-2 ml-1 animate-fade-in">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-black border-2 border-gray-600 rounded-lg py-4 px-4 text-white focus:border-white focus:outline-none transition-all duration-300 hover:border-gray-400 appearance-none cursor-pointer"
              >
                <option value="collaboration"> Collaboration</option>
                <option value="employment"> Employment</option>
                <option value="other"> Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className={`relative group transition-all duration-300 ${shake.message ? 'animate-pulse' : ''}`}>
              <div className={`absolute inset-0 rounded-lg transition-all duration-300 `}></div>
              <MessageSquare className={`absolute left-4 top-4 transition-colors duration-300 z-10 ${errors.message
                ? 'text-red-400'
                : 'text-gray-400 group-focus-within:text-white'
                }`} size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="Your Message"
                className={`relative w-full bg-transparent rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none border-2 z-10 ${errors.message
                  ? 'border-red-500 focus:border-red-400'
                  : 'border-gray-600 hover:border-gray-400 focus:border-white'
                  }`}
                
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-2 ml-1 animate-fade-in">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting || submitted}
              className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-lg font-medium tracking-widest transition-all duration-300 transform hover:scale-105 ${submitted
                ? 'bg-green-600 text-white cursor-default'
                : isSubmitting
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                  : 'bg-transparent border border-white text-white hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-white/20'
                }`}
            >
              {submitted ? (
                <>
                  ✓ Message Sent!
                </>
              ) : isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  SEND MESSAGE
                </>
              )}
            </button>
          </div>
        </div>

        <div className="lg:w-80 space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wide mb-8 text-center lg:text-left">
              Let's Connect
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800 hover:border-gray-600 transition-colors duration-300">
                <Mail className="text-gray-400" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">rayengharbi587@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-light tracking-wide text-center lg:text-left">
              Find Me Online
            </h3>

            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://www.linkedin.com/in/rayen-gharbi-3b9441381/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center border border-gray-600 rounded-lg transition-all duration-300 hover:border-blue-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin
                  size={24}
                  className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                />
                <div className="absolute -inset-2 bg-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>

              <a
                href="https://github.com/Gharbi-Rayen"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 flex items-center justify-center border border-gray-600 rounded-lg transition-all duration-300 hover:border-purple-500 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Github
                  size={24}
                  className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300"
                />
                <div className="absolute -inset-2 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>

              <a
                href="mailto:rayengharbi587@gmail.com"
                className="group relative w-14 h-14 flex items-center justify-center border border-gray-600 rounded-lg transition-all duration-300 hover:border-green-500 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
              >
                <Mail
                  size={24}
                  className="text-gray-400 group-hover:text-green-500 transition-colors duration-300"
                />
                <div className="absolute -inset-2 bg-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm leading-relaxed">
              Open to new opportunities and exciting collaborations.
              Let's discuss how we can work together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;