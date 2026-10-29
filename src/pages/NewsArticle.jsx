// src/pages/NewsArticle.jsx
export function renderNewsArticle(slug) {
  return `
    <div id="article-container" class="bg-white min-h-screen pb-20">
      <div class="py-20 text-center text-gray-500">Loading article...</div>
    </div>
    <script>
      fetch('http://127.0.0.1:8000/api/news/${slug}/')
        .then(res => {
          if (!res.ok) throw new Error('Not found');
          return res.json();
        })
        .then(post => {
          const container = document.getElementById('article-container');
          if(!container) return;
          
          container.innerHTML = \`
            ${post.image ? `
              <div class="w-full h-[40vh] md:h-[60vh] relative overflow-hidden bg-[#173047]">
                <img src="\${post.image}" alt="\${post.title}" class="w-full h-full object-cover opacity-80" />
                <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>
            ` : ''}
            
            <div class="container mx-auto max-w-[800px] px-[22px] -mt-20 relative z-10">
              <div class="bg-white p-8 md:p-12 rounded-[20px] shadow-lg border border-[#dce4e7]">
                <p class="text-[12px] font-bold text-[#176b9a] mb-3 uppercase tracking-wider">
                  \${new Date(post.published_date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
                <h1 class="text-[clamp(28px,4vw,42px)] font-extrabold text-[#173047] leading-[1.15] mb-6">\${post.title}</h1>
                <div class="h-[2px] w-16 bg-[#f2a900] mb-8"></div>
                
                <div class="space-y-6 text-[16px] leading-[1.9] text-[#4a5e6d]">
                  \${post.content.split('\\n').map(p => p.trim() ? \`<p>\${p}</p>\` : '').join('')}
                </div>

                <div class="mt-12 pt-8 border-t border-[#dce4e7]">
                  <a href="/news" class="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#173047] no-underline border-b-2 border-[#f2a900] pb-1 transition duration-200 hover:text-[#176b9a] hover:border-[#176b9a]">
                    &larr; Back to Newsroom
                  </a>
                </div>
              </div>
            </div>
          \`;
        })
        .catch(err => {
          const container = document.getElementById('article-container');
          if(container) {
            container.innerHTML = '<div class="py-20 text-center text-red-500">Article not found.</div>';
          }
        });
    </script>
  `;
}