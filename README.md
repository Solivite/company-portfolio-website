# Solivite - Company Portfolio Website

A modern, elegant portfolio website for Solivite, a complete digital solutions company.

## Features

- 🎨 Modern glassmorphic design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14, TypeScript, and Tailwind CSS
- 🎭 Framer Motion animations for smooth interactions
- 🌈 Beautiful gradient color schemes
- 📄 Multiple service pages covering all digital solutions
- ✉️ Contact form with newsletter subscription

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with newsletter
│   ├── services/       # Service pages
│   │   ├── design/
│   │   ├── content/
│   │   ├── data-ai/
│   │   ├── development/
│   │   ├── marketing/
│   │   └── games/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── ServicesPreview.tsx
│   └── Features.tsx
└── lib/
    └── utils.ts        # Utility functions
```

## Services Offered

- **Design Services**: Graphic design, video editing, animations, logo design, UI/UX
- **Content Writing**: Blog writing, copywriting, technical writing, social media content
- **Data & AI**: Machine learning, data analytics, business intelligence, AI integration
- **Development**: WordPress, Shopify, custom web apps, mobile apps, full-stack solutions
- **Digital Marketing**: SEO, social media marketing, PPC, email marketing, analytics
- **Games**: Game development, mobile games, AR/VR, multiplayer games

## Customization

### Colors

Edit the color scheme in `app/globals.css` and `tailwind.config.ts`.

### Logo

Replace the logo placeholder in `components/Header.tsx` and `components/Footer.tsx` with your actual logo images.

### Content

All content can be customized in the respective page files in the `app/` directory.

## License

This project is proprietary and confidential.

