export function initScrollAnimations(): void {
  const selector = [
    '.anim-fade-up',
    '.anim-fade-in',
    '.anim-slide-right',
    '.anim-slide-left',
    '.anim-scale-in',
  ].join(', ');

  // Wait one frame so browser has painted and getBoundingClientRect is accurate
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -80px 0px',
      },
    );

    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (alreadyVisible) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });
  });
}
