import React from 'react';
import { BookOpen, Microscope, Code, GraduationCap, Building2, Users, PenTool, LineChart } from 'lucide-react';

const Academics = () => {
  const faculties = [
    {
      title: 'Arts & Humanities',
      icon: <PenTool size={32} className="text-burgundy-600" />,
      description: 'Explore literature, philosophy, languages, and creative disciplines.',
      programs: 28
    },
    {
      title: 'Business & Economics',
      icon: <LineChart size={32} className="text-burgundy-600" />,
      description: 'Develop leadership skills and business acumen for the global marketplace.',
      programs: 22
    },
    {
      title: 'Science & Engineering',
      icon: <Microscope size={32} className="text-burgundy-600" />,
      description: 'Advance knowledge through research and innovation in scientific disciplines.',
      programs: 35
    },
    {
      title: 'Computer Science',
      icon: <Code size={32} className="text-burgundy-600" />,
      description: 'Shape the digital future with cutting-edge technology and computing.',
      programs: 15
    },
    {
      title: 'Medicine & Health',
      icon: <BookOpen size={32} className="text-burgundy-600" />,
      description: 'Prepare for careers in healthcare, medicine, and related fields.',
      programs: 18
    },
    {
      title: 'Law & Policy',
      icon: <Building2 size={32} className="text-burgundy-600" />,
      description: 'Study legal systems and develop expertise in law and policy.',
      programs: 12
    },
    {
      title: 'Education',
      icon: <GraduationCap size={32} className="text-burgundy-600" />,
      description: 'Learn educational theories and practices to shape future generations.',
      programs: 14
    },
    {
      title: 'Social Sciences',
      icon: <Users size={32} className="text-burgundy-600" />,
      description: 'Understand human behavior and social structures through various disciplines.',
      programs: 25
    },
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800 mb-4">Academic Excellence</h2>
          <div className="w-20 h-1 bg-burgundy-600 mx-auto mb-6"></div>
          <p className="text-gray-700">
            Discover our diverse range of undergraduate and graduate programs across eight prestigious faculties, each offering cutting-edge curricula and research opportunities.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculties.map((faculty, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="mb-4">
                  {faculty.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-2">{faculty.title}</h3>
                <p className="text-gray-600 mb-4">{faculty.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-navy-600 font-medium">
                    {faculty.programs} Programs
                  </span>
                  <a 
                    href={`#${faculty.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-burgundy-600 hover:text-burgundy-700 text-sm font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#all-programs"
            className="inline-block bg-navy-800 hover:bg-navy-900 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Academics;