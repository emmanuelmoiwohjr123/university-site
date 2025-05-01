import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800 mb-4">About Excel University</h2>
          <div className="w-20 h-1 bg-burgundy-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy-800 mb-4">Our Legacy of Excellence</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in 1842, Excel University has been at the forefront of education, research, and innovation for nearly two centuries. Our tradition of academic excellence combines with a forward-thinking approach to create an educational experience that prepares students for the challenges of today and tomorrow.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We're committed to nurturing critical thinkers, problem solvers, and compassionate leaders who make meaningful contributions to society. Our distinguished faculty, cutting-edge research facilities, and diverse community create an environment where ideas flourish and innovations emerge.
            </p>
            <a href="#mission" className="text-burgundy-600 font-medium hover:text-burgundy-700 inline-flex items-center group">
              Learn more about our mission
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="University Campus" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-5 -left-5 bg-burgundy-600 text-white p-6 rounded shadow-lg max-w-[260px]">
              <p className="font-serif italic">
                "Our commitment to excellence is reflected in everything we do."
              </p>
              <p className="mt-2 text-white/80 text-sm">
                — Dr. Eleanor Wright, President
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;