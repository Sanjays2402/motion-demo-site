# Aperture — motion-website demo

A scroll-animated marketing landing page for a fictional analog camera brand, built in a single agent session.

This is a demo answer to the "$35K motion-website playbook" pitch (agencies quoting $6K-35K for custom animated sites). No paid motion-asset MCP involved. Just:

- **Vite** (vanilla, no framework)
- **GSAP + ScrollTrigger** for scroll-driven reveals, parallax craft panels, velocity-skewed marquee, and animated counters
- **Lenis** for smooth scroll — including in-page anchor navigation that glides to each section instead of jumping under the fixed nav
- Hand-written CSS, variable fonts (Fraunces + Inter), film-grain overlay
- Respects `prefers-reduced-motion`

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Deploys to GitHub Pages on push to `main`.
