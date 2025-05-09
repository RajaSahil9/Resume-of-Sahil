// Theme Toggle
const toggleButton = document.querySelector('.theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Animate Skill Bars
window.addEventListener('load', () => {
    document.querySelectorAll('.progress').forEach(bar => {
        let level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
    });
}); 