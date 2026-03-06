#!/usr/bin/env node
import 'dotenv/config';

const FIGMA_API_BASE = 'https://api.figma.com/v1';

// Design reference dimensions (from Figma)
const DESIGN_WIDTH = 390;
const DESIGN_HEIGHT = 830;

// Common device dimensions for scaling calculations
const DEVICES = {
  iphone15: { width: 393, height: 852, dpr: 3, name: 'iPhone 15' },
  iphone15pro: { width: 393, height: 852, dpr: 3, name: 'iPhone 15 Pro' },
  iphone15promax: { width: 430, height: 932, dpr: 3, name: 'iPhone 15 Pro Max' },
  iphoneSE: { width: 375, height: 667, dpr: 2, name: 'iPhone SE' },
  pixel8: { width: 412, height: 915, dpr: 2.625, name: 'Pixel 8' },
  pixel8pro: { width: 448, height: 998, dpr: 3, name: 'Pixel 8 Pro' },
  galaxyS24: { width: 412, height: 915, dpr: 3, name: 'Galaxy S24' },
};

async function getFigmaNodes(fileKey, nodeIds) {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  const ids = Array.isArray(nodeIds) ? nodeIds.join(',') : nodeIds;

  const response = await fetch(
    `${FIGMA_API_BASE}/files/${fileKey}/nodes?ids=${ids}`,
    { headers: { 'X-Figma-Token': token } }
  );

  if (!response.ok) throw new Error(`Figma API error: ${response.status}`);
  return await response.json();
}

async function exportImage(fileKey, nodeId, options = {}) {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  const scale = options.scale || 1;
  const format = options.format || 'png';

  const response = await fetch(
    `${FIGMA_API_BASE}/images/${fileKey}?ids=${nodeId}&scale=${scale}&format=${format}`,
    { headers: { 'X-Figma-Token': token } }
  );

  if (!response.ok) throw new Error(`Figma API error: ${response.status}`);
  return await response.json();
}

// Calculate responsive units
function toResponsiveUnits(position, designWidth = DESIGN_WIDTH, designHeight = DESIGN_HEIGHT) {
  return {
    left: {
      px: `${position.left}px`,
      vw: `${((position.left / designWidth) * 100).toFixed(2)}vw`,
      pct: `${((position.left / designWidth) * 100).toFixed(2)}%`,
      scaleVar: `calc(var(--scale-x) * ${position.left}px)`,
    },
    top: {
      px: `${position.top}px`,
      vh: `${((position.top / designHeight) * 100).toFixed(2)}vh`,
      pct: `${((position.top / designHeight) * 100).toFixed(2)}%`,
      scaleVar: `calc(var(--scale-y) * ${position.top}px)`,
    },
    width: {
      px: `${position.width}px`,
      vw: `${((position.width / designWidth) * 100).toFixed(2)}vw`,
      pct: `${((position.width / designWidth) * 100).toFixed(2)}%`,
    },
    height: {
      px: `${position.height}px`,
      vh: `${((position.height / designHeight) * 100).toFixed(2)}vh`,
      pct: `${((position.height / designHeight) * 100).toFixed(2)}%`,
    }
  };
}

// Calculate how element scales on different devices
function calculateDeviceScales(position, devices = DEVICES) {
  const scales = {};

  Object.entries(devices).forEach(([key, device]) => {
    const scaleX = device.width / DESIGN_WIDTH;
    const scaleY = device.height / DESIGN_HEIGHT;

    scales[key] = {
      device: device.name,
      viewport: `${device.width}×${device.height}`,
      dpr: device.dpr,
      scaledSize: {
        width: Math.round(position.width * scaleX),
        height: Math.round(position.height * scaleY),
      },
      scaledPosition: {
        left: Math.round(position.left * scaleX),
        top: Math.round(position.top * scaleY),
      },
      physicalPixels: {
        width: Math.round(position.width * scaleX * device.dpr),
        height: Math.round(position.height * scaleY * device.dpr),
      }
    };
  });

  return scales;
}

// Validate element for mobile best practices
function validateElement(element, position) {
  const issues = [];
  const warnings = [];

  // Touch target size (minimum 44×44px iOS, 48×48px Android)
  const minTouchSize = 44;
  if (element.type === 'INSTANCE' || element.name.toLowerCase().includes('button')) {
    if (position.width < minTouchSize || position.height < minTouchSize) {
      issues.push(`Touch target too small: ${position.width}×${position.height}px (min: ${minTouchSize}×${minTouchSize}px)`);
    }
  }

  // Text readability (minimum ~12px font size)
  if (element.type === 'TEXT' && position.height < 12) {
    warnings.push(`Text may be too small: ${position.height}px height (recommend min 12px)`);
  }

  // Elements too close to edges (safe area concerns)
  const safeMargin = 20; // iOS safe area typical margin
  if (position.left < safeMargin) {
    warnings.push(`Element close to left edge (${position.left}px from edge, safe area typically ~${safeMargin}px)`);
  }
  if (position.top < safeMargin) {
    warnings.push(`Element close to top edge (${position.top}px from edge, consider notch/Dynamic Island)`);
  }
  if ((DESIGN_WIDTH - (position.left + position.width)) < safeMargin) {
    warnings.push(`Element close to right edge`);
  }
  if ((DESIGN_HEIGHT - (position.top + position.height)) < safeMargin) {
    warnings.push(`Element close to bottom edge (consider home indicator)`);
  }

  // Elements that should use transform for animation
  const animatableKeywords = ['star', 'orb', 'circle', 'particle'];
  if (animatableKeywords.some(kw => element.name.toLowerCase().includes(kw))) {
    warnings.push(`Consider using CSS transform instead of left/top for animations (better performance)`);
  }

  return { issues, warnings };
}

