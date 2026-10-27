// src/pages/TeamMemberProfile.jsx
import React from 'react';
import { TEAM_MEMBERS } from '../data/teamMembers';

export function renderTeamMemberProfile(id) {
  const member = TEAM_MEMBERS[id];
  
  if (!member) {
    return `
      <section class="py-[100px] text-center">
        <div class="container mx-auto w-full max-w-[1160px] px-[22px]">
          <h1 class="text-3xl font-bold mb-4">Profile Not Found</h1>
          <p class="text-[#617484] mb-8">The team member you are looking for does not exist.</p>
          <a href="/team" class="inline-flex items-center justify-center px-[19px] py-[13px] rounded-lg bg-[#173047] text-white text-[13px] font-extrabold transition hover:brightness-110">
            &larr; Back to Team
          </a>
        </div>
      </section>
    `;
  }

  return `
    <section class="bg-white py-[60px] lg:py-[80px] border-b border-[#dce4e7]">
      <div class="container mx-auto w-full max-w-[1160px] px-[22px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <div class="order-2 lg:order-1">
            <h1 class="text-[clamp(32px,4vw,48px)] font-extrabold text-[#173047] leading-[1.1] mb-3">${member.name}</h1>
            <p class="text-lg font-bold text-[#176b9a] uppercase tracking-[0.05em] mb-6">${member.role}</p>
            
            <div class="space-y-4 mb-8">
              <a href="mailto:${member.email}" class="flex items-center gap-3 text-[15px] font-semibold text-[#4a5e6d] hover:text-[#f2a900] transition">
                <div class="w-10 h-10 rounded-full bg-[#eff6ee] grid place-items-center">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                ${member.email}
              </a>
              
              <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-[15px] font-semibold text-[#4a5e6d] hover:text-[#f2a900] transition">
                <div class="w-10 h-10 rounded-full bg-[#eff6ee] grid place-items-center">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                Connect on LinkedIn
              </a>
            </div>
            
            <p class="text-[15.5px] leading-[1.85] text-[#4a5e6d]">${member.overview}</p>
          </div>

          <div class="order-1 lg:order-2">
            <div class="relative w-full max-w-[460px] mx-auto lg:ml-auto aspect-[3/4] overflow-hidden bg-[#f8f6ef]">
              <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover object-top" />
              
              <div class="absolute bottom-0 inset-x-0 bg-[#173047]/95 text-white px-6 py-4">
                <div class="text-[13px] uppercase tracking-[0.05em] mb-1 opacity-80">${member.role.split(',')[0]}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-[#f8fbfc] py-[72px] lg:py-[100px]">
      <div class="container mx-auto w-full max-w-[1160px] px-[22px]">
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
                    <svg class="w-5 h-5 text-[#f2a900] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/></svg>
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
      </div>
    </section>
  `;
}