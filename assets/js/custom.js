document.addEventListener("DOMContentLoaded", function () {
    console.log("JS loaded");

    // ==========================
    // 🌙 Dark Mode Toggle
    // ==========================
    const toggle = document.getElementById('dark-mode-toggle');
    const icon = document.getElementById('dark-mode-icon');

    function setDarkModeIcon() {
        if (!icon) return;
        if (document.body.classList.contains('dark-mode')) {
            icon.textContent = '🌞'; // Sun for dark mode
        } else {
            icon.textContent = '🌙'; // Moon for light mode
        }
    }

    function applySavedTheme() {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        setDarkModeIcon();
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem(
                'theme',
                document.body.classList.contains('dark-mode') ? 'dark' : 'light'
            );
            setDarkModeIcon();
        });
    }

    applySavedTheme();

    // ==========================
    // 🔥 Scroll Fade-in Animation
    // ==========================
    const faders = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const appearOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.1 });

        faders.forEach(fadeEl => {
            appearOnScroll.observe(fadeEl);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        faders.forEach(fadeEl => fadeEl.classList.add('visible'));
    }
});