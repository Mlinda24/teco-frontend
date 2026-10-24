// src/services/water.js
// Water Supply & Engineering Design department page.

import {
  container, kicker, h2,
  buildTeamRows, buildSharedTail,
} from './shared';

const data = {
  slug: 'water-supply-engineering-design',
  accent: '#176b9a',
  badge: 'Water',
  shortTitle: 'Water Supply & Engineering Design',
  title: 'Water Supply and Engineering Design',
  tagline: 'Reliable Water. Resilient communities',
  imageAlt: 'TECO Farms water infrastructure project',
  imageCaptionKicker: 'Solar pumping',
  imageCaptionText: 'Designed for real community needs',
  overview: [
    'From the first community meeting to commissioning, TECO designs, supervises and rehabilitates water supply systems that people can depend on. We cover borehole siting, drilling supervision, pumping tests, hydraulic modelling, solar-powered pumping, engineering drawings and construction supervision.',
    'Every design is built on ground-truth data: precision GPS mapping, soil and topography assessment, pumping-test analysis and EPANET hydraulic models, so pipe sizes, pump selection and tank positions respond to what is actually on site.',
  ],
  highlights: [
    { value: '8', label: 'Solar-powered water systems drilled, designed and supervised in Zomba' },
    { value: '100', label: 'Tap solar-powered water system designed and built in Chikwawa' },
    { value: '152', label: 'Water kiosks served by the Wenya system we rehabilitated in Chitipa' },
  ],
  offerings: [
    ['Borehole drilling & development', 'Electrical resistivity surveys (VES and HEP) to locate aquifers, drilling supervision, cutting samples every 1 m, casing and screen design, and borehole development by airlifting or surging.'],
    ['Geophysical & hydrogeological surveys', 'Groundwater investigations, borehole siting reports with GPS coordinates and priority/backup sites, and hydrogeological assessments.'],
    ['Pumping tests & borehole performance', 'Step-drawdown, 4-hour constant-rate and recovery tests (to 90% recovery), plus borehole performance assessment and pre-rehabilitation evaluation.'],
    ['Solar-powered & gravity-fed systems', 'Post-pumping-test analysis, safe pump-installation depth, Total Dynamic Head calculation, pump curve selection, solar panel sizing and gravity-fed scheme design.'],
    ['Water reticulation networks', 'Google Earth and EPANET models giving pipe diameters, lengths, base demand and operating pressures, followed by AutoCAD engineering drawings.'],
    ['Storage tanks, pump selection & hydraulics', 'Design of 7 m and 10 m water towers, tank sizing, tap stands, pump rooms and borehole manholes, with full hydraulic design.'],
    ['Irrigation water systems', 'Small-scale and solar-powered irrigation scheme design, with surveys, hydraulic layouts and drawings.'],
    ['Rehabilitation, commissioning & O&M', 'Assessment and rehabilitation of existing networks and intakes, commissioning, community training and operational support.'],
  ],
  processTitle: 'From first survey to final handover.',
  process: [
    ['Survey & siting', 'Community meetings, geophysical surveys (VES/HEP), borehole siting with GPS coordinates, and priority/backup sites identified.'],
    ['Drill & test', 'Drilling supervision with 1 m sample logging, casing and screen design, development, and a 4-hour constant-rate pumping test to 90% recovery.'],
    ['Design', 'TDH calculation, pump-curve selection, solar sizing, tank and tower design, EPANET reticulation modelling and AutoCAD drawings.'],
    ['Construct & supervise', 'Construction supervision, quality control, commissioning and as-built documentation.'],
    ['Train & hand over', 'Community O&M training, spares and documentation handover, with post-completion support.'],
  ],
  tools: ['EPANET', 'AutoCAD', 'Google Earth', 'ArcGIS / QGIS', 'mWater', 'TDH & pump-curve design', 'Geotron water detector', 'PRD drilling rig (partnership)', 'Borehole camera', 'Submersible pumps (3–11.7 m³/h)', '100 m dipper meter', 'Water quality meters', 'GPS', '6.5 kVA generator'],
  standards: 'Work is aligned with Malawi’s technical manual for water wells and groundwater monitoring systems, the standard operating procedures for aquifer pumping tests and for drilling and construction of production boreholes, and Malawi Bureau of Standards water quality requirements.',

  // ⚠️ IMPORTANT: these team IDs must exactly match the keys
  // used inside buildTeamRows (usually in shared.js). If shared.js
  // has TEAM = { gomezgani: {...}, david: {...}, ... }, use lowercase.
  team: ['gomezgani', 'david', 'lawrence', 'temwani'],

  // Each project must be [name, client, period] — all 3 slots filled.
  projects: [
    ['Borehole drilling and construction of a solar powered water supply system', 'Salima District Council', '2024–2025'],
    ['Drilling, design and supervision of 8 solar-powered water systems, Zomba', 'Innovation Africa', '2021–2023'],
    ['Drilling, design and construction of a solar-powered water system with 100 taps, Chikwawa', 'Water For People (via New Vision Construction)', '2023–2024'],
    ['Maintenance and rehabilitation of a surface water supply system serving 152 water kiosks, Wenya', 'Chitipa District Water Office', '2026'],
    ['Hydraulic assessment and redesign of a water supply network', 'Habitat For Humanity', '2024–2025'],
    ['Hydrogeological survey, drilling, mapping and design of a reticulated system for 2 boreholes', 'Water For Life', '2022'],
  ],
};

