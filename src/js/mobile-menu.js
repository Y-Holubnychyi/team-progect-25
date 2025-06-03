const mobileLinks = document.querySelectorAll('.nav-link-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.mobile-menu-close');

mobileLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    mobileLinks.forEach(l => l.classList.remove('current'));
    link.classList.add('current');
  });
});

closeButton.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    mobileMenu.classList.remove('is-open');
  }
});
