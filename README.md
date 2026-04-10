# Waldo Blom — Personal Portfolio Website

A personal portfolio and CV website rebuilt with a modern tech stack. The live version is available at [waldoblom.com](https://waldoblom.com).

---

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** — React framework with App Router
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** — Accessible, customizable component library built on Radix UI

---

## Project Structure

```
CV-website/
├── app/                        # Next.js App Router (routing only)
│   ├── layout.tsx              # Root layout (Navbar, Footer)
│   ├── page.tsx                # Home page (single-page CV)
│   ├── globals.css             # Global styles & shadcn CSS variables
│   └── projects/
│       └── page.tsx            # Projects page (/projects)
├── components/
│   ├── ui/                     # shadcn/ui primitives (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── sections/               # Custom page sections & components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── TechStack.tsx
│       ├── Experience.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── ProjectCard.tsx
├── public/                     # Static assets (images, CV PDF, icons)
├── lib/                        # Utility functions
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Tech Stack, Experience, and Contact sections |
| `/projects` | Projects — Showcase of personal and academic projects |

---

## Branching Strategy

| Branch | Purpose |
|---|---|
| `main` | Production — live at waldoblom.com |
| `modern-tech-stack` | Active development branch for this rebuild |

All development for this rebuild happens on the `modern-tech-stack` branch. The `main` branch reflects the currently hosted version and is only updated when a new version is ready to go live.

---

## Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for base components. Components are installed individually and live in `components/ui/`. Custom page sections are built on top of these primitives and live in `components/sections/`.

To add a new shadcn component:

```bash
npx shadcn@latest add [component-name]
```

---

