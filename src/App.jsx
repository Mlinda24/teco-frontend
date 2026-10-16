import { useEffect, useMemo, useState } from 'react';
import siteContent from './content/siteContent.html?raw';

import {
  Droplets,
  Settings,
  Sprout,
  Handshake,
  Mountain,
  Ruler,
  Sun,
  Leaf,
  Building2,
  CloudRain,
  BarChart3,
  Tractor,
  Mail,
  Phone,
  MapPin,
  Clock3,
} from 'lucide-react';

const ROUTES = [
  { path: '/', label: 'Home', ids: ['hero', 'about', 'services'] },
  { path: '/about', label: 'About Us', ids: ['about', 'approach'] },
  { path: '/services', label: 'Services', ids: ['services'] },
  { path: '/projects', label: 'Projects', ids: ['projects', 'current-works'] },
  { path: '/clients', label: 'Our Clients', ids: ['clients', 'partners'] },
  { path: '/team', label: 'Our Team', ids: ['team'] },
  { path: '/contact', label: 'Contact', ids: ['contact'] },
];

const NAV_ROUTES = {
  '#top': '/',
  '#about': '/about',
  '#services': '/services',
  '#projects': '/projects',
  '#current-works': '/projects',
  '#clients': '/clients',
  '#partners': '/clients',
  '#team': '/team',
  '#contact': '/contact',
};

const HERO_IMAGES = [
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/5.jpg',
  '/assets/8.jpg',
  '/assets/17.jpg',
  '/assets/18.jpg'
];

