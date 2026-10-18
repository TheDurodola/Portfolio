# Durodola Abolaji Toliat — Engineering Portfolio

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.4-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Bundler-Turbopack-000000?style=flat&logo=vercel)](https://turbo.build/pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An editorial, magazine-style web portfolio engineered with high-contrast brutalist principles (inspired by the VoiceBox design system). Designed to showcase robust backend engineering, API architectures, distributed systems, and end-to-end full-stack software delivery.

---

## Overview

This portfolio is the personal developer portfolio and case-study showcase of **Durodola Abolaji Toliat**, a Software Engineer specializing in backend infrastructure, API design, and distributed systems.

The site rejects generic portfolio templates in favor of a bold, print-magazine aesthetic: heavy editorial typography, stark monochrome surfaces, precision architectural framing, and an aggressive crimson accent (`#EF4444`) that emphasizes key engineering principles and metrics.

---

## Design Philosophy & Aesthetic

- **Editorial Layout**: Inspired by high-contrast cultural commentary magazines, with bold headlines, section numbering, and sharp 2px structural borders.
- **Typography Matrix**:
  - `Archivo Black`: High-impact display headlines and quote dividers.
  - `Work Sans`: Clean, highly legible body copy and prose.
  - `Space Mono`: Technical timestamps, schema markers, and data labels.
- **Dynamic Marquee Tickers**: Smooth, multi-track infinite tickers powered by `motion/react` showcasing competencies across languages, frameworks, databases, and DevOps tools.
- **Responsive Architecture**: Fully responsive across mobile, tablet, and ultra-wide screens.

---

## Key Sections

| Section                     | Description                                                                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero & Lede Essay**       | Core engineering ethos ("Design, Build, Maintain"), live status indicator, and downloadable CV.                                                                       |
| **Experience**              | Professional history detailing roles as Independent Contractor, Software Engineer at Semicolon Africa, and IT Infrastructure Specialist at CrownCrystal Technologies. |
| **Project Case Studies**    | In-depth breakdowns of real-world systems, architectures, and technical stacks.                                                                                       |
| **Tools Ticker**            | Interactive multi-row animated marquee categorizing languages, frameworks, cloud tooling, and systems practices.                                                      |
| **Education & Credentials** | B.Sc. in Computer Science (Bowen University), Henley Business School Management Module, and New Horizons credentials.                                                 |
| **Direct Contact Channels** | High-contrast interactive contact cards linking directly to Gmail, GitHub, LinkedIn, X (Twitter), and WhatsApp.                                                       |

---

## Featured Systems & Case Studies

1. **Event Registration and Accreditation Platform**
   - Multi-category registration system with webhook-confirmed Naira payments via Paystack, signed QR badge generation for event check-in, and administrative approval portals.
   - _Stack_: Golang, Gin-gonic, Supabase, Paystack API, Next.js, Tailwind CSS.

2. **MedCheck**
   - End-to-end traceability system combating drug counterfeiting using unique serialization to track pharmaceutical provenance from manufacturing plants to consumers.
   - _Stack_: Java, Spring Boot, PostgreSQL, Dart, Flutter, Next.js.

3. **School Management Portal (ePortal)**
   - Backend service with bulk student/staff registration via Apache POI Excel uploads, validated using Jakarta Bean Validation with RFC 9457 error responses.
   - _Stack_: Spring Boot, MongoDB, Next.js, Tailwind CSS, Jakarta Bean Validation.

4. **CampusPlacement**
   - Machine learning preprocessing pipeline across a 100,000-entry dataset with stratified sampling, ordinal/one-hot encoding, and standard scaling.
   - _Stack_: Python, FastAPI, Scikit-Learn, Pandas, NumPy, Streamlit.

5. **KutIt**
   - Collision-resistant URL shortening service powered by a high-entropy base-62 algorithm yielding over 3.5 trillion unique 7-character identifiers.
   - _Stack_: Java, Spring Boot, MySQL, React + Vite.

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Runtime**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- **Animations**: [Motion](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: [Radix UI](https://www.radix-ui.com/) primitives & [shadcn/ui](https://ui.shadcn.com/) patterns
- **Analytics & Telemetry**: `@vercel/analytics`, `@vercel/speed-insights`
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)

---

## Project Structure

```text
portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Tailwind v4 theme & base styles
│   ├── icon.png
│   ├── layout.tsx               # Root layout, Google fonts & analytics
│   ├── loading.tsx              # Fallback loading UI
│   └── page.tsx                 # Main single-page portfolio layout
├── components/
│   ├── logo-mark.tsx            # Custom header SVG logo mark
│   ├── site-header.tsx          # Top navigation & edition banner
│   ├── site-footer.tsx          # Editorial footer with copyright & contact
│   ├── sections/
│   │   ├── hero-section.tsx       # Lede essay, bio card, CV download
│   │   ├── experience-section.tsx # Career history & impact highlights
│   │   ├── projects-section.tsx   # Case studies & system builds
│   │   ├── tools-section.tsx      # Infinite horizontal motion tickers
│   │   ├── education-section.tsx  # Academic degrees & certifications
│   │   ├── contact-section.tsx    # Direct contact channels
│   │   └── quote-section.tsx      # High-contrast editorial typographic breaks
│   └── ui/                      # Reusable UI primitives (Button, Card, etc.)
├── public/                      # Static assets (CV, profile images, logos)
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies & build scripts
├── tsconfig.json                # TypeScript compiler configuration
└── README.md                    # Project documentation
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.x or newer recommended)
- [npm](https://www.npmjs.com/) (or `pnpm` / `yarn` / `bun`)

### 1. Clone the repository

```bash
git clone https://github.com/TheDurodola/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page supports hot module replacement (HMR) powered by Turbopack.

### 4. Build for production

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

### 5. Linting

```bash
npm run lint
```

---

## Contact & Connect

- **Email**: [bolajidurodola@gmail.com](mailto:bolajidurodola@gmail.com)
- **GitHub**: [@TheDurodola](https://github.com/TheDurodola)
- **LinkedIn**: [in/toliat-durodola](https://www.linkedin.com/in/toliat-durodola/)
- **X (Twitter)**: [@lookingfor_boj](https://x.com/lookingfor_boj)
- **WhatsApp**: [+234 802 684 8847](https://wa.me/2348026848847)

---

## License

This project is open-source and licensed under the [MIT License](LICENSE).
