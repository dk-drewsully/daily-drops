# Figma to Code Guidelines

## Image & SVG Asset Guidelines

**When images or SVGs exist in the Figma file:**
- **Do NOT attempt to replicate or recreate them in CSS/code**
- **Source the actual SVG or image file directly from Figma** using the export API
- **Build an `assets/` directory structure** (e.g., `src/assets/images/`, `src/assets/icons/`)
- **Ask the user** if manual download is needed or if you can access via Figma API
- **Use descriptive filenames** based on the Figma layer names
- **Export at appropriate scales** (e.g., @1x, @2x for raster images; SVG for vectors)

**For SVG files specifically:**
- Extract actual SVG paths/code from Figma when possible
- Preserve viewBox and dimensions from the original design
- Keep SVGs as separate files unless they're simple icons (< 5 paths)

## Font Guidelines

**Always use exact fonts from Figma:**
- Match the `fontFamily`, `fontWeight`, and `fontSize` exactly as specified
- Use web-safe fonts when available (Google Fonts, etc.)

**When a font file is missing or not web-available:**
- **Alert the user immediately** with the font name and required weights
- **Direct them to place font files** in `src/assets/fonts/` or `public/fonts/`
- **Provide the @font-face CSS** template they'll need to add
- **Suggest web font alternatives** if the exact font isn't available

Example alert format:
```
⚠️ Missing Font: "Grota Sans" (weight: 800)
- Place font files in: src/assets/fonts/
- Required formats: .woff2, .woff
- Fallback used: system-ui, sans-serif
```

## Color & Gradient Accuracy

**CRITICAL: Always extract and verify exact color values from Figma**

### Process for Color Extraction:

1. **Use Figma API to extract fill data** - Never guess or approximate colors
2. **Check fill type** - SOLID, GRADIENT_LINEAR, GRADIENT_RADIAL, GRADIENT_ANGULAR, IMAGE
3. **Extract all gradient stops** with exact positions (0-1 range)
4. **Note opacity values** - both fill opacity AND layer opacity
5. **Verify effects** - shadows, blurs, etc. that affect visual appearance
6. **Test in browser** - Colors should match Figma exactly

### Solid Colors

**Extract exact RGB/RGBA values:**
```javascript
// From Figma API:
{
  "fills": [{
    "type": "SOLID",
    "color": {
      "r": 0.08627450980392157,  // Convert: r * 255 = 22
      "g": 0.0,                   // Convert: g * 255 = 0
      "b": 0.30588235294117649,   // Convert: b * 255 = 78
      "a": 1                      // Alpha channel
    },
    "opacity": 0.8  // Additional opacity multiplier
  }]
}

// Translates to CSS:
background: rgba(22, 0, 78, 0.8);
```

### Radial Gradients

**Extract gradient stops with exact positions:**
```javascript
// From Figma API:
{
  "fills": [{
    "type": "GRADIENT_RADIAL",
    "gradientStops": [
      {
        "position": 0.26089638471603394,  // 26% stop
        "color": { "r": 1.0, "g": 0.93, "b": 0.18, "a": 1 }
      },
      {
        "position": 1.0,  // 100% stop
        "color": { "r": 0.63, "g": 0.56, "b": 0.04, "a": 1 }
      }
    ]
  }]
}

// Translates to CSS:
background: radial-gradient(
  circle,
  rgba(255, 238, 47, 1) 26%,
  rgba(160, 143, 11, 1) 100%
);
```

### Linear Gradients

**Note gradient direction and stops:**
```css
/* Extract gradient handles from Figma to determine angle */
background: linear-gradient(
  180deg,  /* Direction from Figma gradient handles */
  rgb(22, 0, 78) 0%,
  rgb(23, 0, 92) 14%,
  rgb(66, 37, 172) 38%,
  rgb(97, 73, 217) 54%,
  rgb(144, 129, 255) 100%
);
```

