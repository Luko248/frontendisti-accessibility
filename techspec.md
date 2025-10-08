### **🚀 AI Implementation Task: Complete Responsive Portfolio from Figma with Full Testing & Optimization**

**🔥 CRITICAL OBJECTIVE**:

Build a **complete, production-ready portfolio website** with the following requirements:

- Use **Figma DevMode MCP**, **Context7 MCP**, and **Playwright MCP** for implementation
- Implement modern responsive design, accessibility, and performance optimization
- Header image will be included on all media queries, on desktop it will be horizontally centered with content on left side
- Content of all sections will be extracted from Figma design
- All sections must have same width in implementation (In figma design it is not same for all sections)
- Implement properly sized icons throughout the design

---

### **🎯 Design Components to Implement (Figma DevMode MCP)**

1. **Page Header** - https://www.figma.com/design/GCgi0YtIWzj12XzFVSswRj/Portfolio-template---Edit-this-portfolio-and-export-it-as-HTML---Get-your-portfolio-live-in-no-time--Community-?node-id=701-728&m=dev
    - Hero section with title, subtitle, description, and CTA
    - Background image with proper responsive scaling
2. **Skills Section** - https://www.figma.com/design/GCgi0YtIWzj12XzFVSswRj/Portfolio-template---Edit-this-portfolio-and-export-it-as-HTML---Get-your-portfolio-live-in-no-time--Community-?node-id=701-730&m=dev
    - Three skill cards with icons and descriptions
    - Responsive grid layout
3. **Latest Work Section** - https://www.figma.com/design/GCgi0YtIWzj12XzFVSswRj/Portfolio-template---Edit-this-portfolio-and-export-it-as-HTML---Get-your-portfolio-live-in-no-time--Community-?node-id=701-749&m=dev
    - Project showcase with images and descriptions
    - Gallery-style responsive layout

---

### **🛠️ Technical Requirements (Context7 MCP)**

### **Framework & Setup**

- Use **Astro** with **Tailwind CSS 4** (current project setup)
- Research best practices for **Astro components** and **Tailwind responsive design**
- Implement **TypeScript** for type safety
- Extract all resources like font, images and icons from Figma design

### **Responsive Design (Mobile-First)**

- **Dynamic Viewport Units**: Use `svi`, `svb` for fluid scaling
- **Breakpoint Strategy**:
    - Use Tailwind 4 default breakpoints
- **Typography Scaling**: Fluid typography using `clamp()` or `svi` units
- **Container Queries**: Use `@container` for component-level responsiveness

### **Accessibility (WCAG 2.1 AA)**

- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **Alt text** for all images and icons
- **Color contrast**: Ensure 4.5:1 ratio minimum
- **Focus management**: Visible focus indicators
- **Screen reader** compatibility
- **Keyboard navigation** support

### **Performance Optimization**

- **Image optimization**: AVIF format, lazy loading via Astro Image component
- **CSS optimization**: Purged Tailwind, minimal custom CSS
- **Bundle size**: Minimize JavaScript payload
- **Core Web Vitals**: Target LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Schema.org**: JSON-LD structured data for SEO and rich snippets

---

### **🔧 Implementation Steps**

### **Phase 1: Setup & Content Removal**

1. **Remove default content** from `src/pages/index.astro`
2. **Clean up Layout.astro** with proper meta tags
3. **Set up proper HTML document structure**

### **Phase 2: Component Development (Figma DevMode MCP)**

1. **Extract PageHeader specs** from Figma node-id=701-728
2. **Extract SkillsSection specs** from Figma node-id=701-730
3. **Extract LatestWorkSection specs** from Figma node-id=701-727
4. **Implement each as self-contained Astro components**

### **Phase 3: Responsive Implementation (Context7 MCP)**

1. **Research Tailwind 4 responsive best practices**
2. **Implement mobile-first responsive design**
3. **Use dynamic viewport units for fluid scaling**
4. **Optimize for all device sizes and orientations**

### **Phase 4: Accessibility & Performance (Context7 MCP)**

