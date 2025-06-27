const typingElement = document.getElementById('typing');
const words = ['coding.', 'building apps.', 'learning.', 'problem solving.', 'creating websites.', 'exploring new technologies.'];
let wordIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const current = words[wordIndex];
    if (isDeleting) {
        typingElement.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, 50);
        }
    } else {
        typingElement.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else {
            setTimeout(type, 100);
        }
    }
}
if (typingElement) type();

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
function setTheme(mode) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(mode);
    themeToggle.textContent = mode === 'dark-mode' ? '🌞' : '🌙';
    localStorage.setItem('theme', mode);
}
themeToggle.addEventListener('click', () => {
    const mode = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
    setTheme(mode);
});
window.onload = () => {
    setTheme(localStorage.getItem('theme') || 'light-mode');
};

const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        formMsg.textContent = 'Thank you for reaching out! I will get back to you soon.';
        contactForm.reset();
    });
}