# J.V. Portfolio — React + Tailwind CSS

A modern, production-ready React portfolio built with **Vite**, **React Router**, and **Tailwind CSS v3**.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── assets/                    # Static images
├── components/
│   ├── common/                # Shared, generic components
│   │   ├── FadeUp.jsx         # Scroll-reveal wrapper
│   │   ├── SectionHeader.jsx  # Label + title block
│   │   ├── SkillTag.jsx       # Skill pill badge
│   │   └── ProjectStatusBadge.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── ui/                    # Feature-specific components
│       ├── AnimatedName.jsx
│       ├── TypewriterRole.jsx
│       ├── HeroOrbs.jsx
│       ├── HeroCodeBlock.jsx
│       ├── HeroStats.jsx
│       ├── ScrollIndicator.jsx
│       ├── SkillTicker.jsx
│       ├── ProjectCard.jsx
│       ├── ExperienceItem.jsx
│       ├── ContactForm.jsx
│       ├── SocialLinks.jsx
│       ├── ThemeToggle.jsx
│       └── Hamburger.jsx
├── hooks/
│   ├── useActiveSection.js
│   ├── useContactForm.js
│   ├── useCursor.js
│   ├── useIntersection.js
│   ├── useParticleCanvas.js
│   ├── useScrolled.js
│   ├── useTheme.js
│   └── useTypewriter.js
├── pages/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Home.jsx
├── styles/
│   └── globals.css            # Tailwind directives + CSS design tokens
├── utils/
│   └── data.js                # All static data
├── App.jsx
└── main.jsx
```

---

## 🎨 Styling

- **Tailwind CSS v3** — utility-first, zero CSS modules
- **CSS custom properties** as design tokens (`--gold`, `--ink`, `--cream`, etc.)
- Tailwind `colors` and `keyframes` reference the tokens so both themes work automatically
- Only 3 global classes retained in `globals.css`: `.fade-up`, `.ticker-track:hover`, and light-mode card overrides

### Light / Dark Theme
Toggle is stored in `localStorage` via `useTheme`. The `html.light` class swaps every CSS variable — Tailwind color utilities pick them up automatically because they are mapped to `var(--token)`.

---

## 📦 Assets

Copy your images into `public/assets/`:

```
public/
└── assets/
    ├── pic1.jpg
    ├── weatherapp.png
    ├── task.png
    ├── pmdbs.png
    ├── mc.png
    └── quiz.png
```

---

## 🔧 Tech Stack

| Tool | Version |
|---|---|
| React | 18 |
| Vite | 5 |
| React Router DOM | 6 |
| Tailwind CSS | 3 |
| PostCSS + Autoprefixer | latest |
