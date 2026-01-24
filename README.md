# 🌟 Stellar - Modern SaaS Landing Page

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A pixel-perfect, production-ready SaaS landing page built with modern web technologies**

[Live Demo](#) • [Documentation](#-documentation) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [Design Specifications](#-design-specifications)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**Stellar** is a modern, fully responsive SaaS landing page meticulously crafted to match Figma design specifications with pixel-perfect accuracy. Built as part of an internship assignment, this project demonstrates professional-grade frontend development practices, clean code architecture, and attention to detail.

### Key Highlights

✨ **Pixel-Perfect Implementation** - Strictly adheres to Figma design specifications  
🎨 **Modern UI/UX** - Smooth animations, hover effects, and interactive elements  
📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices  
⚡ **Performance Optimized** - Fast load times and smooth interactions  
🏗️ **Production Ready** - Clean, maintainable, and well-documented codebase  
♿ **Accessible** - Follows WCAG guidelines for web accessibility

---

## ✨ Features

### 🏠 Homepage
- **Hero Section** with animated phone mockup and floating stats cards
- **Trust Section** featuring company logos with auto-scrolling carousel
- **Features Section** with multiple subsections showcasing product capabilities
- **Big Features Section** with grid background and detailed feature cards
- **CTA Section** promoting 7-day free trial
- **Footer** with comprehensive navigation and social links

### 💰 Pricing Page
- Four pricing tiers: Developer, Essential, **Business** (highlighted), and Premium
- Responsive grid layout adapting to different screen sizes
- Detailed feature lists with checkmark icons
- Special styling for the recommended Business tier
- Dual-layer inverted grid background pattern

### 🔐 Login Page
- Split-screen layout with form and dashboard preview
- OAuth integration buttons (Google, Twitter)
- Email/password login form with validation
- Interactive dashboard preview with sequential slide-in animations
- Responsive design for mobile devices

### 🎨 Additional Pages
- About, Contact, Blog, Product, Integration, Templates, Sign Up, and 404 pages
- Consistent design language across all pages
- Smooth page transitions with React Router

---

## 🛠️ Tech Stack

### Core Technologies
- **[React 18.3](https://react.dev/)** - Modern UI library with hooks and concurrent features
- **[Vite 5.4](https://vitejs.dev/)** - Next-generation frontend build tool for blazing-fast development
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development

### Libraries & Tools
- **[React Router DOM 7.12](https://reactrouter.com/)** - Declarative routing for React applications
- **[Framer Motion 12.27](https://www.framer.com/motion/)** - Production-ready animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon set
- **[@splinetool/react-spline](https://spline.design/)** - 3D design integration (if applicable)
- **[@fontsource/fustat](https://fontsource.org/)** - Self-hosted Fustat font family

### Development Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS transformations
- **Autoprefixer** - Automatic vendor prefixing

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16.0 or higher)
- **npm** (v7.0 or higher) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stellar-saas-landing.git
   cd stellar-saas-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📁 Project Structure

```
stellar/
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   ├── logos/                   # Company logos
│   └── vite.svg                 # Vite logo
│
├── src/
│   ├── components/              # Reusable React components
│   │   ├── BigFeaturesSection.jsx    # Large features showcase
│   │   ├── Button.jsx                # Reusable button component
│   │   ├── CTASection.jsx            # Call-to-action section
│   │   ├── Contact.jsx               # Contact component
│   │   ├── ContactForm.jsx           # Contact form
│   │   ├── FeaturesSection.jsx       # Features grid
│   │   ├── Footer.jsx                # Site footer
│   │   ├── Hero.jsx                  # Hero section
│   │   ├── Navbar.jsx                # Navigation bar
│   │   ├── PricingCard.jsx           # Pricing tier card
│   │   ├── SolutionSection.jsx       # Solutions showcase
│   │   └── TrustSection.jsx          # Trust/logo section
│   │
│   ├── pages/                   # Page components
│   │   ├── Home.jsx                  # Landing page
│   │   ├── Pricing.jsx               # Pricing page
│   │   ├── Login.jsx                 # Login page
│   │   ├── About.jsx                 # About page
│   │   ├── Contact.jsx               # Contact page
│   │   ├── Blog.jsx                  # Blog page
│   │   ├── Product.jsx               # Product page
│   │   ├── Integration.jsx           # Integration page
│   │   ├── IntegrationDetail.jsx     # Integration details
│   │   ├── SignUp.jsx                # Sign up page
│   │   ├── Templates.jsx             # Templates page
│   │   └── NotFound.jsx              # 404 page
│   │
│   ├── hooks/                   # Custom React hooks
│   ├── assets/                  # Asset files
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # App-specific styles
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles & Tailwind imports
│
├── index.html                   # HTML template
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── postcss.config.cjs           # PostCSS configuration
├── package.json                 # Project dependencies
├── .gitignore                   # Git ignore rules
│
└── docs/                        # Additional documentation
    ├── ARCHITECTURE.md          # Architecture & design decisions
    ├── DEPLOYMENT.md            # Deployment guide
    ├── DEVELOPMENT.md           # Development workflow
    ├── DESIGN_SYSTEM.md         # Design specifications
    └── PERFORMANCE.md           # Performance optimizations
```

---

## 📚 Documentation

Comprehensive documentation is available in the `docs/` directory:

| Document | Description |
|----------|-------------|
| **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** | Technical architecture, component structure, and design patterns |
| **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** | Step-by-step deployment guides for various platforms |
| **[DEVELOPMENT.md](docs/DEVELOPMENT.md)** | Development workflow, coding standards, and contribution guidelines |
| **[DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)** | Design specifications, Figma adherence, and styling guidelines |
| **[PERFORMANCE.md](docs/PERFORMANCE.md)** | Performance optimizations, metrics, and best practices |

---

## 🎨 Design Specifications

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Purple** | `#6E51E0` | Primary actions, links, highlights |
| **Primary Dark** | `#5a43b5` | Hover states |
| **Primary Light** | `#8f7bf7` | Backgrounds, accents |
| **Secondary Dark** | `#060B13` | Headings, primary text |
| **Secondary Gray** | `#363D4F` | Body text |
| **Secondary Light** | `#979FB4` | Lighter text, placeholders |
| **Background** | `#FFFFFF` | Main background |
| **Background Alt** | `#F7F8FA` | Alternating sections |
| **Border** | `#E9EBF1` | Borders, dividers |

### Typography

- **Font Family**: Fustat (Google Fonts)
- **Hero Heading**: 48-72px, Bold (700)
- **Section Headings**: 36-48px, Bold (700)
- **Subheadings**: 24-32px, Semibold (600)
- **Body Text**: 16-18px, Regular (400)
- **Small Text**: 14px, Regular (400)

### Spacing System

- **Base Unit**: 4px
- **Common Spacing**: 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- **Container Max Width**: 1280px
- **Section Padding**: 64px (mobile), 96px (tablet), 128px (desktop)

### Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| **Mobile** | < 768px | Single column layout |
| **Tablet** | 768px - 1024px | 2-column layouts |
| **Desktop** | > 1024px | Multi-column layouts |
| **Large Desktop** | > 1280px | Max content width |

---

## ⚡ Performance

### Optimization Techniques

- **Code Splitting** - Dynamic imports for route-based code splitting
- **Lazy Loading** - Components loaded on demand
- **Image Optimization** - Optimized image formats and sizes
- **CSS Purging** - Unused CSS removed in production build
- **Minification** - JavaScript and CSS minified for production
- **Tree Shaking** - Unused code eliminated from bundle

### Performance Metrics

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Bundle Size**: Optimized for fast loading

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

### Deployment Platforms

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages
See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [DEVELOPMENT.md](docs/DEVELOPMENT.md) for detailed contribution guidelines.

---

## 📄 License

This project is created for educational purposes as part of an internship assignment.

---

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)

---

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

## 📞 Support

If you have any questions or need support, please:

- Open an issue on GitHub
- Contact via email: your.email@example.com

---

<div align="center">

**Built with ❤️ for the Stellar SaaS Platform**

⭐ Star this repository if you found it helpful!

</div>
