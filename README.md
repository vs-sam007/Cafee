# ☕ DVicious Brew — Premium Artisanal Coffee Experience

[![Live Site](https://img.shields.io/badge/Live-caffee001.netlify.app-gold?style=for-the-badge&logo=netlify&logoColor=white&color=2C1810&labelColor=C6A87C)](https://caffee001.netlify.app/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react&logoColor=white&color=20232a&labelColor=3E2723)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&color=38B2AC&labelColor=2C1810)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-green?style=for-the-badge&logo=greensock&logoColor=white&color=88CE02&labelColor=3E2723)](https://greensock.com/gsap/)

Welcome to the digital home of **DVicious Brew**, a high-end, immersive, and sensory-rich web application designed for a boutique artisanal coffee shop. This application delivers a modern web experience, engaging users through premium typography, curated imagery, smooth parallax movements, and interactive design elements.

✨ **Live Demo**: [https://caffee001.netlify.app/](https://caffee001.netlify.app/)

---

## 🎨 Premium Design System & Aesthetics

The application implements a meticulously tailored design palette inspired by the rich tones of premium dark roasts, golden crema, and organic linen.

### 🎨 Color Palette
| Color | Hex Code | Visual Application |
|:---:|:---:|:---|
| **Coffee Dark** | `#2C1810` | Primary backgrounds, high-contrast headings, text accents |
| **Coffee Roast** | `#3E2723` | Secondary backgrounds, cards, hover highlights |
| **Gold Crema** | `#C6A87C` | Primary accents, interactive icons, borders |
| **Gold Roasted** | `#B08D55` | Staggered states, active navigation indicators, hover states |
| **Soft Cream** | `#FAFAF5` | Primary body backgrounds, light-contrast text fields |
| **Warm Cream** | `#F0EFE9` | Section backgrounds, card containers |

### ✍️ Typography
- **Headings**: `Playfair Display` (Serif) — Brings an elegant, literary, and high-end feel to page titles.
- **Body Text**: `Lato` (Sans-Serif) — Offers modern readability, crisp letter-spacing, and professional layout flow.

---

## 🚀 Key Features

*   **🎬 Cinematic Parallax Hero**: Features a slow-motion background zoom and dynamic entry timelines for titles and call-to-actions, completely driven by **GSAP** and **ScrollTrigger**.
*   **🎪 Coverflow Carousel ("Moments of Joy")**: A premium, touch-responsive 3D Coverflow slider built with **Swiper.js** highlighting customer stories, laughter, and cozy cafe vibes.
*   **🍽️ Interactive Menu System**: Features dynamic tab switching between **Coffee Classics**, **Specialty Lattes**, and **Tea & Beverages** with elegant staggered fade-in animations.
*   **📖 "We Love Coffee" Split-Scroll**: An interactive split-screen storytelling showcase. As the user scrolls, high-quality images smoothly transition in a sticky left container to match the active narrative stage (The Origin, The Roast, The Ritual) on the right.
*   **📰 Coffee Journals & News**: A beautiful article card grid featuring elegant hover-scale transitions to invite users to explore the cafe's insights and coffee culture.
*   **💬 Floating Customer Support**: Instant accessibility via a floating, interactive **WhatsApp chat widget** positioned in the bottom-right corner.
*   **📍 Dark-Mode Google Maps Integration**: Custom greyscale styled maps embedded in the footer, matching the coffee shop's dark luxury theme.

---

## 🛠️ Technology Stack

The application is engineered with high-performance modern tools:

-   **React 19** — Next-gen declarative view rendering.
-   **Vite** — Ultra-fast frontend tooling and building utility.
-   **Tailwind CSS v4** — Utilizing the brand-new `@theme` compiler for custom fonts and color tokens directly integrated in stylesheet imports.
-   **GSAP & ScrollTrigger** — High-performance timelines and scroll-driven interactive animations.
-   **Swiper.js** — Premium slide swiping and coverflow transitions.
-   **React Router DOM** — Internal client-side routing.
-   **React Icons** — Seamless SVG iconography.

---

## 📂 Project Architecture

```directory
dv-cafe/
├── public/                 # Static assets, local illustrations, maps
├── src/
│   ├── assets/             # Brand logos and decorative assets
│   ├── components/         # High-fidelity reusable visual components
│   │   ├── Footer.jsx      # Styled dark map, hours, social links
│   │   ├── Hero.jsx        # GSAP animated header with parallax background
│   │   ├── ImageCarousel.jsx # Swiper 3D coverflow moment slider
│   │   ├── MenuSection.jsx # Animated tabbed beverage menu cards
│   │   ├── News.jsx        # Grid list of latest coffee articles
│   │   ├── Welovecoffee.jsx # Dual column sticky scroll story component
│   ├── App.css             # Main component overrides
│   ├── App.jsx             # Router layout and floating WhatsApp button
│   ├── index.css           # Tailwind v4 import & custom theme definition
│   └── main.jsx            # Application bootstrap mount point
├── eslint.config.js        # Linting standards definition
├── index.html              # Custom Google fonts loader
├── package.json            # Scripts & libraries dependencies list
└── vite.config.js          # Vite and Tailwind compiler plugin setups
```

---

## 💻 Local Setup & Development

To run the application locally on your machine, follow these instructions:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18.0.0 or higher recommended).

### Step-by-Step Installation
1.  **Clone the Repository**
    ```bash
    git clone https://github.com/vs-sam007/Cafee.git
    cd Cafee
    ```

2.  **Navigate to the React Application**
    ```bash
    cd dv-cafe
    ```

3.  **Install Project Dependencies**
    ```bash
    npm install
    ```

4.  **Launch the Local Development Server**
    ```bash
    npm run dev
    ```
    Once started, open [http://localhost:5173](http://localhost:5173) in your browser to view the application in real-time.

5.  **Build for Production**
    To compile a minified, production-ready version of the site:
    ```bash
    npm run build
    ```

---

## 🌐 Deployment

The site is continuously deployed using modern CI/CD practices on **Netlify**:
-   **Build Command**: `npm run build`
-   **Publish Directory**: `dv-cafe/dist`
-   **Hosting URL**: [https://caffee001.netlify.app/](https://caffee001.netlify.app/)

---

## ☕ Art in a Cup, Code in a Editor
Crafted with 🖤 for premium coffee lovers. Feel free to explore the code, open issues, or submit pull requests to enhance the brewing experience!
