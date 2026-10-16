# TECO Farms & Engineering Website

React + Vite website with separate URL routes (not one long homepage). Brand styling and the supplied site content are retained.

## Pages
- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/projects` — Projects and Current Works
- `/clients` — Our Clients and Partners
- `/team` — Our Team
- `/contact` — Contact

## Run locally
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev` and open the local URL shown by Vite.
5. Run `npm run build` to create a production build in `dist/`.

Navigation uses browser history and supports back/forward. For deployment, configure the hosting provider to rewrite unknown paths to `index.html` so direct visits to routes such as `/services` work.
