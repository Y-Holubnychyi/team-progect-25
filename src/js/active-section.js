document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('current'));
          if (link) link.classList.add('current');
        }
      });
    },
    {
      threshold: 0.75,
    }
  );

  sections.forEach(section => observer.observe(section));
});