// Get performance recommendations
function getPerformanceHints(element) {
  const hints = [];

  // Animation candidates
  const animatedKeywords = ['star', 'twinkle', 'orb', 'particle', 'float'];
  if (animatedKeywords.some(kw => element.name.toLowerCase().includes(kw))) {
    hints.push('Add will-change: transform, opacity to animated elements');
    hints.push('Use CSS transforms (translateX/Y, scale) instead of left/top');
    hints.push('Consider using requestAnimationFrame for JS animations');
  }

  // Isolated elements
  if (element.type === 'FRAME' || element.type === 'COMPONENT') {
    hints.push('Consider adding contain: layout style for isolated components');
  }

  // Gradients and effects
  if (element.name.toLowerCase().includes('gradient') || element.name.toLowerCase().includes('blur')) {
    hints.push('Complex gradients/filters can be expensive - consider caching with will-change');
  }

  return hints;
}

function extractPositions(node, containerBox, path = [], positions = []) {
  const currentPath = [...path, node.name];

  if (node.absoluteBoundingBox) {
    const relativePosition = {
      name: node.name,
      path: currentPath.join(' > '),
      id: node.id,
      type: node.type,
      position: containerBox ? {
        left: Math.round(node.absoluteBoundingBox.x - containerBox.x),
        top: Math.round(node.absoluteBoundingBox.y - containerBox.y),
        width: Math.round(node.absoluteBoundingBox.width),
        height: Math.round(node.absoluteBoundingBox.height)
      } : null
    };

    positions.push(relativePosition);
  }

  if (node.children) {
    node.children.forEach(child => {
      extractPositions(child, containerBox || node.absoluteBoundingBox, currentPath, positions);
    });
  }

  return positions;
}

function extractFills(node) {
  const result = {
    name: node.name,
    id: node.id,
    type: node.type,
    fills: [],
    effects: []
  };

  if (node.fills && node.fills.length > 0) {
    node.fills.forEach((fill) => {
      const fillData = { type: fill.type };

      if (fill.type === 'SOLID') {
        const r = Math.round(fill.color.r * 255);
        const g = Math.round(fill.color.g * 255);
        const b = Math.round(fill.color.b * 255);
        const a = fill.color.a || 1;
        fillData.color = `rgba(${r}, ${g}, ${b}, ${a})`;
      } else if (fill.type === 'GRADIENT_RADIAL' || fill.type === 'GRADIENT_LINEAR') {
        fillData.gradientStops = fill.gradientStops.map(stop => {
          const r = Math.round(stop.color.r * 255);
          const g = Math.round(stop.color.g * 255);
          const b = Math.round(stop.color.b * 255);
          const a = stop.color.a;
          return {
            position: Math.round(stop.position * 100),
            color: `rgba(${r}, ${g}, ${b}, ${a})`
          };
        });

        // Generate CSS
        const stops = fillData.gradientStops.map(s => `${s.color} ${s.position}%`).join(', ');
        const type = fill.type === 'GRADIENT_RADIAL' ? 'radial-gradient(circle' : 'linear-gradient(180deg';
        fillData.css = `${type}, ${stops})`;
      }

      if (fill.opacity !== undefined && fill.opacity !== 1) {
        fillData.opacity = fill.opacity;
      }

      result.fills.push(fillData);
    });
  }

  if (node.effects && node.effects.length > 0) {
    result.effects = node.effects.map(effect => {
      const effectData = { type: effect.type };
      if (effect.radius) effectData.radius = effect.radius;
      if (effect.offset) effectData.offset = effect.offset;
      if (effect.color) {
        const r = Math.round(effect.color.r * 255);
        const g = Math.round(effect.color.g * 255);
        const b = Math.round(effect.color.b * 255);
        const a = effect.color.a || 0;
        effectData.color = `rgba(${r}, ${g}, ${b}, ${a})`;
      }
      return effectData;
    });
  }

  return result;
}

