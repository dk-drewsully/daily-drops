# Reveal All Button - Component Handoff

## Component Overview

| Property | Value |
|----------|-------|
| Name | Reveal All Button |
| Type | FRAME |
| Figma Node ID | `460:17479` |
| Platform | TBD — confirm |

## Visual Specs

```css
.reveal-all-button {
  /* Reveal All Button (FRAME) */
  position: absolute;
  left: 0px;
  top: 0px;
  width: 220px;
  height: 36px;
  /* linear-gradient(180deg, rgba(22, 0, 144, 0.800000011920929) 0%, rgba(126, 91, 255, 0.30000001192092896) 50%, rgba(22, 0, 144, 0.800000011920929) 100%) */
  /* fill: rgba(212, 57, 0, 1) */
  /* linear-gradient(180deg, rgba(240, 189, 3, 0.8999999761581421) 0%, rgba(255, 230, 91, 0.30000001192092896) 50%, rgba(240, 189, 3, 0.75) 100%) */
}

.reveal-all-button-text {
  /* Reveal All Button Text (TEXT) */
  position: absolute;
  left: 79px;
  top: 8px;
  width: 63px;
  height: 20px;
  /* fill: rgba(255, 255, 255, 1) */
}

```

## Component States

| State | Status |
|-------|--------|
| Default | ⚠️ MISSING — needs design |
| Loading | ⚠️ MISSING — needs design |
| Pressed | ⚠️ MISSING — needs design |
| Hover | ⚠️ MISSING — needs design |
| Winner | ⚠️ MISSING — needs design |
| Non-Winner | ⚠️ MISSING — needs design |
| Processing | ⚠️ MISSING — needs design |
| Error | ⚠️ MISSING — needs design |
| Empty | ⚠️ MISSING — needs design |
| Disabled | ⚠️ MISSING — needs design |
| Hover (web only) | ⚠️ MISSING — needs design |

## Interactive Elements

| Element | Node ID | Size |
|---------|---------|------|
| Reveal All Button | `460:17479` | 220×36px |
| Reveal All Button Text | `460:17480` | 63×20px |

**Reveal All Button**
- Interaction spec: ⚠️ not yet defined

**Reveal All Button Text**
- Interaction spec: ⚠️ not yet defined

## Accessibility

### ❌ Issues

- Touch target too small: 220×36px (min: 44×44px)
- Touch target too small: 63×20px (min: 44×44px)

### ⚠️ Warnings

- Element close to left edge (0px from edge, safe area typically ~20px)
- Element close to top edge (0px from edge, consider notch/Dynamic Island)
- Element close to top edge (8px from edge, consider notch/Dynamic Island)

### Accessibility Requirements

| Property | Value |
|----------|-------|
| accessibilityLabel | TBD |
| accessibilityRole | TBD |
| accessibilityHint | (if needed) |
| Focus order | Linear unless noted |
| Touch targets | Confirm via scale command or validate |

## Lottery/Gaming Edge Cases

| Scenario | Behavior |
|----------|----------|
| Long game name (e.g. "Mega Millions Megaplier") | ⚠️ confirm behavior |
| Max jackpot display ($1,600,000,000) | ⚠️ confirm behavior |
| Expired draw date | ⚠️ confirm behavior |
| Jackpot loading state | ⚠️ confirm behavior |
| Zero tickets / empty state | ⚠️ confirm behavior |
| Offline / no connection | ⚠️ confirm behavior |
| State-restricted game unavailability | ⚠️ confirm behavior |

## Assets

No asset elements detected.

## Open Questions

### Blocking Issues

- [ ] Touch target too small: 220×36px (min: 44×44px)
- [ ] Touch target too small: 63×20px (min: 44×44px)

### To Clarify

- [ ] Platform target (web/native/both?)
- [ ] Missing states: Default, Loading, Pressed, Hover, Winner, Non-Winner, Processing, Error, Empty, Disabled
- [ ] Interaction specs for: Reveal All Button, Reveal All Button Text

