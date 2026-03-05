# Star Vector - Component Handoff

## Component Overview

| Property | Value |
|----------|-------|
| Name | Star Vector |
| Type | FRAME |
| Figma Node ID | `488:19015` |
| Platform | TBD — confirm |

## Visual Specs

```css
.star-vector {
  /* Star Vector (FRAME) */
  position: absolute;
  left: 0px;
  top: 0px;
  width: 619px;
  height: 620px;
  /* fill: rgba(255, 255, 255, 1) */
}

.ellipse-2181 {
  /* Ellipse 2181 (ELLIPSE) */
  position: absolute;
  left: 93px;
  top: 93px;
  width: 433px;
  height: 433px;
  /* fill: rgba(217, 217, 217, 1) */
}

.star-vector {
  /* Star Vector (VECTOR) */
  position: absolute;
  left: 0px;
  top: 0px;
  width: 619px;
  height: 620px;
  /* radial-gradient(circle, rgba(203, 219, 255, 1) 0%, rgba(203, 219, 255, 0.9800000190734863) 9%, rgba(203, 219, 255, 0.9100000262260437) 22%, rgba(203, 219, 255, 0.800000011920929) 36%, rgba(203, 219, 255, 0.6499999761581421) 52%, rgba(203, 219, 255, 0.44999998807907104) 69%, rgba(203, 219, 255, 0.20999999344348907) 86%, rgba(203, 219, 255, 0) 100%) */
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
- Element close to right edge
- Consider using CSS transform instead of left/top for animations (better performance)
- Element close to right edge
- Element close to left edge (0px from edge, safe area typically ~20px)
- Element close to top edge (0px from edge, consider notch/Dynamic Island)
- Element close to right edge
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
| Star Vector | `488:19015` | `node skills/figma-inspector.js export --nodeId=488:19015 --format=svg` | src/assets/images/ |
| Star Vector | `488:19017` | `node skills/figma-inspector.js export --nodeId=488:19017 --format=svg` | src/assets/images/ |

## Open Questions

### To Clarify

- [ ] Platform target (web/native/both?)
- [ ] Missing states: Default, Loading, Pressed, Hover, Winner, Non-Winner, Processing, Error, Empty, Disabled

