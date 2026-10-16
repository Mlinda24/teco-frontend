# Developer handover

This project now has separate client-side pages with their own paths:

- Home: `/`
- About Us: `/about`
- Services: `/services`
- Projects + Current Works: `/projects`
- Our Clients + Our Partners: `/clients`
- Our Team: `/team`
- Contact: `/contact`

The shared header and footer remain consistent across pages. Current Works is grouped with Projects; Partners is grouped with Our Clients. Existing styling and content are sourced from `src/content/siteContent.html` and `src/styles/styles.css`.

## Deployment requirement
Configure SPA fallback/rewrite to serve `/index.html` for these routes on direct navigation and page refresh. The contact form opens the visitor's email application addressed to `tecofarms@gmail.com`; it does not send submissions to a server. Connect a form backend if direct web submissions are required.
