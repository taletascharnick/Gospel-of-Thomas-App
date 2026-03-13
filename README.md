# Gospel of Thomas Reflection App

A contemplative Vue 3 application dedicated to the Gospel of Thomas, offering in-depth reflections on each saying and guidance for entering a meditative space.

## Project Overview

### Purpose
- Present the 114 sayings of the Gospel of Thomas
- Provide thoughtful reflections and commentary on each saying
- Guide users into a contemplative mindset before engaging with the text
- Create a serene, distraction-free reading experience

### Features
- **Welcome / Landing Page** — Introduction, brief history, and guidance for entering a contemplative space
- **Sayings Browser** — Paginated grid of all 114 sayings; click any to open in full
- **Individual Saying Pages** — Each saying includes:
  - Original text (large, centered serif)
  - In-depth reflection / commentary
  - Contemplation prompt
  - **Concept sidebar** — click any highlighted term to open a slide-in panel with definitions
  - **Action sidebar** — icons to copy text, bookmark the saying, or share
  - Previous / Next navigation
- **Admin Panel** (`/admin`) — Password-protected in-browser editor:
  - Set / change admin password (SHA-256 hashed, stored in localStorage)
  - Edit saying text, reflection, contemplation prompt, and concept definitions
  - Toggle published / draft status
  - Export content as JSON (for committing back to the repo)
  - Import a saved JSON snapshot
- **Light / Dark Theme** — Toggle between warm ivory and soft charcoal palettes
- **Mobile-First Responsive** — Designed for phone first; fully usable on tablet and desktop

## Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: CSS with custom properties (dark/light theme support)
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
gospel-of-thomas-app/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css            # Global styles & CSS variables
│   ├── components/
│   │   ├── NavigationBar.vue       # Top nav: back, title, theme toggle
│   │   ├── SayingCard.vue          # Card for the sayings browser
│   │   ├── ConceptSidebar.vue      # Slide-in sidebar: define key terms
│   │   ├── ActionSidebar.vue       # Icon bar: copy, bookmark, share
│   │   └── GuidanceModal.vue       # First-visit contemplative guidance
│   ├── composables/
│   │   ├── useTheme.js             # Light / dark theme toggle
│   │   ├── useAdmin.js             # SHA-256 auth + localStorage
│   │   └── useSayings.js           # Data layer with localStorage overrides
│   ├── views/
│   │   ├── HomeView.vue            # Landing page + guidance
│   │   ├── SayingsView.vue         # Browse all 114 sayings
│   │   ├── SayingDetailView.vue    # Saying + reflection + sidebars
│   │   └── AdminView.vue           # Password-protected content editor
│   ├── data/
│   │   └── sayings.js              # Base data: 114 sayings & reflections
│   ├── router/
│   │   └── index.js                # Vue Router (hash history for GH Pages)
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Deployment (GitHub Pages)

### GitHub Actions Workflow

The app automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Setup Steps

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Configure Base URL**
   - Update `vite.config.js` with your repository name:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```

3. **Push to Main**
   - GitHub Actions will automatically build and deploy

### Manual Deployment

```bash
npm run build
# Output in /dist folder
```

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Plan

### Guidance Section (Home Page)
- Brief history and discovery of the Gospel of Thomas
- How to approach contemplative (non-analytical) reading
- A short breathing / centering prompt before entering
- Setting an intention for the session

### Sayings Structure
Each saying entry includes:
1. **Number** — Saying 1–114
2. **Text** — The saying itself (add your preferred translation or use the paraphrases in `sayings.js`)
3. **Reflection** — In-depth commentary written by you (2–4 paragraphs); add via admin panel
4. **Contemplation Prompt** — A question or focal point for meditation
5. **Concepts** — Key terms with definitions that open in the sidebar
6. **Related Sayings** — Optional cross-references
7. **Published flag** — Draft sayings are visible in the admin panel but hidden from readers

### Admin Workflow
1. Visit `/#/admin` and set your password on first use
2. Select a saying to edit
3. Write your reflection, prompt, and concept definitions
4. Toggle to **Published** when ready
5. Click **Export JSON** and commit the file to `src/data/` to make changes permanent across devices

## Design Philosophy

- **Mobile-First** — Designed for small screens first; layout enhances gracefully on larger ones
- **Minimalist** — Every element serves the reading experience; nothing distracts
- **Contemplative** — Generous whitespace, slow transitions, no alerts or pop-ups that jolt
- **Accessible** — High contrast, keyboard-navigable, ARIA labels on interactive elements
- **Typographic** — Cormorant Garamond for saying text and headings; Lato for navigation and body

### Color Palette
| Token | Light mode | Dark mode |
|---|---|---|
| Background | Warm ivory `#F8F4EB` | Soft charcoal `#16130F` |
| Text | Deep brown `#2C1A11` | Cream `#F0EAD4` |
| Accent | Muted gold `#A07840` | Warm gold `#C9A455` |
| Border | `#D8CDB8` | `#3A3020` |

## Roadmap

- [ ] Phase 1: Project setup, config files, GitHub Actions workflow
- [ ] Phase 2: Core components, router, global styles
- [ ] Phase 3: Home page + sayings browser
- [ ] Phase 4: Individual saying detail view with concept & action sidebars
- [ ] Phase 5: Admin panel (auth, editor, export/import)
- [ ] Phase 6: Write reflections for first 10 sayings
- [ ] Phase 7: Complete all 114 saying reflections
- [ ] Phase 8: Accessibility audit & performance polish
- [ ] Phase 9: Deploy to GitHub Pages

## Admin Security Note

The admin panel uses **frontend-only protection** (SHA-256 password hash in `localStorage`). This is appropriate for a personal site where you are the sole author. It does **not** provide server-side access control — anyone with enough technical knowledge could inspect localStorage. Do not store sensitive data in the admin panel beyond content you intend to publish.

## License

Content reflections are original work. The Gospel of Thomas text is in the public domain.

---

*"Let one who seeks not stop seeking until one finds."* — Saying 2
