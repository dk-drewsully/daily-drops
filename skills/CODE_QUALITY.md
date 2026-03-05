# Code Quality & Repository Hygiene

**CRITICAL: Prevent file bloat, duplicated effort, and throwaway code**

## Before Creating ANY New File

**Ask these questions first:**

1. **Does a tool already exist?**
   - ✅ Use `figma-inspector.js` for inspecting positions/colors/structure
   - ✅ Use `extract-assets.js` for exporting SVGs/images
   - ✅ Check if functionality exists in existing utilities

2. **Is this truly reusable?**
   - ❌ One-time inspection → Use existing tool
   - ❌ Debugging/testing → Use console or existing tool
   - ✅ Repeated process → Create reusable utility

3. **Will this be committed?**
   - ❌ Temporary exploration → Don't create file, use existing tool
   - ✅ Part of build process → Create and document

## File Naming Anti-Patterns

**NEVER create files with these patterns:**

```
❌ get-*.js          (use figma-inspector.js)
❌ check-*.js        (use figma-inspector.js)
❌ verify-*.js       (use figma-inspector.js)
❌ find-*.js         (use figma-inspector.js)
❌ audit-*.js        (use figma-inspector.js)
❌ test-*.js         (outside /tests directory)
❌ debug-*.js        (use debugging tools)
❌ temp-*.js         (don't commit temp files)
❌ old-*.js          (delete instead of renaming)
❌ backup-*.js       (use git)
❌ copy-*.js         (refactor instead)
❌ *-copy.js         (refactor instead)
❌ *-old.js          (use git history)
❌ *-backup.js       (use git)
❌ *-2.js, *-final.js (use git)
```

**These patterns indicate:**
- Duplicated effort (tool already exists)
- Throwaway code (should use existing tool)
- Poor version control practices (use git)

## Reusability Checklist

**Before writing code, verify:**

- [ ] Check existing utilities for similar functionality
- [ ] Can this be added to an existing file instead?
- [ ] Is this a one-time operation? (use existing tool)
- [ ] Will this be needed again? (create reusable)
- [ ] Is the code parameterized/configurable?
- [ ] Is it documented with usage examples?

## Code Organization Standards

**Component Files:**
```
✅ src/components/LoadingScreen.jsx
✅ src/components/LoadingScreen.css
❌ src/components/LoadingScreen-old.jsx
❌ src/components/LoadingScreenCopy.jsx
❌ src/components/LoadingScreen2.jsx
```

**Utility Scripts:**
```
✅ figma-inspector.js        (unified inspection tool)
✅ extract-assets.js          (SVG/image extraction)
❌ get-positions.js           (duplicate of inspector)
❌ check-colors.js            (duplicate of inspector)
❌ temp-script.js             (throwaway code)
```

**Asset Files:**
```
✅ src/assets/images/daily-logo.svg
✅ src/assets/icons/star.svg
❌ src/assets/images/daily-logo-copy.svg
❌ src/assets/images/star-old.svg
❌ src/assets/images/temp-image.png
```

## Refactoring Over Duplication

**When tempted to create a new file:**

1. **Extend existing functionality**
   ```javascript
   // ❌ DON'T create get-star-positions.js
   // ✅ DO use: node figma-inspector.js search --query=star
   ```

2. **Add parameters/options**
   ```javascript
   // ❌ DON'T create separate scripts per element type
   // ✅ DO add command options to existing tool
   ```

3. **Compose existing tools**
   ```bash
   # ❌ DON'T create custom script
   # ✅ DO combine existing tools
   node figma-inspector.js positions --filter=ellipse | grep "left: 27"
   ```

## Cleanup Procedures

**After completing a feature:**

1. **Search for temporary files**
   ```bash
   # Find potential throwaway files
   ls *.js | grep -E "(get-|check-|verify-|temp-|old-|copy-|backup-)"
   ```

2. **Delete immediately**
   - Don't rename (old-*, backup-*)
   - Don't keep "just in case"
   - Trust git history

3. **Consolidate duplicates**
   - Merge similar utilities
   - Extract shared functions
   - Document in existing tools

## Best Practices

**✅ DO:**
- Use existing tools (`figma-inspector.js`, `extract-assets.js`)
- Add functionality to existing tools when possible
- Keep utilities parameterized and reusable
- Delete temporary code immediately
- Document tool usage in guidelines
- Use git for version history (not file copies)
- Name files descriptively based on purpose
- Organize by type (components/, utils/, assets/)

**❌ DON'T:**
- Create one-off inspection scripts
- Duplicate functionality across files
- Keep "backup" or "old" versions in codebase
- Write throwaway code that gets committed
- Use generic names (temp.js, test.js, script.js)
- Leave commented-out code blocks
- Keep unused imports or functions
- Mix concerns in single files

## File Lifecycle

**When to create:**
- Reusable utility used 3+ times
- Build/deployment script
- Core application component
- Shared configuration

**When to delete:**
- After one-time use (inspection, debugging)
- When functionality moved to unified tool
- When replaced by better implementation
- When no longer referenced

**When to refactor:**
- Similar code exists in 2+ files
- File exceeds 500 lines
- Mixed responsibilities
- Unclear naming/purpose

## Repository Health Audit

**Run periodically:**

```bash
# Check for anti-pattern filenames
ls *.js | grep -E "(get-|check-|verify-|find-|audit-|temp-|old-|copy-)"

# Find large components that might need splitting
find src/components -name "*.jsx" -exec wc -l {} + | sort -rn | head -10

# Identify unused imports (requires tooling)
npm run lint

# Check for duplicate code
# (use tools like jsinspect or manual review)
```

**Target metrics:**
- Root directory: < 10 .js files (excluding node_modules, dist)
- No files with anti-pattern names
- No commented-out code blocks > 10 lines
- No unused imports/exports
- Component files < 500 lines

## Documentation Requirements

**Every utility script must have:**

1. **Purpose statement** (at top of file)
   ```javascript
   /**
    * figma-inspector.js
    * Unified tool for inspecting Figma node positions, colors, and structure
    * Usage: node figma-inspector.js <command> [options]
    */
   ```

2. **Usage examples** (in comments or README)
   ```javascript
   /**
    * Examples:
    *   node figma-inspector.js positions --filter=star
    *   node figma-inspector.js fills --nodeIds=394:68839
    *   node figma-inspector.js search --query=ellipse
    */
   ```

3. **Reference in documentation**
   - Document when to use
   - Provide examples
   - Note alternatives

## Summary

**Core Principles:**
1. **Question every new file** - Does a tool already exist? Is this truly reusable?
2. **Refactor over duplicate** - Extend existing code rather than copying
3. **Keep repository clean** - Delete temporary files immediately after use
4. **Use version control** - Git is your backup, not file copies
5. **Document everything** - Every utility needs purpose and usage examples
