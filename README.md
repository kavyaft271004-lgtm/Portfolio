# Kavya Sivakumar — Portfolio

A cinematic, single-page portfolio for Kavya Sivakumar, built around a recurring goldfish motif — an underwater-themed hero that settles into an elegant black-and-gold layout for the rest of the story: About, Skills, Experience, Projects, and Contact.

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) for scroll-triggered and entrance animations
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/) for iconography

## Getting Started

```bash
npm install
npm run dev
```

The dev server prints a local URL (defaults to `http://localhost:5173`).

### Other scripts

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # run oxlint
```

## Project Structure

```
src/
  components/
    hero/          Hero section (name, tagline, animated goldfish)
    about/          About section (bio, portrait, interests)
    skills/        Skills section
    experience/    Experience timeline + education/certifications
    projects/      Academic project case studies
    contact/       Contact section
    layout/        Navbar
    footer/        Footer
    background/    Underwater ambient background (Hero only)
    ui/            Shared primitives (Button, GlassCard, SectionHeading, etc.)
  data/            Content — profile, experience, skills, education, projects
  hooks/           useLenis (smooth scroll)
  pages/           Home (assembles all sections)
  styles/          Design tokens (theme.css) + global styles
public/
  images/          Portrait
  resume/          Downloadable resume PDF
```

## Content

All copy in `src/data/` is sourced from Kavya's resume and is kept in sync with it — update the relevant file there to change what's shown on the site.

## Design System

Design tokens (colors, spacing, radius, transitions) live in `src/styles/theme.css` as CSS custom properties, consumed throughout via Tailwind's arbitrary-value syntax (e.g. `bg-[var(--background)]`).
