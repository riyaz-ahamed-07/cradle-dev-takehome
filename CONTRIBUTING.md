# 🤝 Contributing to Stellar

Thank you for your interest in contributing to Stellar! This document provides guidelines and instructions for contributing to the project.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community

**Unacceptable behavior includes:**
- Harassment or discriminatory language
- Trolling or insulting comments
- Public or private harassment
- Publishing others' private information

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git
- Code editor (VS Code recommended)

### Setup

1. **Fork the repository**
   - Click the "Fork" button on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/stellar-saas-landing.git
   cd stellar-saas-landing
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/stellar-saas-landing.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

---

## Development Process

### 1. Create a Branch

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feature/your-feature-name
```

### 2. Make Changes

- Write clean, readable code
- Follow the coding standards
- Add comments for complex logic
- Test your changes thoroughly

### 3. Test Your Changes

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature"
```

See [Commit Guidelines](#commit-guidelines) for commit message format.

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

- Go to your fork on GitHub
- Click "New Pull Request"
- Fill out the PR template
- Submit for review

---

## Pull Request Process

### Before Submitting

- [ ] Code follows the style guide
- [ ] All tests pass
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Documentation updated
- [ ] Commit messages follow convention

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2
- Change 3

## Screenshots (if applicable)
[Add screenshots]

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Mobile responsive verified
- [ ] No console errors

## Checklist
- [ ] Code follows style guide
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No breaking changes
```

### Review Process

1. **Automated Checks**
   - Linting passes
   - Build succeeds
   - No merge conflicts

2. **Code Review**
   - At least one approval required
   - Address all feedback
   - Make requested changes

3. **Merge**
   - Squash and merge (preferred)
   - Delete branch after merge

---

## Coding Standards

### JavaScript/React

```jsx
// ✅ Good
import React, { useState } from 'react';

const Component = ({ title, onClick }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    onClick();
  };

  return (
    <button onClick={handleClick}>
      {title}: {count}
    </button>
  );
};

export default Component;
```

### Naming Conventions

- **Components**: PascalCase (`Hero`, `PricingCard`)
- **Functions**: camelCase (`handleClick`, `formatDate`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)
- **Files**: PascalCase for components (`Hero.jsx`)

### Import Order

```jsx
// 1. External dependencies
import React from 'react';
import { motion } from 'framer-motion';

// 2. Internal components
import Button from './Button';

// 3. Utilities
import { formatDate } from '../utils';

// 4. Styles
import './styles.css';
```

### CSS/Tailwind

```jsx
// ✅ Use Tailwind utilities
<div className="flex items-center justify-between p-4 bg-white rounded-lg">

// ❌ Avoid inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(pricing): add pricing page with four tiers
fix(navbar): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(hero): adjust spacing and typography
refactor(components): extract reusable Button component
perf(images): optimize image loading with lazy loading
```

### Scope

Optional, indicates the area of change:
- `navbar`
- `hero`
- `pricing`
- `footer`
- `login`

---

## Reporting Bugs

### Before Reporting

1. Check existing issues
2. Verify it's reproducible
3. Test on latest version

### Bug Report Template

```markdown
**Describe the bug**
A clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 96]
- Version: [e.g., 1.0.0]

**Additional context**
Any other relevant information
```

---

## Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem

**Describe the solution you'd like**
A clear description of what you want to happen

**Describe alternatives you've considered**
Alternative solutions or features

**Additional context**
Mockups, examples, or other context

**Would you like to implement this feature?**
- [ ] Yes, I'd like to implement it
- [ ] No, just suggesting
```

---

## Areas for Contribution

### Good First Issues

- Documentation improvements
- UI/UX enhancements
- Accessibility improvements
- Performance optimizations
- Bug fixes

### Advanced Contributions

- New features
- Architecture improvements
- Testing infrastructure
- CI/CD pipeline

---

## Questions?

- **Documentation**: Check [DEVELOPMENT.md](docs/DEVELOPMENT.md)
- **Architecture**: See [ARCHITECTURE.md](docs/ARCHITECTURE.md)
- **Discussions**: Open a GitHub Discussion
- **Issues**: Create a GitHub Issue

---

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

---

Thank you for contributing to Stellar! 🌟
