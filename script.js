// Accessibility-friendly mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenuElement = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    if (mobileMenu.hasAttribute('hidden')) mobileMenu.removeAttribute('hidden');
    else mobileMenu.setAttribute('hidden', '');
  });
}

// Theme toggle (persist preference)
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const themeIcon = document.getElementById('themeIcon');

function setTheme(mode) {
  const html = document.documentElement;
  if (mode === 'dark') html.classList.add('dark');
  else html.classList.remove('dark');
  localStorage.setItem('theme', mode);
  if (themeIcon) themeIcon.textContent = mode === 'dark' ? '☀️' : '🌙';
}

// Initialize theme
if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    updateTheme(true);
}

themeToggle.addEventListener('click', () => {
    updateTheme(!html.classList.contains('dark'));
});

// Add footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuElement.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuElement.classList.add('hidden');
    });
});

// Form validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Contact form handling
const form = document.querySelector('form');
const formStatus = document.getElementById('formStatus');
if (form && formStatus) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('[type="email"]').value;
        
        if (!isValidEmail(email)) {
            formStatus.textContent = 'Please enter a valid email address.';
            formStatus.classList.add('text-red-500');
            return;
        }
        
        formStatus.textContent = 'Thanks! This demo form is not wired yet.';
        formStatus.classList.remove('text-red-500');
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
