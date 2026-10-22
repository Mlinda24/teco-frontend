// src/services/civil.js
// Civil & Structural Engineering department page.
// This file is independent of water.js and consultancy.js — edit its
// markup, ordering, spacing, or content without affecting the others.

import {
  container, kicker, h2,
  buildTeamRows, buildSharedTail,
} from './shared';

const data = {
  slug: 'civil-engineering-construction',
  accent: '#f2a900',
  badge: 'Civil',
  shortTitle: 'Civil & Structural Engineering',
  title: 'Civil & Structural Engineering',
  tagline: 'Building with Integrity. Creating Lasting Infrastructure',
  image: '/assets/kg.jpg',
  imageAlt: 'TECO Farms civil works and supervision project',
  imageCaptionKicker: 'On site',
  imageCaptionText: 'Quality checks at every critical stage',
  overview: [
    'TECO designs, builds and supervises the civil and structural works that make water systems and community infrastructure last: foundations, towers, tanks, tap stands, trenches, pump rooms, buildings, drainage and water-related structures. Quality is checked at every critical stage, from the first bag of cement to community handover.',
    'Our engineers and quantity surveyor work together so drawings, costs and site practice stay aligned, and works comply with approved designs and specifications, with occupational health and safety and quality assurance built into every assignment.',
  ],
  highlights: [
    { value: '7 m / 10 m', label: 'Water towers designed and supervised for solar-powered systems' },
    { value: '1 m', label: 'Standard trench depth, 40–50 cm wide, protecting pipes from loads and hoes' },
    { value: '40,000 L', label: 'Concrete storage tanks rehabilitated at Wenya, Chitipa (two tanks)' },
  ],
  offerings: [
    ['Civil & structural engineering design', 'Structural and civil design for water-related and community infrastructure, with AutoCAD and Civil 3D drawings.'],
    ['Residential & commercial buildings', 'Design and construction of residential and commercial buildings managed against approved drawings and specifications.'],
    ['Schools & public facilities', 'Design and delivery of schools, public facilities and community buildings.'],
    ['Sanitation infrastructure', 'Design and construction of sanitation facilities, latrines and related WASH infrastructure.'],
    ['Bridges, culverts & drainage', 'Design and construction of bridges, culverts, drainage works and access infrastructure.'],
    ['Water-related structures, weirs & intakes', 'Design and construction of water towers, tap stands, concrete tanks, pump rooms, borehole manholes, weirs and river intakes.'],
    ['Construction supervision & QA', 'Inspection of materials, reinforcement, concrete practice, curing, electrical installation, earthing and formal quality assurance throughout the works.'],
    ['Occupational health & safety', 'Site safety planning, PPE provision, hazard control and safety supervision across all trades.'],
    ['Project delivery & handover', 'Programme management, snagging, pressure and functionality testing, commissioning, handover documentation and construction training.'],
  ],
  processTitle: 'How a construction project runs',
  process: [
    ['Design & drawings', 'Structural and civil design, engineering drawings, specifications and design review.'],
    ['BOQ & procurement', 'Bills of Quantities, cost planning and tender support.'],
    ['Mobilisation & inspection', 'Materials and equipment checks, cement storage, aggregate, sand, blocks, compactor and mixer, and safety set-up.'],
    ['Foundations & structures', 'Excavation, reinforcement, ground slab, columns, load-bearing slab, wet curing and tap stands.'],
    ['Installation & handover', 'Pipework, pump and electrical installation, earthing, snagging, testing, commissioning and handover.'],
  ],
  tools: ['AutoCAD', 'Civil 3D', '2-tonne carrier truck', 'Half-tonne pickup', 'Mechanical compactor', 'Concrete mixer', 'Poker vibrator', 'Total station (partnership)', 'Differential GPS', 'Full PPE: boots, harnesses, helmets, reflectors, danger tape'],
  standards: 'Site checks include cement stored on raised platforms, 19 mm quarry stone inspection, clean sand, concrete gauge boxes of 30 × 30 × 30 cm, poker-vibrator compaction, wet curing under hessian, steel-fixing checks, electrical trunking and earth-grounding inspection, and formal occupational health and safety supervision.',
  team: ['wezzie', 'john', 'david'],
  projects: [
    ['Construction of a solar-powered water system with 100 taps, Chikwawa', 'Water For People (via New Vision Construction)', '2023–2024'],
    ['Borehole drilling and construction of a solar-powered water supply system', 'Salima District Council', '2024–2025'],
    ['Maintenance and rehabilitation of a surface water supply system with two 40,000-litre concrete tanks, Wenya', 'Chitipa District Water Office', '2026'],
    ['Supervision of water tower and solar system construction, Zomba', 'Innovation Africa', '2021–2023'],
  ],
};

