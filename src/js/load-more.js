document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.catalog-btn');
  const items = document.querySelectorAll('.catalog-item');
  const mobileMaxWidth = 767;

  function updateVisibility() {
    if (window.innerWidth <= mobileMaxWidth) {
      btn.style.display = 'block';
      for (let i = 4; i < items.length; i++) {
        items[i].style.display = 'none';
      }
      btn.textContent = 'Show more';
    } else {
      btn.style.display = 'none';
      items.forEach(item => (item.style.display = 'block'));
    }
  }

  btn.addEventListener('click', () => {
    const isHidden = items[4].style.display === 'none';
    for (let i = 4; i < items.length; i++) {
      items[i].style.display = isHidden ? 'block' : 'none';
    }
    btn.textContent = isHidden ? 'Hide' : 'Show more';
  });

  updateVisibility();
  window.addEventListener('resize', updateVisibility);
});
