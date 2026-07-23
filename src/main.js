import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Smooth scroll (skip when the user asked for reduced motion)
if (!reduceMotion) {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Hero intro
if (!reduceMotion) {
  const heroLines = gsap.utils.toArray(".hero .line [data-reveal], .hero [data-reveal]");
  gsap.set(".hero [data-reveal]", { opacity: 0, y: 40 });
  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .to(".hero__eyebrow", { opacity: 1, y: 0, duration: 0.8 }, 0.1)
    .to(".hero__title .line", { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, 0.2)
    .to(".hero__sub", { opacity: 1, y: 0, duration: 0.8 }, 0.6)
    .to(".hero__actions", { opacity: 1, y: 0, duration: 0.8 }, 0.75)
    .to(".hero__scrollcue", { opacity: 1, y: 0, duration: 0.8 }, 0.9);
  void heroLines;
}

// Generic reveal-on-scroll for everything outside the hero
gsap.utils.toArray("[data-reveal]").forEach((el) => {
  if (el.closest(".hero")) return;
  if (reduceMotion) {
    gsap.set(el, { opacity: 1, y: 0 });
    return;
  }
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 85%" },
  });
});

// Horizontal marquee driven by scroll velocity
if (!reduceMotion) {
  const track = document.querySelector(".marquee__track");
  if (track) {
    let base = 0;
    gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 18,
      ease: "none",
    });
    ScrollTrigger.create({
      trigger: ".marquee",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const skew = self.getVelocity() / 300;
        gsap.to(track, { skewX: gsap.utils.clamp(-12, 12, skew), duration: 0.4, overwrite: true });
      },
    });
    void base;
  }
}

// Craft panels: subtle parallax + fade as they pass
if (!reduceMotion) {
  gsap.utils.toArray(".craft__panel").forEach((panel) => {
    gsap.fromTo(
      panel,
      { opacity: 0.15, y: 60 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: { trigger: panel, start: "top 80%", end: "top 40%", scrub: 1 },
      },
    );
  });
}

// Animated number counters
gsap.utils.toArray("[data-count]").forEach((el) => {
  const end = parseInt(el.getAttribute("data-count"), 10);
  if (reduceMotion) {
    el.textContent = String(end);
    return;
  }
  const obj = { v: 0 };
  gsap.to(obj, {
    v: end,
    duration: 1.6,
    ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 85%", once: true },
    onUpdate: () => {
      el.textContent = Math.round(obj.v).toString();
    },
  });
});

// Gallery tiles: gentle scale-in
if (!reduceMotion) {
  gsap.utils.toArray(".g").forEach((tile, i) => {
    gsap.fromTo(
      tile,
      { scale: 0.92, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: (i % 2) * 0.08,
        scrollTrigger: { trigger: tile, start: "top 88%" },
      },
    );
  });
}

// Fake reserve form feedback so the demo feels alive
const form = document.querySelector(".reserve__form");
if (form) {
  form.addEventListener("submit", () => {
    const btn = form.querySelector("button");
    const input = form.querySelector("input");
    if (input && !input.value) return;
    if (btn) {
      btn.textContent = "Reserved. Check your inbox.";
      btn.style.background = "#7bd88f";
    }
  });
}
