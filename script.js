// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('-translate-x-full');
});

// Toggle dark/light theme
document.getElementById('theme-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeToggle();
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    updateThemeToggle();
}

function updateThemeToggle() {
    const isDark = document.documentElement.classList.contains('dark');
    document.getElementById('theme-toggle-dark').classList.toggle('hidden', !isDark);
    document.getElementById('theme-toggle-light').classList.toggle('hidden', isDark);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.getElementById('mobile-menu').classList.add('-translate-x-full');
        }
    });
});
