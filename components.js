'use strict';
/* ===== TOYNEST — SHARED COMPONENTS ===== */

/* ─── THEME (DARK / LIGHT) & DIRECTION ─── */
(function initTheme() {
    const html = document.documentElement;
    const saved = localStorage.getItem('tn_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('tn_dir') === 'rtl') { html.setAttribute('dir', 'rtl'); } else { html.setAttribute('dir', 'ltr'); }
})();

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('tn_theme', isDark ? 'dark' : 'light');
    document.querySelectorAll('.theme-icon').forEach(icon => {
        icon.className = isDark ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
    });
    document.querySelectorAll('.theme-label').forEach(el => {
        el.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
}

function toggleDir() {
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    const nextDir = isRTL ? 'ltr' : 'rtl';
    html.setAttribute('dir', nextDir);
    localStorage.setItem('tn_dir', nextDir);
    document.querySelectorAll('.dir-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', nextDir === 'rtl');
        btn.title = nextDir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL';
    });
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = nextDir.toUpperCase();
    });
}

/* Sync theme icon on page load */
function syncThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon').forEach(icon => {
        icon.className = isDark ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
    });
    document.querySelectorAll('.theme-label').forEach(el => {
        el.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
    const dir = document.documentElement.getAttribute('dir') || 'ltr';
    document.querySelectorAll('.dir-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', dir === 'rtl');
        btn.title = dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL';
    });
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = dir.toUpperCase();
    });
}

/* ─── NAVBAR ─── */
const NAV_HTML = `
<nav class="navbar" id="navbar" aria-label="Main navigation">
  <div class="container navbar-inner">
    <a href="index.html" class="nav-logo" aria-label="ToyNest Home">
      <img src="logo.svg" alt="ToyNest Logo" width="40" height="40">
      <div class="nav-logo-text">
        <span class="brand-top">ToyNest</span>
        <span class="brand-bottom">Toy Rental &amp; Kids Kits</span>
      </div>
    </a>
    <ul class="nav-links" role="list">
      <li><a href="index.html" class="nav-link" id="nav-home">Home</a></li>
      <li><a href="home2.html" class="nav-link" id="nav-home2">Home 2</a></li>
      <li><a href="how-it-works.html" class="nav-link" id="nav-how">How It Works</a></li>
      <li><a href="catalog.html" class="nav-link" id="nav-catalog">Catalog</a></li>
      <li><a href="pricing.html" class="nav-link" id="nav-pricing">Plans</a></li>
      <li><a href="hygiene.html" class="nav-link" id="nav-hygiene">Hygiene</a></li>
      <li><a href="contact.html" class="nav-link" id="nav-contact">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <button onclick="toggleDir()" class="nav-icon-btn dir-toggle-btn" title="Toggle Direction" aria-label="Toggle text direction">
        <i class="fas fa-right-left"></i>
      </button>
      <button onclick="toggleTheme()" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
        <i class="fas fa-moon theme-icon"></i>
      </button>
      <a href="login.html" class="btn btn-secondary btn-sm" id="nav-signin-btn">Sign In</a>
      <a href="dashboard.html" class="btn btn-primary btn-sm" id="nav-dashboard-btn">Dashboard</a>
    </div>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" onclick="toggleMobileNav()">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile" role="navigation" aria-label="Mobile navigation">
  <a href="index.html" class="nav-link" id="mnav-home">Home</a>
  <a href="home2.html" class="nav-link" id="mnav-home2">Home 2</a>
  <a href="how-it-works.html" class="nav-link" id="mnav-how">How It Works</a>
  <a href="catalog.html" class="nav-link" id="mnav-catalog">Catalog</a>
  <a href="pricing.html" class="nav-link" id="mnav-pricing">Plans</a>
  <a href="hygiene.html" class="nav-link" id="mnav-hygiene">Hygiene</a>
  <a href="contact.html" class="nav-link" id="mnav-contact">Contact</a>
  <div class="nav-mobile-toggles">
    <button onclick="toggleDir()" class="nav-icon-btn dir-toggle-btn" title="Toggle Direction" aria-label="Toggle text direction">
      <i class="fas fa-right-left"></i>
      <span>Direction (<span class="dir-label">LTR</span>)</span>
    </button>
    <button onclick="toggleTheme()" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
      <i class="fas fa-moon theme-icon"></i>
      <span class="theme-label">Theme</span>
    </button>
  </div>
  <div class="nav-mobile-actions">
    <a href="login.html" class="btn btn-secondary">Sign In</a>
    <a href="dashboard.html" class="btn btn-primary" id="mnav-dashboard-btn">Dashboard</a>
  </div>
</div>`;

