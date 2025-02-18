
import { useEffect, useRef } from "react";

const Hero = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoRef.current) {
        const { left, top, width, height } = logoRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = (e.clientX - centerX) / 30;
        const deltaY = (e.clientY - centerY) / 30;
        
        logoRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <img
          ref={logoRef}
          src="https://img1.wsimg.com/isteam/ip/e6562235-9460-4d31-90a6-3b2ad94e6ed9/Untitled%202.png"
          alt="Logo"
          className="w-32 h-32 mx-auto mb-8 transition-transform duration-200 ease-out"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Let us help, let us handle your needs
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We transform your ideas into reality with cutting-edge solutions
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
