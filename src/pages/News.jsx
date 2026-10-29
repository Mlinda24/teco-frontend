// src/pages/News.jsx
export function renderNewsPage() {
  return `
    <section class="py-16 lg:py-24 bg-[#f8fbfc] min-h-screen">
      <div class="container mx-auto max-w-[1160px] px-[22px]">
        <div class="max-w-[680px] mb-12">
          <div class="kicker text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#f2a900] mb-[13px]">Newsroom</div>
          <h1 class="text-[clamp(32px,4vw,48px)] font-extrabold text-[#173047] leading-[1.1] mb-4">News & Updates</h1>
          <p class="text-[15px] leading-[1.8] text-[#4a5e6d]">Stay up to date with our latest projects, community impact stories, and company announcements.</p>
        </div>

        <div id="news-list-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="col-span-full text-center py-10 text-gray-500">Loading news...</div>
        </div>
      </div>
    </section>

    <script>
      fetch('http://127.0.0.1:8000/api/news/')
        .then(res => res.json())
        .then(posts => {
          const container = document.getElementById('news-list-container');
          if (!container) return;
          
          if (posts.length === 0) {
            container.innerHTML = '<div class="col-span-full text-center py-10 text-gray-500">No news articles found.</div>';
            return;
          }

          container.innerHTML = posts.map(post => \`
            <article class="bg-white rounded-[15px] border border-[#dce4e7] overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
              \${post.image ? \`<div class="h-56 overflow-hidden"><img src="\${post.image}" alt="\${post.title}" class="w-full h-full object-cover" /></div>\` : ''}
              <div class="p-6 flex flex-col flex-grow">
                <p class="text-[11px] font-bold text-[#176b9a] mb-2 uppercase tracking-wider">\${new Date(post.published_date).toLocaleDateString()}</p>
                <h2 class="text-xl font-bold mb-3 text-[#173047] leading-[1.3]">\${post.title}</h2>
                <p class="text-[14px] text-[#617484] mb-6 flex-grow line-clamp-3">\${post.excerpt}</p>
                <a href="/news/\${post.slug}" class="inline-flex items-center gap-2 text-[13px] font-extrabold text-[#f2a900] hover:text-[#176b9a] transition mt-auto">
                  Read Full Story &rarr;
                </a>
              </div>
            </article>
          \`).join('');
        })
        .catch(err => {
          document.getElementById('news-list-container').innerHTML = '<div class="col-span-full text-center py-10 text-red-500">Failed to load news.</div>';
        });
    </script>
  `;
}