# Vite & Laravel: The Missing Manual

A beginner-friendly guide to mastering Vite in Laravel applications. Stop struggling with 404 errors in production and understand exactly how bundling works, why you need entry points, and how to configure your app correctly.

## 🚀 What You'll Learn

- **What Vite Is**: Understand the next-generation frontend tool that replaces Webpack
- **Bundling Explained**: Learn how multiple files become optimized production assets
- **Configuration Mastery**: Master the `vite.config.js` file and its critical settings
- **Laravel Integration**: Understand the Laravel-Vite plugin bridge
- **The Golden Rule**: Never forget to add entry points to your configuration
- **Dev vs Production**: Why "it works locally" doesn't guarantee success in production

## 📋 Prerequisites

- Basic knowledge of Laravel
- Understanding of JavaScript
- A modern web browser

## 🎯 Key Concepts

### What is Vite?

Vite is a fast build tool that:
- Serves your files instantly during development
- Bundles your JavaScript and CSS into highly optimized files for production
- Provides Hot Module Replacement (HMR) for a smooth development experience

### Understanding Bundling

Bundling is the process of merging multiple small files into larger, optimized ones:

```
Before Bundling:          After Bundling:
├── Button.tsx           ┌─────────────────┐
├── Navigation.tsx  →    │   app.js        │
├── Main.ts              │ (Optimized)     │
└── styles.css           └─────────────────┘
```

### The Critical Configuration Rule

**If you want a TSX/JS file to be an entry point in Laravel, you MUST add it to the `input` array in `vite.config.js`.**

```javascript
// vite.config.js
export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/app.js",
                "resources/css/app.css",
                // DON'T FORGET NEW ENTRY POINTS!
                "packages/inventory/resources/assets/js/index.tsx",
                "packages/admin/resources/assets/js/index.tsx",
            ],
            refresh: true,
        }),
        react(),
    ],
});
```

## 🔧 The "It Works Locally" Trap

### Development Mode (`npm run dev`)
- ✅ Vite runs a live server
- ✅ Files are compiled on-demand
- ✅ Forgiving - might find unlisted files via imports
- ❌ False sense of security

### Production Mode (`npm run build`)
- ❌ No server, just static files
- ❌ Vite ONLY looks at the `input` config list
- ❌ Forgot a file? It doesn't get built → 404 Error
- ✅ True test of your configuration

## 📁 Multi-Module Setup

When working with modular applications (Inventory, Admin, Shop packages), each module needs its own entry point:

```
packages/
├── inventory/resources/assets/js/index.tsx
├── admin/resources/assets/js/index.tsx
└── shop/resources/assets/js/index.tsx
```

Each of these MUST be listed in your `vite.config.js` `input` array.

## 🎨 Features of This Tutorial

- **Interactive Animations**: Visual explanations of complex concepts
- **Responsive Design**: Works on all devices
- **Code Examples**: Real-world configuration examples
- **Progress Tracking**: Visual progress bar and scroll spy
- **Dark Mode Support**: Comfortable reading in any lighting

## 🛠️ Technology Stack

- **Frontend**: Pure HTML, CSS, JavaScript (no framework dependencies)
- **Styling**: Tailwind CSS (via CDN)
- **Backend**: Laravel (with Vite plugin)
- **Build Tools**: Vite
- **Fonts**: Plus Jakarta Sans, JetBrains Mono (via Google Fonts)

## 📁 Project Structure

```
vite-laravel-guideline/
├── index.html          # Main tutorial page
├── index.css          # Custom styles
├── index.js           # JavaScript for interactivity
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lmottasin/vite-laravel-guideline
   cd vite-laravel-guideline
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js (if you have http-server)
     npx http-server

     # Using PHP
     php -S localhost:8000
     ```

3. **Visit `http://localhost:8000`** (or whichever port you chose)

## 🔧 Common Issues & Solutions

### Issue: 404 Errors in Production

**Problem**: Your assets work locally but return 404 errors after deployment.

**Solution**: Check your `vite.config.js` and ensure ALL entry points are listed in the `input` array.

### Issue: HMR Not Working

**Problem**: Changes aren't reflected automatically during development.

**Solution**: Ensure the Laravel plugin is properly configured with `refresh: true`.

### Issue: CSS Not Loading

**Problem**: Styles are missing in production.

**Solution**: Make sure CSS files are included in the `input` array of your Vite config.

## 📚 Additional Resources

- [Official Vite Documentation](https://vitejs.dev/guide/)
- [Laravel Vite Plugin Documentation](https://laravel.com/docs/master/vite)
- [Laracasts Vite Series](https://laracasts.com/series/vite-and-laravel-the-perfect-match)
- [Awesome Vite Resources](https://github.com/vitejs/awesome-vite)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open-sourced software licensed under the MIT license.

---

**Built with ❤️ for the Laravel Community**

*Stop the 404 madness. Master Vite configuration today.*
