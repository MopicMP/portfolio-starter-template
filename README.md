# Portfolio Starter Template

A clean, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just clone and customize.

## Preview

```
+-----------------------------------------------+
|  Logo        About  Projects  Skills  Contact  |
+-----------------------------------------------+
|                                                 |
|          Hi, I'm [Your Name]                   |
|          Frontend Developer                     |
|          [ View My Work ]                       |
|                                                 |
+-----------------------------------------------+
|  Project 1   |  Project 2   |  Project 3       |
+-----------------------------------------------+
|  HTML  CSS  JavaScript  React  Git             |
+-----------------------------------------------+
|  Contact Form                                   |
+-----------------------------------------------+
```

## Features

- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- CSS-only animations (no JavaScript libraries)
- Dark/light theme toggle
- Project cards with hover effects
- Skills progress bars
- Working contact form layout
- Semantic HTML5 structure
- SEO-friendly meta tags
- Accessible (ARIA labels, keyboard navigation)
- Fast loading (no external dependencies)
- Easy to customize with CSS variables

## Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/portfolio-starter-template.git
cd portfolio-starter-template
```

Open `index.html` in your browser. That's it.

## File Structure

```
portfolio-starter-template/
  index.html        Main page (all sections)
  css/
    style.css       All styles + responsive breakpoints
    variables.css   Color themes and design tokens
  js/
    main.js         Theme toggle, smooth scroll, animations
  assets/
    placeholder.svg Sample project image
  README.md         This file
  LICENSE           MIT License
```

## Customization

### 1. Change Colors

Edit `css/variables.css`:

```css
:root {
    --color-primary: #2563eb;
    --color-bg: #ffffff;
    --color-text: #1e293b;
}
```

### 2. Add Your Info

Open `index.html` and replace:

- `[Your Name]` with your name
- `[Your Title]` with your job title
- Project cards with your actual projects
- Skills list with your technologies
- Social media links

### 3. Add Projects

Copy a project card and update the content:

```html
<div class="project-card">
    <div class="project-image">
        <img src="screenshot.png" alt="My Project">
    </div>
    <h3>Project Name</h3>
    <p>Short description of what it does.</p>
    <div class="project-links">
        <a href="https://live-demo.com">Live Demo</a>
        <a href="https://github.com/you/repo">Source Code</a>
    </div>
</div>
```

## Deployment

### GitHub Pages (Free)

1. Push to GitHub
2. Go to Settings > Pages
3. Select "main" branch
4. Your site is live at `https://username.github.io/portfolio-starter-template`

### Netlify (Free)

1. Drag the folder into [Netlify Drop](https://app.netlify.com/drop)
2. Done. You get a live URL instantly.

### Vercel (Free)

```bash
npx vercel
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Learn More

This template was built using techniques from these courses:

- [Frontend for Beginners](https://raccoonette.gumroad.com/l/Frontend-For-Beginners) — Learn HTML, CSS, and JavaScript from scratch
- [How to Build a Website from Scratch](https://raccoonette.gumroad.com/l/How-to-Build-a-Website-from-Scratch) — Complete guide to building and deploying websites

## License

MIT License. Use it for anything.
