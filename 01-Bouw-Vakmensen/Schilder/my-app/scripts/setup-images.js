#!/usr/bin/env node
/**
 * Setup Images Script for Kleur & Verf Meesters
 * 
 * This script downloads sample images from Unsplash for the demo website.
 * Run with: npm run setup-images
 * 
 * NOTE: For production, replace with your own licensed images.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'schilder');

// Unsplash image mappings - curated for painting company demo
const UNSPLASH_IMAGES = {
  // Hero images
  'hero/painter-roller.jpg': 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&q=80',
  'hero/color-wall.jpg': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=80',
  'hero/paint-cans.jpg': 'https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?w=1200&q=80',
  
  // Before images
  'before/living-beige.jpg': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
  'before/kitchen-wood.jpg': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80',
  'before/exterior-faded.jpg': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
  'before/bedroom-dark.jpg': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  
  // After images
  'after/living-gray.jpg': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  'after/kitchen-white.jpg': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  'after/exterior-fresh.jpg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  'after/bedroom-pastel.jpg': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
  
  // Room images for color visualizer
  'rooms/empty-living.jpg': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80',
  'rooms/empty-bedroom.jpg': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1000&q=80',
  'rooms/empty-kitchen.jpg': 'https://images.unsplash.com/photo-1556911220-b40e3a5872c3?w=1000&q=80',
  'rooms/detail-brush.jpg': 'https://images.unsplash.com/photo-1574359411659-15573a276f08?w=800&q=80',
  
  // Finish texture images
  'finishes/mat-finish.jpg': 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80',
  'finishes/satin-finish.jpg': 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&q=80',
  'finishes/gloss-finish.jpg': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  
  // Project showcase images
  'projects/project-1.jpg': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  'projects/project-2.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  'projects/project-3.jpg': 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
  'projects/project-4.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  
  // Icons/badges
  'icons/quality-badge.png': 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&q=80',
  'icons/guarantee-stamp.png': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=80',
};

// Ensure directory exists
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Download image from URL
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        file.close();
        fs.unlinkSync(dest);
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlinkSync(dest);
      reject(err);
    });
  });
}

// Create placeholder SVG for missing images
function createPlaceholder(filename, width = 800, height = 600) {
  const colors = ['#0d9488', '#f97316', '#facc15', '#1e40af', '#64748b'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${randomColor}" opacity="0.2"/>
    <rect x="10" y="10" width="${width-20}" height="${height-20}" fill="none" stroke="${randomColor}" stroke-width="4" stroke-dasharray="10,10"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="${randomColor}" text-anchor="middle" dominant-baseline="middle">
      ${filename.replace('.jpg', '').replace(/-/g, ' ').toUpperCase()}
    </text>
    <text x="50%" y="55%" font-family="Arial" font-size="14" fill="#64748b" text-anchor="middle" dominant-baseline="middle">
      (Placeholder - Replace with your image)
    </text>
  </svg>`;
  
  return svg;
}

// Main function
async function main() {
  console.log('🎨 Kleur & Verf Meesters - Image Setup\n');
  
  // Ensure base directory exists
  ensureDir(IMAGES_DIR);
  
  // Create subdirectories
  const subdirs = ['hero', 'before', 'after', 'rooms', 'finishes', 'projects', 'icons'];
  for (const dir of subdirs) {
    ensureDir(path.join(IMAGES_DIR, dir));
  }
  
  console.log('\n📥 Downloading images from Unsplash...\n');
  
  const results = { success: [], failed: [] };
  
  for (const [filename, url] of Object.entries(UNSPLASH_IMAGES)) {
    const destPath = path.join(IMAGES_DIR, filename);
    const dir = path.dirname(destPath);
    
    ensureDir(dir);
    
    try {
      console.log(`  ↳ ${filename}...`);
      await downloadImage(url, destPath);
      results.success.push(filename);
      console.log(`    ✅ Downloaded`);
    } catch (error) {
      console.log(`    ⚠️  Failed: ${error.message}`);
      // Create placeholder instead
      const svg = createPlaceholder(filename);
      fs.writeFileSync(destPath.replace('.jpg', '.svg'), svg);
      results.failed.push(filename);
    }
  }
  
  // Create a README
  const readmePath = path.join(IMAGES_DIR, 'README.md');
  fs.writeFileSync(readmePath, `# Afbeeldingen voor Kleur & Verf Meesters

## Structuur

\`\`\`
/images/schilder/
/hero/          - Hero sectie afbeeldingen
/before/        - Voor-vergelijking foto's
/after/         - Na-vergelijking foto's
/rooms/         - Kleurvisualisatie kamers
/finishes/      - Verf afwerking texturen
/projects/      - Portfolio projecten
/icons/         - Badges en iconen
\`\`\`

## Opmerking

Deze afbeeldingen zijn gedownload van Unsplash voor demonstratiedoeleinden.
Voor productiegebruik dient u eigen gelicenseerde afbeeldingen te gebruiken.

## Setup

\`\`\`bash
npm run setup-images
\`\`\`
`);
  
  console.log('\n' + '='.repeat(50));
  console.log(`✅ Successfully downloaded: ${results.success.length} images`);
  if (results.failed.length > 0) {
    console.log(`⚠️  Failed (placeholders created): ${results.failed.length} images`);
  }
  console.log('='.repeat(50));
  console.log('\n🎨 Images are ready in: public/images/schilder/\n');
}

main().catch(console.error);
