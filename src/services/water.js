// src/services/water.js
// Water Supply & Engineering Design department page.

import {
  container, kicker, h2,
  buildSharedTail,
} from './shared';

const data = {
  slug: 'water-supply-engineering-design',
  accent: '#176b9a',
  badge: 'Water',
  shortTitle: 'Water Supply & Engineering Design',
  title: 'Water Supply and Engineering',
  tagline: 'Reliable Water. Resilient communities',
  imageAlt: 'TECO Farms water infrastructure project',
  imageCaptionKicker: 'Solar pumping',
  imageCaptionText: 'Designed for real community needs',
  overview: [
    'TECO Farms & Engineering Ltd delivers comprehensive water supply solutions, from feasibility studies and technical design to construction and commissioning. Our expertise covers groundwater exploration, borehole drilling, pumping tests, water treatment, solar-powered water systems, irrigation and water reticulation networks. We specialise in designing sustainable, efficient and reliable water infrastructure for communities, institutions, industries and agricultural enterprises. Through innovative engineering and practical solutions, we are committed to improving water access and security',
    'TECO Farms & Engineering Ltd delivers integrated engineering solutions through systematic field investigations, feasibility studies, technical design, construction supervision and project commissioning. We combine field-based data collection, modern engineering tools and technical expertise, including GPS surveys, geophysical investigations, Google Earth Pro, GIS, CAD and hydraulic modelling, to develop accurate, efficient and sustainable solutions. Our approach transforms technical assessments into reliable infrastructure, ensuring quality, performance and lasting impact.',
  ],
  highlights: [
    {value:'Over 13', label: 'Solar Powered Water Supply Systems Completed'},
    { value: 'Over 7', label: 'Irrigation systems constructed' },
    { value: 'Over 188', label: 'Boreholes drilled' },
  ],
  offerings: [
    ['Engineering, development and environmental consultancy', 'Surface-water and groundwater investigations; hydrogeological and hydrological studies; water-resource assessment and modelling; river assessment, flood-risk mapping and weir/intake studies; engineering designs and technical drawings; environmental screening and impact assessments (EIA/ESIA); feasibility studies, project assessments and evaluations; GIS and spatial analysis; training, capacity building and technical advisory services.'],
    ['Geophysical & hydrogeological surveys', 'Groundwater investigations and borehole siting, delivered as siting reports with GPS coordinates and identified priority and backup sites, supported by full hydrogeological assessment.'],
    ['Borehole drilling', 'Drilling and construction of production boreholes with 1 m sample logging, casing and screen design, and borehole development, alongside performance assessment and pre-rehabilitation evaluation of existing boreholes.'],
    ['Pumping tests', 'Step-drawdown, 4-hour constant-rate and recovery tests (to 90% recovery) to establish safe yield, pump setting depth and long-term borehole performance.'],
    ['Water quality sampling', 'Water quality sampling and analysis to Malawi Bureau of Standards requirements, informing treatment design, source protection and fitness-for-use decisions.'],
    ['Civil works & Afridev pump installation', 'Civil works and Afridev handpump installation for community handpumps, including aprons, drainage and pump-head assembly.'],
    ['Mapping & hydraulic design', 'Mapping and hydraulic design using EPANET, TDH and pump-curve analysis, Google Earth, ArcGIS and elevation models to size pipes, tanks and pumps against real site conditions.'],
    ['Engineering drawings', 'Engineering drawings and technical documentation — layouts, reticulation networks, tank and tower details, and as-built records.'],
    ['Construction', 'Construction of the water system to the design, with construction supervision and quality control throughout.'],
    ['Testing, commissioning & handover', 'Verification of system performance through operational testing, with technical documentation provided and local operators trained in operation and maintenance.'],
  ],

  // ---------- Irrigation section (rendered by process()) ----------
  processKicker: 'Exprole our Irrigation systems',
  processTitle: 'Are you interested in Irrigation Services?',
  processIntro: 'Engineering efficient irrigation systems for sustainable agricultural productivity.',
  process: [
    ['Desk studies, field surveys & site assessment', 'Review project requirements, assess crop water demand and available water resources, and undertake GPS mapping, topographical surveys, soil assessments and site investigations.'],
    ['Water resources & irrigation demand assessment', 'Evaluate water availability and quality through source assessments, pumping tests where applicable, and water quality analysis. Determine crop water requirements using climatic data, evapotranspiration (ETo), crop coefficients (Kc) and irrigation efficiency.'],
    ['Engineering design & hydraulic modelling', 'Develop irrigation layouts for drip, sprinkler or surface irrigation systems. Apply GIS, Google Earth, ArcGIS and elevation models alongside hydraulic calculations to determine flow rates, pipe sizing, operating pressures, pump capacity and Total Dynamic Head (TDH).'],
    ['Engineering drawings & BOQ preparation', 'Prepare detailed engineering drawings, technical specifications and system layouts. Generate comprehensive Bills of Quantities (BOQs) directly from the approved designs, covering materials, equipment, labour and associated project costs.'],
    ['Construction, testing & commissioning', 'Undertake installation of pumps, filtration units, pipelines, valves and irrigation equipment. Conduct pressure, leakage and performance tests, prepare as-built documentation and train beneficiaries in system operation and maintenance.'],
  ],

  tools: ['EPANET', 'AutoCAD', 'Google Earth', 'ArcGIS / QGIS', 'mWater', 'TDH & pump-curve design', 'Geotron water detector', 'PRD drilling rig (partnership)', 'Borehole camera', 'Submersible pumps (3–11.7 m³/h)', '100 m dipper meter', 'Water quality meters', 'GPS', '6.5 kVA generator'],
  standards: 'Work is aligned with Malawi’s technical manual for water wells and groundwater monitoring systems, the standard operating procedures for aquifer pumping tests and for drilling and construction of production boreholes, and Malawi Bureau of Standards water quality requirements.',

  // Each project must be [name, client, period] — all 3 slots filled.
  projects: [
    ['Borehole drilling and construction of a solar powered water supply systems'],
    ['Maintenance and rehabilitation of a surface water supply system serving 152 water kiosks'],
    ['Hydraulic assessment and redesign of a water supply network'],
    ['Hydrogeological survey, drilling, mapping and design of a reticulated system for boreholes'],
  ],
};

