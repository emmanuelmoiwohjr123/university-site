import React from 'react';

const News = () => {
  const newsItems = [
    {
      title: 'Excel University Receives $25M Grant for Climate Research',
      date: 'May 15, 2025',
      category: 'Research',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'The prestigious grant will fund groundbreaking research on climate change adaptation strategies for urban environments.'
    },
    {
      title: 'New Arts & Innovation Center Opening This Fall',
      date: 'May 10, 2025',
      category: 'Campus',
      image: 'https://images.pexels.com/photos/1477956/pexels-photo-1477956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'The state-of-the-art facility will serve as a hub for interdisciplinary collaboration between arts and technology programs.'
    },
    {
      title: 'Excel University Ranks in Top 20 Nationally',
      date: 'May 5, 2025',
      category: 'Rankings',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'University continues to rise in national rankings, recognized for academic excellence and student outcomes.'
    }
  ];

  const events = [
    {
      title: 'Spring Commencement Ceremony',
      date: 'June 12, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'University Stadium'
    },
    {
      title: 'Innovation Summit 2025',
      date: 'June 18-20, 2025',
      time: 'All Day',
      location: 'Science & Technology Center'
    },
    {
      title: 'Alumni Weekend',
      date: 'July 8-10, 2025',
      time: 'Various Times',
      location: 'Campus-wide'
    },
    {
      title: 'International Student Orientation',
      date: 'August 25, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Student Union'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800 mb-4">News & Events</h2>
          <div className="w-20 h-1 bg-burgundy-600 mx-auto mb-6"></div>
          <p className="text-gray-700">
            Stay updated with the latest happenings and upcoming events at Excel University.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-navy-800 mb-6">Latest News</h3>
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-burgundy-600 mr-3">{item.category}</span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-navy-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <a 
                      href={`#news-${index}`} 
                      className="text-burgundy-600 hover:text-burgundy-700 font-medium inline-flex items-center"
                    >
                      Read more
                      <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a 
                href="#all-news" 
                className="inline-block text-navy-800 hover:text-burgundy-600 font-medium"
              >
                View All News Articles →
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy-800 mb-6">Upcoming Events</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y">
                {events.map((event, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <h4 className="text-lg font-bold text-navy-800 mb-2">{event.title}</h4>
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-4 text-center">
                <a 
                  href="#calendar" 
                  className="text-burgundy-600 hover:text-burgundy-700 font-medium"
                >
                  View Full Event Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-burgundy-600 text-white rounded-lg shadow-lg p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Stay Connected</h3>
              <p className="mb-6 opacity-90">
                Subscribe to our newsletter to receive the latest news, events, and updates from Excel University directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md focus:outline-none text-gray-800 flex-grow"
                />
                <button 
                  type="submit" 
                  className="bg-navy-800 hover:bg-navy-900 text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <a href="#facebook" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#twitter" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#instagram" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#youtube" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
              <a href="#linkedin" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;