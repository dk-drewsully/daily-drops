# Missing Fonts

## ⚠️ Grota Sans (Weight: 800)

**Used for:** "Your daily reward is ready" text

**Status:** Not available as web font

**Current Fallback:** system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Action Required:

If you have access to Grota Sans font files:

1. **Place font files in:** `src/assets/fonts/`
   - Required formats: `.woff2` (preferred), `.woff`
   - File naming: `GrotaSans-ExtraBold.woff2`, `GrotaSans-ExtraBold.woff`

2. **Add this CSS** to `src/index.css`:

```css
@font-face {
  font-family: 'Grota Sans';
  src: url('/assets/fonts/GrotaSans-ExtraBold.woff2') format('woff2'),
       url('/assets/fonts/GrotaSans-ExtraBold.woff') format('woff');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}
```

3. **Update** `.loading-text` font-family in `LoadingScreen.css`:
```css
.loading-text {
  font-family: 'Grota Sans', system-ui, sans-serif;
  font-weight: 800;
}
```

### Alternative:

If you don't have the font, we can:
- Keep the current system font fallback
- Use a similar alternative like: **Inter ExtraBold** or **Outfit ExtraBold** (both available on Google Fonts)