/* ─── FOOTER ─── */
const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <a href="index.html" class="nav-logo" aria-label="ToyNest Home">
          <img src="logo.svg" alt="ToyNest Logo" width="40" height="40">
          <div class="nav-logo-text">
            <span class="brand-top">ToyNest</span>
            <span class="brand-bottom">Toy Rental &amp; Kids Kits</span>
          </div>
        </a>
        <p>Your premier destination for premium toy rentals and curated activity kits. Delight your kids with eco-friendly, sanitised, affordable play.</p>
        <div class="footer-socials">
          <a href="#" class="social-icon-btn" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon-btn" aria-label="X"><i class="fab fa-x-twitter"></i></a>
          <a href="#" class="social-icon-btn" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="home2.html">Home 2 &mdash; Premium</a></li>
          <li><a href="catalog.html">Toy Catalog</a></li>
          <li><a href="how-it-works.html">How It Works</a></li>
          <li><a href="hygiene.html">Hygiene Standards</a></li>
          <li><a href="pricing.html">Plans &amp; Pricing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="dashboard.html">Parent Dashboard</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="login.html">Login</a></li>
          <li><a href="signup.html">Sign Up</a></li>
          <li><a href="404.html">404 Page</a></li>
          <li><a href="coming-soon.html">Coming Soon</a></li>
        </ul>
      </div>
      <div class="footer-col footer-newsletter">
        <h4>Play Updates</h4>
        <p class="newsletter-sub">Get toy tips, new activity kit alerts &amp; exclusive discounts delivered to your inbox.</p>
        <form class="footer-newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing to ToyNest Play Updates!'); this.reset();">
          <input type="email" class="footer-email-input" placeholder="your@email.com" required aria-label="Email address">
          <button type="submit" class="btn-subscribe">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 ToyNest. All rights reserved.</p>
      <div class="footer-legal-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
  <!-- Floating Back to Top Button -->
  <button id="back-to-top" class="back-to-top-btn" aria-label="Back to top" onclick="window.scrollTo({top:0, behavior:'smooth'})">
    <i class="fas fa-arrow-up"></i>
  </button>
