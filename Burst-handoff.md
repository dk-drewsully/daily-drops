# Burst - Component Handoff

## Component Overview

| Property | Value |
|----------|-------|
| Name | Burst |
| Type | FRAME |
| Figma Node ID | `422:25402` |
| Platform | TBD — confirm |

## Visual Specs

```css
.burst {
  /* Burst (FRAME) */
  position: absolute;
  left: 0px;
  top: 0px;
  width: 236px;
  height: 236px;
}

.star-vector {
  /* Star Vector (VECTOR) */
  position: absolute;
  left: -7px;
  top: -34px;
  width: 250px;
  height: 250px;
  /* radial-gradient(circle, rgba(158, 184, 255, 1) 0%, rgba(158, 184, 255, 0.9800000190734863) 9%, rgba(158, 184, 255, 0.9100000262260437) 22%, rgba(158, 184, 255, 0.800000011920929) 36%, rgba(158, 184, 255, 0.6499999761581421) 52%, rgba(158, 184, 255, 0.44999998807907104) 69%, rgba(158, 184, 255, 0.20999999344348907) 86%, rgba(158, 184, 255, 0) 100%) */
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

No interactive elements detected.

## Accessibility

### ⚠️ Warnings

- Element close to left edge (0px from edge, safe area typically ~20px)
- Element close to top edge (0px from edge, consider notch/Dynamic Island)
- Element close to left edge (-7px from edge, safe area typically ~20px)
- Element close to top edge (-34px from edge, consider notch/Dynamic Island)
- Consider using CSS transform instead of left/top for animations (better performance)

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

| Element | Node ID | Suggested Export | Output Path |
|---------|---------|------------------|-------------|
| Star Vector | `422:25403` | `node skills/figma-inspector.js export --nodeId=422:25403 --format=svg` | src/assets/images/ |

## Open Questions

### To Clarify

- [ ] Platform target (web/native/both?)
- [ ] Missing states: Default, Loading, Pressed, Hover, Winner, Non-Winner, Processing, Error, Empty, Disabled

