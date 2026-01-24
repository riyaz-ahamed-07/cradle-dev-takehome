# 👨‍💻 Development Guide

## Table of Contents
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Component Development](#component-development)
- [Git Workflow](#git-workflow)
- [Code Review Process](#code-review-process)
- [Testing Guidelines](#testing-guidelines)
- [Debugging Tips](#debugging-tips)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

| Tool | Version | Download |
|------|---------|----------|
| **Node.js** | ≥ 16.0 | [nodejs.org](https://nodejs.org/) |
| **npm** | ≥ 7.0 | Included with Node.js |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |
| **VS Code** | Latest (recommended) | [code.visualstudio.com](https://code.visualstudio.com/) |

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "dsznajder.es7-react-js-snippets",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stellar-saas-landing.git
   cd stellar-saas-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## Development Workflow

### Daily Workflow

```bash
# 1. Pull latest changes
git pull origin main

# 2. Create feature branch
git checkout -b feature/your-feature-name

# 3. Start development server
npm run dev

# 4. Make changes and test

# 5. Run linter
npm run lint

# 6. Commit changes
git add .
git commit -m "feat: add new feature"

# 7. Push to remote
git push origin feature/your-feature-name

# 8. Create Pull Request on GitHub
```

### Hot Module Replacement (HMR)

Vite provides instant HMR. Changes to your code will reflect immediately in the browser without full page reload.

**Supported:**
- React components
- CSS/Tailwind changes
- JavaScript modules

**Requires full reload:**
- `vite.config.js` changes
- `tailwind.config.js` changes
- Environment variable changes

---

## Coding Standards

### JavaScript/React Standards

#### 1. Component Structure

```jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * ComponentName - Brief description
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Title text
 * @param {Function} props.onClick - Click handler
 */
const ComponentName = ({ title, onClick }) => {
  // 1. Hooks
  const [state, setState] = useState(initialValue);
  
  // 2. Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // 3. Event handlers
  const handleClick = () => {
    onClick();
  };
  
  // 4. Helper functions
  const formatData = (data) => {
    return data.toUpperCase();
  };
  
  // 5. Render
  return (
    <div className="component-wrapper">
      <h2>{title}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

// PropTypes
ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

// Default props
ComponentName.defaultProps = {
  onClick: () => {},
};

export default ComponentName;
```

#### 2. Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| **Components** | PascalCase | `Hero`, `PricingCard` |
| **Functions** | camelCase | `handleClick`, `formatDate` |
| **Constants** | UPPER_SNAKE_CASE | `API_URL`, `MAX_ITEMS` |
| **Files** | PascalCase (components) | `Hero.jsx`, `utils.js` |
| **CSS Classes** | kebab-case (Tailwind) | `bg-primary`, `text-lg` |

#### 3. Import Order

```jsx
// 1. React and external libraries
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// 2. Internal components
import Button from './Button';
import Card from './Card';

// 3. Utilities and helpers
import { formatDate } from '../utils/dateUtils';
import { API_URL } from '../constants';

// 4. Styles (if any)
import './styles.css';
```

#### 4. Code Formatting

**Use ESLint and Prettier:**

```bash
# Run linter
npm run lint

# Auto-fix issues
npm run lint -- --fix
```

**Key Rules:**
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required
- Max line length: 100 characters
- No unused variables
- No console.log in production

### CSS/Tailwind Standards

#### 1. Utility-First Approach

```jsx
// ✅ Good - Use Tailwind utilities
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
</div>

// ❌ Avoid - Custom CSS when Tailwind suffices
<div className="custom-container">
  <h2 className="custom-title">Title</h2>
</div>
```

#### 2. Responsive Design

```jsx
// Mobile-first approach
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-4 
  gap-4 
  md:gap-6 
  lg:gap-8
">
  {/* Content */}
</div>
```

#### 3. Custom Classes (When Needed)

```css
/* index.css */
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors;
  }
}
```

---

## Component Development

### Creating a New Component

1. **Create component file**
   ```bash
   # In src/components/
   touch src/components/NewComponent.jsx
   ```

2. **Component template**
   ```jsx
   import React from 'react';
   
   const NewComponent = () => {
     return (
       <div className="new-component">
         {/* Component content */}
       </div>
     );
   };
   
   export default NewComponent;
   ```

3. **Add to parent component**
   ```jsx
   import NewComponent from './components/NewComponent';
   
   function App() {
     return (
       <div>
         <NewComponent />
       </div>
     );
   }
   ```

### Component Best Practices

#### 1. Keep Components Small

```jsx
// ✅ Good - Single responsibility
const UserAvatar = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-10 h-10 rounded-full" />
);

const UserName = ({ name }) => (
  <span className="font-semibold">{name}</span>
);

// ❌ Avoid - Too many responsibilities
const UserProfile = ({ user, posts, friends, settings }) => {
  // Too much logic here
};
```

#### 2. Use Props Destructuring

```jsx
// ✅ Good
const Button = ({ text, onClick, variant = 'primary' }) => {
  return <button onClick={onClick}>{text}</button>;
};

// ❌ Avoid
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
```

#### 3. Conditional Rendering

```jsx
// ✅ Good - Clear and readable
{isLoading && <Spinner />}
{error && <ErrorMessage error={error} />}
{data && <DataDisplay data={data} />}

// ❌ Avoid - Nested ternaries
{isLoading ? <Spinner /> : error ? <ErrorMessage /> : <DataDisplay />}
```

#### 4. Event Handlers

```jsx
// ✅ Good - Descriptive names
const handleSubmit = (e) => {
  e.preventDefault();
  // Submit logic
};

const handleInputChange = (e) => {
  setValue(e.target.value);
};

// ❌ Avoid - Generic names
const onClick = () => {};
const onChange = () => {};
```

---

## Git Workflow

### Branch Naming Convention

```
feature/    - New features
bugfix/     - Bug fixes
hotfix/     - Urgent production fixes
refactor/   - Code refactoring
docs/       - Documentation updates
style/      - UI/styling changes
test/       - Adding tests
chore/      - Maintenance tasks
```

**Examples:**
```
feature/add-pricing-page
bugfix/fix-mobile-menu
hotfix/critical-security-patch
refactor/optimize-hero-section
docs/update-readme
```

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Code restructuring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance

**Examples:**
```bash
git commit -m "feat(pricing): add pricing page with four tiers"
git commit -m "fix(navbar): resolve mobile menu toggle issue"
git commit -m "docs(readme): update installation instructions"
git commit -m "style(hero): adjust spacing and typography"
git commit -m "refactor(components): extract reusable Button component"
```

### Pull Request Process

1. **Create descriptive PR title**
   ```
   feat: Add pricing page with responsive design
   ```

2. **Fill out PR template**
   ```markdown
   ## Description
   Added pricing page with four tiers and responsive grid layout.
   
   ## Changes
   - Created PricingCard component
   - Added Pricing page
   - Updated routing
   
   ## Screenshots
   [Add screenshots]
   
   ## Testing
   - [ ] Tested on Chrome, Firefox, Safari
   - [ ] Verified responsive design
   - [ ] No console errors
   ```

3. **Request review**
   - Assign reviewers
   - Add labels
   - Link related issues

4. **Address feedback**
   - Make requested changes
   - Push updates
   - Re-request review

5. **Merge**
   - Squash and merge (recommended)
   - Delete branch after merge

---

## Code Review Process

### As a Reviewer

**Check for:**
- [ ] Code follows style guide
- [ ] No unnecessary console.logs
- [ ] Proper error handling
- [ ] Responsive design works
- [ ] No performance issues
- [ ] Accessible (keyboard navigation, ARIA labels)
- [ ] Clear variable/function names
- [ ] Adequate comments for complex logic

**Provide constructive feedback:**
```
✅ "Consider extracting this logic into a separate function for reusability"
❌ "This code is bad"
```

### As a Developer

**Before requesting review:**
- [ ] Self-review your code
- [ ] Test on multiple browsers
- [ ] Run linter
- [ ] Update documentation
- [ ] Add screenshots/GIFs for UI changes

---

## Testing Guidelines

### Manual Testing Checklist

- [ ] **Functionality**
  - [ ] All features work as expected
  - [ ] Forms validate correctly
  - [ ] Links navigate properly
  
- [ ] **Responsive Design**
  - [ ] Mobile (< 768px)
  - [ ] Tablet (768px - 1024px)
  - [ ] Desktop (> 1024px)
  
- [ ] **Browser Compatibility**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
  
- [ ] **Performance**
  - [ ] Fast page load
  - [ ] Smooth animations
  - [ ] No layout shifts
  
- [ ] **Accessibility**
  - [ ] Keyboard navigation
  - [ ] Screen reader friendly
  - [ ] Sufficient color contrast

### Future: Automated Testing

**Recommended setup:**

```bash
# Install testing libraries
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

**Example test:**
```jsx
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByText('Click').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

## Debugging Tips

### React DevTools

1. **Install React DevTools**
   - [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
   - [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

2. **Inspect components**
   - View component hierarchy
   - Check props and state
   - Profile performance

### Console Debugging

```jsx
// Temporary debugging (remove before commit)
console.log('Current state:', state);
console.table(data);
console.time('Operation');
// ... code
console.timeEnd('Operation');
```

### Vite Debugging

```javascript
// vite.config.js
export default {
  server: {
    open: true, // Auto-open browser
    port: 3000, // Custom port
  },
  build: {
    sourcemap: true, // Enable source maps
  }
}
```

### Common Issues

**Issue: Component not re-rendering**
```jsx
// ❌ Mutating state directly
state.push(newItem);

// ✅ Create new array
setState([...state, newItem]);
```

**Issue: Infinite useEffect loop**
```jsx
// ❌ Missing dependency
useEffect(() => {
  fetchData();
}, []); // fetchData not in deps

// ✅ Include all dependencies
useEffect(() => {
  fetchData();
}, [fetchData]);
```

---

## Common Tasks

### Adding a New Page

1. **Create page component**
   ```jsx
   // src/pages/NewPage.jsx
   import React from 'react';
   
   const NewPage = () => {
     return (
       <div className="container mx-auto px-4 py-16">
         <h1>New Page</h1>
       </div>
     );
   };
   
   export default NewPage;
   ```

2. **Add route**
   ```jsx
   // src/App.jsx
   import NewPage from './pages/NewPage';
   
   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Add navigation link**
   ```jsx
   // src/components/Navbar.jsx
   <Link to="/new-page">New Page</Link>
   ```

### Adding a New Component

1. **Create component file**
   ```bash
   touch src/components/NewComponent.jsx
   ```

2. **Implement component**
   ```jsx
   import React from 'react';
   
   const NewComponent = ({ prop1, prop2 }) => {
     return <div>{/* Component JSX */}</div>;
   };
   
   export default NewComponent;
   ```

3. **Import and use**
   ```jsx
   import NewComponent from './components/NewComponent';
   
   <NewComponent prop1="value" prop2="value" />
   ```

### Updating Styles

1. **Use Tailwind utilities** (preferred)
   ```jsx
   <div className="bg-primary text-white p-4 rounded-lg">
   ```

2. **Add custom utilities** (if needed)
   ```css
   /* index.css */
   @layer utilities {
     .custom-gradient {
       background: linear-gradient(to right, #6E51E0, #8f7bf7);
     }
   }
   ```

3. **Extend Tailwind config**
   ```javascript
   // tailwind.config.js
   theme: {
     extend: {
       colors: {
         'custom-blue': '#1E40AF',
       }
     }
   }
   ```

---

## Troubleshooting

### Development Server Issues

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

**Module not found:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Issues

**Build fails:**
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Rebuild
npm run build
```

**Large bundle size:**
```bash
# Analyze bundle
npm run build
# Check dist/ folder size
```

### Styling Issues

**Tailwind classes not working:**
```bash
# Ensure Tailwind is watching files
# Check tailwind.config.js content paths
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]
```

**Styles not updating:**
```bash
# Restart dev server
# Clear browser cache
# Check for CSS specificity issues
```

---

## Performance Tips

1. **Lazy load components**
   ```jsx
   const LazyComponent = React.lazy(() => import('./LazyComponent'));
   
   <Suspense fallback={<Loading />}>
     <LazyComponent />
   </Suspense>
   ```

2. **Memoize expensive calculations**
   ```jsx
   const expensiveValue = useMemo(() => {
     return computeExpensiveValue(a, b);
   }, [a, b]);
   ```

3. **Optimize images**
   - Use WebP format
   - Compress images
   - Use appropriate sizes

4. **Code splitting**
   - Route-based splitting
   - Component-based splitting

---

## Resources

### Documentation
- [React Docs](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com/)

### Tools
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://eslint.org/)

### Community
- [React Discord](https://discord.gg/react)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)

---

## Getting Help

1. **Check documentation** - README, ARCHITECTURE, etc.
2. **Search existing issues** - GitHub issues
3. **Ask the team** - Create discussion thread
4. **Stack Overflow** - Tag with `reactjs`, `vite`, `tailwindcss`

---

Happy coding! 🚀
