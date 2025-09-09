# 🚀 AI Implementation Task: Complete Responsive Portfolio from Figma with Full Testing & Optimization

## Objective

Build a complete, production-ready portfolio website using Figma DevMode MCP, Context7 MCP, and Playwright MCP with modern responsive design and performance optimisation.

## 🎯 Design Components to Implement (Figma DevMode MCP)

### Figma selection

- [Figma selection](https://www.figma.com/design/GCgi0YtIWzj12XzFVSswRj/Portfolio-template---Edit-this-portfolio-and-export-it-as-HTML---Get-your-portfolio-live-in-no-time--Community-?node-id=2910-339&m=dev)

### Sections to implement

- **Page Header**
  - Hero section with title, subtitle, description, and CTA
  - Background image must be visible across all resolutions
  - Ensure image dimensions (width/height) are explicitly defined to meet CLS metric requirements
- **Skills Section**
  - Skill cards with icons and descriptions
  - Responsive grid layout
- **Latest Work Section**
  - Project showcase with images and descriptions
  - Gallery-style layout

## 🛠️ Technical Requirements (Context7 MCP)

### Framework & Setup

- Use Astro with Tailwind CSS 4
- Implement TypeScript for type safety
- Follow best practices for Astro component structure and Tailwind usage

### Responsive Design

- Implement responsive behaviour using Tailwind’s default media query breakpoints
- Use mobile-first approach
- Apply dynamic viewport units (`svi`, `svb`) for fluid scaling

### Performance Optimisation

- Image handling:
  - Load images via Figma URLs
  - Define explicit width and height attributes to reduce layout shift
- CSS optimisation:
  - Purge unused Tailwind classes
  - Minimise custom CSS
- JavaScript bundle:
  - Keep payload minimal
- Core Web Vitals targets:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## 🔧 Implementation Steps

- **Phase 1: Setup & Cleanup**
  - Remove default content from `src/pages/index.astro`
  - Clean up `src/layouts/Layout.astro` with proper meta tags
  - Set up semantic HTML document structure
- **Phase 2: Component Development**
  - Extract specs from Figma node `2910-339`
  - Implement each section as a self-contained Astro component
- **Phase 3: Responsive Implementation**
  - Use Tailwind’s default breakpoints for layout adaptation
  - Apply mobile-first design principles
  - Use dynamic units for scaling
- **Phase 4: Performance Optimisation**
  - Optimise image dimensions for CLS
  - Minimise CSS and JS payloads
  - Ensure fast load times and clean console

## 🧪 Testing Requirements (Playwright MCP)

### Responsive Testing

- Devices:
  - Mobile: iPhone SE, iPhone 14
  - Tablet: iPad, iPad Pro
  - Desktop: 1920x1080, 2560x1440, 3440x1440
  - Edge cases: 320px width, portrait/landscape

### Functionality Testing

- Link navigation
- Hover states
- Scroll behaviour
- Form interactions (if present)

### Performance Testing

- Page load time
- Console errors
- Network requests

## 🎨 Design Fidelity Requirements

### Visual Accuracy

- Exact colours from Figma (hex values)
- Typography: Epilogue font family, correct weights and sizes
- Consistent spacing and visual hierarchy

### Interactive Elements

- Smooth hover transitions
- Clear active states
- Graceful error handling

## ✅ Success Criteria

### Functional Requirements

- ✅ Pixel-perfect implementation of Figma design
- ✅ Fully responsive across all target devices
- ✅ Clean, semantic HTML structure
- ✅ Optimised performance metrics

### Technical Requirements

- ✅ TypeScript without errors
- ✅ Tailwind CSS 4 optimisation
- ✅ Cross-browser compatibility
- ✅ Clean console output
- ✅ Proper SEO meta tags

### Testing Requirements

- ✅ Performance benchmarks met
- ✅ Responsive behaviour validated

## 🔄 Workflow Integration

- Use Context7 MCP for technical research
- Use Figma DevMode MCP for design extraction
- Use Playwright MCP for testing and validation
- Iterate and optimise based on test results
- Document implementation decisions and optimisations

## 📝 Deliverables

- Complete Astro project with all components
- Responsive design using Tailwind defaults
- Performance-optimised codebase
- Clean, maintainable codebase