// ---------- Section builders (unique to civil) ----------
// For now, these mirror the water page's look. Because civil.js is
// independent, you can freely edit any of these blocks without
// affecting the water or consultancy pages.

function hero(s) {
  return `
  <section class="relative overflow-hidden bg-gradient-to-br from-[#102d45] via-[#12435b] to-[#176b78] text-white">
    ${container(`
      <nav aria-label="Breadcrumb" class="pt-8 text-xs text-[#bdd1db]">
        <a href="/" class="text-[#bdd1db] no-underline hover:text-white">Home</a>
        <span class="mx-2">/</span>
        <a href="/services" class="text-[#bdd1db] no-underline hover:text-white">Services</a>
        <span class="mx-2">/</span>
        <span class="text-white">${s.shortTitle}</span>
      </nav>
      <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-[52px] items-center pt-6 pb-14 lg:pb-20">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-[#a8e4dc]/40 bg-[#a8e4dc]/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#a8e4dc] mb-6">
            <span class="h-1.5 w-1.5 rounded-full" style="background:${s.accent}"></span>
            ${s.badge}
          </div>
          <h1 class="text-[clamp(32px,4.4vw,54px)] font-extrabold leading-[1.05] tracking-[-0.035em] mb-4">${s.title}</h1>
          <p class="text-lg font-semibold text-[#f2c75c] mb-5">${s.tagline}</p>
          <p class="text-base leading-[1.8] text-[#d5e5eb] max-w-[580px] mb-8">${s.overview[0]}</p>
          <div class="flex flex-wrap gap-3">
            <a href="/contact" class="inline-flex items-center justify-center gap-2 px-[19px] py-[13px] rounded-lg bg-[#f2a900] text-[#102d45] text-[13px] font-extrabold no-underline transition duration-200 hover:-translate-y-0.5 hover:brightness-105">Request this service →</a>
            <a href="/services" class="inline-flex items-center justify-center gap-2 px-[19px] py-[13px] rounded-lg border border-white/25 text-white text-[13px] font-extrabold no-underline transition duration-200 hover:bg-white/10">&larr; All services</a>
          </div>
        </div>
        <div class="relative">
          <div class="relative w-full max-w-[440px] aspect-[1.05/1] ml-auto overflow-hidden rounded-[26px] border border-white/20 shadow-[0_30px_70px_rgba(6,26,42,.35)]">
            <img src="${s.image}" alt="${s.imageAlt}" class="absolute inset-0 h-full w-full object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0b2437]/70 via-transparent to-transparent"></div>
          </div>
          <div class="absolute -left-3 bottom-6 max-w-[220px] rounded-xl bg-white p-4 shadow-[0_18px_40px_rgba(4,24,38,.35)]">
            <div class="text-[10px] font-black uppercase tracking-[0.12em] mb-1" style="color:${s.accent}">${s.imageCaptionKicker}</div>
            <div class="text-[12.5px] leading-[1.5] text-[#3d566a]">${s.imageCaptionText}</div>
          </div>
        </div>
      </div>
    `)}
  </section>`;
}

function stats(s) {
  return `
  <section class="bg-white border-b border-[#dce4e7]">
    ${container(`
      <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e6edf0] py-10">
        ${s.highlights.map((h) => `
          <div class="px-1 md:px-8 py-5 md:py-0">
            <div class="text-[44px] lg:text-[56px] font-extrabold leading-none tracking-[-0.02em]" style="color:${s.accent}">${h.value}</div>
            <div class="mt-3 text-[12.5px] leading-[1.6] text-[#617484] max-w-[280px]">${h.label}</div>
          </div>`).join('')}
      </div>
    `)}
  </section>`;
}

function overview(s) {
  return `
  <section class="py-[72px] lg:py-[100px] bg-white">
    ${container(`
      <div class="grid grid-cols-1 lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-[80px]">
        <div>
          ${kicker('Overview', s.accent)}
          <p class="text-[clamp(20px,2.2vw,26px)] font-extrabold leading-[1.3] tracking-[-0.015em] text-[#173047]">
            A single technical partner from first survey to final handover.
          </p>
        </div>
        <div class="space-y-5 text-[15.5px] leading-[1.9] text-[#3d566a] max-w-[640px]">
          ${s.overview.map((p) => `<p>${p}</p>`).join('')}
        </div>
      </div>
    `)}
  </section>`;
}