// Generate handoff documentation for a component
function generateHandoffSpec(nodeName, nodeId, nodeType, positions, fillsMap, validationResults) {
  const componentStates = ['Default', 'Loading', 'Pressed', 'Hover', 'Winner', 'Non-Winner', 'Processing', 'Error', 'Empty', 'Disabled'];

  // Detect which states are defined in Figma
  const definedStates = componentStates.map(state => {
    const isDefined = positions.some(p =>
      p.name.toLowerCase().includes(state.toLowerCase())
    );
    return {
      state,
      status: isDefined ? 'Defined in Figma' : '⚠️ MISSING — needs design'
    };
  });

  // Find interactive elements
  const interactiveKeywords = ['button', 'cta', 'tap', 'link'];
  const interactiveElements = positions.filter(p =>
    p.type === 'INSTANCE' ||
    interactiveKeywords.some(kw => p.name.toLowerCase().includes(kw))
  );

  // Find asset elements
  const assetKeywords = ['icon', 'logo', 'illustration', 'star', 'badge'];
  const assetElements = positions.filter(p =>
    p.type === 'VECTOR' ||
    (p.type === 'GROUP' || p.type === 'FRAME') && assetKeywords.some(kw => p.name.toLowerCase().includes(kw))
  );

  // Collect all issues and warnings from validation
  const allIssues = [];
  const allWarnings = [];
  validationResults.forEach(v => {
    allIssues.push(...v.issues);
    allWarnings.push(...v.warnings);
  });

  // Build markdown content
  let markdown = `# ${nodeName} - Component Handoff\n\n`;

  // 1. Component Overview
  markdown += `## Component Overview\n\n`;
  markdown += `| Property | Value |\n`;
  markdown += `|----------|-------|\n`;
  markdown += `| Name | ${nodeName} |\n`;
  markdown += `| Type | ${nodeType} |\n`;
  markdown += `| Figma Node ID | \`${nodeId}\` |\n`;
  markdown += `| Platform | TBD — confirm |\n\n`;

  // 2. Visual Specs
  markdown += `## Visual Specs\n\n`;
  markdown += `\`\`\`css\n`;
  positions.forEach(el => {
    if (!el.position) return;

    const className = el.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    markdown += `.${className} {\n`;
    markdown += `  /* ${el.name} (${el.type}) */\n`;
    markdown += `  position: absolute;\n`;
    markdown += `  left: ${el.position.left}px;\n`;
    markdown += `  top: ${el.position.top}px;\n`;
    markdown += `  width: ${el.position.width}px;\n`;
    markdown += `  height: ${el.position.height}px;\n`;

    // Add fill/color info as comments
    const fillInfo = fillsMap.get(el.id);
    if (fillInfo && fillInfo.fills.length > 0) {
      fillInfo.fills.forEach(fill => {
        if (fill.color) {
          markdown += `  /* fill: ${fill.color} */\n`;
        }
        if (fill.css) {
          markdown += `  /* ${fill.css} */\n`;
        }
      });
    }

    markdown += `}\n\n`;
  });
  markdown += `\`\`\`\n\n`;

  // 3. Component States
  markdown += `## Component States\n\n`;
  markdown += `| State | Status |\n`;
  markdown += `|-------|--------|\n`;
  definedStates.forEach(({ state, status }) => {
    markdown += `| ${state} | ${status} |\n`;
  });
  markdown += `| Hover (web only) | ${definedStates.find(s => s.state === 'Hover')?.status || '⚠️ MISSING — needs design'} |\n`;
  markdown += `\n`;

  // 4. Interactive Elements
  markdown += `## Interactive Elements\n\n`;
  if (interactiveElements.length > 0) {
    markdown += `| Element | Node ID | Size |\n`;
    markdown += `|---------|---------|------|\n`;
    interactiveElements.forEach(el => {
      markdown += `| ${el.name} | \`${el.id}\` | ${el.position.width}×${el.position.height}px |\n`;
    });
    markdown += `\n`;
    interactiveElements.forEach(el => {
      markdown += `**${el.name}**\n`;
      markdown += `- Interaction spec: ⚠️ not yet defined\n\n`;
    });
  } else {
    markdown += `No interactive elements detected.\n\n`;
  }

  // 5. Accessibility
  markdown += `## Accessibility\n\n`;
  if (allIssues.length > 0) {
    markdown += `### ❌ Issues\n\n`;
    allIssues.forEach(issue => {
      markdown += `- ${issue}\n`;
    });
    markdown += `\n`;
  }
  if (allWarnings.length > 0) {
    markdown += `### ⚠️ Warnings\n\n`;
    allWarnings.forEach(warning => {
      markdown += `- ${warning}\n`;
    });
    markdown += `\n`;
  }
  markdown += `### Accessibility Requirements\n\n`;
  markdown += `| Property | Value |\n`;
  markdown += `|----------|-------|\n`;
  markdown += `| accessibilityLabel | TBD |\n`;
  markdown += `| accessibilityRole | TBD |\n`;
  markdown += `| accessibilityHint | (if needed) |\n`;
  markdown += `| Focus order | Linear unless noted |\n`;
  markdown += `| Touch targets | Confirm via scale command or validate |\n\n`;

  // 6. Lottery/Gaming Edge Cases
  markdown += `## Lottery/Gaming Edge Cases\n\n`;
  markdown += `| Scenario | Behavior |\n`;
  markdown += `|----------|----------|\n`;
  markdown += `| Long game name (e.g. "Mega Millions Megaplier") | ⚠️ confirm behavior |\n`;
  markdown += `| Max jackpot display ($1,600,000,000) | ⚠️ confirm behavior |\n`;
  markdown += `| Expired draw date | ⚠️ confirm behavior |\n`;
  markdown += `| Jackpot loading state | ⚠️ confirm behavior |\n`;
  markdown += `| Zero tickets / empty state | ⚠️ confirm behavior |\n`;
  markdown += `| Offline / no connection | ⚠️ confirm behavior |\n`;
  markdown += `| State-restricted game unavailability | ⚠️ confirm behavior |\n\n`;

  // 7. Assets
  markdown += `## Assets\n\n`;
  if (assetElements.length > 0) {
    markdown += `| Element | Node ID | Suggested Export | Output Path |\n`;
    markdown += `|---------|---------|------------------|-------------|\n`;
    assetElements.forEach(el => {
      const isSmall = el.position.width < 200 && el.position.height < 200;
      const outputPath = isSmall ? 'src/assets/icons/' : 'src/assets/images/';
      const exportCmd = `node skills/figma-inspector.js export --nodeId=${el.id} --format=svg`;
      markdown += `| ${el.name} | \`${el.id}\` | \`${exportCmd}\` | ${outputPath} |\n`;
    });
    markdown += `\n`;
  } else {
    markdown += `No asset elements detected.\n\n`;
  }

  // 8. Open Questions
  markdown += `## Open Questions\n\n`;
  if (allIssues.length > 0) {
    markdown += `### Blocking Issues\n\n`;
    allIssues.forEach(issue => {
      markdown += `- [ ] ${issue}\n`;
    });
    markdown += `\n`;
  }
  markdown += `### To Clarify\n\n`;
  markdown += `- [ ] Platform target (web/native/both?)\n`;
  const missingStates = definedStates.filter(s => s.status.includes('MISSING'));
  if (missingStates.length > 0) {
    markdown += `- [ ] Missing states: ${missingStates.map(s => s.state).join(', ')}\n`;
  }
  if (interactiveElements.length > 0) {
    markdown += `- [ ] Interaction specs for: ${interactiveElements.map(el => el.name).join(', ')}\n`;
  }
  markdown += `\n`;

  return markdown;
}

