 document.addEventListener('DOMContentLoaded', () => {
  const callBtn = document.getElementById('callBtn');
  const emailBtn = document.getElementById('emailBtn');
  const linkedinBtn = document.getElementById('linkedinBtn');
  const githubBtn = document.getElementById('githubBtn');

  if (callBtn) {
    callBtn.addEventListener('click', () => {
          window.location.href = "tel:+919347141387";
    });
  }

  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      window.location.href = "mailto:sameersyed0111@gmail.com";
    });
  }

  if (linkedinBtn) {
    linkedinBtn.addEventListener('click', () => {
      window.open("https://www.linkedin.com/in/sameersyedin49?trk=public-profile-join-page", "_blank");
    });
  }

  if (githubBtn) {
    githubBtn.addEventListener('click', () => {
      window.open("https://github.com/sameersyed0197-creator", "_blank");
    });
  }

  // Smooth scroll offset for fixed header
  const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});
