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

## Terms & Disclaimer

By using this project you agree to the following.

- **No warranty.** This software is provided "as is", without warranty of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
- **No liability.** To the maximum extent permitted by law, the author and contributors are not liable for any claim, loss, or damage (direct, indirect, incidental, or consequential, including lost data or profits) arising from its use.
- **Your responsibility.** You use it at your own risk and are responsible for complying with the laws that apply to you.
- **Third parties.** Names, logos, APIs, and services of others belong to their owners and are used for identification only; no affiliation or endorsement is implied.
- **Your statutory rights.** Nothing here limits rights that cannot be waived by agreement, including under consumer-protection laws in the USA, Canada (including Quebec), and India (Consumer Protection Act, 2019).
- **License.** No open-source license is granted. All rights reserved; you may view and fork this repository only as GitHub's Terms of Service allow.
