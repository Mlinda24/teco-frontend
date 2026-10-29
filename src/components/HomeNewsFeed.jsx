// src/components/HomeNewsFeed.jsx
import { useState, useEffect } from 'react';

export default function HomeNewsFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/news/')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 4))) // Show latest 4 posts
      .catch(err => console.error("Error fetching news:", err));
  }, []);

  if (!posts.length) return null;

  return (
    <section className="py-16 bg-white border-t border-[#dce4e7]">
      <div className="container mx-auto max-w-[1160px] px-[22px]">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <div className="kicker text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f2a900] mb-[13px]">Updates</div>
            <h2 className="text-[clamp(24px,3vw,32px)] font-extrabold text-[#173047]">Latest News &amp; Stories</h2>
          </div>
          <a href="/news" className="text-[13px] font-extrabold text-[#173047] no-underline border-b-2 border-[#f2a900] pb-1 hover:text-[#176b9a] hover:border-[#176b9a] transition">
            View all news &rarr;
          </a>
        </div>
        
        {/* News Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.map(post => {
            const dateObj = new Date(post.published_date);
            const dateStr = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
            const timeStr = dateObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            
            return (
              <a 
                key={post.id} 
                href={`/news/${post.slug}`}
                className="group relative flex flex-col justify-end overflow-hidden bg-[#173047] shadow-sm hover:shadow-xl transition-all duration-300 min-h-[400px]"
              >
                {/* Background Image */}
                {post.image && (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" 
                  />
                )}
                
                {/* Dark gradient to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent pointer-events-none"></div>
                
                {/* Card Content */}
                <div className="relative z-10 p-5 flex flex-col justify-end h-full">
                  
                  {/* Date & Time */}
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#f2a900] mb-2 uppercase tracking-wider">
                    <span>{dateStr}</span>
                    <span className="w-1 h-1 rounded-full bg-[#f2a900]/50"></span>
                    <span>{timeStr}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] font-extrabold leading-[1.25] text-white mb-3 uppercase tracking-wide line-clamp-3">
                    {post.title}
                  </h3>

                  {/* Excerpt (Short summary) */}
                  <p className="text-[12.5px] leading-[1.5] text-gray-200 line-clamp-2 mb-5">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More Button */}
                  <div className="inline-flex items-center justify-center px-5 py-2 bg-[#217a44] text-white text-[12px] font-bold transition duration-200 group-hover:bg-[#1a5f35] w-full text-center">
                    Read More
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}