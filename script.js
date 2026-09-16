const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');
const sections = document.querySelectorAll('main section[id]');
const whatsappMessage = 'Hello Alok, I am interested in getting a website for my business. I would like to discuss my requirements.';

document.querySelectorAll('.whatsapp-cta').forEach((link) => {
  link.href = `https://wa.me/916387264602?text=${encodeURIComponent(whatsappMessage)}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

document.querySelector('#current-year').textContent = String(new Date().getFullYear());

// Keep the mobile menu accessible and close it after a section is selected.
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

navAnchors.forEach((anchor) => anchor.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}));

// Highlight the section currently in view without requiring a scroll handler.
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const current = entry.target.id;
      navAnchors.forEach((anchor) => anchor.classList.toggle('active', anchor.getAttribute('href') === `#${current}`));
    }
  });
}, { rootMargin: '-25% 0px -65% 0px' });
sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
