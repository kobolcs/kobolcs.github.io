
console.log("JS loaded");

// ==========================
// 🌙 Dark Mode Toggle
// ==========================
const toggle = document.getElementById('dark-mode-toggle');
const icon = document.getElementById('dark-mode-icon');

function setDarkModeIcon() {
    if (!icon) return;
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '🌞';
    } else {
        icon.textContent = '🌙';
    }
}

if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        setDarkModeIcon();
    });
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}
setDarkModeIcon();

// ==========================
// 🔥 Scroll Fade-in Animation (2025 Intersection Observer)
// ==========================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
