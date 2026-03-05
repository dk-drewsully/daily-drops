# Figma Inspector - Mobile & Web Best Practices

## Overview

`figma-inspector.js` now includes best practices for building web games that will be embedded in iOS and Android apps. The tool helps ensure your designs scale properly across devices and follow mobile development guidelines.

## New Features

### 1. Responsive CSS Generation (`--responsive` flag)

Generate CSS with viewport units that scale across different screen sizes:

```bash
# Generate responsive CSS for all elements
node figma-inspector.js positions --css --responsive

# Generate responsive CSS for specific elements
node figma-inspector.js positions --filter=button --css --responsive
```

**Output includes:**
- Viewport units (vw/vh) for fluid scaling
- CSS custom properties for runtime scaling
- Alternative approaches for aspect-ratio maintenance

### 2. Mobile Validation (`validate` command)

Check your design for mobile best practices and common issues:

```bash
node figma-inspector.js validate
```

**Checks for:**
- ❌ **Touch target sizes** - Flags elements <44×44px (iOS minimum)
- ⚠️ **Safe area concerns** - Warns about elements near screen edges
- ⚠️ **Text readability** - Flags text that may be too small
- 💡 **Performance hints** - Suggests optimizations for animated elements

### 3. Device Scaling Analysis (`scale` command)

See how elements scale across different devices:

```bash
# Analyze specific element across all devices
node figma-inspector.js scale --element=button

# Analyze on specific devices
node figma-inspector.js scale --element=logo --devices=iphone15,pixel8
```

**Supported devices:**
- iPhone 15, iPhone 15 Pro, iPhone 15 Pro Max, iPhone SE
- Pixel 8, Pixel 8 Pro
- Galaxy S24

**Shows:**
- Scaled dimensions on each device
- Physical pixel counts (accounting for DPR)
- Touch target warnings

### 4. Multi-Resolution Asset Export (`export` command)

Export assets at multiple resolutions for different device pixel ratios:

```bash
# Export at 1x, 2x, 3x
node figma-inspector.js export --nodeId=394:68839

# Export at specific resolutions
node figma-inspector.js export --nodeId=394:68839 --sizes=2x,3x

# Export as SVG
node figma-inspector.js export --nodeId=394:68839 --format=svg
```

## Best Practices Implemented

### Design Reference Dimensions
- Base design: **390×830px** (iPhone 15 class viewport)
- All calculations use this as reference
- Easily adjustable for different base dimensions

### Responsive Scaling Approaches

#### Option 1: Viewport Units (Recommended for full-screen games)
```css
.element {
  left: 18.46vw;  /* Scales with viewport width */
  top: 56.51vh;   /* Scales with viewport height */
}
```

#### Option 2: CSS Custom Properties (Recommended for aspect-locked games)
```css
:root {
  --design-width: 390;
  --design-height: 830;
  --scale: min(
    calc(100vw / var(--design-width)),
    calc(100vh / var(--design-height))
  );
}

.element {
  left: calc(var(--scale) * 72px);
  top: calc(var(--scale) * 469px);
}
```

### Performance Optimizations

**Animated elements** (stars, orbs, particles):
- Use `transform` instead of `left/top`
- Add `will-change: transform, opacity`
- Use `requestAnimationFrame` for JS animations

**Isolated components**:
- Add `contain: layout style` for better paint optimization

**Complex gradients/effects**:
- Cache with `will-change` when actively animating

### Touch Target Guidelines

- **Minimum size:** 44×44px (iOS), 48×48px (Android best practice)
- **Spacing:** 8px minimum between adjacent touch targets
- The validator automatically flags violations

### Safe Area Considerations

- **iOS notch/Dynamic Island:** Top ~44-59px
- **iOS home indicator:** Bottom ~34px
- **Android navigation:** Varies by device/mode
- The validator warns about elements within 20px of edges

## Integration with Your Workflow

1. **Design in Figma** at 390×830px
2. **Extract positions** with responsive CSS: `node figma-inspector.js positions --css --responsive`
3. **Validate** for mobile issues: `node figma-inspector.js validate`
4. **Test scaling** on target devices: `node figma-inspector.js scale --element=button`
5. **Export assets** at multiple resolutions: `node figma-inspector.js export --nodeId=<id>`

## Quick Reference

```bash
# Get help
node figma-inspector.js

# Generate responsive CSS
node figma-inspector.js positions --css --responsive

# Check mobile compatibility
node figma-inspector.js validate

# Test device scaling
node figma-inspector.js scale --element=<name>

# Export multi-resolution assets
node figma-inspector.js export --nodeId=<id> --sizes=1x,2x,3x
```

## Next Steps

Consider creating:
- Automated viewport testing scripts
- Safe area overlay component for development
- Asset optimization pipeline (WebP conversion, SVG minification)
- Device preview mode in your dev environment
