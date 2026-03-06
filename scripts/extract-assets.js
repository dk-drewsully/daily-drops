import 'dotenv/config';
import fs from 'fs';
import https from 'https';
import path from 'path';

const FIGMA_API_BASE = 'https://api.figma.com/v1';

async function getFigmaNodes(fileKey, nodeIds) {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  const ids = nodeIds.join(',');

  const response = await fetch(
    `${FIGMA_API_BASE}/files/${fileKey}/nodes?ids=${ids}`,
    {
      headers: { 'X-Figma-Token': token },
    }
  );

  if (!response.ok) throw new Error(`Figma API error: ${response.status}`);
  return await response.json();
}

async function exportImages(fileKey, nodeIds, format = 'svg', scale = 2) {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  const ids = nodeIds.join(',');

  const response = await fetch(
    `${FIGMA_API_BASE}/images/${fileKey}?ids=${ids}&format=${format}&scale=${scale}`,
    {
      headers: { 'X-Figma-Token': token },
    }
  );

  if (!response.ok) throw new Error(`Export error: ${response.status}`);
  return await response.json();
}

async function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

function findAssetNodes(node, assets = [], path = []) {
  const currentPath = [...path, node.name];

  // Identify assets to extract
  if (node.type === 'GROUP' || node.type === 'FRAME' || node.type === 'VECTOR') {
    // Stars
    if (node.name.includes('Star') || node.name.includes('star')) {
      assets.push({
        id: node.id,
        name: node.name,
        type: 'star',
        path: currentPath.join(' > ')
      });
    }

    // Character/epic ball
    if (node.name.toLowerCase().includes('epic') ||
        node.name.toLowerCase().includes('glasses') ||
        node.name.toLowerCase().includes('mouth')) {
      assets.push({
        id: node.id,
        name: node.name,
        type: 'character',
        path: currentPath.join(' > ')
      });
    }

    // Daily text (vector)
    if (node.name === 'Daily' && node.type === 'GROUP') {
      assets.push({
        id: node.id,
        name: node.name,
        type: 'logo-daily',
        path: currentPath.join(' > ')
      });
    }

    // Drops text
    if (node.name === 'Drops Vector' || node.name === 'Drops') {
      assets.push({
        id: node.id,
        name: node.name,
        type: 'logo-drops',
        path: currentPath.join(' > ')
      });
    }
  }

  if (node.children) {
    node.children.forEach(child => findAssetNodes(child, assets, currentPath));
  }

  return assets;
}

async function main() {
  try {
    const fileKey = process.env.FIGMA_FILE_KEY;
    const nodeId = '394:60911'; // Main loading screen node

    console.log('Step 1: Fetching node structure...\n');
    const nodesData = await getFigmaNodes(fileKey, [nodeId]);
    const node = nodesData.nodes[nodeId];

    if (!node) {
      console.error('Node not found!');
      process.exit(1);
    }

    console.log('Step 2: Identifying assets to extract...\n');
    const assets = findAssetNodes(node.document);

    console.log(`Found ${assets.length} assets:\n`);
    assets.forEach((asset, i) => {
      console.log(`  ${i + 1}. ${asset.name} (${asset.type})`);
      console.log(`     ID: ${asset.id}`);
      console.log(`     Path: ${asset.path}\n`);
    });

    // Create assets directory
    const assetsDir = './src/assets';
    const imagesDir = path.join(assetsDir, 'images');
    const iconsDir = path.join(assetsDir, 'icons');

    if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);
    if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir);
    if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir);

    console.log('\nStep 3: Exporting SVG assets...\n');
    const nodeIds = assets.map(a => a.id);
    const imageData = await exportImages(fileKey, nodeIds, 'svg', 1);

    console.log('Step 4: Downloading assets...\n');
    for (const asset of assets) {
      const url = imageData.images[asset.id];
      if (!url) {
        console.log(`  ⚠️  No export URL for ${asset.name}`);
        continue;
      }

      const filename = asset.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      const dir = asset.type === 'star' ? iconsDir : imagesDir;
      const filepath = path.join(dir, `${filename}.svg`);

      await downloadFile(url, filepath);
      console.log(`  ✓ ${asset.name} → ${filepath}`);
    }

    console.log('\n✓ All assets extracted successfully!');

    // Save manifest
    fs.writeFileSync(
      './src/assets/manifest.json',
      JSON.stringify(assets, null, 2)
    );
    console.log('✓ Asset manifest saved');

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
