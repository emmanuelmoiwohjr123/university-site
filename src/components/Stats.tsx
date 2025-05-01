import React from 'react';

const Stats = () => {
  const stats = [
    { number: '1842', label: 'Founded' },
    { number: '25,000+', label: 'Students' },
    { number: '2,500+', label: 'Faculty & Staff' },
    { number: '150+', label: 'Academic Programs' },
  ];

  return (
    <section className="bg-navy-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center text-white"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-white/80 uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;