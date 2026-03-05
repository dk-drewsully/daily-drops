# Skills - Figma to Code Knowledge Base

This folder contains the complete knowledge base and tools for converting Figma designs to production code.

## 📚 Skills (Guidelines)

### Core Conversion Skills

**[FIGMA_GUIDELINES.md](FIGMA_GUIDELINES.md)** - Figma to Code Conversion
- Image & SVG asset extraction rules
- Font handling procedures
- Color & gradient accuracy requirements
- Position & scale verification
- Flexbox & auto-layout best practices
- Animation specifications
- Component naming conventions

**[CODE_QUALITY.md](CODE_QUALITY.md)** - Repository Hygiene
- File creation checklist
- Anti-patterns to avoid
- Refactoring over duplication
- Cleanup procedures
- Documentation requirements

**[INSPECTOR_FEATURES.md](INSPECTOR_FEATURES.md)** - Mobile & Web Best Practices
- Responsive CSS generation
- Mobile validation checks
- Device scaling analysis
- Multi-resolution asset export
- Touch target guidelines
- Safe area considerations
- Performance optimizations

**[COMPONENT_GUIDELINES.md](COMPONENT_GUIDELINES.md)** - Component Development
- Component structure patterns
- Styling conventions
- State management
- Reusable component design

### Design Expertise

**[PRODUCT_DESIGN_PARTNER.md](PRODUCT_DESIGN_PARTNER.md)** - Staff-Level Product Design Partner
- Product design craft for gaming/lottery apps
- Motion design principles (timing, easing, choreography)
- Jackpocket/DraftKings design philosophy
- Trust-first design in gambling/lottery space
- Ethical gamification patterns
- Responsible gaming requirements
- Platform-specific considerations (iOS, Android, Web)
- Accessibility standards (WCAG 2.1 AA)
- Design review criteria and red flags

## 🛠️ Tools

**[figma-inspector.js](figma-inspector.js)** - Unified Figma Inspection Tool
```bash
# Get help
node skills/figma-inspector.js

# Inspect positions
node skills/figma-inspector.js positions [--filter=<name>] [--css] [--responsive]

# Extract colors
node skills/figma-inspector.js fills --nodeIds=<id1,id2>

# Search elements
node skills/figma-inspector.js search --query=<text>

# Validate for mobile
node skills/figma-inspector.js validate

# Check device scaling
node skills/figma-inspector.js scale --element=<name> [--devices=<list>]

# Export assets
node skills/figma-inspector.js export --nodeId=<id> [--sizes=1x,2x,3x] [--format=png|svg|jpg]
```

**[extract-assets.js](extract-assets.js)** - Asset Extraction Tool
- Export SVGs and images from Figma API
- Batch export multiple assets
- Save to organized directory structure

## 🎯 How to Use This Knowledge Base

### For New Features
1. Read **FIGMA_GUIDELINES.md** for conversion rules
2. Use **figma-inspector.js** to extract exact values from Figma
3. Follow **CODE_QUALITY.md** to keep the repository clean
4. Validate with **INSPECTOR_FEATURES.md** for mobile/web best practices

### For Debugging
1. Use `node skills/figma-inspector.js positions` to verify element positions
2. Use `node skills/figma-inspector.js fills` to verify colors/gradients
3. Use `node skills/figma-inspector.js validate` to check for issues

### For Mobile Optimization
1. Read **INSPECTOR_FEATURES.md** for mobile best practices
2. Use `node skills/figma-inspector.js validate` to check for issues
3. Use `node skills/figma-inspector.js scale` to test across devices
4. Use `--responsive` flag for viewport-based CSS

## 🚫 Anti-Patterns

**Never create:**
- ❌ Temporary inspection scripts (get-*.js, check-*.js, verify-*.js)
- ❌ One-off tools that duplicate figma-inspector.js functionality
- ❌ Backup files (file-old.js, file-copy.js)

**Always:**
- ✅ Use existing tools (figma-inspector.js, extract-assets.js)
- ✅ Extend existing tools when new functionality is needed
- ✅ Delete temporary code immediately
- ✅ Follow guidelines in this folder

## 📖 Quick Reference

### Extract exact positions
```bash
node skills/figma-inspector.js positions --filter=button --css
```

### Generate responsive CSS
```bash
node skills/figma-inspector.js positions --css --responsive
```

### Validate for mobile
```bash
node skills/figma-inspector.js validate
```

### Check device scaling
```bash
node skills/figma-inspector.js scale --element=logo
```

### Export assets at multiple resolutions
```bash
node skills/figma-inspector.js export --nodeId=394:68839 --sizes=1x,2x,3x
```

## 🔄 Workflow Principle

**Always re-run/verify after defining new guidelines or skills:**
1. When creating new guidelines, immediately audit existing work
2. Fix any violations found
3. Verify result matches standard

This ensures that guidelines are living documents that actively improve the codebase, not just aspirational documentation.
