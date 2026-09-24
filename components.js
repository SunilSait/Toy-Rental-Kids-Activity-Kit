'use strict';
/* ===== TOYNEST — SHARED COMPONENTS ===== */

/* ─── THEME (DARK / LIGHT) & DIRECTION ─── */
(function initTheme() {
    const html = document.documentElement;
    const saved = localStorage.getItem('tn_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('tn_dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('tn_theme', isDark ? 'dark' : 'light');
    document.querySelectorAll('.theme-icon').forEach(icon => {
        icon.className = isDark ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
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
        <p>Premium toy rentals that delight children, save money, and protect our planet. Monthly rotations, zero waste, endless fun.</p>
        <div class="footer-socials" style="margin-top:1.25rem;">
          <a href="#" class="social-icon-btn" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon-btn" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon-btn" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="home2.html">Home 2</a></li>
          <li><a href="how-it-works.html">How It Works</a></li>
          <li><a href="catalog.html">Toy Catalog</a></li>
          <li><a href="pricing.html">Plans &amp; Pricing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="hygiene.html">Hygiene Standards</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="dashboard.html">Parent Dashboard</a></li>
          <li><a href="login.html">Sign In</a></li>
          <li><a href="signup.html">Create Account</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal &amp; Support</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Return Policy</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="coming-soon.html">Coming Soon</a></li>
          <li><a href="404.html">404 Page</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 ToyNest. All rights reserved. Made with <i class="fas fa-heart" style="color:var(--primary);"></i> for curious kids.</p>
      <p style="color:#64748B;font-size:0.75rem;">Eco-friendly &bull; Safe &bull; Inspected</p>
    </div>
  </div>
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
        tab.addEventListener('click', function() {
            const group = this.closest('.filter-tabs');
            group.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            filterToyCards(filter);
        });
    });
}

function filterToyCards(filter) {
    document.querySelectorAll('.toy-card').forEach(card => {
        const cat = card.dataset.category || '';
        const age = card.dataset.age || '';
        const match = filter === 'all' || cat === filter || age === filter;
        card.style.display = match ? '' : 'none';
    });
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

/* ─── INIT ALL ─── */
document.addEventListener('DOMContentLoaded', function() {
    injectNav();
    injectFooter();
    initScrollReveal();
    initFAQ();
    initFilterTabs();
    initParallax();
    syncThemeIcons();
    initCounters();
});
