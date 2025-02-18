
import { useEffect, useRef } from "react";
const Hero = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
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

        // Calculate the angle for rotation based on mouse position
        const rotateX = (e.clientY - centerY) / 20;
        const rotateY = -(e.clientX - centerX) / 20;
        logoRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="w-[400px] h-[400px] mx-auto mb-2 overflow-hidden">
            <img 
              ref={logoRef} 
              src="https://img1.wsimg.com/isteam/ip/e6562235-9460-4d31-90a6-3b2ad94e6ed9/Untitled%202.png" 
              alt="Logo" 
              className="w-full h-full transition-all duration-200 ease-out object-contain" 
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">LET US HELP</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We transform your ideas into reality with cutting-edge solutions
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <section id="about" className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-600">Content for About section</p>
        </div>
      </section>

      <section id="services" className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <p className="text-lg text-gray-600">Content for Services section</p>
        </div>
      </section>

      <section id="pricing" className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Pricing</h2>
          <p className="text-lg text-gray-600">Content for Pricing section</p>
        </div>
      </section>

      <section id="testimonials" className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
          <p className="text-lg text-gray-600">Content for Testimonials section</p>
        </div>
      </section>

      <section id="case-studies" className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Case Studies</h2>
          <p className="text-lg text-gray-600">Content for Case Studies section</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg text-gray-600">Content for Contact section</p>
        </div>
      </section>
    </>;
};
export default Hero;
