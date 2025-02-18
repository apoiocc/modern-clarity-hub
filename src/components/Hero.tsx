
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
    
    if (isMobile && logoRef.current) {
      // Automatic animation for mobile
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / 1000; // Convert to seconds
        
        if (logoRef.current) {
          const rotateX = Math.sin(progress) * 5; // 5 degree max rotation
          const rotateY = Math.cos(progress) * 5; // 5 degree max rotation
          logoRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
        
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    } else {
      // Desktop mouse movement handling
      const handleMouseMove = (e: MouseEvent) => {
        if (logoRef.current) {
          const {
            left,
            top,
            width,
            height
          } = logoRef.current.getBoundingClientRect();
          const centerX = left + width / 2;
          const centerY = top + height / 2;
          const rotateX = (e.clientY - centerY) / 20;
          const rotateY = -(e.clientX - centerX) / 20;
          logoRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      };
      
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/4 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] mx-auto mb-2 overflow-hidden">
            <img ref={logoRef} src="https://img1.wsimg.com/isteam/ip/e6562235-9460-4d31-90a6-3b2ad94e6ed9/Untitled%203.png/:/rs=w:1440,h:1440" alt="Logo" className="w-full h-full transition-all duration-200 ease-out object-contain" />
          </div>
          <h1 className="sm:text-4xl md:text-6xl text-gray-900 mb-4 sm:mb-6 tracking-tight whitespace-nowrap my-[7px] mx-0 px-0 text-3xl font-extrabold">
            We'll <span key={currentWord} className="animate-slide-up">{currentWord}</span> it for you.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            We transform your ideas into reality with cutting-edge solutions
          </p>
          <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <section id="about" className="min-h-screen bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">About Us</h2>
          <p className="text-base sm:text-lg text-gray-600">Content for About section</p>
        </div>
      </section>

      <section id="services" className="min-h-screen bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Our Services</h2>
          <p className="text-base sm:text-lg text-gray-600">Content for Services section</p>
        </div>
      </section>

      <section id="pricing" className="min-h-screen bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Pricing</h2>
          <p className="text-base sm:text-lg text-gray-600">Content for Pricing section</p>
        </div>
      </section>

      <section id="testimonials" className="min-h-screen bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Testimonials</h2>
          <p className="text-base sm:text-lg text-gray-600">Content for Testimonials section</p>
        </div>
      </section>

      <section id="case-studies" className="min-h-screen bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Case Studies</h2>
          <p className="text-base sm:text-lg text-gray-600">Content for Case Studies section</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Contact Us</h2>
          <p className="text-base sm:text-lg text-gray-600">Content for Contact section</p>
        </div>
      </section>
    </>;
};
export default Hero;
