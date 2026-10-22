// src/services/index.js
// Dispatcher + a per-slug lookup used by App.jsx for routing and page title.

import { SERVICE_INDEX } from './shared';
import { renderWaterPage } from './water';
import { renderCivilPage } from './civil';
import { renderConsultancyPage } from './consultancy';

// Keep the three slugs in sync with the home page "What we do" cards
// and the footer Services links in siteContent.html.
export const SERVICES = SERVICE_INDEX;

export function renderServiceDetail(service) {
  switch (service.slug) {
    case 'water-supply-engineering-design':      return renderWaterPage();
    case 'civil-engineering-construction':       return renderCivilPage();
    case 'engineering-environmental-consultancy': return renderConsultancyPage();
    default:                                     return renderWaterPage();
  }
}