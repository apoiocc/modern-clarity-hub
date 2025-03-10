
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const [currentWord, setCurrentWord] = useState("make");
  const words = ["make", "do", "build", "develop", "design", "connect", "handle"];
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setCurrentWord(prevWord => {
        const nextWord = words[currentIndex];
        return nextWord;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // md breakpoint
    let animationFrameId: number;
    
    if (isMobile && logoRef.current) {
      // Enhanced animation for mobile
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / 3000; // Slowed down by dividing by 3000
        
        if (logoRef.current) {
          // Slower but still pronounced movements
          const rotateX = Math.sin(progress * 0.4) * 12 + Math.cos(progress * 0.2) * 8;
          const rotateY = Math.cos(progress * 0.5) * 15 + Math.sin(progress * 0.3) * 10;
          const translateZ = Math.sin(progress * 0.3) * 20;
          
          logoRef.current.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
            translateZ(${translateZ}px)
          `;
        }
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      animationFrameId = requestAnimationFrame(animate);
    } else {
      // Desktop mouse movement handling
      let currentX = 0;
      let currentY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        if (logoRef.current) {
          const rect = logoRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          // Calculate target rotation based on mouse position
          targetX = (e.clientY - centerY) / 15;
          targetY = -(e.clientX - centerX) / 15;
        }
      };

      const animateLogo = () => {
        if (logoRef.current) {
          // Smooth interpolation
          currentX += (targetX - currentX) * 0.1;
          currentY += (targetY - currentY) * 0.1;
          
          logoRef.current.style.transform = `
            perspective(1000px) 
            rotateX(${currentX}deg) 
            rotateY(${currentY}deg)
          `;
          
          animationFrameId = requestAnimationFrame(animateLogo);
        }
      };
      
      window.addEventListener("mousemove", handleMouseMove);
      animationFrameId = requestAnimationFrame(animateLogo);
      
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/4 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] mx-auto mb-8 sm:mb-12 overflow-hidden">
          <img 
            ref={logoRef} 
            src="https://img1.wsimg.com/isteam/ip/e6562235-9460-4d31-90a6-3b2ad94e6ed9/Untitled%203.png/:/rs=w:1440,h:1440" 
            alt="Logo" 
            className="w-full h-full transition-all duration-200 ease-out object-contain" 
          />
        </div>
        <h1 className="sm:text-4xl md:text-6xl text-gray-900 mb-4 sm:mb-6 tracking-tight flex items-center justify-center gap-2 text-3xl font-extrabold">
          <span>We'll</span>
          <span 
            key={currentWord} 
            className="animate-slide-up inline-block min-w-[80px] sm:min-w-[120px] text-center transition-all duration-300 ease-in-out text-sky-700"
          >
            {currentWord}
          </span>
          <span>it for you.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          We transform your ideas into reality with cutting-edge solutions
        </p>
        <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
