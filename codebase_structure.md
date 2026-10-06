# Codebase Tree and Content Structure

This document outlines the directory structure of the Next.js portfolio project and lists the core responsibilities and editable contents of each file.

---

## 📁 Directory Tree

```text
client-portfolio-main/
├── package.json              # Project dependencies and script definitions
├── next.config.ts            # Next.js configurations
├── postcss.config.mjs        # PostCSS and Tailwind processing config
├── tailwind.config.ts        # TailwindCSS configuration
├── public/                   # Static assets
│   └── images/               # Media assets
│       ├── hero-image.png    # Desktop hero background image (16:9)
│       ├── hero-mobile.png   # Mobile hero background image
│       ├── z1.png            # About Section photo
│       └── projects/         # Individual project images
└── src/                      # App source code
    ├── app/                  # Next.js App Router root
    │   ├── favicon.ico       # Website favicon
    │   ├── globals.css       # Core Tailwind and custom theme styles
    │   ├── layout.tsx        # Base page wrapper and HTML structure
    │   └── page.tsx          # Home page routing and section layouts
    └── components/           # UI Components
        ├── LimeViperSplash.tsx    # Lime Green opening split curtain loader
        ├── GreenViperSplash.tsx   # Alternate green curtain loader
        ├── ViperSlider.tsx        # Parallax/reveal page curtain transition
        ├── ui/
        │   └── SectionHeader.tsx  # Standardized component section headers
        └── sections/              # Page content sections
            ├── Hero.tsx           # Page Header, Navigation & Call-to-action
            ├── AboutSection.tsx   # Biography, Social links, & Experience timeline
            ├── ProcessSection.tsx  # Four-step workflow (e.g. Discovery to Dev)
            ├── WorksSection.tsx   # Projects showcase list
            ├── FluidShader.tsx    # Interactive GPU fluid simulator
            ├── FocusSection.tsx   # Summary/highlight stats (if utilized)
            └── FooterSection.tsx  # Contact links, email copy, and footer credits
```

---

## 📝 Key Components & Edit Guidelines

### 1. `src/app/page.tsx`
* **Purpose**: Mounts the page loader (`LimeViperSplash`), parallax reveal container (`ViperSlider`), and arranges all sections in order.
* **Content**: `<Hero />` is sticky on scroll, followed by `<AboutSection />`, `<ProcessSection />`, `<WorksSection />`, and `<FooterSection />`.

### 2. `src/components/sections/Hero.tsx`
* **Purpose**: Displays the full-bleed intro backdrop with overlay text.
* **Key Content to Customize**:
  * **Brand initials** (`MNR` on line 147)
  * **Nav links** (`Home`, `About`, `Projects`, `Contact` on lines 9–14)
  * **Skills list** (`UI/UX Design / Frontend Dev / Problem Solving /` on lines 212–214)
  * **Intro short text** (`Hi, I'm Midhun...` on lines 243–245)
  * **Large Name Title** (`Midhun` on line 275)

### 3. `src/components/sections/AboutSection.tsx`
* **Purpose**: Displays a portrait image (`/images/z1.png`), social links, brief bio paragraph, and professional career/education timeline.
* **Key Content to Customize**:
  * **Timeline data array** (lines 26–31)
  * **Biography paragraph** (lines 145–150)
  * **Social profile URLs** (lines 97–125)
  * **Section name details** (lines 127–132)

### 4. `src/components/sections/ProcessSection.tsx`
* **Purpose**: Displays a list of steps in your design/dev lifecycle (e.g., Discovery, Wireframing, Styling, Dev).
* **Key Content to Customize**: Process step titles, subtitles, and descriptions.

### 5. `src/components/sections/WorksSection.tsx`
* **Purpose**: Interactive portfolio project showcase cards.
* **Key Content to Customize**: Project names, summaries, tags, mock image files, and links.

### 6. `src/components/sections/FooterSection.tsx`
* **Purpose**: "Let's work together" email section, custom contact links, and copyright text.
* **Key Content to Customize**: Email address, copyright year, footer links.
