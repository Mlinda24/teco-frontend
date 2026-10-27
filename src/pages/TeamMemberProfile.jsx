// src/pages/TeamMemberProfile.jsx
import React from 'react';
import { TEAM_MEMBERS } from '../data/teamMembers';

const container = (html) => `<div class="container mx-auto w-full max-w-[1160px] px-[22px]">${html}</div>`;

export function renderTeamMemberProfile(id) {
  const member = TEAM_MEMBERS[id];
  if (!member) {
    return `
      <section class="py-[100px] text-center">
        ${container(`
          <h1 class="text-3xl font-bold mb-4">Profile Not Found</h1>
          <p class="text-[#617484] mb-8">The team member you are looking for does not exist.</p>
          <a href="/team" class="inline-flex items-center justify-center px-[19px] py-[13px] rounded-lg bg-[#173047] text-white text-[13px] font-extrabold transition hover:brightness-110">
            &larr; Back to Team
          </a>
        `)}
      </section>
    `;
  }

  return `
    <!-- Header Section (Image on right, text on left) -->
    <section class="bg-white py-[60px] lg:py-[80px] border-b border-[#dce4e7]">
      ${container(`
        <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-16 items-center">
          
          <!-- Left Content -->
          <div class="order-2 lg:order-1">
            <h1 class="text-[clamp(32px,4vw,48px)] font-extrabold text-[#173047] leading-[1.1] mb-3">${member.name}</h1>
            <p class="text-lg font-bold text-[#176b9a] uppercase tracking-[0.05em] mb-6">${member.role}</p>
            
            <div class="space-y-4 mb-8">
              <a href="mailto:${member.email}" class="flex items-center gap-3 text-[15px] font-semibold text-[#4a5e6d] hover:text-[#f2a900] transition group w-fit">
                <div class="w-10 h-10 rounded-full bg-[#eff6ee] grid place-items-center group-hover:bg-[#f2a900] group-hover:text-white transition">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                ${member.email}
              </a>
              <a href="tel:${member.phone}" class="flex items-center gap-3 text-[15px] font-semibold text-[#4a5e6d] hover:text-[#f2a900] transition group w-fit">
                <div class="w-10 h-10 rounded-full bg-[#eff6ee] grid place-items-center group-hover:bg-[#f2a900] group-hover:text-white transition">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                ${member.phone}
              </a>
            </div>
            
            <p class="text-[15.5px] leading-[1.85] text-[#4a5e6d]">${member.overview}</p>
          </div>

          <!-- Right Image -->
          <div class="order-1 lg:order-2">
            <div class="relative w-full max-w-[460px] mx-auto lg:ml-auto aspect-[3/4] overflow-hidden bg-[#f8f6ef]">
              <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover object-top" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center text-6xl font-black text-[#173047] opacity-20\\'>${member.name.split(' ').map(n=>n[0]).join('')}</div>';" />
              
              <!-- Bottom Tag (Name / Role) - No Shadow -->
              <div class="absolute bottom-0 inset-x-0 bg-[#173047]/95 backdrop-blur-sm text-white px-6 py-4">
                <div class="text-[10px] uppercase tracking-[0.05em] mb-1 opacity-80">${member.role.split(',')[0]}</div>
              </div>
            </div>
          </div>

        </div>
      `)}
    </section>

    <!-- Details Section (Experience, Qualifications, Projects) -->
    <section class="bg-[#f8fbfc] py-[72px] lg:py-[100px]">
      ${container(`
        <div class="max-w-[900px] mx-auto">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-12">
            <div>
              <h2 class="text-xl font-extrabold text-[#173047] mb-4 border-b-2 border-[#f2a900] pb-2 inline-block">Experience & Expertise</h2>
              <ul class="space-y-3">
                ${member.experience.map(exp => `
                  <li class="flex items-start gap-3 text-[14.5px] leading-[1.6] text-[#4a5e6d]">
                    <svg class="w-5 h-5 text-[#176b9a] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    ${exp}
                  </li>
                `).join('')}
              </ul>
            </div>
            <div>
              <h2 class="text-xl font-extrabold text-[#173047] mb-4 border-b-2 border-[#f2a900] pb-2 inline-block">Qualifications</h2>
              <ul class="space-y-3">
                ${member.qualifications.map(qual => `
                  <li class="flex items-start gap-3 text-[14.5px] leading-[1.6] text-[#4a5e6d]">
                    <svg class="w-5 h-5 text-[#f2a900] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
                    ${qual}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-xl font-extrabold text-[#173047] mb-4 border-b-2 border-[#f2a900] pb-2 inline-block">Key Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${member.projects.map(proj => `
                <div class="bg-white border border-[#dce4e7] rounded-lg p-5 text-[14.5px] font-semibold text-[#173047] flex items-center">
                  ${proj}
                </div>
              `).join('')}
            </div>
          </div>

          <div class="text-center mt-16">
            <a href="/team" class="inline-flex items-center gap-2 text-[14px] font-extrabold text-[#173047] no-underline border-b-2 border-[#f2a900] pb-1 transition duration-200 hover:text-[#176b9a] hover:border-[#176b9a]">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg>
              Back to all team members
            </a>
          </div>

        </div>
      `)}
    </section>
  `;
}