if (window.innerWidth > 768) {
  const srScript = document.createElement('script');
  srScript.src = 'https://unpkg.com/scrollreveal';
  srScript.onload = () => {
    ScrollReveal().reveal('.project-card', { interval: 100, distance: '20px', duration: 1000 });
  };
  document.head.appendChild(srScript);
}