// Generate TypeScript component skeleton
function generateComponentSkeleton(nodeName, nodeType, nodeId, platform, positions, fillsMap) {
  // Derive component name from node name
  const componentName = nodeName
    .split(/[\s-_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  // Detect variant states from child node names
  const stateKeywords = ['default', 'active', 'disabled', 'error', 'loading'];
  const detectedStates = stateKeywords.filter(state =>
    positions.some(p => p.name.toLowerCase().includes(state))
  );
  const hasVariants = detectedStates.length > 0;
  const variantType = hasVariants ? detectedStates.map(s => `'${s}'`).join(' | ') : "'default'";

  // Get root element info
  const rootElement = positions[0];
  const rootFill = fillsMap.get(nodeId);

  let output = '';

  if (platform === 'web' || platform === 'both') {
    // Web/Next.js/React component
    output += `// ${componentName}.tsx - Web Component\n\n`;
    output += `interface ${componentName}Props {\n`;
    output += `  id: string;\n`;
    output += `  onClick?: () => void;\n`;
    if (hasVariants) {
      output += `  variant?: ${variantType};\n`;
    }
    output += `}\n\n`;
    output += `export function ${componentName}({ id, onClick${hasVariants ? ', variant = \'default\'' : ''} }: ${componentName}Props) {\n`;
    output += `  return (\n`;
    output += `    <div\n`;
    output += `      id={id}\n`;
    output += `      onClick={onClick}\n`;
    output += `      role="button"\n`;
    output += `      aria-label=""\n`;
    output += `      className="relative" // TODO: map to token\n`;

    if (rootElement && rootElement.position) {
      output += `      style={{\n`;
      output += `        width: '${rootElement.position.width}px', // TODO: map to token\n`;
      output += `        height: '${rootElement.position.height}px', // TODO: map to token\n`;
      if (rootFill && rootFill.fills.length > 0) {
        const fill = rootFill.fills[0];
        if (fill.color) {
          output += `        backgroundColor: '${fill.color}', /* figma: ${fill.color} — replace with token */\n`;
        }
      }
      output += `      }}\n`;
    }

    output += `    >\n`;
    output += `      {/* ${nodeName} - Figma: ${nodeId} */}\n`;

    // Add child structure hints
    positions.slice(1, 4).forEach(child => {
      output += `      {/* ${child.name} (${child.type}) */}\n`;
    });

    output += `    </div>\n`;
    output += `  );\n`;
    output += `}\n\n`;
    output += `/*\nUsage:\n<${componentName}\n  id="my-component"\n  onClick={() => console.log('clicked')}${hasVariants ? `\n  variant="default"` : ''}\n/>\n*/\n`;
  }

  if (platform === 'both') {
    output += `\n${'='.repeat(80)}\n\n`;
  }

  if (platform === 'native' || platform === 'both') {
    // React Native component
    output += `// ${componentName}.tsx - React Native Component\n\n`;
    output += `import { View, TouchableOpacity, StyleSheet } from 'react-native';\n\n`;
    output += `interface ${componentName}Props {\n`;
    output += `  id: string;\n`;
    output += `  onPress?: () => void;\n`;
    if (hasVariants) {
      output += `  variant?: ${variantType};\n`;
    }
    output += `}\n\n`;
    output += `export function ${componentName}({ id, onPress${hasVariants ? ', variant = \'default\'' : ''} }: ${componentName}Props) {\n`;
    output += `  return (\n`;
    output += `    <TouchableOpacity\n`;
    output += `      onPress={onPress}\n`;
    output += `      accessibilityLabel=""\n`;
    output += `      accessibilityRole="button"\n`;
    output += `      style={styles.container}\n`;
    output += `    >\n`;
    output += `      {/* ${nodeName} - Figma: ${nodeId} */}\n`;

    // Add child structure hints
    positions.slice(1, 4).forEach(child => {
      output += `      {/* ${child.name} (${child.type}) */}\n`;
    });

    output += `    </TouchableOpacity>\n`;
    output += `  );\n`;
    output += `}\n\n`;
    output += `const styles = StyleSheet.create({\n`;
    output += `  container: {\n`;
    if (rootElement && rootElement.position) {
      output += `    width: ${rootElement.position.width}, // TODO: map to token /* figma: ${rootElement.position.width}px — replace with token */\n`;
      output += `    height: ${rootElement.position.height}, // TODO: map to token /* figma: ${rootElement.position.height}px — replace with token */\n`;
      if (rootFill && rootFill.fills.length > 0) {
        const fill = rootFill.fills[0];
        if (fill.color) {
          output += `    backgroundColor: '${fill.color}', // TODO: map to token /* figma: ${fill.color} — replace with token */\n`;
        }
      }
    }
    output += `  },\n`;
    output += `});\n\n`;
    output += `/*\nUsage:\n<${componentName}\n  id="my-component"\n  onPress={() => console.log('pressed')}${hasVariants ? `\n  variant="default"` : ''}\n/>\n*/\n`;
  }

  return output;
}

async function inspect(command, options = {}) {
  const fileKey = process.env.FIGMA_FILE_KEY;
  const nodeId = options.nodeId || '394:60911'; // Default to main loading screen

  switch (command) {
    case 'positions': {
      const nodesData = await getFigmaNodes(fileKey, [nodeId]);
      const mainNode = nodesData.nodes[nodeId];
      const containerBox = mainNode.document.absoluteBoundingBox;
      const positions = extractPositions(mainNode.document, containerBox);

      const filtered = options.filter
        ? positions.filter(p => p.name.toLowerCase().includes(options.filter.toLowerCase()))
        : positions;

      console.log('\n📍 ELEMENT POSITIONS:\n');
      filtered.forEach(el => {
        console.log(`${el.name} (${el.type})`);
        console.log(`  ID: ${el.id}`);
        if (el.position) {
          console.log(`  Position: left: ${el.position.left}px, top: ${el.position.top}px`);
          console.log(`  Size: ${el.position.width}×${el.position.height}px`);
        }
        console.log();
      });

      // Generate CSS snippets if --css flag provided
      if (options.css) {
        console.log('\n' + '='.repeat(60));
        console.log('CSS SNIPPETS (copy-paste ready)');
        if (options.responsive) {
          console.log('Mode: RESPONSIVE (viewport units)');
        } else {
          console.log('Mode: ABSOLUTE (pixel values)');
        }
        console.log('='.repeat(60));
        console.log();

        filtered.forEach(el => {
          if (!el.position) return;

          const className = el.name.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');

          console.log(`.${className} {`);
          console.log(`  position: absolute;`);

          if (options.responsive) {
            const responsive = toResponsiveUnits(el.position);
            console.log(`  /* Viewport-based (scales with screen) */`);
            console.log(`  left: ${responsive.left.vw};`);
            console.log(`  top: ${responsive.top.vh};`);
            console.log(`  width: ${responsive.width.vw};`);
            console.log(`  height: ${responsive.height.vh};`);
            console.log(`  `);
            console.log(`  /* Alternative: CSS custom properties */`);
            console.log(`  /* left: ${responsive.left.scaleVar}; */`);
            console.log(`  /* top: ${responsive.top.scaleVar}; */`);
          } else {
            console.log(`  left: ${el.position.left}px;`);
            console.log(`  top: ${el.position.top}px;`);
            console.log(`  width: ${el.position.width}px;`);
            console.log(`  height: ${el.position.height}px;`);
          }

          console.log(`}\n`);
        });

        // Add CSS custom property setup if responsive mode
        if (options.responsive) {
          console.log('\n' + '='.repeat(60));
          console.log('CSS CUSTOM PROPERTIES SETUP (if using --scale-x/y)');
          console.log('='.repeat(60));
          console.log(`
:root {
  --design-width: ${DESIGN_WIDTH};
  --design-height: ${DESIGN_HEIGHT};
  --scale-x: calc(100vw / var(--design-width));
  --scale-y: calc(100vh / var(--design-height));
}

/* For maintaining aspect ratio, use uniform scale */
:root {
  --scale: min(
    calc(100vw / var(--design-width)),
    calc(100vh / var(--design-height))
  );
}
`);
        }
      }
      break;
    }

    case 'fills': {
      const nodeIds = options.nodeIds || [nodeId];
      const nodesData = await getFigmaNodes(fileKey, nodeIds);

      console.log('\n🎨 COLOR & FILL DETAILS:\n');
      nodeIds.forEach(id => {
        const node = nodesData.nodes[id]?.document;
        if (!node) return;

        const fillData = extractFills(node);
        console.log(`${fillData.name} (${fillData.id})`);
        console.log('─'.repeat(60));

        fillData.fills.forEach((fill, i) => {
          console.log(`\nFill ${i + 1}: ${fill.type}`);
          if (fill.color) {
            console.log(`  Color: ${fill.color}`);
          }
          if (fill.gradientStops) {
            console.log(`  Gradient Stops:`);
            fill.gradientStops.forEach(s => {
              console.log(`    ${s.position}%: ${s.color}`);
            });
          }
          if (fill.css) {
            console.log(`  CSS: ${fill.css}`);
          }
          if (fill.opacity) {
            console.log(`  Opacity: ${fill.opacity}`);
          }
        });

        if (fillData.effects.length > 0) {
          console.log(`\nEffects:`);
          fillData.effects.forEach(e => {
            console.log(`  ${e.type}${e.radius ? ` (radius: ${e.radius}px)` : ''}`);
            if (e.color) console.log(`    Color: ${e.color}`);
          });
        }
        console.log('\n');
      });
      break;
    }

    case 'search': {
      if (!options.query) {
        console.error('Error: --query required for search command');
        process.exit(1);
      }

      const nodesData = await getFigmaNodes(fileKey, [nodeId]);
      const mainNode = nodesData.nodes[nodeId];
      const containerBox = mainNode.document.absoluteBoundingBox;
      const positions = extractPositions(mainNode.document, containerBox);

      const results = positions.filter(p =>
        p.name.toLowerCase().includes(options.query.toLowerCase())
      );

      console.log(`\n🔍 SEARCH RESULTS FOR "${options.query}":\n`);
      console.log(`Found ${results.length} matches\n`);

      results.forEach(el => {
        console.log(`${el.name} (${el.type})`);
        console.log(`  ID: ${el.id}`);
        console.log(`  Path: ${el.path}`);
        if (el.position) {
          console.log(`  Position: left: ${el.position.left}px, top: ${el.position.top}px`);
          console.log(`  Size: ${el.position.width}×${el.position.height}px`);
        }
        console.log();
      });
      break;
    }

    case 'validate': {
      const nodesData = await getFigmaNodes(fileKey, [nodeId]);
      const mainNode = nodesData.nodes[nodeId];
      const containerBox = mainNode.document.absoluteBoundingBox;
      const positions = extractPositions(mainNode.document, containerBox);

      console.log('\n🔍 MOBILE VALIDATION REPORT\n');
      console.log(`Design dimensions: ${DESIGN_WIDTH}×${DESIGN_HEIGHT}px`);
      console.log(`Target: ${options.target || 'mobile'}\n`);
      console.log('='.repeat(60));

      let totalIssues = 0;
      let totalWarnings = 0;

      positions.forEach(el => {
        if (!el.position) return;

        const validation = validateElement(
          { name: el.name, type: el.type },
          el.position
        );
        const perfHints = getPerformanceHints({ name: el.name, type: el.type });

        if (validation.issues.length > 0 || validation.warnings.length > 0 || perfHints.length > 0) {
          console.log(`\n${el.name} (${el.type})`);
          console.log(`  ${el.position.width}×${el.position.height}px at (${el.position.left}, ${el.position.top})`);

          if (validation.issues.length > 0) {
            totalIssues += validation.issues.length;
            console.log('\n  ❌ ISSUES:');
            validation.issues.forEach(issue => console.log(`     ${issue}`));
          }

          if (validation.warnings.length > 0) {
            totalWarnings += validation.warnings.length;
            console.log('\n  ⚠️  WARNINGS:');
            validation.warnings.forEach(warning => console.log(`     ${warning}`));
          }

          if (perfHints.length > 0) {
            console.log('\n  💡 PERFORMANCE HINTS:');
            perfHints.forEach(hint => console.log(`     ${hint}`));
          }
        }
      });

      console.log('\n' + '='.repeat(60));
      console.log(`\nSummary: ${totalIssues} issues, ${totalWarnings} warnings\n`);
      break;
    }

    case 'scale': {
      if (!options.element) {
        console.error('Error: --element=<name> required for scale command');
        console.log('Example: node figma-inspector.js scale --element=button');
        process.exit(1);
      }

      const nodesData = await getFigmaNodes(fileKey, [nodeId]);
      const mainNode = nodesData.nodes[nodeId];
      const containerBox = mainNode.document.absoluteBoundingBox;
      const positions = extractPositions(mainNode.document, containerBox);

      const element = positions.find(p =>
        p.name.toLowerCase().includes(options.element.toLowerCase())
      );

      if (!element || !element.position) {
        console.error(`Element "${options.element}" not found`);
        process.exit(1);
      }

      console.log(`\n📱 DEVICE SCALING REPORT\n`);
      console.log(`Element: ${element.name}`);
      console.log(`Design size: ${element.position.width}×${element.position.height}px`);
      console.log(`Design position: (${element.position.left}, ${element.position.top})`);
      console.log('\n' + '='.repeat(80));

      const deviceFilter = options.devices ? options.devices.split(',') : Object.keys(DEVICES);
      const filteredDevices = {};
      deviceFilter.forEach(key => {
        if (DEVICES[key]) filteredDevices[key] = DEVICES[key];
      });

      const scales = calculateDeviceScales(element.position, filteredDevices);

      Object.entries(scales).forEach(([, scale]) => {
        console.log(`\n${scale.device} (${scale.viewport}, ${scale.dpr}x DPR)`);
        console.log(`  Scaled size: ${scale.scaledSize.width}×${scale.scaledSize.height}px`);
        console.log(`  Scaled position: (${scale.scaledPosition.left}, ${scale.scaledPosition.top})`);
        console.log(`  Physical pixels: ${scale.physicalPixels.width}×${scale.physicalPixels.height}px`);

        // Check if too small
        if (scale.scaledSize.width < 44 || scale.scaledSize.height < 44) {
          console.log(`  ⚠️  May be too small for touch targets (min 44×44px recommended)`);
        }
      });

      console.log('\n' + '='.repeat(80) + '\n');
      break;
    }

    case 'export': {
      if (!options.nodeId) {
        console.error('Error: --nodeId=<id> required for export command');
        console.log('Example: node figma-inspector.js export --nodeId=394:68839 --sizes=1x,2x,3x');
        process.exit(1);
      }

      const sizes = options.sizes ? options.sizes.split(',') : ['1x', '2x', '3x'];
      const format = options.format || 'png';

      console.log(`\n📦 EXPORTING ASSET\n`);
      console.log(`Node ID: ${options.nodeId}`);
      console.log(`Format: ${format}`);
      console.log(`Sizes: ${sizes.join(', ')}\n`);

      for (const size of sizes) {
        const scale = parseFloat(size.replace('x', ''));
        console.log(`Requesting ${size} (scale: ${scale})...`);

        try {
          const result = await exportImage(fileKey, options.nodeId, { scale, format });

          if (result.images && result.images[options.nodeId]) {
            const imageUrl = result.images[options.nodeId];
            console.log(`  ✅ ${imageUrl}`);
            console.log(`     Download this URL and save as: asset@${size}.${format}\n`);
          } else {
            console.log(`  ❌ Failed to generate image\n`);
          }
        } catch (error) {
          console.error(`  ❌ Error: ${error.message}\n`);
        }
      }

      console.log('💡 Tip: Use a download script to automatically fetch these URLs');
      console.log('   Example: curl "<url>" -o "asset@2x.png"\n');
      break;
    }

    case 'handoff': {
      if (!options.nodeId) {
        console.error('Error: --nodeId=<id> required for handoff command');
        console.log('Example: node figma-inspector.js handoff --nodeId=394:68839');
        process.exit(1);
      }

      console.log(`\n📋 GENERATING HANDOFF DOCUMENTATION\n`);
      console.log(`Node ID: ${options.nodeId}\n`);

      const nodesData = await getFigmaNodes(fileKey, [options.nodeId]);
      const mainNode = nodesData.nodes[options.nodeId];

      if (!mainNode || !mainNode.document) {
        console.error(`Node ${options.nodeId} not found`);
        process.exit(1);
      }

      const nodeName = mainNode.document.name;
      const nodeType = mainNode.document.type;
      const containerBox = mainNode.document.absoluteBoundingBox;

      // Extract positions
      const positions = extractPositions(mainNode.document, containerBox);

      // Extract fills for all nodes
      const fillsMap = new Map();
      const extractFillsRecursive = (node) => {
        const fillInfo = extractFills(node);
        fillsMap.set(node.id, fillInfo);
        if (node.children) {
          node.children.forEach(child => extractFillsRecursive(child));
        }
      };
      extractFillsRecursive(mainNode.document);

      // Run validation
      const validationResults = [];
      positions.forEach(el => {
        if (!el.position) return;
        const validation = validateElement(
          { name: el.name, type: el.type },
          el.position
        );
        if (validation.issues.length > 0 || validation.warnings.length > 0) {
          validationResults.push(validation);
        }
      });

      // Generate markdown
      const markdown = generateHandoffSpec(
        nodeName,
        options.nodeId,
        nodeType,
        positions,
        fillsMap,
        validationResults
      );

      // Write to file
      const fs = await import('fs');
      const filename = `${nodeName.replace(/[^a-z0-9-]/gi, '-')}-handoff.md`;
      fs.writeFileSync(filename, markdown);

      console.log(`✅ Handoff document generated: ${filename}\n`);
      break;
    }

    case 'component': {
      if (!options.nodeId) {
        console.error('Error: --nodeId=<id> required for component command');
        console.log('Example: node figma-inspector.js component --nodeId=394:68839 --platform=web');
        process.exit(1);
      }

      if (!options.platform) {
        console.error('Error: --platform=<web|native|both> required for component command');
        console.log('Example: node figma-inspector.js component --nodeId=394:68839 --platform=web');
        process.exit(1);
      }

      if (!['web', 'native', 'both'].includes(options.platform)) {
        console.error('Error: --platform must be web, native, or both');
        process.exit(1);
      }

      const nodesData = await getFigmaNodes(fileKey, [options.nodeId]);
      const mainNode = nodesData.nodes[options.nodeId];

      if (!mainNode || !mainNode.document) {
        console.error(`Node ${options.nodeId} not found`);
        process.exit(1);
      }

      const nodeName = mainNode.document.name;
      const nodeType = mainNode.document.type;
      const containerBox = mainNode.document.absoluteBoundingBox;

      // Extract positions
      const positions = extractPositions(mainNode.document, containerBox);

      // Extract fills for all nodes
      const fillsMap = new Map();
      const extractFillsRecursive = (node) => {
        const fillInfo = extractFills(node);
        fillsMap.set(node.id, fillInfo);
        if (node.children) {
          node.children.forEach(child => extractFillsRecursive(child));
        }
      };
      extractFillsRecursive(mainNode.document);

      // Generate component skeleton
      const componentCode = generateComponentSkeleton(
        nodeName,
        nodeType,
        options.nodeId,
        options.platform,
        positions,
        fillsMap
      );

      console.log(componentCode);
      break;
    }

    default:
      console.log('Usage: node figma-inspector.js <command> [options]');
      console.log('\n' + '='.repeat(80));
      console.log('COMMANDS');
      console.log('='.repeat(80));
      console.log('\nInspection:');
      console.log('  positions [options]       List element positions with optional CSS output');
      console.log('    --filter=<name>         Filter by element name');
      console.log('    --css                   Generate CSS snippets');
      console.log('    --responsive            Use viewport units (vw/vh) instead of px');
      console.log('');
      console.log('  fills --nodeIds=<ids>     Get fill/color data for specific nodes');
      console.log('    --nodeIds=<id1,id2>     Comma-separated node IDs');
      console.log('');
      console.log('  search --query=<text>     Search for elements by name');
      console.log('    --query=<text>          Search term');
      console.log('');
      console.log('\nMobile & Device Optimization:');
      console.log('  validate [options]        Check for mobile best practices');
      console.log('    --target=mobile         Target platform (default: mobile)');
      console.log('');
      console.log('  scale --element=<name>    Show how element scales across devices');
      console.log('    --element=<name>        Element to analyze (required)');
      console.log('    --devices=<list>        Comma-separated device keys (optional)');
      console.log('                            Available: iphone15, iphone15pro, iphone15promax,');
      console.log('                            iphoneSE, pixel8, pixel8pro, galaxyS24');
      console.log('');
      console.log('\nAsset Export:');
      console.log('  export --nodeId=<id>      Export assets at multiple resolutions');
      console.log('    --nodeId=<id>           Node ID to export (required)');
      console.log('    --sizes=<list>          Sizes: 1x,2x,3x (default: 1x,2x,3x)');
      console.log('    --format=<fmt>          Format: png, svg, jpg (default: png)');
      console.log('');
      console.log('\nDevelopment Handoff:');
      console.log('  handoff --nodeId=<id>     Generate comprehensive handoff documentation');
      console.log('    --nodeId=<id>           Node ID to document (required)');
      console.log('                            Outputs: [NodeName]-handoff.md');
      console.log('');
      console.log('  component --nodeId=<id>   Generate TypeScript component skeleton');
      console.log('    --nodeId=<id>           Node ID for component (required)');
      console.log('    --platform=<platform>   Target platform: web, native, or both (required)');
      console.log('');
      console.log('='.repeat(80));
      console.log('EXAMPLES');
      console.log('='.repeat(80));
      console.log('\nBasic inspection:');
      console.log('  node figma-inspector.js positions --filter=ellipse');
      console.log('  node figma-inspector.js fills --nodeIds=394:68839,394:68841');
      console.log('  node figma-inspector.js search --query=star');
      console.log('');
      console.log('Responsive CSS generation:');
      console.log('  node figma-inspector.js positions --css');
      console.log('  node figma-inspector.js positions --css --responsive');
      console.log('  node figma-inspector.js positions --filter=button --css --responsive');
      console.log('');
      console.log('Mobile optimization:');
      console.log('  node figma-inspector.js validate');
      console.log('  node figma-inspector.js validate --target=mobile');
      console.log('  node figma-inspector.js scale --element=button');
      console.log('  node figma-inspector.js scale --element=logo --devices=iphone15,pixel8');
      console.log('');
      console.log('Asset export:');
      console.log('  node figma-inspector.js export --nodeId=394:68839');
      console.log('  node figma-inspector.js export --nodeId=394:68839 --sizes=2x,3x');
      console.log('  node figma-inspector.js export --nodeId=394:68839 --format=svg');
      console.log('');
      console.log('Development handoff:');
      console.log('  node figma-inspector.js handoff --nodeId=394:68839');
      console.log('  node figma-inspector.js component --nodeId=394:68839 --platform=web');
      console.log('  node figma-inspector.js component --nodeId=394:68839 --platform=native');
      console.log('  node figma-inspector.js component --nodeId=394:68839 --platform=both');
      console.log('');
  }
}

// Parse CLI args
const args = process.argv.slice(2);
const command = args[0];
const options = {};

args.slice(1).forEach(arg => {
  if (arg.startsWith('--')) {
    const [key, value] = arg.substring(2).split('=');
    if (key === 'nodeIds') {
      options[key] = value.split(',');
    } else if (value === undefined) {
      // Boolean flag (e.g., --css)
      options[key] = true;
    } else {
      options[key] = value;
    }
  }
});

if (command) {
  inspect(command, options).catch(console.error);
} else {
  inspect('help');
}