function offerings(s) {
  return `
  <section class="bg-[#eff6ee] py-[72px] lg:py-[100px]">
    ${container(`
      <div class="grid grid-cols-1 lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-[80px]">
        <div class="lg:sticky lg:top-32 self-start">
          ${kicker('Scope of services', s.accent)}
          ${h2('What we do, item by item.')}
          <p class="mt-4 text-[13.5px] leading-[1.75] text-[#617484] max-w-[320px]">
            Each line can be commissioned on its own or as part of a complete programme of works.
          </p>
        </div>
        <ol class="border-t border-[#cfdcd6]">
          ${s.offerings.map(([title, text], i) => `
            <li class="grid grid-cols-[28px_1fr] md:grid-cols-[40px_1fr_1.2fr] gap-x-4 gap-y-1.5 border-b border-[#cfdcd6] py-5 items-baseline">
              <span class="text-[11px] font-black tracking-[0.08em]" style="color:${s.accent}">${String(i + 1).padStart(2, '0')}</span>
              <h3 class="text-[15px] font-extrabold leading-[1.35] text-[#173047]">${title}</h3>
              <p class="text-[13.5px] leading-[1.75] text-[#5a6570] md:col-span-1 col-span-2">${text}</p>
            </li>`).join('')}
        </ol>
      </div>
    `)}
  </section>`;
}

function process(s) {
  return `
  <section class="bg-white py-[72px] lg:py-[100px]">
    ${container(`
      <div class="max-w-[720px] mb-12">
        ${kicker('How it runs', s.accent)}
        ${h2(s.processTitle)}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10">
        ${s.process.map(([title, text], i) => `
          <div class="relative lg:border-l lg:border-[#dce4e7] lg:pl-6 pr-4 lg:pr-6">
            <div class="mb-3 text-[11px] font-black uppercase tracking-[0.14em]" style="color:${s.accent}">Step ${String(i + 1).padStart(2, '0')}</div>
            <h3 class="mb-2 text-[15px] font-extrabold leading-[1.3] text-[#173047]">${title}</h3>
            <p class="text-[12.5px] leading-[1.7] text-[#617484]">${text}</p>
          </div>`).join('')}
      </div>
    `)}
  </section>`;
}

function tools(s) {
  return `
  <section class="bg-[#eff6ee] py-[72px] lg:py-[100px]">
    ${container(`
      <div class="grid grid-cols-1 lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-[80px]">
        <div>
          ${kicker('Tools & standards', s.accent)}
          ${h2('What we work with, and what we work to.')}
        </div>
        <div>
          <p class="text-[15px] leading-[2] text-[#3d566a] mb-10">${s.tools.join(' · ')}</p>
          <blockquote class="relative pl-12">
            <span class="absolute left-0 -top-2 text-[64px] leading-none font-extrabold" style="color:${s.accent}">“</span>
            <p class="text-[15.5px] italic leading-[1.8] text-[#3d566a]">${s.standards}</p>
          </blockquote>
        </div>
      </div>
    `)}
  </section>`;
}

function projects(s) {
  return `
  <section class="bg-[#eff6ee] py-[72px] lg:py-[100px]">
    ${container(`
      <div class="max-w-[720px] mb-10">
        ${kicker('Selected experience', s.accent)}
        ${h2('Projects in this service area.')}
      </div>
      <div class="border-t border-[#cfdcd6]">
        ${s.projects.map(([name, client, period]) => `
          <div class="grid grid-cols-[80px_1fr_auto] gap-4 items-baseline border-b border-[#cfdcd6] py-5">
            <div class="text-[11px] font-black uppercase tracking-[0.06em]" style="color:${s.accent}">${period || '—'}</div>
            <h3 class="text-[14.5px] font-extrabold leading-[1.4] text-[#173047]">${name}</h3>
            <div class="text-[11.5px] text-[#617484] text-right">${client}</div>
          </div>`).join('')}
      </div>
    `)}
  </section>`;
}

// ---------- Entry point ----------

export function renderCivilPage() {
  return [
    hero(data),
    stats(data),
    overview(data),
    offerings(data),
    process(data),
    tools(data),
    buildTeamRows(data.team, data.accent),
    projects(data),
    buildSharedTail(data),
  ].join('\n');
}