# Agentic AI Receptionist Homepage

A modern, responsive homepage for Agentic AI Receptionist - an AI-powered hotel receptionist SaaS solution. Built with HTML, Tailwind CSS, and GSAP animations.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful desktop layouts
- **Modern Animations**: Smooth GSAP animations with ScrollTrigger
- **Brand-Consistent**: Follows exact brand colors and typography
- **Accessible**: Semantic HTML with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Optimized assets and efficient CSS

## 🎨 Design System

### Colors
- **Primary (Navy)**: `#0A2540`
- **Secondary (Warm Gold)**: `#F5A623`
- **Accent (Aqua)**: `#4FD1C5`
- **Background**: `#F9FAFB`
- **Text**: `#111827`

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📁 Project Structure

```
agentic-ai-homepage/
├── index.html                 # Main HTML file
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── src/
│   ├── css/
│   │   └── styles.css        # Tailwind directives + custom utilities
│   ├── js/
│   │   └── main.js           # GSAP animations + interactivity
│   └── assets/
│       ├── logo.svg          # Company logo
│       ├── hero-illustration.svg
│       ├── feature-checkin.svg
│       ├── feature-whatsapp.svg
│       ├── feature-billing.svg
│       └── feature-analytics.svg
├── public/
│   └── favicon.ico          # Site favicon
└── README.md                 # This file
```

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd agentic-ai-homepage
   
   # Or simply download and extract the files
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   This will:
   - Watch for changes in `src/css/styles.css`
   - Compile Tailwind CSS to `dist/styles.css`
   - Auto-reload on file changes

4. **Open in browser**
   - Navigate to `http://localhost:3000` (if using a local server)
   - Or simply open `index.html` in your browser

### Build for Production

```bash
npm run build
```

This will:
- Minify the CSS for production
- Optimize the build for deployment

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your Git repository

### Any Static Host
- Upload all files to your hosting provider
- Ensure `index.html` is in the root directory

## 📝 Customization

### Replacing Placeholder Content
- **SVG Assets**: Replace files in `src/assets/` with your custom illustrations
- **Copy**: Update text content in `index.html`
- **Colors**: Modify brand colors in `tailwind.config.js`
- **Contact Info**: Update contact details in the footer

### Adding API Endpoints
The demo form in the contact section currently shows a simulated submission. To connect to a real API:

1. **Update the form submission handler** in `src/js/main.js`:
   ```javascript
   // Replace the setTimeout simulation with actual API call
   fetch('/api/demo-request', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   })
   ```

2. **Add your API endpoint** to handle form submissions

### Modifying Animations
- **GSAP Animations**: Edit `src/js/main.js` for custom animations
- **CSS Animations**: Add custom keyframes in `src/css/styles.css`
- **Scroll Triggers**: Modify ScrollTrigger configurations for different behaviors

## 🔧 Configuration Files

### tailwind.config.js
- Brand colors and fonts
- Custom spacing and animations
- Content paths for Tailwind scanning

### postcss.config.js
- Tailwind CSS and Autoprefixer plugins
- Optimized for production builds

### package.json
- Development and build scripts
- Dependencies for Tailwind CSS and PostCSS

## 🎯 Key Sections

1. **Hero Section**: Main value proposition with CTAs
2. **Problem Section**: Current hotel reception challenges
3. **Features**: 4 main AI capabilities with icons
4. **Benefits**: Split view for hotels vs guests
5. **Story**: Company timeline and milestones
6. **Vision**: Market opportunity with animated counters
7. **Team**: Company structure overview
8. **Contact**: Demo request form
9. **Footer**: Links and company info

## 🚀 Performance Tips

- **Optimize Images**: Replace placeholder SVGs with optimized images
- **Minimize CSS**: Production build already minifies CSS
- **Lazy Loading**: Consider adding lazy loading for images
- **CDN**: Use CDN for external libraries (already implemented)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Animation Features

- **Hero Entrance**: Staggered fade-in animations
- **Scroll Triggers**: Elements animate when scrolled into view
- **Counter Animations**: Numbers count up when visible
- **Mobile Menu**: Smooth slide-in/out transitions
- **Sticky Navigation**: Background changes on scroll

## 🔍 SEO & Accessibility

- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<section>`, `<footer>`
- **Meta Tags**: Optimized title and description
- **Alt Attributes**: All images have descriptive alt text
- **Focus States**: Keyboard navigation support
- **ARIA Labels**: Screen reader friendly

## 📞 Support

For questions or customization requests:
- Email: hello@agenticai.com
- Phone: +91 98765 43210

---

Built with ❤️ for Agentic AI Receptionist
# nexrova-frontend
# nexrova-frontend
# nexrova-frontend
