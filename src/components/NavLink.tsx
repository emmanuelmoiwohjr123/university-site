import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface NavLinkProps {
  href: string;
  label: string;
  hasSubmenu?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, hasSubmenu = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={href} 
        className="px-3 py-2 text-navy-800 hover:text-burgundy-600 transition-colors flex items-center"
      >
        {label}
        {hasSubmenu && <ChevronDown size={16} className="ml-1" />}
      </a>
      
      {hasSubmenu && isHovered && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[200px] py-2 animate-fadeIn">
          {label === 'Academics' && (
            <>
              <a href="#programs" className="block px-4 py-2 hover:bg-gray-50 text-navy-800 hover:text-burgundy-600">
                Undergraduate Programs
              </a>
              <a href="#graduate" className="block px-4 py-2 hover:bg-gray-50 text-navy-800 hover:text-burgundy-600">
                Graduate Programs
              </a>
              <a href="#faculties" className="block px-4 py-2 hover:bg-gray-50 text-navy-800 hover:text-burgundy-600">
                Faculties & Schools
              </a>
              <a href="#courses" className="block px-4 py-2 hover:bg-gray-50 text-navy-800 hover:text-burgundy-600">
                Course Catalog
              </a>
            </>
          )}
          
          {label === 'Campus Life' && (
            <>
              <a href="#housing" className="block px-4 py-2 hover:bg-gray-50 text-navy-800 hover:text-burgundy-600">
                Housing & Dining
              </a>
              <a href="#activities" className="block px-4 py-2 hover:bg-gray-50 text-navy-800 hover:text-burgundy-600">
                Activities & Recreation
              </a>
              <a href="#clubs" className="block px-4 py-2 hover:bg-gray-50 text-navy-800 hover:text-burgundy-600">
                Student Clubs
              </a>
              <a href="#health" className="block px-4 py-2 hover:bg-gray-50 text-navy-800 hover:text-burgundy-600">
                Health & Wellness
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavLink;