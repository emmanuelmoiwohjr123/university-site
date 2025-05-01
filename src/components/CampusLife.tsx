import React from 'react';

const CampusLife = () => {
  return (
    <section id="campus-life" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800 mb-4">Campus Life</h2>
          <div className="w-20 h-1 bg-burgundy-600 mx-auto mb-6"></div>
          <p className="text-gray-700">
            Experience a vibrant campus community where academics meet enriching extracurricular opportunities, creating a well-rounded university experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Student Housing" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Student Housing</h3>
              <p className="text-white/80 mb-3">Comfortable, inclusive residences that foster community and connection.</p>
              <a href="#housing" className="text-white/90 hover:text-white text-sm font-medium inline-flex items-center">
                Learn more
                <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.pexels.com/photos/7944065/pexels-photo-7944065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Athletics & Recreation" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Athletics & Recreation</h3>
              <p className="text-white/80 mb-3">State-of-the-art facilities for fitness, competitive sports, and wellness.</p>
              <a href="#athletics" className="text-white/90 hover:text-white text-sm font-medium inline-flex items-center">
                Learn more
                <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Student Organizations" 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">Student Organizations</h3>
              <p className="text-white/80 mb-3">Over 200 clubs and organizations for every interest and passion.</p>
              <a href="#clubs" className="text-white/90 hover:text-white text-sm font-medium inline-flex items-center">
                Learn more
                <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-10 shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-navy-800 mb-4">Student Experience</h3>
              <p className="text-gray-700 mb-4">
                At Excel University, your experience extends beyond the classroom. Our vibrant campus community offers countless opportunities to connect, grow, and thrive during your academic journey.
              </p>
              <p className="text-gray-700 mb-4">
                From cultural celebrations and community service to leadership opportunities and research collaborations, you'll find your place in our diverse and inclusive community.
              </p>
              <a 
                href="#campus-tour" 
                className="inline-block bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-md font-medium transition-colors mt-2"
              >
                Schedule a Campus Tour
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3785612/pexels-photo-3785612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Campus Event" 
                className="rounded-lg shadow-sm hover:shadow-md transition-shadow w-full h-40 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Campus Building" 
                className="rounded-lg shadow-sm hover:shadow-md transition-shadow w-full h-40 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Campus Landscape" 
                className="rounded-lg shadow-sm hover:shadow-md transition-shadow w-full h-40 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Library" 
                className="rounded-lg shadow-sm hover:shadow-md transition-shadow w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;