1. **Research Astro accessibility best practices**
2. **Implement semantic HTML structure**
3. **Add proper ARIA labels and roles**
4. **Optimize images using Astro Image component from public folder**
5. **Add Schema.org JSON-LD structured data to Layout.astro head**
6. **Implement performance best practices**

---

### **🧪 Testing Requirements (Playwright MCP)**

### **Responsive Testing**

- **Mobile devices**: iPhone SE (375x667), iPhone 14 (390x844)
- **Tablets**: iPad (768x1024), iPad Pro (1024x1366)
- **Desktop**: 1920x1080, 2560x1440, 3440x1440
- **Edge cases**: 320px width, portrait/landscape orientations

### **Functionality Testing**

- **Link navigation**: CTA buttons, external links
- **Hover states**: Interactive elements
- **Scroll behavior**: Smooth scrolling, section visibility
- **Form interactions**: If any forms are present

### **Performance Testing**

- **Page load time**: Measure and optimize
- **Console errors**: Ensure clean console
- **Network requests**: Minimize and optimize
- **Accessibility audit**: Use browser accessibility tools

---

### **📱 Responsive Behavior Specifications**

### **Layout Adaptations**

- **320px-767px**: Single column, stacked content, touch-optimized
- **768px-1023px**: 2-column grids, improved spacing
- **1024px+**: Multi-column layouts, horizontal arrangements
- **1920px+**: Optimized for large screens, prevent content stretching

### **Typography System**

- **Headings**: Scale from 6svi (mobile) to 2svi (desktop)
- **Body text**: Scale from 3.5svi (mobile) to 1.1svi (desktop)
- **Line height**: Responsive for optimal readability
- **Font loading**: Proper fallbacks and optimization

### **Image Handling**

- **Static Assets**: Use `/public/images/` folder for all images (not Figma links)
- **Astro Image Component**: Use `<Image />` from `astro:assets` for optimization
- **Responsive Images**: `widths={[425, 800]}` and `sizes` attributes for responsive loading
- **Lazy Loading**: `loading="lazy"` on LatestWorkSection gallery images
- **Alt Attributes**: Descriptive alt text for all images (accessibility requirement)
- **Format**: AVIF format for optimal compression and quality
- **Header Image**: Responsive header using Astro Image component with proper srcset

---

### **🎨 Design Fidelity Requirements**

### **Visual Accuracy**

- **Exact colors**: Extract hex values from Figma
- **Typography**: Proper font families (Epilogue), weights, sizes
- **Spacing**: Maintain design system consistency
- **Visual hierarchy**: Proper contrast and emphasis

### **Interactive Elements**

- **Hover states**: Smooth transitions, visual feedback
- **Active states**: Clear interaction feedback
- **Loading states**: If applicable
- **Error states**: Graceful error handling

---

### **✅ Success Criteria**

### **Functional Requirements**

- ✅ All Figma designs implemented with pixel-perfect accuracy
- ✅ Fully responsive across all target devices
- ✅ Clean, semantic HTML structure
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Optimized performance metrics

### **Technical Requirements**

- ✅ TypeScript implementation without errors
- ✅ Tailwind CSS 4 optimization
- ✅ Cross-browser compatibility
- ✅ Clean console output
- ✅ Proper SEO meta tags

### **Testing Requirements**

- ✅ Comprehensive Playwright MCP test coverage
- ✅ Performance benchmarks met
- ✅ Responsive behavior validated across all breakpoints

---

### **🔄 Workflow Integration**

1. **Use Context7 MCP** for technical research and best practices
2. **Use Figma DevMode MCP** for design extraction and asset gathering
3. **Use Playwright MCP** for comprehensive testing and validation
4. **Iterate and optimize** based on test results
5. **Document** implementation decisions and optimizations

---

### **📝 Deliverables**

- **Complete Astro project** with all components implemented
- **Responsive design** working flawlessly across all devices
- **Accessibility-compliant** codebase with proper semantics
- **Performance-optimized** assets and code
- **Comprehensive test results** from Playwright MCP validation
- **Clean, maintainable code** following best practices

This implementation should serve as a **production-ready portfolio template** that can be easily customized and deployed.