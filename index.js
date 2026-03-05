import 'dotenv/config';

const FIGMA_API_BASE = 'https://api.figma.com/v1';

/**
 * Fetch Figma file data
 * @param {string} fileKey - The Figma file key from the URL
 */
async function getFigmaFile(fileKey) {
  const token = process.env.FIGMA_ACCESS_TOKEN;

  if (!token) {
    throw new Error('FIGMA_ACCESS_TOKEN not found in environment variables');
  }

  const response = await fetch(`${FIGMA_API_BASE}/files/${fileKey}`, {
    headers: {
      'X-Figma-Token': token,
    },
  });

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Get user information
 */
async function getUserInfo() {
  const token = process.env.FIGMA_ACCESS_TOKEN;

  if (!token) {
    throw new Error('FIGMA_ACCESS_TOKEN not found in environment variables');
  }

  const response = await fetch(`${FIGMA_API_BASE}/me`, {
    headers: {
      'X-Figma-Token': token,
    },
  });

  if (!response.ok) {
    throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

// Example usage
async function main() {
  try {
    console.log('Testing Figma API connection...\n');

    // Test API connection by getting user info
    const userInfo = await getUserInfo();
    console.log('✓ Connected to Figma API');
    console.log('User:', userInfo.email);
    console.log('User ID:', userInfo.id);

    // If you have a file key, uncomment below to test file fetching
    const fileKey = process.env.FIGMA_FILE_KEY;
    if (fileKey) {
      console.log('\nFetching file data...');
      const fileData = await getFigmaFile(fileKey);
      console.log('File name:', fileData.name);
      console.log('Last modified:', fileData.lastModified);
    } else {
      console.log('\nℹ️  Add FIGMA_FILE_KEY to .env to test file fetching');
    }

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
