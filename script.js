if (window.innerWidth > 768) {
  const srScript = document.createElement('script');
  srScript.src = 'https://unpkg.com/scrollreveal';
  srScript.onload = () => {
    const targets = [
      { selector: '.rv1', duration: 1500 },
      { selector: '.rv2', duration: 1800 },
      { selector: '.rv3', duration: 1800 },
      { selector: '.more-work', duration: 1800 }
    ];

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cfg = targets.find(t => entry.target.matches(t.selector));
          if (cfg) {
            ScrollReveal().reveal(entry.target, { reset: true, duration: cfg.duration });
          }
          obs.unobserve(entry.target);
        }
      });
    });

    targets.forEach(t => {
      const el = document.querySelector(t.selector);
      if (el) {
        observer.observe(el);
      }
    });
  };
  document.head.appendChild(srScript);
}

var card = document.getElementById('activator');
if (card) {
  var tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

  var toggle = false;

  tl.to('.activator', {
    'background-color': '#040507',
    borderRadius: '5em 5em 0 0',
  });
  tl.to(
    'nav',
    {
      clipPath: 'ellipse(100% 100% at 50% 50%)',
    },
    '-=0.5'
  );
  tl.to(
    'nav img',
    {
      opacity: 1,
      transform: 'translateX(0px)',
      stagger: 0.05,
    },
    '-=.5'
  );
  tl.pause();

  card.addEventListener('click', () => {
    toggle = !toggle;
    if (toggle ? tl.play() : tl.reverse());
  });
}
