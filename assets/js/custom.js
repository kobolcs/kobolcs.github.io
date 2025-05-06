console.log("JS loaded");

// ==========================
// 🌙 Dark Mode Toggle
// ==========================
const toggle = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('dark-mode-icon');

function setDarkModeIcon() {
    if (!icon) return; // ADD THIS SAFETY CHECK
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '🌞'; // Sun for dark mode
    } else {
        icon.textContent = '🌙'; // Moon for light mode
    }
}

if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        setDarkModeIcon();
    });
}

// Apply saved preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}
setDarkModeIcon();

// ==========================
// 🔥 Scroll Fade-in Animation
// ==========================
document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1 });

    faders.forEach(fadeEl => {
        appearOnScroll.observe(fadeEl);
    });
});
// Navbar scroll shadow effect
window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    document.documentElement.classList.add('scrolled');
  } else {
    document.documentElement.classList.remove('scrolled');
  }
});

