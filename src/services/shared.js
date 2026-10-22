// src/services/shared.js
// Things that must stay consistent across all service pages:
// the team roster, the "Other departments" list, the final CTA,
// and the tiny HTML/formatting helpers each department page uses.

export const TEAM = {
  temwani: {
    name: 'Temwani Chisunkha',
    role: 'Managing Director / Hydrogeologist & Water Resources Specialist',
    qualification: 'MSc. Hydrogeology & Environmental Engineering',
    registration: 'Malawi Engineers Institution – Geotechnical Engineer',
    bio: 'Over eight years of experience in hydrogeological investigations, groundwater development, water supply systems and hydraulic assessments. Proficient in EPANET, QGIS, mWater and AutoCAD.',
  },
  wezzie: {
    name: 'Wezzie Longwe',
    role: 'Civil Engineer – Water',
    qualification: 'BSc. Civil Engineering – Water (Hons)',
    registration: 'Malawi Engineers Institution – Civil Engineer',
    bio: 'Specialist in water infrastructure, hydraulic systems and civil works, supervising construction of water towers, distribution systems, communal water points and other hydraulic structures.',
  },
  gomezgani: {
    name: 'Gomezgani Mwafulirwa',
    role: 'Water Engineer – Hydraulic Design',
    qualification: 'MSc. Water Resources Management & Development',
    registration: 'Malawi Engineers Institution – Technician Engineer',
    bio: 'Experience in water supply, WASH infrastructure, groundwater development, irrigation and hydraulic design, including EPANET modelling, contractor supervision and BOQ review.',
  },
  david: {
    name: 'David Mwandira',
    role: 'Hydrologist & Surface Water Supply Engineer',
    qualification: 'BSc. Irrigation Engineering',
    registration: 'Malawi Engineers Institution – Irrigation Engineer',
    bio: 'Seven years in hydrology, irrigation engineering, hydraulic assessment and infrastructure construction. Skilled in AutoCAD, Civil 3D, GIS mapping and solar-powered water systems.',
  },
  john: {
    name: 'John Yendani Chirwa',
    role: 'Quantity Surveyor / Estimator',
    qualification: 'BSc. Quantity Surveying',
    registration: 'Surveyors Institute of Malawi – Quantity Surveyor',
    bio: 'Cost estimation, Bills of Quantities, tender preparation and contract administration for water, building, road and drainage projects.',
  },
  lawrence: {
    name: 'Lawrence Phiri',
    role: 'Hydrogeologist',
    qualification: 'BSc. Earth Sciences',
    registration: '',
    bio: 'Geophysical investigations, borehole siting, drilling supervision, pumping tests and water-quality assessment, with resistivity survey interpretation and reporting.',
  },
};

// Registry of the three departments. Each department file imports this
// to know the other departments' slug / badge / accent / title / tagline
// (used only by the shared "Other TECO departments" block).
export const SERVICE_INDEX = {
  'water-supply-engineering-design': {
    slug: 'water-supply-engineering-design',
    accent: '#176b9a',
    badge: 'Water',
    shortTitle: 'Water Supply & Engineering Design',
    title: 'Water Supply and Engineering Design',
    tagline: 'Reliable Water. Resilient communities',
  },
  'engineering-environmental-consultancy': {
    slug: 'engineering-environmental-consultancy',
    accent: '#9a6b1e',
    badge: 'Consultancy',
    shortTitle: 'Engineering, Environmental & Development Consultancy',
    title: 'Engineering, Environmental & Development Consultancy',
    tagline: 'Insight for Better Decisions. Expertise for Sustainable Development',
  },
  'civil-engineering-construction': {
    slug: 'civil-engineering-construction',
    accent: '#f2a900',
    badge: 'Civil',
    shortTitle: 'Civil & Structural Engineering',
    title: 'Civil & Structural Engineering',
    tagline: 'Building with Integrity. Creating Lasting Infrastructure',
  },
};

// ---------- HTML helpers ----------

export const container = (inner) =>
  `<div class="mx-auto w-full max-w-[1160px] px-[22px]">${inner}</div>`;

