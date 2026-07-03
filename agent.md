# Agent

Instructions for the AI agent working on this project.

## Conventions

- Follow existing code style and patterns
- Mimic naming conventions, libraries, and frameworks used in the codebase
- Run lint and typecheck commands after making changes
- Do not add comments to code unless requested

## Workflow

1. Explore the codebase to understand the relevant area and existing patterns
2. Plan the approach — consider trade-offs, security implications, and edge cases before writing code
3. Write tests when applicable
4. Follow clean code principles: meaningful names, small focused functions, DRY, no dead code, no hardcoded secrets
5. Never commit secrets, API keys, or sensitive data — use environment variables
6. Validate and sanitize all user inputs and external data
7. Verify with lint and typecheck before finishing

## Communication

- Be concise
- Reference file paths with line numbers when relevant
- Do not add explanations unless asked

## Personal Website

When asked to create a personal website using React, TypeScript, and Tailwind CSS:

### Setup

1. Scaffold with Vite + React + TypeScript
2. Configure Tailwind CSS (v3, with `tailwind.config.ts` and `@tailwind` directives in `index.css`)
3. Self-host fonts for performance; avoid Google Fonts CDN
4. Keep the setup minimal — no state management libraries, no routing unless requested

### Structure & Style

1. Build sections: Header, Hero, About, Projects, Contact, Footer
2. Build mobile-first with responsive design — hamburger menu for nav on small screens, stacked layouts, adequate touch targets
3. Use functional components with TypeScript (`interface` for props)
4. Style with Tailwind utility classes — avoid custom CSS where possible
5. Use a blue color palette via Tailwind theme customization — inspired by LinkedIn's brand blue (`#0A66C2`): deep navy for headers, vibrant blue for accents/links, light blue-gray for backgrounds, and neutral grays for text

### Theme

1. Implement light/dark mode:
   - Use Tailwind's `dark:` variant with `class` strategy (`darkMode: 'class'` in `tailwind.config.ts`)
   - Add a toggle component in the header that switches `.dark` class on `<html>`
   - Persist preference in `localStorage` and respect `prefers-color-scheme` system setting on first visit
   - Define semantic color tokens via CSS custom properties or Tailwind `dark:` utilities for backgrounds, text, borders, and links
   - Ensure sufficient contrast in both modes (WCAG AA minimum)

### Content & Interaction

1. Model projects as a typed array of `Project` objects and render them as a card grid
2. Add a Contact section with a validated form and a `mailto:` fallback; no backend required
3. Add basic SEO via `react-helmet-async` or manual `<title>`/meta tags

### Accessibility

1. Use semantic HTML throughout
2. Add ARIA labels on interactive elements
3. Ensure full keyboard navigation with visible focus indicators
4. Manage focus for the mobile menu toggle
5. Include a skip-to-content link

### Animations

Add advanced CSS animations inspired by Josh Comeau's site:

- Playful micro-interactions on hover (scale, rotate, squash-and-stretch)
- Physics-based motion using `cubic-bezier()` for spring-like bounces
- Scroll-triggered entrance animations (fade-up, fade-in with slight displacement)
- Smooth color/background transitions
- SVG morphing or animated decorative elements
- Use `@keyframes` for multi-step animations, `transition` for simple state changes
- Always wrap animations in `@media (prefers-reduced-motion: no-preference)` and provide a static fallback under `prefers-reduced-motion: reduce`

### Performance

1. Optimize images — use AVIF/WebP formats with a `<picture>` element or `srcset`, set explicit dimensions, enable lazy loading with `loading="lazy"`
2. Implement code splitting and lazy loading — use `React.lazy()` + `Suspense` per section/route to reduce initial bundle size
3. Add bundle analysis via `vite-plugin-visualizer` to monitor what's shipped
4. Self-host fonts (already covered in Setup)

### Deploy

1. Deploy to Vercel with zero config
