document.addEventListener('DOMContentLoaded', function () {
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
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submit-btn');
    const messageDiv = document.getElementById('form-message');
    
    if (contactForm && submitBtn && messageDiv) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const body = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            messageDiv.style.display = 'none';

            try {
                const response = await fetch('https://edbt7hnsejfqgnmcqxx5dhddaa0idvcp.lambda-url.us-east-1.on.aws/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                if (response.ok) {
                    // Show success message
                    messageDiv.textContent = 'Message sent successfully! Thank you for reaching out.';
                    messageDiv.className = 'mb-4 p-3 rounded-lg bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
                    messageDiv.style.display = 'block';
                    e.target.reset();
                } else {
                    throw new Error('Failed to send');
                }
            } catch (error) {
                // Show error message
                messageDiv.textContent = 'Failed to send message. Please try again.';
                messageDiv.className = 'mb-4 p-3 rounded-lg bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
                messageDiv.style.display = 'block';
            }

            // Reset button
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        });
    }

    // Smooth scroll
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
