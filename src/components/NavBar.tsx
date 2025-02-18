import { useState } from "react";
import { Menu, X } from "lucide-react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "About",
    href: "#about"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Pricing",
    href: "#pricing"
  }, {
    name: "Testimonials",
    href: "#testimonials"
  }, {
    name: "Case Studies",
    href: "#case-studies"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="https://img1.wsimg.com/isteam/ip/e6562235-9460-4d31-90a6-3b2ad94e6ed9/Untitled%203.png/:/rs=w:1440,h:1440" alt="Logo" className="h-15 w-auto object-scale-down" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {item.name}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-lg">
            {navItems.map(item => <a key={item.name} href={item.href} className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>)}
          </div>
        </div>}
    </nav>;
};
export default NavBar;