export const initials = (name) =>
  name.split(' ').filter(Boolean).map((p) => p[0]).slice(0, 2).join('').toUpperCase();

export const kicker = (text, color = '#f2a900') =>
  `<div class="text-[11px] font-extrabold uppercase tracking-[0.16em] mb-[13px]" style="color:${color}">${text}</div>`;

export const h2 = (text) =>
  `<h2 class="text-[clamp(26px,3vw,38px)] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#173047]">${text}</h2>`;

// ---------- Shared tail sections (used by every department page) ----------

export function buildOtherDepartments(s) {
  const others = Object.values(SERVICE_INDEX).filter((o) => o.slug !== s.slug);
  return `
  <div class="grid grid-cols-1 lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-[80px] mb-14">
    <div>
      ${kicker('Explore more', s.accent)}
      ${h2('Other TECO departments.')}
    </div>
    <div class="border-t border-[#dce4e7]">
      ${others.map((o) => `
        <a href="/services/${o.slug}" class="group grid grid-cols-[110px_1fr_auto] gap-4 items-center border-b border-[#dce4e7] py-5 no-underline transition duration-200 hover:bg-[#f6fafb]">
          <div class="text-[10px] font-black uppercase tracking-[0.14em]" style="color:${o.accent}">${o.badge}</div>
          <div>
            <div class="text-[15px] font-extrabold text-[#173047] group-hover:underline">${o.title}</div>
            <div class="text-[12.5px] text-[#617484]">${o.tagline}</div>
          </div>
          <span class="text-[#176b9a] text-[14px] font-extrabold">→</span>
        </a>`).join('')}
    </div>
  </div>`;
}

export function buildCTA(s) {
  return `
  <div class="rounded-[20px] bg-gradient-to-br from-[#e4f2ef] to-[#e8edf0] p-8 lg:px-[48px] lg:py-[44px] text-[#153a50]">
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <div class="max-w-[560px]">
        <h2 class="mb-2 text-[26px] font-extrabold tracking-[-0.02em]">Need ${s.shortTitle.toLowerCase()}?</h2>
        <p class="text-[14px] leading-[1.7]">Tell us about your project and we will identify the right technical support.</p>
      </div>
      <a href="/contact" class="inline-flex items-center justify-center gap-2 px-[19px] py-[13px] rounded-lg bg-[#f2a900] text-[#102d45] text-[13px] font-extrabold no-underline transition duration-200 hover:-translate-y-0.5 hover:brightness-105">Start a conversation →</a>
    </div>
  </div>`;
}

// Wraps the two shared tail blocks into one section that each department
// can append to its own page. Department files call this at the end.
export function buildSharedTail(s) {
  return `
  <section class="bg-white py-[72px] lg:py-[100px]">
    ${container(buildOtherDepartments(s) + buildCTA(s))}
  </section>`;
}

// Reusable team-row block for any department page.
export function buildTeamRows(keys, accent) {
  return `
  <section class="bg-white py-[72px] lg:py-[100px]">
    ${container(`
      <div class="max-w-[720px] mb-10">
        ${kicker('People behind the work', accent)}
        ${h2('The team for this service.')}
      </div>
      <div class="border-t border-[#dce4e7]">
        ${keys.map((key) => {
          const p = TEAM[key];
          return `
          <div class="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-10 gap-y-3 border-b border-[#dce4e7] py-7 items-start">
            <div class="flex items-center gap-3">
              <div class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#d7ece7] to-[#b8d1d8] text-[13px] font-black text-[#14516b]">${initials(p.name)}</div>
              <div>
                <div class="text-[15px] font-extrabold text-[#173047]">${p.name}</div>
                <div class="text-[11.5px] font-bold text-[#176b9a]">${p.role}</div>
              </div>
            </div>
            <div>
              <p class="text-[13.5px] leading-[1.8] text-[#5a6570] mb-2">${p.bio}</p>
              <p class="text-[11.5px] leading-[1.7] text-[#8a97a0]">${p.qualification}${p.registration ? ` · ${p.registration}` : ''}</p>
            </div>
          </div>`;
        }).join('')}
      </div>
    `)}
  </section>`;
}