function routeFor(path) {
  const normalized = path.replace(/\/+$/, '') || '/';
  return ROUTES.find((route) => route.path === normalized) || ROUTES[0];
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [isNavigating, setIsNavigating] = useState(false);
  const [heroImage, setHeroImage] = useState(0);

  const [markup, setMarkup] = useState({
    topline: '',
    header: '',
    footer: '',
    toast: '',
    sections: {},
  });

  const route = routeFor(path);

  // Read the HTML content from siteContent.html.
  useEffect(() => {
    const doc = new DOMParser().parseFromString(siteContent, 'text/html');

    const topline = doc.querySelector('.topline');
    const header = doc.querySelector('header');
    const footer = doc.querySelector('footer');
    const toast = doc.querySelector('#formToast');

    const sections = {};

    doc.querySelectorAll('main > section').forEach((section, index) => {
      const id =
        section.id ||
        (section.classList.contains('hero')
          ? 'hero'
          : section.classList.contains('approach')
            ? 'approach'
            : `section-${index}`);

      sections[id] = section.outerHTML;
    });

    setMarkup({
      topline: topline?.outerHTML || '',
      header: header?.outerHTML || '',
      footer: footer?.outerHTML || '',
      toast: toast?.outerHTML || '',
      sections,
    });
  }, []);

  // Get only the sections required for the current route.
  const pageContent = useMemo(
    () => route.ids.map((id) => markup.sections[id] || '').join('\n'),
    [route, markup]
  );

  // Preload the four hero photographs for smooth full-size transitions.
  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  // Rotate the four hero photographs.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroImage((current) => (current + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  // Apply the active hero image to the layered carousel.
  useEffect(() => {
    const images = document.querySelectorAll(
      '#site-shell .hero-carousel-image'
    );

    if (!images.length) return;

    images.forEach((image, index) => {
      image.style.opacity = index === heroImage ? '1' : '0';
    });
  }, [heroImage, pageContent]);

  // Handle browser back/forward buttons.
  useEffect(() => {
    const pop = () => {
      setIsNavigating(true);
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', pop);

    return () => {
      window.removeEventListener('popstate', pop);
    };
  }, []);

  // Hide the loading overlay after navigation.
  useEffect(() => {
    if (!isNavigating) return undefined;

    const timer = window.setTimeout(() => {
      setIsNavigating(false);
    }, 420);

    return () => {
      window.clearTimeout(timer);
    };
  }, [path, isNavigating]);

  // Navigation, menu and contact form logic.
  useEffect(() => {
    document.title = `${route.label} | TECO Farms & Engineering`;

    window.scrollTo(0, 0);

    const root = document.getElementById('site-shell');

    if (!root) return undefined;

    const linkHandlers = [];

    // Handle internal navigation.
    root.querySelectorAll('a').forEach((link) => {
      const raw = link.getAttribute('href') || '';

      if (NAV_ROUTES[raw]) {
        link.setAttribute('href', NAV_ROUTES[raw]);
      }

      const href = link.getAttribute('href') || '';

      if (!href.startsWith('/') || href.startsWith('//')) {
        return;
      }

      const handler = (event) => {
        if (
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();

        if (window.location.pathname !== href) {
          setIsNavigating(true);

          window.history.pushState({}, '', href);

          setPath(href);
        }
      };

      link.addEventListener('click', handler);

      linkHandlers.push([link, handler]);
    });

    // Footer year.
    const year = root.querySelector('#year');

    if (year) {
      year.textContent = new Date().getFullYear();
    }

    // Mobile navigation.
    const toggle = root.querySelector('#menuToggle');
    const nav = root.querySelector('#navLinks');

    const menuHandler = () => {
      if (!nav || !toggle) return;

      nav.classList.toggle('hidden');
      nav.classList.toggle('flex');

      toggle.textContent = nav.classList.contains('hidden') ? '☰' : '✕';
    };

    const closeMenu = () => {
      if (!nav || !toggle) return;

      nav.classList.add('hidden');
      nav.classList.remove('flex');

      toggle.textContent = '☰';
    };

    toggle?.addEventListener('click', menuHandler);

    nav?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Contact form.
    const form = root.querySelector('#contactForm');
    const toast = root.querySelector('#formToast');

    const submitHandler = (event) => {
      event.preventDefault();

      const data = new FormData(event.currentTarget);

      const subject = encodeURIComponent(
        'Website enquiry - ' +
          (data.get('service') || 'General enquiry')
      );

      const body = encodeURIComponent(
        `Name: ${data.get('name') || ''}
Organisation: ${data.get('org') || 'Not provided'}
Email: ${data.get('email') || ''}
Service: ${data.get('service') || 'Not selected'}

Project details:
${data.get('message') || ''}`
      );

      toast?.classList.remove('hidden');

      window.location.href =
        `mailto:tecofarms@gmail.com?subject=${subject}&body=${body}`;
    };

    form?.addEventListener('submit', submitHandler);

    return () => {
      linkHandlers.forEach(([link, handler]) => {
        link.removeEventListener('click', handler);
      });

      toggle?.removeEventListener('click', menuHandler);

      nav?.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('click', closeMenu);
      });

      form?.removeEventListener('submit', submitHandler);
    };
  }, [markup, path, route.label]);

  /*
   * Hide ONLY the main navigation/header when scrolling down.
   *
   * The topline:
   * "Water • Engineering • Agriculture • Infrastructure"
   * "Malawi-based engineering and consultancy services"
   *
   * stays pinned at the top.
   */
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const headerWrapper = document.querySelector(
        '#site-shell .site-header-wrapper'
      );

      if (!headerWrapper) return;

      const y = window.scrollY;
      const diff = y - lastY;

      if (Math.abs(diff) < 6) return;

      const nav = headerWrapper.querySelector('#navLinks');

      const menuOpen =
        window.innerWidth < 768 &&
        nav &&
        !nav.classList.contains('hidden');

      headerWrapper.style.transition = 'transform 300ms ease';

      if (diff > 0 && y > 120 && !menuOpen) {
        headerWrapper.style.transform = 'translateY(-100%)';
      } else if (diff < 0 || y <= 120) {
        headerWrapper.style.transform = 'translateY(0)';
      }

      lastY = y;
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className="site min-h-screen bg-white text-[#173047]"
      id="site-shell"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <!-- TOPLINE: ALWAYS VISIBLE -->
            <div class="site-topline sticky top-0 z-50">
              ${markup.topline}
            </div>

            <!-- MAIN HEADER: HIDES ON SCROLL DOWN -->
            <div class="site-header-wrapper sticky top-[38px] z-40">
              ${markup.header}
            </div>

            <main>
              ${
                pageContent ||
                `
                  <section class="py-[62px] lg:py-[86px]">
                    <div class="container mx-auto w-full max-w-[1160px] px-[22px]">
                      <h1 class="text-3xl font-bold">
                        Page coming soon
                      </h1>
                    </div>
                  </section>
                `
              }
            </main>

            ${markup.footer}
            ${markup.toast}
          `,
        }}
      />

      {/* Navigation loading overlay */}
      <div
        className={`fixed inset-0 z-[9999] grid place-items-center bg-[#091d2c]/35 backdrop-blur-[5px] transition-opacity duration-200 ${
          isNavigating
            ? 'visible opacity-100'
            : 'invisible pointer-events-none opacity-0'
        }`}
        aria-hidden={!isNavigating}
        aria-live="polite"
      >
        <div className="flex w-[min(330px,calc(100%-40px))] translate-y-0 scale-100 flex-col items-center gap-3 rounded-[18px] border border-white/55 bg-white px-7 py-7 text-center text-[#173047] shadow-[0_24px_70px_rgba(4,24,38,.24)]">
          <div
            className="flex h-[42px] items-center gap-1.5"
            aria-hidden="true"
          >
            <span className="h-[25px] w-[7px] rounded-lg bg-[#176b9a]" />
            <span className="h-9 w-[7px] rounded-lg bg-[#f2a900]" />
            <span className="h-[25px] w-[7px] rounded-lg bg-[#8fbd9b]" />
          </div>

          <strong className="text-sm">
            TECO Farms &amp; Engineering
          </strong>

          <span className="text-xs text-[#617484]">
            Loading {route.label}…
          </span>

          <div className="mt-1 h-[3px] w-full overflow-hidden rounded-full bg-[#e7eef0]">
            <span className="block h-full w-[38%] rounded-full bg-gradient-to-r from-[#176b9a] via-[#8fbd9b] to-[#f2a900]" />
          </div>
        </div>
      </div>
    </div>
  );
}
