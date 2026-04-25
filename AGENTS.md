# AGENTS.md

Agentic coding guidelines. ~150 lines.

## Project Overview

- **Type**: React 19 SPA portfolio
- **Runtime**: Bun 1.3.6+ (use bun commands)
- **Build**: Vite 6
- **Language**: TypeScript 5.8
- **Path alias**: `@/*` maps to `src/*`

## Commands

| Task       | Command                                |
| ---------- | -------------------------------------- |
| Dev server | `bun dev` / `npm run dev`              |
| Build      | `bun build` / `npm run build`          |
| Preview    | `bun preview` / `npm run preview`      |
| Typecheck  | Bun runs via Vite; no separate command |

**No test framework.** Add tests with Vitest:

```bash
bun add -d vitest
bun vitest run           # single run
bun vitest run filename # single file
```

## Code Style

### Imports

- Use `@/` alias: `import Header from '@/components/layout/Header'`
- Order: React → external libs → internal aliases → types
- No relative paths beyond `./` / `../`

```tsx
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Projects from "@/components/sections/Projects";
import { useI18n } from "@/i18n";
import { Project } from "@/types";
```

### React Components

- Functional + `React.FC` typing
- Destructure props in signature
- Use context hooks; throw on misuse

```tsx
const App: React.FC = () => {
  const { t } = useI18n();
  return <div>{t.hero.name}</div>;
};

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>...</button>;
};
```

### Types

- Define in `src/types/index.ts`
- Export interfaces; use meaningful names
- Avoid `any`

```typescript
export interface Project {
  id: string;
  title: string;
  url: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export type Locale = "pt-BR" | "en" | "es";
```

### Hooks & Context

- Context providers wrap components
- Custom hooks: `useX()` naming
- Throw clear error if used outside provider

```typescript
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

### Error Handling

- try/catch for browser storage (localStorage can throw)
- Catch blocks: empty or comment only
- Never expose secrets in errors

```typescript
try {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
} catch {
  // ignore storage errors
}
```

### Styling

- Tailwind CSS classes
- Dark mode: `dark:` prefix
- Arbitrary values: `[#0B0B0B]`, `[18px]`
- Colors: `neutral-X`, `orange-X`

```tsx
<div className="bg-white dark:bg-neutral-950 text-neutral-100" />
<button className="hover:text-orange-600 dark:hover:text-orange-300" />
<svg className="w-[18px] h-[18px]" />
```

### Animations

- Framer Motion for transitions
- `motion.div`, `motion.section`
- Use `viewport={{ once: true }}` for scroll-triggered

```tsx
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
```

### Component Structure

```
src/
├── app/App.tsx
├── components/
│   ├── layout/     # Header, Footer
│   ├── sections/   # Projects, Experience, TechnicalStack, Education
│   └── ui/         # ThemeToggle, LanguageSwitcher
├── config/         # theme.tsx, constants.ts
├── i18n/           # index.tsx (translations)
└── types/          # index.ts
```

### Naming

- Files: PascalCase for components (`ThemeToggle.tsx`), camelCase for utils
- Props interfaces: `ComponentNameProps`
- Context values: `XContextValue`
- Constants: SCREAMING_SNAKE_CASE

### Additional Guidelines

- No inline styles; use Tailwind
- Avoid `// TODO` comments; create issues instead
- Use `aria-label` for icon-only buttons
- Semantic HTML (`<section>`, `<h2>`, `<button>`)
- No magic numbers; extract to constants
- Env vars via `.env` files; never commit secrets
- Use `export` for public APIs; avoid default where appropriate

## Protected Files and Directories

- **post_mortem/**: Never delete, modify, or alter this directory or any of its contents without explicit and express permission from the user. This restriction applies to all operations including but not limited to: deletion, renaming, moving, content changes, and permission changes.