// ---------- Section builders ----------

function hero(s) {
  return `
  <style>
    @keyframes tecoWaterFadeA {
      0%, 45%   { opacity: 1; }
      55%, 95%  { opacity: 0; }
      100%      { opacity: 1; }
    }
    @keyframes tecoWaterFadeB {
      0%, 45%   { opacity: 0; }
      55%, 95%  { opacity: 1; }
      100%      { opacity: 0; }
    }
    .teco-water-bg-a {
      animation: tecoWaterFadeA 10s infinite ease-in-out;
      opacity: 1;
    }
    .teco-water-bg-b {
      animation: tecoWaterFadeB 10s infinite ease-in-out;
      opacity: 0;
    }
  </style>

  <section class="relative overflow-hidden text-white bg-[#0b2437]">
    <img
      src="/assets/Picture4.jpg"
      alt=""
      aria-hidden="true"
      class="teco-water-bg-a absolute inset-0 h-full w-full object-cover object-center"
    />
    <img
      src="/assets/water1.jpg"
      alt=""
      aria-hidden="true"
      class="teco-water-bg-b absolute inset-0 h-full w-full object-cover object-center"
    />

    <div class="absolute inset-0 bg-gradient-to-r from-[#0b2437]/80 via-[#0b2437]/50 to-transparent pointer-events-none"></div>
    <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b2437]/70 to-transparent pointer-events-none"></div>

    <div class="relative z-10">
      ${container(`
        <div class="pt-16 pb-14 lg:pb-20 max-w-[720px]">
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
  if (!Array.isArray(s.overview) || s.overview.length < 2) return '';
  const own = s.overview.slice(1); // skip overview[0] — it already appears in the hero
  return `
  <section class="py-[72px] lg:py-[100px] bg-white">
    ${container(`
      <div class="grid grid-cols-1 lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-[80px]">
        <div>
          ${kicker('Overview', s.accent)}
          <p class="text-[clamp(20px,2.2vw,26px)] font-extrabold leading-[1.3] tracking-[-0.015em] text-[#173047]">
            One technical partner from initial assessment to final commissioning.
          </p>
        </div>
        <div class="space-y-5 text-[15.5px] leading-[1.9] text-[#3d566a] max-w-[640px]">
          ${own.map((p) => `<p>${p}</p>`).join('')}
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
          ${h2('What we offer')}
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
        ${kicker(s.processKicker || 'How it runs', s.accent)}
        ${h2(title)}
        ${s.processIntro ? `<p class="mt-4 text-[15px] leading-[1.8] text-[#3d566a] max-w-[560px]">${s.processIntro}</p>` : ''}
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
    safe(projects, data),
    safe(buildSharedTail, data),
  ];
  return sections.join('\n');
}