</footer>`;

/* ─── INJECT NAV & FOOTER ─── */
function injectNav() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) placeholder.outerHTML = NAV_HTML;
    // Scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }
    // Active link
    setActiveNavLink();
    syncThemeIcons();
}

function injectFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) placeholder.outerHTML = FOOTER_HTML;

    // Back to top scroll handler
    const backBtn = document.getElementById('back-to-top');
    if (backBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backBtn.classList.add('show');
            } else {
                backBtn.classList.remove('show');
            }
        }, { passive: true });
    }
}

function setActiveNavLink() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const map = {
        'index.html': ['nav-home', 'mnav-home'],
        'home2.html': ['nav-home2', 'mnav-home2'],
        'how-it-works.html': ['nav-how', 'mnav-how'],
        'catalog.html': ['nav-catalog', 'mnav-catalog'],
        'pricing.html': ['nav-pricing', 'mnav-pricing'],
        'hygiene.html': ['nav-hygiene', 'mnav-hygiene'],
        'contact.html': ['nav-contact', 'mnav-contact'],
        'dashboard.html': ['nav-dashboard-btn', 'mnav-dashboard-btn'],
    };
    const ids = map[path] || [];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('active');
    });
}

/* ─── MOBILE NAV TOGGLE ─── */
function toggleMobileNav() {
    const nav = document.getElementById('nav-mobile');
    const btn = document.getElementById('nav-hamburger');
    if (!nav) return;
    nav.classList.toggle('open');
    if (btn) btn.classList.toggle('open');
}
// Close mobile nav on outside click
document.addEventListener('click', function(e) {
    const nav = document.getElementById('nav-mobile');
    const btn = document.getElementById('nav-hamburger');
    if (!nav || !btn) return;
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove('open');
        btn.classList.remove('open');
    }
});

/* ─── SCROLL REVEAL ─── */
function initScrollReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
}

/* ─── FAQ ACCORDION ─── */
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
}

/* ─── FILTER TABS ─── */
function initFilterTabs() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        // If tab only has data-kit-target, let the kit switcher handle it
        if (!tab.dataset.filter) return;

        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const group = this.closest('.filter-tabs') || this.parentElement;
            if (group) {
                group.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            }
            this.classList.add('active');
            const filter = this.dataset.filter;
            filterToyCards(filter);
        });
    });
}

function filterToyCards(filter) {
    if (!filter) return;
    const cards = document.querySelectorAll('.toy-card');
    let visible = 0;
    cards.forEach(card => {
        const cat = card.dataset.category || '';
        const age = card.dataset.age || '';
        const match = filter === 'all' || cat === filter || age === filter;
        card.style.display = match ? '' : 'none';
        if (match) visible++;
    });
    const emptyMsg = document.getElementById('catalog-empty-state');
    if (emptyMsg) {
        emptyMsg.style.display = visible === 0 ? 'block' : 'none';
    }
}

/* ─── PASSWORD TOGGLE ─── */
function togglePasswordVisibility(inputId, icon) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    if (icon) icon.className = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
}

/* ─── AUTH PAGE ─── */
function initAuthPage() {
    syncThemeIcons();
    const dir = localStorage.getItem('tn_dir') || 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.querySelectorAll('.dir-toggle-btn').forEach(btn => {
        btn.classList.toggle('active', dir === 'rtl');
        btn.title = dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL';
    });
    document.querySelectorAll('.dir-label').forEach(el => el.textContent = dir.toUpperCase());
}

/* ─── COUNTER ANIMATION ─── */
function animateCounter(el) {
    if (el.dataset.animated) return;
    el.dataset.animated = 'true';
    const target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;
    let current = 0;
    const duration = 1200;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const step = Math.max(1, Math.ceil(target / totalSteps));
    const suffix = el.dataset.suffix || '';
    const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current.toLocaleString() + suffix;
        if (current >= target) clearInterval(timer);
    }, stepTime);
}

function initCounters() {
    const counterElements = document.querySelectorAll('[data-count]');
    if (!counterElements.length) return;

    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        counterElements.forEach(el => obs.observe(el));
    } else {
        counterElements.forEach(el => animateCounter(el));
    }
}

/* ─── SMOOTH HERO PARALLAX ─── */
function initParallax() {
    const blobs = document.querySelectorAll('.hero-blob');
    if (!blobs.length) return;
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        blobs.forEach((blob, i) => {
            const factor = (i + 1) * 0.5;
            blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
    }, { passive: true });
}

/* ─── HERO SLIDER (5 SEC AUTOMATIC SWITCH) ─── */
function initHeroSlider() {
    const slider = document.getElementById('hero-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');

    if (!slides.length) return;

    let currentIndex = 0;
    let autoTimer = null;
    const INTERVAL = 5000; // 5 seconds switch

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;

        slides.forEach((slide, i) => {
            const isActive = i === currentIndex;
            slide.classList.toggle('active', isActive);
            if (isActive) {
                const counters = slide.querySelectorAll('[data-count]');
                counters.forEach(c => {
                    if (typeof animateCounter === 'function') animateCounter(c);
                });
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
            if (i === currentIndex) {
                dot.style.animation = 'none';
                void dot.offsetWidth;
                dot.style.animation = null;
            }
        });
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function startTimer() {
        stopTimer();
        autoTimer = setInterval(nextSlide, INTERVAL);
    }

    function stopTimer() {
        if (autoTimer) {
            clearInterval(autoTimer);
            autoTimer = null;
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            startTimer();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            startTimer();
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', function() {
            showSlide(i);
            startTimer();
        });
    });

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopTimer);
        heroSection.addEventListener('mouseleave', startTimer);
    }

    startTimer();
}

/* ─── HOME 2 HERO SLIDER (5 SEC AUTOMATIC SWITCH) ─── */
function initHome2Slider() {
    const slider = document.getElementById('h2-hero-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.h2-hero-slide');
    const dots = document.querySelectorAll('.h2-dot');
    const prevBtn = document.getElementById('h2-prev');
    const nextBtn = document.getElementById('h2-next');

    if (!slides.length) return;

    let currentIndex = 0;
    let autoTimer = null;
    const INTERVAL = 5000; // 5 seconds switch

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
            if (i === currentIndex) {
                dot.style.animation = 'none';
                void dot.offsetWidth;
                dot.style.animation = null;
            }
        });
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function startTimer() {
        stopTimer();
        autoTimer = setInterval(nextSlide, INTERVAL);
    }

    function stopTimer() {
        if (autoTimer) {
            clearInterval(autoTimer);
            autoTimer = null;
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            startTimer();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            startTimer();
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', function() {
            showSlide(i);
            startTimer();
        });
    });

    const heroSection = document.getElementById('h2-hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopTimer);
        heroSection.addEventListener('mouseleave', startTimer);
    }

    startTimer();
}

/* ─── INIT ALL ─── */
document.addEventListener('DOMContentLoaded', function() {
    injectNav();
    injectFooter();
    initScrollReveal();
    initFAQ();
    initFilterTabs();
    initParallax();
    initHeroSlider();
    initHome2Slider();
    syncThemeIcons();
    initCounters();
});
