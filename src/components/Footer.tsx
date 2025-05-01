import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Excel University</h3>
            <p className="mb-4 text-gray-300">
              123 University Avenue<br />
              Cambridge, MA 02138<br />
              United States
            </p>
            <p className="text-gray-300">
              <strong>Phone:</strong> (555) 123-4567<br />
              <strong>Email:</strong> info@exceluniversity.edu
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#academics" className="text-gray-300 hover:text-white transition-colors">Academics</a></li>
              <li><a href="#admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#campus-life" className="text-gray-300 hover:text-white transition-colors">Campus Life</a></li>
              <li><a href="#research" className="text-gray-300 hover:text-white transition-colors">Research</a></li>
              <li><a href="#alumni" className="text-gray-300 hover:text-white transition-colors">Alumni</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">News & Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#library" className="text-gray-300 hover:text-white transition-colors">Library</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#departments" className="text-gray-300 hover:text-white transition-colors">Departments</a></li>
              <li><a href="#directory" className="text-gray-300 hover:text-white transition-colors">Directory</a></li>
              <li><a href="#giving" className="text-gray-300 hover:text-white transition-colors">Giving</a></li>
              <li><a href="#accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="#safety" className="text-gray-300 hover:text-white transition-colors">Campus Safety</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#facebook" className="bg-white/10 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#twitter" className="bg-white/10 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#instagram" className="bg-white/10 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#youtube" className="bg-white/10 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
              <a href="#linkedin" className="bg-white/10 hover:bg-white/20 w-10 h-10 flex items-center justify-center rounded-full transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
            
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest news and events.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 text-white placeholder-gray-400 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-burgundy-500 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-burgundy-600 hover:bg-burgundy-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Excel University. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;