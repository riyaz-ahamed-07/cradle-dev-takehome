# 🚀 Deployment Guide

## Table of Contents
- [Overview](#overview)
- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Build for Production](#build-for-production)
- [Deployment Platforms](#deployment-platforms)
  - [Vercel](#vercel-recommended)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
  - [AWS S3 + CloudFront](#aws-s3--cloudfront)
  - [Docker](#docker)
- [Environment Configuration](#environment-configuration)
- [Custom Domain Setup](#custom-domain-setup)
- [SSL/HTTPS Configuration](#sslhttps-configuration)
- [Performance Optimization](#performance-optimization)
- [Monitoring & Analytics](#monitoring--analytics)
- [Troubleshooting](#troubleshooting)

---

## Overview

This guide provides step-by-step instructions for deploying the Stellar SaaS landing page to various hosting platforms. The application is a static site built with Vite, making it compatible with most modern hosting services.

---

## Pre-Deployment Checklist

Before deploying, ensure you've completed the following:

- [ ] **Code Quality**
  - [ ] All ESLint errors resolved
  - [ ] Code reviewed and tested
  - [ ] No console errors in browser
  
- [ ] **Performance**
  - [ ] Images optimized
  - [ ] Bundle size analyzed
  - [ ] Lighthouse score > 90
  
- [ ] **Configuration**
  - [ ] Environment variables configured
  - [ ] Base URL set correctly (if needed)
  - [ ] Meta tags and SEO optimized
  
- [ ] **Testing**
  - [ ] Tested on multiple browsers
  - [ ] Responsive design verified
  - [ ] All links working
  - [ ] Forms validated

---

## Build for Production

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 3. Preview Production Build Locally

```bash
npm run preview
```

Visit `http://localhost:4173` to preview the production build.

### 4. Verify Build Output

```bash
# Windows
dir dist

# Linux/Mac
ls -la dist
```

Expected output structure:
```
dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other-assets]
├── images/
├── logos/
└── index.html
```

---

## Deployment Platforms

### Vercel (Recommended)

**Why Vercel?**
- Zero-configuration deployment
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments for PRs

#### Method 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

#### Method 2: Vercel Dashboard (Git Integration)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import Project**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site is live! 🎉

#### Vercel Configuration File

Create `vercel.json` in project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### Netlify

**Why Netlify?**
- Easy drag-and-drop deployment
- Form handling
- Serverless functions
- Split testing

#### Method 1: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

#### Method 2: Netlify Dashboard

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://www.netlify.com)
   - Drag the `dist` folder to the deploy area

#### Method 3: Git Integration

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect Repository**
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Choose your repository

3. **Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

4. **Deploy**
   - Click "Deploy site"

#### Netlify Configuration File

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

### GitHub Pages

**Why GitHub Pages?**
- Free hosting for public repositories
- Integrated with GitHub
- Custom domain support

#### Setup Steps

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update vite.config.js**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/stellar-saas-landing/', // Replace with your repo name
   })
   ```

3. **Add Deploy Script to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages
   - Source: `gh-pages` branch
   - Save

6. **Access Your Site**
   ```
   https://yourusername.github.io/stellar-saas-landing/
   ```

---

### AWS S3 + CloudFront

**Why AWS?**
- Highly scalable
- Global CDN with CloudFront
- Fine-grained control
- Enterprise-grade

#### Prerequisites
- AWS account
- AWS CLI installed and configured

#### Deployment Steps

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://stellar-saas-landing
   ```

3. **Configure Bucket for Static Hosting**
   ```bash
   aws s3 website s3://stellar-saas-landing \
     --index-document index.html \
     --error-document index.html
   ```

4. **Upload Files**
   ```bash
   aws s3 sync dist/ s3://stellar-saas-landing --delete
   ```

5. **Set Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::stellar-saas-landing/*"
       }
     ]
   }
   ```

6. **Create CloudFront Distribution** (Optional but recommended)
   - Go to CloudFront console
   - Create distribution
   - Origin: Your S3 bucket
   - Enable HTTPS
   - Set default root object: `index.html`

---

### Docker

**Why Docker?**
- Consistent environments
- Easy scaling
- Container orchestration

#### Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### Build and Run

```bash
# Build image
docker build -t stellar-saas-landing .

# Run container
docker run -d -p 80:80 stellar-saas-landing

# Access at http://localhost
```

#### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

---

## Environment Configuration

### Environment Variables

Create `.env.production`:

```env
VITE_API_URL=https://api.stellar.com
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
VITE_APP_VERSION=1.0.0
```

### Using Environment Variables

```javascript
// In your code
const apiUrl = import.meta.env.VITE_API_URL;
```

### Platform-Specific Configuration

**Vercel**
- Add environment variables in project settings
- Separate variables for production/preview/development

**Netlify**
- Add in Site settings → Build & deploy → Environment

**GitHub Pages**
- Use GitHub Secrets for sensitive data
- Access via GitHub Actions

---

## Custom Domain Setup

### Vercel

1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### GitHub Pages

1. Add `CNAME` file to `public/` directory:
   ```
   www.yoursite.com
   ```

2. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

---

## SSL/HTTPS Configuration

### Automatic SSL (Recommended)

**Vercel & Netlify**
- SSL certificates are automatically provisioned
- HTTPS is enforced by default

### Manual SSL (AWS CloudFront)

1. Request certificate in AWS Certificate Manager
2. Validate domain ownership
3. Attach certificate to CloudFront distribution

---

## Performance Optimization

### 1. Enable Compression

Most platforms enable gzip/brotli automatically.

**Nginx Configuration:**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1000;
```

### 2. Set Cache Headers

**Vercel** (`vercel.json`):
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
    }
  ]
}
```

### 3. Enable HTTP/2

Automatically enabled on Vercel, Netlify, and CloudFront.

### 4. CDN Configuration

All recommended platforms use global CDNs by default.

---

## Monitoring & Analytics

### Google Analytics

1. **Add to index.html**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```jsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

### Error Tracking (Sentry)

```bash
npm install @sentry/react
```

```jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production",
});
```

---

## Troubleshooting

### Issue: 404 on Page Refresh

**Cause**: Server doesn't redirect all routes to index.html

**Solution**: Add redirect rules (see platform-specific configs above)

### Issue: Assets Not Loading

**Cause**: Incorrect base path

**Solution**: Check `vite.config.js` base setting

### Issue: Build Fails

**Cause**: Node version mismatch

**Solution**: Specify Node version
```json
// package.json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### Issue: Slow Load Times

**Solutions**:
- Enable CDN
- Optimize images
- Enable compression
- Check bundle size

### Issue: Environment Variables Not Working

**Cause**: Variables must be prefixed with `VITE_`

**Solution**: Rename variables to start with `VITE_`

---

## Deployment Checklist

- [ ] Production build successful
- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics tracking enabled
- [ ] Error monitoring setup
- [ ] Performance tested (Lighthouse)
- [ ] SEO meta tags verified
- [ ] Social sharing images set
- [ ] Favicon configured
- [ ] 404 page working
- [ ] All routes accessible
- [ ] Forms working (if applicable)
- [ ] Cross-browser tested

---

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Conclusion

Your Stellar SaaS landing page is now ready for deployment! Choose the platform that best fits your needs:

- **Quick & Easy**: Vercel or Netlify
- **Full Control**: AWS S3 + CloudFront
- **Containerized**: Docker
- **Free**: GitHub Pages

For additional help, refer to:
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical details
- [PERFORMANCE.md](PERFORMANCE.md) - Optimization tips
- [DEVELOPMENT.md](DEVELOPMENT.md) - Development workflow

Happy deploying! 🚀
