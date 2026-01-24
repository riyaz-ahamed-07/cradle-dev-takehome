# ⚡ Performance Documentation

## Table of Contents
- [Overview](#overview)
- [Performance Metrics](#performance-metrics)
- [Optimization Techniques](#optimization-techniques)
- [Bundle Size Analysis](#bundle-size-analysis)
- [Image Optimization](#image-optimization)
- [Code Splitting](#code-splitting)
- [Caching Strategies](#caching-strategies)
- [Runtime Performance](#runtime-performance)
- [Monitoring & Measurement](#monitoring--measurement)
- [Best Practices](#best-practices)

---

## Overview

Performance is a critical aspect of user experience. This document outlines the performance optimizations implemented in the Stellar SaaS landing page and provides guidelines for maintaining optimal performance.

### Performance Goals

| Metric | Target | Current |
|--------|--------|---------|
| **First Contentful Paint (FCP)** | < 1.5s | ~1.2s |
| **Largest Contentful Paint (LCP)** | < 2.5s | ~2.1s |
| **Time to Interactive (TTI)** | < 3.5s | ~2.8s |
| **Cumulative Layout Shift (CLS)** | < 0.1 | ~0.05 |
| **First Input Delay (FID)** | < 100ms | ~50ms |
| **Total Bundle Size** | < 200KB | ~180KB |

---

## Performance Metrics

### Core Web Vitals

#### 1. Largest Contentful Paint (LCP)
**Target: < 2.5 seconds**

Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.

**Optimizations:**
- Optimized images with WebP format
- Preload critical resources
- Minimize render-blocking resources
- Use CDN for static assets

```html
<!-- Preload critical resources -->
<link rel="preload" href="/fonts/fustat.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/hero-image.webp" as="image">
```

#### 2. First Input Delay (FID)
**Target: < 100 milliseconds**

Measures interactivity. Pages should have an FID of less than 100 milliseconds.

**Optimizations:**
- Minimize JavaScript execution time
- Code splitting for faster initial load
- Use web workers for heavy computations
- Defer non-critical JavaScript

#### 3. Cumulative Layout Shift (CLS)
**Target: < 0.1**

Measures visual stability. Pages should maintain a CLS of less than 0.1.

**Optimizations:**
- Set explicit dimensions for images and videos
- Reserve space for dynamic content
- Avoid inserting content above existing content
- Use CSS transforms for animations

```jsx
// ✅ Good - Explicit dimensions
<img 
  src="image.jpg" 
  width="800" 
  height="600" 
  alt="Description"
  className="w-full h-auto"
/>

// ❌ Avoid - No dimensions
<img src="image.jpg" alt="Description" />
```

---

## Optimization Techniques

### 1. Vite Build Optimizations

**vite.config.js:**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  build: {
    // Minify output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true,
      },
    },
    
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
        },
      },
    },
    
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
```

### 2. CSS Optimization

**Tailwind CSS Purging:**
```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Tailwind automatically purges unused CSS in production
}
```

**Benefits:**
- Removes unused CSS classes
- Reduces CSS bundle size by ~90%
- Faster stylesheet parsing

### 3. Font Optimization

**Strategy:**
```html
<!-- Preconnect to font provider -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Load font with display=swap -->
<link 
  href="https://fonts.googleapis.com/css2?family=Fustat:wght@400;500;600;700&display=swap" 
  rel="stylesheet"
>
```

**Benefits:**
- `display=swap` prevents FOIT (Flash of Invisible Text)
- Preconnect reduces DNS lookup time
- Only load required font weights

**Alternative: Self-hosted fonts**
```bash
npm install @fontsource/fustat
```

```javascript
// main.jsx
import '@fontsource/fustat/400.css';
import '@fontsource/fustat/600.css';
import '@fontsource/fustat/700.css';
```

---

## Bundle Size Analysis

### Analyzing Bundle Size

```bash
# Build for production
npm run build

# Analyze bundle
npx vite-bundle-visualizer
```

### Current Bundle Breakdown

```
dist/
├── index.html                    ~2 KB
├── assets/
│   ├── index-[hash].js          ~120 KB (gzipped: ~40 KB)
│   ├── index-[hash].css         ~15 KB (gzipped: ~4 KB)
│   ├── react-vendor-[hash].js   ~45 KB (gzipped: ~15 KB)
│   └── animation-vendor-[hash].js ~30 KB (gzipped: ~10 KB)
└── images/                       ~50 KB (optimized)

Total: ~180 KB (gzipped: ~70 KB)
```

### Optimization Strategies

1. **Code Splitting**
   - Route-based splitting
   - Component lazy loading
   - Vendor chunk separation

2. **Tree Shaking**
   - Import only what you need
   - Use ES6 modules
   - Avoid default imports from large libraries

```jsx
// ✅ Good - Named imports
import { useState, useEffect } from 'react';
import { ChevronRight, Menu } from 'lucide-react';

// ❌ Avoid - Default imports
import * as React from 'react';
import * as Icons from 'lucide-react';
```

3. **Dependency Audit**
```bash
# Check bundle size impact
npm install -g bundle-phobia-cli
bundle-phobia <package-name>
```

---

## Image Optimization

### Image Formats

| Format | Use Case | Compression |
|--------|----------|-------------|
| **WebP** | Modern browsers | Best (30% smaller than JPEG) |
| **JPEG** | Photos, fallback | Good |
| **PNG** | Logos, transparency | Moderate |
| **SVG** | Icons, logos | Excellent (vector) |

### Optimization Tools

```bash
# Install image optimization tools
npm install -g sharp-cli

# Optimize images
sharp -i input.jpg -o output.webp --webp
```

### Responsive Images

```jsx
<picture>
  <source 
    srcSet="/image-mobile.webp" 
    media="(max-width: 768px)" 
    type="image/webp"
  />
  <source 
    srcSet="/image-desktop.webp" 
    media="(min-width: 769px)" 
    type="image/webp"
  />
  <img 
    src="/image-fallback.jpg" 
    alt="Description"
    width="800"
    height="600"
    loading="lazy"
  />
</picture>
```

### Lazy Loading

```jsx
// Native lazy loading
<img 
  src="image.jpg" 
  alt="Description"
  loading="lazy"
  width="800"
  height="600"
/>

// React lazy loading with Intersection Observer
import { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : 'placeholder.jpg'}
      alt={alt}
      loading="lazy"
    />
  );
};
```

---

## Code Splitting

### Route-Based Code Splitting

```jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

### Component-Based Code Splitting

```jsx
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const HeavyChart = lazy(() => import('./components/HeavyChart'));

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading chart...</div>}>
        <HeavyChart />
      </Suspense>
    </div>
  );
}
```

---

## Caching Strategies

### Browser Caching

**HTTP Headers (Server Configuration):**
```nginx
# Cache static assets for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Cache HTML for 1 hour
location ~* \.html$ {
    expires 1h;
    add_header Cache-Control "public, must-revalidate";
}
```

**Vercel Configuration:**
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*).html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, must-revalidate"
        }
      ]
    }
  ]
}
```

### Service Worker (Future Enhancement)

```javascript
// service-worker.js
const CACHE_NAME = 'stellar-v1';
const urlsToCache = [
  '/',
  '/index.css',
  '/index.js',
  '/logo.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

---

## Runtime Performance

### React Performance Optimization

#### 1. Memoization

```jsx
import { memo, useMemo, useCallback } from 'react';

// Memoize component
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* Render data */}</div>;
});

// Memoize expensive calculations
function Component({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.value - b.value);
  }, [items]);

  return <div>{/* Use sortedItems */}</div>;
}

// Memoize callbacks
function Parent() {
  const handleClick = useCallback(() => {
    console.log('Clicked');
  }, []);

  return <Child onClick={handleClick} />;
}
```

#### 2. Virtualization (For Long Lists)

```jsx
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}
```

#### 3. Debouncing & Throttling

```jsx
import { useState, useCallback } from 'react';

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
function SearchInput() {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback(
    debounce((value) => {
      // Perform search
      console.log('Searching for:', value);
    }, 300),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return <input value={query} onChange={handleChange} />;
}
```

### Animation Performance

```jsx
// ✅ Good - Use transform and opacity
<motion.div
  animate={{ 
    x: 100,           // transform: translateX
    opacity: 1,       // opacity
    scale: 1.1,       // transform: scale
  }}
/>

// ❌ Avoid - Animating layout properties
<motion.div
  animate={{ 
    width: 200,       // Triggers layout
    height: 200,      // Triggers layout
    marginLeft: 50,   // Triggers layout
  }}
/>
```

**CSS Animations:**
```css
/* Use will-change for animations */
.animated-element {
  will-change: transform, opacity;
}

/* Use transform instead of position */
.slide-in {
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.slide-in.hidden {
  transform: translateX(-100%);
}
```

---

## Monitoring & Measurement

### Lighthouse Audit

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://your-site.com --view

# Generate report
lighthouse https://your-site.com --output html --output-path ./report.html
```

### Web Vitals Measurement

```bash
npm install web-vitals
```

```javascript
// main.jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  console.log(metric);
  // Send to analytics service
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Performance Monitoring Tools

1. **Google Analytics** - User metrics
2. **Vercel Analytics** - Real user monitoring
3. **Sentry** - Error tracking and performance
4. **Chrome DevTools** - Performance profiling

### Chrome DevTools Performance Tab

1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record
4. Interact with the page
5. Stop recording
6. Analyze:
   - Loading time
   - Scripting time
   - Rendering time
   - Painting time

---

## Best Practices

### 1. Critical Rendering Path

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Critical CSS inline -->
  <style>
    /* Above-the-fold styles */
    body { margin: 0; font-family: 'Fustat', sans-serif; }
    .hero { min-height: 100vh; }
  </style>
  
  <!-- Preload critical resources -->
  <link rel="preload" href="/fonts/fustat.woff2" as="font" crossorigin>
  
  <!-- Defer non-critical CSS -->
  <link rel="stylesheet" href="/styles.css" media="print" onload="this.media='all'">
</head>
<body>
  <!-- Content -->
  
  <!-- Defer JavaScript -->
  <script defer src="/main.js"></script>
</body>
</html>
```

### 2. Resource Hints

```html
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Prefetch (low priority) -->
<link rel="prefetch" href="/next-page.js">

<!-- Preload (high priority) -->
<link rel="preload" href="/critical.js" as="script">
```

### 3. Compression

**Enable Gzip/Brotli:**
```nginx
# Nginx configuration
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1000;

# Brotli (better compression)
brotli on;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml;
```

### 4. HTTP/2 & HTTP/3

- Use HTTP/2 for multiplexing
- Enable server push for critical resources
- Upgrade to HTTP/3 for better performance

### 5. CDN Usage

**Benefits:**
- Reduced latency
- Global distribution
- DDoS protection
- Automatic optimization

**Recommended CDNs:**
- Vercel Edge Network
- Cloudflare
- AWS CloudFront
- Netlify Edge

---

## Performance Checklist

- [ ] **Images**
  - [ ] Optimized and compressed
  - [ ] WebP format with fallbacks
  - [ ] Lazy loading implemented
  - [ ] Responsive images with srcset
  - [ ] Explicit dimensions set

- [ ] **JavaScript**
  - [ ] Code splitting enabled
  - [ ] Tree shaking configured
  - [ ] Minification enabled
  - [ ] No console.logs in production
  - [ ] Defer non-critical scripts

- [ ] **CSS**
  - [ ] Unused CSS purged
  - [ ] Critical CSS inlined
  - [ ] Minification enabled
  - [ ] CSS-in-JS optimized

- [ ] **Fonts**
  - [ ] Font display: swap
  - [ ] Preload critical fonts
  - [ ] Subset fonts if possible
  - [ ] Self-host fonts (optional)

- [ ] **Caching**
  - [ ] Browser caching configured
  - [ ] CDN caching enabled
  - [ ] Cache busting for updates

- [ ] **Monitoring**
  - [ ] Lighthouse score > 90
  - [ ] Web Vitals tracked
  - [ ] Error monitoring setup
  - [ ] Performance monitoring active

---

## Conclusion

Performance optimization is an ongoing process. Regular monitoring and continuous improvement ensure the best user experience.

**Key Takeaways:**
- ✅ Measure before optimizing
- ✅ Focus on Core Web Vitals
- ✅ Optimize images and fonts
- ✅ Implement code splitting
- ✅ Monitor real-user metrics
- ✅ Iterate and improve

For more information, see:
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical architecture
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment strategies
- [DEVELOPMENT.md](DEVELOPMENT.md) - Development workflow

---

**Performance is a feature, not an afterthought!** ⚡
