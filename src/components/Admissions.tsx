import React from 'react';
import { Calendar, GraduationCap, DollarSign, Flag } from 'lucide-react';

const Admissions = () => {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800 mb-4">Admissions</h2>
          <div className="w-20 h-1 bg-burgundy-600 mx-auto mb-6"></div>
          <p className="text-gray-700">
            Embark on your academic journey with Excel University. We're looking for passionate, curious, and driven students ready to make an impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy-800 mb-4">Your Future Begins Here</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our admission process is designed to identify students who will thrive in our rigorous academic environment while contributing to our diverse and dynamic community.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We consider each application holistically, looking beyond test scores and GPAs to understand your unique story, passions, and potential.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-navy-100 rounded-full p-2 mr-4 mt-1">
                  <Calendar size={20} className="text-navy-800" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800">Key Dates</h4>
                  <p className="text-gray-700">Early Decision: November 1, 2025</p>
                  <p className="text-gray-700">Regular Decision: January 15, 2026</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-100 rounded-full p-2 mr-4 mt-1">
                  <GraduationCap size={20} className="text-navy-800" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800">Admission Requirements</h4>
                  <p className="text-gray-700">Completed application, academic transcripts, letters of recommendation, and personal statement.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-100 rounded-full p-2 mr-4 mt-1">
                  <DollarSign size={20} className="text-navy-800" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800">Financial Aid</h4>
                  <p className="text-gray-700">We're committed to making education accessible with comprehensive financial aid packages and scholarships.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-100 rounded-full p-2 mr-4 mt-1">
                  <Flag size={20} className="text-navy-800" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800">International Students</h4>
                  <p className="text-gray-700">Specialized support for international applicants throughout the admission process.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#apply" 
                className="bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Apply Now
              </a>
              <a 
                href="#visit" 
                className="bg-navy-800 hover:bg-navy-900 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="p-6 bg-navy-800 text-white">
              <h3 className="text-xl font-bold mb-2">Request Information</h3>
              <p className="opacity-90">
                Complete this form to receive more information about our programs, campus visits, and application process.
              </p>
            </div>
            <form className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy-500 focus:border-burgundy-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy-500 focus:border-burgundy-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy-500 focus:border-burgundy-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy-500 focus:border-burgundy-500">
                  <option>Select a program</option>
                  <option>Undergraduate Programs</option>
                  <option>Graduate Programs</option>
                  <option>Doctoral Programs</option>
                  <option>Online Programs</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Questions or Comments</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy-500 focus:border-burgundy-500"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-burgundy-600 hover:bg-burgundy-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 md:p-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-serif font-bold text-navy-800 mb-4">Take the Next Step</h3>
            <p className="text-gray-700">
              Discover why Excel University might be the perfect fit for your educational journey. Connect with us to learn more.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="#virtual-tour" 
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
              </div>
              <h4 className="font-bold text-navy-800 mb-2">Virtual Tour</h4>
              <p className="text-gray-600 text-sm">
                Explore our campus from anywhere in the world.
              </p>
            </a>
            
            <a 
              href="#faqs" 
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h4 className="font-bold text-navy-800 mb-2">FAQs</h4>
              <p className="text-gray-600 text-sm">
                Find answers to common questions about admissions.
              </p>
            </a>
            
            <a 
              href="#contact" 
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h4 className="font-bold text-navy-800 mb-2">Contact Us</h4>
              <p className="text-gray-600 text-sm">
                Speak with an admissions counselor directly.
              </p>
            </a>
            
            <a 
              href="#brochure" 
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <h4 className="font-bold text-navy-800 mb-2">View Brochure</h4>
              <p className="text-gray-600 text-sm">
                Download our comprehensive admissions guide.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;