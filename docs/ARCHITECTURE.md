# 🏗️ Architecture Documentation

## Table of Contents
- [Overview](#overview)
- [Architecture Principles](#architecture-principles)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Routing Strategy](#routing-strategy)
- [Styling Architecture](#styling-architecture)
- [Performance Considerations](#performance-considerations)
- [Design Patterns](#design-patterns)

---

## Overview

Stellar is built using a modern React architecture that emphasizes:
- **Component Reusability** - DRY principles with shared components
- **Separation of Concerns** - Clear distinction between pages and components
- **Maintainability** - Clean, readable, and well-documented code
- **Scalability** - Architecture that can grow with the application
- **Performance** - Optimized rendering and bundle size

---

## Architecture Principles

### 1. Component-Based Architecture
The application follows a component-based architecture where UI is broken down into reusable, self-contained components.

```
┌─────────────────────────────────────┐
│           Application               │
│         (App.jsx + Router)          │
└──────────────┬──────────────────────┘
               │
       ┌───────┴────────┐
       │                │
   ┌───▼────┐      ┌────▼────┐
   │ Layout │      │  Pages  │
   │ (Navbar│      │  Home,  │
   │ Footer)│      │ Pricing │
   └───┬────┘      └────┬────┘
       │                │
       └────────┬───────┘
                │
         ┌──────▼──────┐
         │ Components  │
         │ (Hero, CTA, │
         │  Features)  │
         └─────────────┘
```

### 2. Atomic Design Methodology

Components are organized following atomic design principles:

**Atoms** (Basic building blocks)
- `Button.jsx` - Reusable button component
- Icons from Lucide React

**Molecules** (Simple component groups)
- `PricingCard.jsx` - Pricing tier card
- `ContactForm.jsx` - Contact form

**Organisms** (Complex components)
- `Navbar.jsx` - Navigation with menu
- `Footer.jsx` - Footer with links
- `Hero.jsx` - Hero section with multiple elements

**Templates** (Page layouts)
- Layout components combining organisms

**Pages** (Specific instances)
- `Home.jsx`, `Pricing.jsx`, `Login.jsx`

### 3. Single Responsibility Principle

Each component has a single, well-defined responsibility:
- **Navbar** - Navigation and routing
- **Hero** - Landing page hero section
- **PricingCard** - Display pricing information
- **Footer** - Site footer with links

---

## Component Architecture

### Component Structure

```jsx
// Standard component structure
import React from 'react';
import { motion } from 'framer-motion';

const ComponentName = ({ prop1, prop2 }) => {
  // 1. Hooks (useState, useEffect, custom hooks)
  
  // 2. Event handlers
  
  // 3. Helper functions
  
  // 4. Render logic
  return (
    <div className="component-wrapper">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### Key Components

#### 1. Navbar Component
**Location**: `src/components/Navbar.jsx`

**Responsibilities**:
- Site navigation
- Mobile menu toggle
- Active route highlighting
- Sticky positioning with backdrop blur

**Key Features**:
- Responsive hamburger menu for mobile
- Smooth transitions
- Fixed positioning with blur effect

#### 2. Hero Component
**Location**: `src/components/Hero.jsx`

**Responsibilities**:
- Primary landing section
- Animated phone mockup
- Floating stats cards
- Call-to-action buttons

**Key Features**:
- Framer Motion animations
- Responsive layout
- Interactive elements

#### 3. TrustSection Component
**Location**: `src/components/TrustSection.jsx`

**Responsibilities**:
- Display company logos
- Auto-scrolling carousel
- Draggable interaction

**Key Features**:
- Infinite scroll animation
- Drag-to-scroll functionality
- Grid background pattern

#### 4. FeaturesSection Component
**Location**: `src/components/FeaturesSection.jsx`

**Responsibilities**:
- Showcase product features
- Feature cards with icons
- Responsive grid layout

**Key Features**:
- Icon integration
- Hover effects
- Grid-based layout

#### 5. BigFeaturesSection Component
**Location**: `src/components/BigFeaturesSection.jsx`

**Responsibilities**:
- Detailed feature showcase
- Large feature cards
- Grid background

**Key Features**:
- Dual-layer grid background
- Responsive image handling
- Feature descriptions

#### 6. PricingCard Component
**Location**: `src/components/PricingCard.jsx`

**Responsibilities**:
- Display pricing tier information
- Feature lists
- CTA buttons

**Props**:
```jsx
{
  title: string,
  price: string,
  period: string,
  description: string,
  features: array,
  highlighted: boolean,
  buttonText: string
}
```

#### 7. Footer Component
**Location**: `src/components/Footer.jsx`

**Responsibilities**:
- Site-wide footer
- Navigation links
- Social media links
- Copyright information

**Sections**:
- CTA section
- Link columns
- Social links
- Copyright

---

## State Management

### Current Approach: Component State

The application currently uses **local component state** with React hooks:

```jsx
// Example: Mobile menu state in Navbar
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

### Why Local State?

For this landing page application, local state is sufficient because:
- No complex shared state between components
- No deep prop drilling issues
- Simple, predictable data flow
- Minimal state management overhead

### Future Scalability

If the application grows, consider:
- **Context API** for theme/auth state
- **Redux Toolkit** for complex global state
- **React Query** for server state management

---

## Routing Strategy

### React Router DOM v7

**Configuration**: `src/App.jsx`

```jsx
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/login" element={<Login />} />
    {/* Additional routes */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
```

### Route Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Landing page |
| `/pricing` | `Pricing.jsx` | Pricing tiers |
| `/login` | `Login.jsx` | Login page |
| `/about` | `About.jsx` | About page |
| `/contact` | `Contact.jsx` | Contact page |
| `/blog` | `Blog.jsx` | Blog page |
| `/product` | `Product.jsx` | Product page |
| `/integration` | `Integration.jsx` | Integrations |
| `/signup` | `SignUp.jsx` | Sign up page |
| `/templates` | `Templates.jsx` | Templates |
| `*` | `NotFound.jsx` | 404 page |

### Navigation Best Practices

1. **Use Link component** for internal navigation
2. **Lazy loading** for route-based code splitting (future enhancement)
3. **Scroll to top** on route change (implemented)
4. **Active link highlighting** in navigation

---

## Styling Architecture

### Tailwind CSS Utility-First Approach

**Configuration**: `tailwind.config.js`

#### Custom Theme Extensions

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#6E51E0',
        dark: '#5a43b5',
        light: '#8f7bf7',
      },
      secondary: {
        DEFAULT: '#060B13',
        gray: '#363D4F',
        light: '#979FB4',
      }
    },
    boxShadow: {
      'stellar': '0px 12px 96px rgba(6, 11, 19, 0.1)',
      'stellar-sm': '...',
      'card': '...',
    }
  }
}
```

#### Styling Patterns

**1. Component-Specific Styles**
```jsx
<div className="bg-white rounded-lg shadow-stellar p-6">
  {/* Content */}
</div>
```

**2. Responsive Design**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Responsive grid */}
</div>
```

**3. Hover States**
```jsx
<button className="bg-primary hover:bg-primary-dark transition-colors">
  Click Me
</button>
```

**4. Custom CSS (when needed)**
```css
/* index.css */
@layer utilities {
  .grid-pattern {
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 40px 40px;
  }
}
```

---

## Performance Considerations

### 1. Code Splitting
- Route-based code splitting with React Router
- Dynamic imports for heavy components

### 2. Image Optimization
- Optimized image formats (WebP where supported)
- Lazy loading for images below the fold
- Responsive images with srcset

### 3. CSS Optimization
- Tailwind CSS purges unused styles in production
- Critical CSS inlined
- Minified CSS output

### 4. JavaScript Optimization
- Tree shaking removes unused code
- Minification in production build
- Efficient re-renders with React.memo (where needed)

### 5. Bundle Size Management
```bash
# Analyze bundle size
npm run build
# Check dist/ folder size
```

---

## Design Patterns

### 1. Container/Presentational Pattern

**Container Components** (Smart)
- Handle logic and state
- Connect to data sources
- Example: Page components

**Presentational Components** (Dumb)
- Receive data via props
- Focus on UI rendering
- Example: `PricingCard`, `Button`

### 2. Composition Pattern

```jsx
// Composing components
<Hero>
  <Hero.Title>Welcome to Stellar</Hero.Title>
  <Hero.Subtitle>Build better, faster</Hero.Subtitle>
  <Hero.CTA>Get Started</Hero.CTA>
</Hero>
```

### 3. Render Props Pattern

Used for sharing logic between components:

```jsx
<DataProvider render={(data) => (
  <Component data={data} />
)} />
```

### 4. Custom Hooks Pattern

Reusable logic extraction:

```jsx
// Custom hook example
const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
};
```

---

## File Organization Best Practices

### 1. Component Files
- One component per file
- Named exports for utilities
- Default export for main component

### 2. Import Order
```jsx
// 1. External dependencies
import React from 'react';
import { motion } from 'framer-motion';

// 2. Internal components
import Button from './Button';

// 3. Utilities/helpers
import { formatDate } from '../utils';

// 4. Styles (if any)
import './styles.css';
```

### 3. Naming Conventions
- **Components**: PascalCase (`Hero.jsx`, `PricingCard.jsx`)
- **Utilities**: camelCase (`formatDate.js`, `apiClient.js`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)

---

## Testing Strategy (Future Enhancement)

### Recommended Testing Approach

1. **Unit Tests** - Jest + React Testing Library
2. **Integration Tests** - Test component interactions
3. **E2E Tests** - Playwright or Cypress
4. **Visual Regression** - Chromatic or Percy

### Example Test Structure
```jsx
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});
```

---

## Conclusion

This architecture provides:
- ✅ **Maintainability** through clear separation of concerns
- ✅ **Scalability** with room for growth
- ✅ **Performance** through optimization techniques
- ✅ **Developer Experience** with modern tooling
- ✅ **Code Quality** following best practices

For questions or suggestions, please refer to the [DEVELOPMENT.md](DEVELOPMENT.md) guide.