### Effects (Shadows, Blur)

**Extract shadow values exactly:**
```javascript
// From Figma API:
{
  "effects": [{
    "type": "DROP_SHADOW",
    "color": { "r": 0, "g": 0, "b": 0, "a": 0.25 },
    "offset": { "x": 0, "y": 4 },
    "radius": 6,
    "spread": 0
  }]
}

// Translates to CSS:
box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25));
```

### Multiple Fills

**Apply in correct order (bottom to top):**
```css
/* Figma stacks fills from bottom to top */
background:
  radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%),
  linear-gradient(180deg, rgb(66, 37, 172) 0%, rgb(144, 129, 255) 100%);
```

### Color Verification Checklist

Before finalizing any element with color:
- [ ] Extract exact RGB values (not eyeballed)
- [ ] Check for gradients (don't assume solid colors)
- [ ] Note gradient type (linear/radial/angular)
- [ ] Extract all gradient stops and positions
- [ ] Check fill opacity AND layer opacity
- [ ] Extract shadow/blur effects
- [ ] Verify against Figma design in browser
- [ ] Check in light AND dark backgrounds if applicable

### Common Mistakes to Avoid

❌ **DON'T:**
- Approximate colors: `background: white` when it's actually `rgba(255, 255, 255, 0.8)`
- Ignore gradients: Using solid colors for gradient fills
- Guess gradient stops: `0%, 100%` when actual stops are `26%, 100%`
- Forget opacity: Missing fill or layer opacity values
- Skip effects: Not implementing drop shadows or blurs
- Use generic names: `background: purple` instead of exact RGB

✅ **DO:**
- Extract exact values from Figma API
- Convert color values: `r * 255`, `g * 255`, `b * 255`
- Preserve gradient stop positions exactly
- Apply both fill opacity AND layer opacity
- Implement all visual effects (shadows, blurs)
- Test final colors against Figma design

### Color Palette Documentation

**Create a color palette file for reusable colors:**
```css
/* src/styles/colors.css */
:root {
  /* Solid colors from Figma */
  --color-primary: rgb(25, 118, 210);
  --color-background: rgb(243, 246, 249);

  /* Gradient definitions */
  --gradient-bg: linear-gradient(180deg,
    rgb(22, 0, 78) 0%,
    rgb(144, 129, 255) 100%
  );

  --gradient-orb-blue: radial-gradient(circle,
    rgba(111, 209, 255, 1) 26%,
    rgba(37, 130, 174, 1) 100%
  );
}
```

## Position & Scale Verification

**CRITICAL: Always verify exact positioning from Figma data**

**Process for every element:**
1. Extract `absoluteBoundingBox` from Figma node data
2. Note exact values: `x`, `y`, `width`, `height`
3. Calculate positions relative to parent container
4. Apply exact pixel values in CSS (not percentages or approximations)
5. Verify rendered result matches Figma design

**What to extract:**
- **Position**: Use exact `x` and `y` from absoluteBoundingBox
- **Dimensions**: Use exact `width` and `height` values
- **Spacing**: Calculate gaps between elements using their positions
- **Z-index**: Respect layer order from Figma

**Example extraction:**
```javascript
// From Figma API response:
{
  "absoluteBoundingBox": {
    "x": 13335,    // exact left position
    "y": 44,       // exact top position
    "width": 39,   // exact width
    "height": 40   // exact height
  }
}

// Translates to CSS (relative to parent):
.element {
  position: absolute;
  left: 66px;    /* x relative to container */
  top: 44px;     /* y relative to container */
  width: 39px;   /* exact width */
  height: 40px;  /* exact height */
}
```

**Never use:**
- ❌ Percentages for positioning unless explicitly using Figma constraints
- ❌ Approximate values like `top: 8%` or `margin-top: -100px`
- ❌ Guessed spacing like `gap: 20px` without measuring
- ❌ Eyeballed sizes - always use exact pixel values

**Do use:**
- ✅ Exact pixel values from absoluteBoundingBox
- ✅ Calculated positions relative to parent
- ✅ Measured gaps between elements
- ✅ Verified dimensions against Figma

## Spacing & Layout Precision

**Match exact dimensions from Figma:**
- Use pixel-perfect values for spacing, margins, padding
- Extract exact widths, heights, and positions from `absoluteBoundingBox`
- Respect gap, border-radius, and other layout properties
- Consider converting to rem/em only if requested by user

**Grid and alignment:**
- Maintain exact positioning relationships between elements
- Use flexbox/grid values that match Figma's auto-layout properties
- Preserve alignment (center, flex-start, space-between, etc.)

## Flexbox & Auto-Layout Best Practices

**CRITICAL: Understand the layout hierarchy before setting dimensions**

When implementing Figma auto-layout in code, always consider the full layout context:

### Flexible vs Fixed Dimensions

**Default to flexible in flex containers:**

```css
/* ✅ DO: Use flexible dimensions in flex layouts */
.flex-container {
  display: flex;
  flex-direction: column;
  height: 100%;  /* Container fills parent */
}

.flex-child {
  height: 100%;  /* Child fills container */
  /* OR */
  flex: 1;       /* Child grows to fill space */
}

/* ❌ DON'T: Use fixed dimensions that break flex layouts */
.flex-container {
  display: flex;
  height: 100%;
}

.flex-child {
  height: 136px;  /* Fixed height breaks flexible layout */
}
```

### Layout Hierarchy Decision Tree

**Before setting any dimension, ask:**

1. **What's the parent?**
   - Is it a flex container?
   - Does it have defined dimensions?
   - Is it flexible or fixed?

2. **Should this element be flexible or fixed?**
   - Fixed: Specific design requirement (exact pixel height/width from Figma)
   - Flexible: Part of auto-layout system (should adapt to container)

3. **Will this break the layout system?**
   - Does this introduce a constraint that prevents proper sizing?
   - Will this element still work if content or container size changes?

### Implementation Rules

**✅ DO:**
- Use `height: 100%` or `flex: 1` for elements in flex containers
- Set fixed dimensions on the **outermost container** that defines the layout bounds
- Let child elements fill or flex within their container
- Think about responsive behavior and scalability
- Reference existing patterns in the codebase
- Consider the full component tree (parent → child → grandchild)

**❌ DON'T:**
- Set fixed pixel dimensions on flex children unless required by design
- Break the flexible layout chain with arbitrary fixed values
- Assume all elements need fixed heights just because Figma shows pixels
- Set dimensions without understanding the parent context
- Copy dimension values without considering layout purpose

### Common Patterns

**Pattern 1: Container defines bounds, children fill**
```css
/* Container has fixed bounds from Figma */
.screen-container {
  width: 390px;
  height: 830px;
  display: flex;
  flex-direction: column;
}

/* Children flex within container */
.header { height: 100px; }  /* Fixed from design */
.content { flex: 1; }        /* Fills remaining space */
.footer { height: 60px; }    /* Fixed from design */
```

**Pattern 2: Nested flex containers**
```css
/* Parent container */
.content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;  /* Fills parent */
}

/* Flex row container */
.card-row {
  display: flex;
  gap: 26px;
  height: 100%;  /* Fills available space */
}

/* Individual cards */
.card {
  width: 64px;    /* Fixed width from design */
  height: 100%;   /* Fills row height */
}
```

**Pattern 3: Mixed fixed and flexible**
```css
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.fixed-header {
  height: 50px;        /* Fixed from Figma */
}

.flexible-content {
  flex: 1;             /* Grows to fill remaining space */
}

.fixed-footer {
  height: 40px;        /* Fixed from Figma */
}
```

### Red Flags

**These should make you reconsider your approach:**

- Setting fixed height on element inside flex container with `height: 100%`
- Element doesn't fill container when it logically should
- Content overflows container unexpectedly
- Layout breaks when container size changes
- Mixing absolute positioning with flex layout without clear reason

### Verification Checklist

Before finalizing any layout:
- [ ] Analyzed parent container (flex? fixed? flexible?)
- [ ] Considered if element should be flexible or fixed
- [ ] Verified element fills/sizes correctly
- [ ] Checked for layout breaks or overflow
- [ ] Confirmed responsive behavior makes sense
- [ ] Referenced existing patterns in codebase
- [ ] Tested with different content sizes (if applicable)

## Animation Specifications

**Extract animation details from Figma:**
- Duration, easing, and delay values from prototype interactions
- Smart animate transitions should map to CSS transitions or animations
- Document interactive states (hover, active, disabled)

**When creating animations:**
- Use CSS animations/transitions when possible
- Match timing functions: ease-in, ease-out, ease-in-out, cubic-bezier
- Preserve animation duration in milliseconds

Example:
```css
.element {
  transition: opacity 300ms ease-in-out;
  animation: slideIn 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Component Naming Conventions

**Base component names on Figma layer names:**
- Use PascalCase for React components (e.g., `LoadingScreen`, `DropVector`)
- Use kebab-case for CSS classes (e.g., `.loading-screen`, `.drop-vector`)
- Preserve semantic meaning from Figma names
- Clean up generated names (e.g., "Frame 123" → descriptive name)

**File structure:**
- Mirror Figma organization when it makes sense
- Component files: `ComponentName.jsx`
- Style files: `ComponentName.css`
- Assets by type: `assets/images/`, `assets/icons/`, `assets/fonts/`

## Workflow & Tools

### Using figma-inspector.js

**Use the unified inspector tool instead of creating temporary scripts:**

```bash
# Search for elements by name
node scripts/figma-inspector.js search --query=ellipse

# Get positions for all elements (or filter by name)
node scripts/figma-inspector.js positions
node scripts/figma-inspector.js positions --filter=star

# Get fill/color data for specific nodes
node scripts/figma-inspector.js fills --nodeIds=394:68839,394:68841
```

**When to use:**
- ✅ Inspecting element positions
- ✅ Extracting color/gradient data
- ✅ Finding missing elements
- ✅ Verifying implementations

**Do NOT:**
- ❌ Create temporary one-off scripts (get-*.js, check-*.js, verify-*.js)
- ❌ Duplicate functionality that exists in figma-inspector.js
- ❌ Leave unused scripts in the project directory

### Essential Scripts Only

**Keep these scripts:**
- `scripts/extract-assets.js` - Export SVGs/images from Figma
- `scripts/figma-inspector.js` - Inspect positions, colors, structure, and generate CSS

**Delete immediately:**
- Any temporary scripts created for one-time inspection
- Scripts with names like: get-*, check-*, verify-*, find-*, audit-*


## Code Quality & Repository Hygiene

**For comprehensive guidelines on keeping your codebase clean and preventing bloat:**

👉 **See [CODE_QUALITY.md](CODE_QUALITY.md)**

**Key points:**
- Use `figma-inspector.js` for all Figma inspection tasks
- Never create temporary scripts (get-*.js, check-*.js, verify-*.js)
- Delete throwaway code immediately
- Refactor instead of duplicating

## General Principles

1. **Pixel-perfect first** - Match the design exactly before optimizing
2. **Ask before substituting** - Don't silently replace fonts, images, or colors
3. **Document deviations** - If exact match isn't possible, explain why
4. **Use unified tools** - Use scripts/figma-inspector.js instead of creating temporary scripts
5. **Preserve design intent** - Understand the purpose behind design choices
6. **Keep repository clean** - Delete temporary files immediately after use
7. **Refactor over duplicate** - Extend existing code rather than copying
8. **Question every new file** - Does a tool already exist? Is this truly reusable?
