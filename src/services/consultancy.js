// src/services/consultancy.js
// Engineering, Environmental & Development Consultancy department page.
// Independent of water.js and civil.js — edit freely.

import {
  container, kicker, h2,
  buildTeamRows, buildSharedTail,
} from './shared';

const data = {
  slug: 'engineering-environmental-consultancy',
  accent: '#9a6b1e',
  badge: 'Consultancy',
  shortTitle: 'Engineering, Environmental & Development Consultancy',
  title: 'Engineering, Environmental & Development Consultancy',
  tagline: 'Insight for Better Decisions. Expertise for Sustainable Development',
  image: '/assets/consultancy.jpg',
  imageAlt: 'TECO Farms consultancy and field assessment',
  imageCaptionKicker: 'Evidence-based',
  imageCaptionText: 'Field investigations, modelling and audit-ready reporting',
  overview: [
    'Good decisions about water, land and infrastructure start with good evidence. TECO’s multidisciplinary team carries out surface-water and groundwater investigations, hydrological and hydrogeological studies, engineering design, environmental assessment and technical advisory work across water, agriculture, WASH and civil infrastructure.',
    'We support clients from the first terms of reference through to sign-off, combining engineering analysis, GIS, environmental safeguards and technical reporting so that records stand up to audit and remain useful long after the assignment ends.',
  ],
  highlights: [
    { value: '12', label: 'Boreholes assessed for groundwater development at Portland Cement Malawi, Balaka' },
    { value: '3-stage', label: 'Pumping tests: step-drawdown, constant-rate and recovery' },
    { value: '1 m', label: 'Interval for drill-cutting sampling and lithological logging' },
  ],
  offerings: [
    ['Surface-water & groundwater investigations', 'River assessment, velocity measurement, groundwater investigations and hydrogeological studies to characterise water resources.'],
    ['Hydrological & hydrogeological studies', 'Catchment and river assessment, hydrogeological interpretation, and water-resource assessment and modelling.'],
    ['Water-resource assessment & modelling', 'Groundwater and surface-water modelling to support abstraction planning, scheme design and long-term resource management.'],
    ['River, flood-risk & weir/intake studies', 'River assessment, flood-risk mapping, weir and intake feasibility, and hydraulic studies for surface-water schemes.'],
    ['Engineering design & technical drawings', 'Engineering designs, hydraulic layouts, AutoCAD drawings and technical specifications for water, irrigation and civil works.'],
    ['Environmental screening, EIA & ESIA', 'Environmental and social screening, environmental impact assessment (EIA) and environmental and social impact assessment (ESIA) services.'],
    ['Feasibility studies, assessments & evaluations', 'Project feasibility studies, project assessments and evaluations, with recommendations aligned to client objectives.'],
    ['GIS & spatial analysis', 'QGIS and ArcGIS mapping, spatial analysis and geodatabase support for planning, monitoring and reporting.'],
    ['Training, capacity building & advisory', 'Technical advisory services, training and capacity-building for client teams, contractors and community stakeholders.'],
  ],
  processTitle: 'How a consultancy assignment runs',
  process: [
    ['Brief & terms of reference', 'Agree objectives, deliverables, site context and technical standards.'],
    ['Field investigation', 'Surveys, drilling supervision, pumping tests, water-quality sampling, hydrological measurement and data collection on standard forms.'],
    ['Analysis & modelling', 'Hydrogeological and hydrological interpretation, hydraulic assessment, water-resource modelling and GIS mapping.'],
    ['Environmental assessment', 'Screening, EIA/ESIA inputs and environmental management planning where required.'],
    ['Reporting & handover', 'Clear reports with findings, maps and practical recommendations, followed by formal stakeholder sign-off.'],
  ],
  tools: ['QGIS / ArcGIS', 'ENVI', 'Good Earth', 'EPANET', 'mWater', 'Differential GPS', 'River velocity meter', 'Total station (partnership)', 'Borehole camera', 'Water quality meters', '100 m dipper meter', 'Geotron water detector'],
  standards: 'Our field procedures follow Malawi’s standard operating procedures for aquifer pumping tests, groundwater sampling and groundwater use permitting. Environmental work is aligned with Malawi’s EIA/ESIA requirements, and water quality results are assessed against MS733:2005.',
  team: ['temwani', 'lawrence', 'david'],
  projects: [
    ['12-borehole groundwater assessment and pumping tests; Rivirivi River surface-water assessment, weir and intake feasibility', 'Portland Cement Malawi, Balaka', '2026–present'],
    ['Portable water supply project rapid assessment and design of a solar-powered gravity-fed system', 'ILLOVO', '2021'],
    ['Hydrogeological survey, drilling, mapping and system design', 'Water For Life', '2022'],
    ['Hydrogeological survey and forensics, Thyolo', 'United Purpose', '2020'],
    ['Monitoring wells rehabilitation, Malindi, Mangochi', 'National Water Resources Authority', ''],
    ['Pre-rehabilitation assessment of boreholes, Chapananga, Chikwawa', 'Water Witness', ''],
  ],
};

// ---------- Section builders (unique to consultancy) ----------

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

export function renderConsultancyPage() {
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