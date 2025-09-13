import React, { useState } from "react";
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
    // Vibrate if supported
    if (navigator.vibrate) {
      navigator.vibrate([50, 50, 50]);
    }
    
    setShake(prev => ({ ...prev, [fieldName]: true }));
    setTimeout(() => {
      setShake(prev => ({ ...prev, [fieldName]: false }));
    }, 500);
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
        setTimeout(() => triggerShake(field), index * 100);
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
    <div className="min-h-screen flex flex-col justify-start items-center bg-black text-white px-6 pt-20 pb-12">
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
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
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
      
      <div className="text-center mb-12">
        <br />
        <h2 className="text-3xl md:text-5xl font-light tracking-widest mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Whether you have a project idea, collaboration in mind, or just want to say hello,
          feel free to reach out. Let's create something amazing together.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <div className="space-y-6">
            <div className={`relative group transition-all duration-300 ${shake.name ? 'animate-pulse' : ''}`}>
              <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                shake.name 
                  ? 'animate-bounce bg-red-500/10 border-2 border-red-500/50' 
                  : errors.name 
                    ? 'bg-red-500/5' 
                    : ''
              }`}></div>
              <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 z-10 ${
                errors.name 
                  ? 'text-red-400' 
                  : 'text-gray-400 group-focus-within:text-white'
              }`} size={20} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`relative w-full bg-transparent rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 border-2 z-10 ${
                  errors.name
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-gray-600 hover:border-gray-400 focus:border-white'
                }`}
                style={{
                  animation: shake.name ? 'shake 0.5s ease-in-out' : 'none'
                }}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-2 ml-1 animate-fade-in">
                  {errors.name}
                </p>
              )}
            </div>

            <div className={`relative group transition-all duration-300 ${shake.email ? 'animate-pulse' : ''}`}>
              <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                shake.email 
                  ? 'animate-bounce bg-red-500/10 border-2 border-red-500/50' 
                  : errors.email 
                    ? 'bg-red-500/5' 
                    : ''
              }`}></div>
              <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 z-10 ${
                errors.email 
                  ? 'text-red-400' 
                  : 'text-gray-400 group-focus-within:text-white'
              }`} size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`relative w-full bg-transparent rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 border-2 z-10 ${
                  errors.email
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-gray-600 hover:border-gray-400 focus:border-white'
                }`}
                style={{
                  animation: shake.email ? 'shake 0.5s ease-in-out' : 'none'
                }}
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
              <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                shake.message 
                  ? 'animate-bounce bg-red-500/10 border-2 border-red-500/50' 
                  : errors.message 
                    ? 'bg-red-500/5' 
                    : ''
              }`}></div>
              <MessageSquare className={`absolute left-4 top-4 transition-colors duration-300 z-10 ${
                errors.message 
                  ? 'text-red-400' 
                  : 'text-gray-400 group-focus-within:text-white'
              }`} size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="Your Message"
                className={`relative w-full bg-transparent rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none border-2 z-10 ${
                  errors.message
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-gray-600 hover:border-gray-400 focus:border-white'
                }`}
                style={{
                  animation: shake.message ? 'shake 0.3s ease-in-out' : 'none'
                }}
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
              className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-lg font-medium tracking-widest transition-all duration-300 transform hover:scale-105 ${
                submitted
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