// ---------- Section builders ----------

function hero(s) {
  return `
  <section class="relative overflow-hidden text-white bg-[#0b2437]">
    <img src="/assets/Picture4.jpg" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full object-cover object-center" />
    <div class="absolute inset-0 bg-gradient-to-r from-[#0b2437]/80 via-[#0b2437]/30 to-transparent"></div>
    <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b2437]/70 to-transparent"></div>
    <div class="relative">
      ${container(`
        <nav aria-label="Breadcrumb" class="pt-8 text-xs text-[#d5e5eb]">
          <a href="/" class="text-[#d5e5eb] no-underline hover:text-white">Home</a>
          <span class="mx-2">/</span>
          <a href="/services" class="text-[#d5e5eb] no-underline hover:text-white">Services</a>
          <span class="mx-2">/</span>
          <span class="text-white">${s.shortTitle}</span>
        </nav>
        <div class="pt-6 pb-14 lg:pb-20 max-w-[720px]">
          <div class="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white mb-6">
            <span class="h-1.5 w-1.5 rounded-full" style="background:${s.accent}"></span>
            ${s.badge}
          </div>
          <h1 class="text-[clamp(32px,4.4vw,54px)] font-extrabold leading-[1.05] tracking-[-0.035em] mb-4 drop-shadow-[0_2px_18px_rgba(4,24,38,.55)]">${s.title}</h1>
          <p class="text-lg font-semibold text-[#f2c75c] mb-5 drop-shadow-[0_1px_10px_rgba(4,24,38,.45)]">${s.tagline}</p>
          <p class="text-base leading-[1.8] text-[#e2eef2] max-w-[580px] mb-8 drop-shadow-[0_1px_8px_rgba(4,24,38,.35)]">${s.overview[0]}</p>
          <div class="flex flex-wrap gap-3">
            <a href="/contact" class="inline-flex items-center justify-center gap-2 px-[19px] py-[13px] rounded-lg bg-[#f2a900] text-[#102d45] text-[13px] font-extrabold no-underline transition duration-200 hover:-translate-y-0.5 hover:brightness-105 shadow-[0_10px_24px_rgba(242,169,0,.28)]">Request this service →</a>
            <a href="/services" class="inline-flex items-center justify-center gap-2 px-[19px] py-[13px] rounded-lg border border-white/35 bg-white/5 backdrop-blur-sm text-white text-[13px] font-extrabold no-underline transition duration-200 hover:bg-white/10">&larr; All services</a>
          </div>
        </div>
      `)}
    </div>
  </section>`;
}

