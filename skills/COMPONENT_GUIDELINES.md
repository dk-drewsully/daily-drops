# Component Architecture Guidelines

## When to Create Components

### ✅ CREATE Components for:

1. **Interface Elements with Multiple States**
   - Progress tracker cards (default, active, glowing, different counts)
   - Reveal cards (Common, Rare, Epic, Legendary variants)
   - Buttons (default, hover, active, disabled)
   - Interactive cards (scratch-off states, revealed states)

2. **Repeated Elements with Variations**
   - Reward tier cards that appear multiple times
   - List items with different data
   - Navigation items with active/inactive states

3. **Reusable UI Patterns**
   - Card layouts used across different screens
   - Modal/dialog patterns
   - Form inputs with validation states

### ❌ DON'T Create Components for:

1. **One-Off Layout Elements**
   - Page-specific backgrounds
   - Unique hero sections
   - Single-use decorative elements

2. **Static Decorative Elements**
   - Background textures (unless swappable)
   - One-off illustrations
   - Fixed positioning wrappers

3. **Simple Composition**
   - Single `<div>` wrappers with no logic
   - Pure layout containers with no state
   - Elements that won't have variants

## Component Structure Pattern

```jsx
// Good: Component with clear states and props
function ProgressTrackerCard({
  tier,           // 'common' | 'rare' | 'epic' | 'legendary'
  current,        // current count (0-12)
  total,          // total count (12, 8, 5, 3)
  isGlowing,      // boolean for glow effect
  onComplete      // callback when collection complete
}) {
  return (
    <div className={`progress-card ${tier} ${isGlowing ? 'glow' : ''}`}>
      {/* component content */}
    </div>
  )
}
```

## Implementation Priority

For Daily Drops landing page:

**Phase 1: Build with Components (Current)**
- ✅ `<ProgressTrackerCard />` - 4 states/tiers, glow effect, count updates
- ✅ `<RevealCard />` - 4 tier variants, scratch overlay, revealed state
- ✅ `<ScratchCanvas />` - reusable scratch mechanic

**Phase 2: Prototype Only (Skip Components)**
- Background elements (reuse from loading screen)
- Logo placement
- Static layout containers
- One-off animations

## Key Principle

**"If it has state, variants, or repeats - componentize it."**
**"If it's layout, decoration, or one-off - keep it simple."**
