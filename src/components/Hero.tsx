import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4 animate-fadeInUp">
            Shaping the Future Through Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeInUp animation-delay-200">
            Join a community dedicated to innovation, discovery, and transformative education
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-400">
            <a 
              href="#academics" 
              className="bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-lg"
            >
              Explore Programs
            </a>
            <a 
              href="#virtual-tour" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Virtual Campus Tour
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;