function stats(s) {
  if (!Array.isArray(s.highlights) || !s.highlights.length) return '';
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
  if (!Array.isArray(s.overview) || !s.overview.length) return '';
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
  if (!Array.isArray(s.offerings) || !s.offerings.length) return '';
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
  if (!Array.isArray(s.process) || !s.process.length) return '';
  const title = s.processTitle || 'How it runs.';
  return `
  <section class="bg-white py-[72px] lg:py-[100px]">
    ${container(`
      <div class="max-w-[720px] mb-12">
        ${kicker('How it runs', s.accent)}
        ${h2(title)}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10">
        ${s.process.map(([stepTitle, text], i) => `
          <div class="relative lg:border-l lg:border-[#dce4e7] lg:pl-6 pr-4 lg:pr-6">
            <div class="mb-3 text-[11px] font-black uppercase tracking-[0.14em]" style="color:${s.accent}">Step ${String(i + 1).padStart(2, '0')}</div>
            <h3 class="mb-2 text-[15px] font-extrabold leading-[1.3] text-[#173047]">${stepTitle}</h3>
            <p class="text-[12.5px] leading-[1.7] text-[#617484]">${text}</p>
          </div>`).join('')}
      </div>
    `)}
  </section>`;
}

function tools(s) {
  if ((!Array.isArray(s.tools) || !s.tools.length) && !s.standards) return '';
  return `
  <section class="bg-[#eff6ee] py-[72px] lg:py-[100px]">
    ${container(`
      <div class="grid grid-cols-1 lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-[80px]">
        <div>
          ${kicker('Tools & standards', s.accent)}
          ${h2('What we work with, and what we work to.')}
        </div>
        <div>
          ${Array.isArray(s.tools) && s.tools.length
            ? `<p class="text-[15px] leading-[2] text-[#3d566a] mb-10">${s.tools.join(' · ')}</p>`
            : ''}
          ${s.standards ? `
          <blockquote class="relative pl-12">
            <span class="absolute left-0 -top-2 text-[64px] leading-none font-extrabold" style="color:${s.accent}">“</span>
            <p class="text-[15.5px] italic leading-[1.8] text-[#3d566a]">${s.standards}</p>
          </blockquote>` : ''}
        </div>
      </div>
    `)}
  </section>`;
}

function projects(s) {
  if (!Array.isArray(s.projects) || !s.projects.length) return '';
  return `
  <section class="bg-[#eff6ee] py-[72px] lg:py-[100px]">
    ${container(`
      <div class="max-w-[720px] mb-10">
        ${kicker('Selected experience', s.accent)}
        ${h2('Projects in this service area.')}
      </div>
      <div class="border-t border-[#cfdcd6]">
        ${s.projects.map(([name, client, period]) => `
          <div class="grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-2 md:gap-4 items-baseline border-b border-[#cfdcd6] py-5">
            <div class="text-[11px] font-black uppercase tracking-[0.06em]" style="color:${s.accent}">${period || '—'}</div>
            <h3 class="text-[14.5px] font-extrabold leading-[1.4] text-[#173047]">${name}</h3>
            <div class="text-[11.5px] text-[#617484] md:text-right">${client || ''}</div>
          </div>`).join('')}
      </div>
    `)}
  </section>`;
}

// ---------- Entry point (with per-section safety) ----------

function safe(fn, ...args) {
  try {
    return fn(...args) || '';
  } catch (err) {
    console.error(`[water.js] Section "${fn.name}" failed:`, err);
    return '';
  }
}

export function renderWaterPage() {
  const sections = [
    safe(hero, data),
    safe(stats, data),
    safe(overview, data),
    safe(offerings, data),
    safe(process, data),
    safe(tools, data),
    safe(() => (Array.isArray(data.team) && data.team.length
      ? buildTeamRows(data.team, data.accent)
      : ''), data),
    safe(projects, data),
    safe(buildSharedTail, data),
  ];
  return sections.join('\n');
}