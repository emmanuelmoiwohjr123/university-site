import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import NavLink from './NavLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-serif font-bold text-navy-800">
              <span className="text-burgundy-600">Excel</span>University
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink href="#about" label="About" />
            <NavLink href="#academics" label="Academics" hasSubmenu />
            <NavLink href="#admissions" label="Admissions" />
            <NavLink href="#campus-life" label="Campus Life" hasSubmenu />
            <NavLink href="#research" label="Research" />
            <NavLink href="#alumni" label="Alumni" />
            <NavLink href="#news" label="News & Events" />

            <div className="ml-4 flex items-center space-x-2">
              <button className="p-2 text-navy-800 hover:text-burgundy-600 transition-colors">
                <Search size={20} />
              </button>
              <button className="bg-burgundy-600 hover:bg-burgundy-700 text-white py-2 px-4 rounded transition-colors">
                Apply Now
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-navy-800 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-navy-800 hover:text-burgundy-600 py-2 border-b">About</a>
            <a href="#academics" className="text-navy-800 hover:text-burgundy-600 py-2 border-b flex justify-between items-center">
              Academics <ChevronDown size={16} />
            </a>
            <a href="#admissions" className="text-navy-800 hover:text-burgundy-600 py-2 border-b">Admissions</a>
            <a href="#campus-life" className="text-navy-800 hover:text-burgundy-600 py-2 border-b flex justify-between items-center">
              Campus Life <ChevronDown size={16} />
            </a>
            <a href="#research" className="text-navy-800 hover:text-burgundy-600 py-2 border-b">Research</a>
            <a href="#alumni" className="text-navy-800 hover:text-burgundy-600 py-2 border-b">Alumni</a>
            <a href="#news" className="text-navy-800 hover:text-burgundy-600 py-2 border-b">News & Events</a>
            <button className="bg-burgundy-600 hover:bg-burgundy-700 text-white py-2 px-4 rounded transition-colors">
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;