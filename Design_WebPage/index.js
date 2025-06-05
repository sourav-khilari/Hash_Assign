document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
    const isExpanded =
      hamburger.getAttribute('aria-expanded') === 'true';
    // Toggle aria-expanded
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    // Toggle visibility
    if (navbar.style.display === 'flex') {
      navbar.style.display = 'none';
    } else {
      navbar.style.display = 'flex';
    }
  });


  document.addEventListener('click', (e) => {
    if (
      !navbar.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navbar.style.display = 'none';
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
