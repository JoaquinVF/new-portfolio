ScrollReveal().reveal(document.querySelector(".rv1"), {
  reset: true,
  duration: 1500,
});
ScrollReveal().reveal(document.querySelector(".rv2"), {
  reset: true,
  duration: 1800,
});
ScrollReveal().reveal(document.querySelector(".rv3"), {
  reset: true,
  duration: 1800,
});
ScrollReveal().reveal(document.querySelector(".more-work"), {
  reset: true,
  duration: 1800,
});

var card = document.getElementById("activator");
var tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

var toggle = false;

tl.to(".activator", {
  "background-color": "var(--color-bg-dark)",
  borderRadius: "5em 5em 0 0",
});
tl.to(
  "nav",
  {
    clipPath: "ellipse(100% 100% at 50% 50%)",
  },
  "-=0.5"
);
tl.to(
  "nav img",
  {
    opacity: 1,
    transform: "translateX(0px)",
    stagger: .05,
  },
  "-=.5"
);
tl.pause();

card.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle ? tl.play() : tl.reverse());
});
