document.addEventListener('DOMContentLoaded', function() {
    // Update theme toggle icons on load
    updateThemeToggle();
    
    // Toggle mobile menu
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('-translate-x-full');
    });

    // Toggle dark/light theme
    document.getElementById('theme-toggle').addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        updateThemeToggle();
    });

    // Contact form handler
    // document.getElementById('contactForm').addEventListener('submit', async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const body = {
    //         name: formData.get('name'),
    //         email: formData.get('email'),
    //         message: formData.get('message')
    //     };
        
    //     const responseMsg = document.getElementById('responseMessage');
        
    //     try {
    //         const response = await fetch('https://vwlcza423katcqtgyyylfrutgu0wihsv.lambda-url.us-west-2.on.aws/', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(body)
    //         });
            
    //         if (!response.ok) {
    //             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    //         }
            
    //         const result = await response.json();
    //         responseMsg.textContent = result.message || 'Message sent successfully!';
    //         responseMsg.className = 'mt-4 text-center text-green-600 dark:text-green-400';
    //         e.target.reset();
    //     } catch (error) {
    //         console.error('Contact form error:', error);
    //         // Fallback: Show success message even if Lambda fails
    //         responseMsg.textContent = 'Thank you for your message! I\'ll get back to you soon.';
    //         responseMsg.className = 'mt-4 text-center text-green-600 dark:text-green-400';
    //         e.target.reset();
    //     }
    // });
});

function updateThemeToggle() {
    const isDark = document.documentElement.classList.contains('dark');
    document.getElementById('theme-toggle-dark').classList.toggle('hidden', !isDark);
    document.getElementById('theme-toggle-light').classList.toggle('hidden', isDark);
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.add('-translate-x-full');
                }
            }
        });
    });
});
