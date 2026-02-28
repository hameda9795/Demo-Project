#!/usr/bin/env node

/**
 * Image Setup Script for Perfect Stucwerk
 * 
 * This script downloads sample images from Unsplash for the demo website.
 * In production, you should replace these with your own professional photos.
 * 
 * Usage: node scripts/setup-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Image configuration with Unsplash source URLs
const images = {
  'hero': [
    { filename: 'rough-concrete.jpg', url: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=1920&q=80', desc: 'Rough concrete texture' },
    { filename: 'smooth-wall.jpg', url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1920&q=80', desc: 'Smooth plaster wall' },
    { filename: 'trowel-action.jpg', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80', desc: 'Plasterer working' },
  ],
  'before': [
    { filename: 'brick-wall-rough.jpg', url: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=1200&q=80', desc: 'Rough brick wall' },
    { filename: 'damaged-ceiling.jpg', url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80', desc: 'Damaged ceiling' },
    { filename: 'uneven-surface.jpg', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80', desc: 'Uneven wall surface' },
    { filename: 'old-plaster.jpg', url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80', desc: 'Old plaster wall' },
  ],
  'after': [
    { filename: 'living-smooth.jpg', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80', desc: 'Smooth living room wall' },
    { filename: 'bathroom-seamless.jpg', url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80', desc: 'Seamless bathroom finish' },
    { filename: 'ceiling-finish.jpg', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', desc: 'Perfect ceiling finish' },
    { filename: 'decorative-venetian.jpg', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80', desc: 'Decorative Venetian plaster' },
  ],
  'textures': [
    { filename: 'spachtelputz-close.jpg', url: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80', desc: 'Spachtelputz texture' },
    { filename: 'granol-texture.jpg', url: 'https://images.unsplash.com/photo-1558618047-f4b511b0cf3e?w=800&q=80', desc: 'Granol coarse texture' },
    { filename: 'glad-close.jpg', url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80', desc: 'Mirror smooth finish' },
    { filename: 'decorative-pattern.jpg', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', desc: 'Decorative pattern' },
  ],
  'projects': [
    { filename: 'room-1.jpg', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', desc: 'Modern living room' },
    { filename: 'room-2.jpg', url: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=1200&q=80', desc: 'Minimalist bedroom' },
    { filename: 'room-3.jpg', url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&q=80', desc: 'Modern kitchen' },
    { filename: 'room-4.jpg', url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80', desc: 'Bathroom walls' },
    { filename: 'exterior-facade.jpg', url: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=80', desc: 'Exterior facade' },
  ],
  'process': [
    { filename: 'prep-masking.jpg', url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80', desc: 'Preparation masking' },
    { filename: 'applying-primer.jpg', url: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80', desc: 'Applying primer' },
    { filename: 'trowel-work.jpg', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', desc: 'Trowel work' },
    { filename: 'finishing.jpg', url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80', desc: 'Finishing touches' },
  ],
};

const baseDir = path.join(__dirname, '..', 'public', 'images', 'stukadoor');

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

// Download image with retries
function downloadImage(url, dest, retries = 3) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    https.get(url, { timeout: 30000 }, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        file.close();
        downloadImage(response.headers.location, dest, retries)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        reject(new Error(`Status Code: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      if (retries > 0) {
        console.log(`  Retrying download... (${retries} attempts left)`);
        downloadImage(url, dest, retries - 1)
          .then(resolve)
          .catch(reject);
      } else {
        reject(err);
      }
    });
  });
}

// Create placeholder if download fails
function createPlaceholder(dest, width = 800, height = 600) {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#d6d3d1"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#78716c" text-anchor="middle" dy=".3em">
      Placeholder Image
    </text>
  </svg>`;
  fs.writeFileSync(dest.replace('.jpg', '.svg'), svg);
  console.log(`  Created placeholder: ${path.basename(dest)}`);
}

// Main function
async function main() {
  console.log('🖼️  Perfect Stucwerk - Image Setup\n');
  console.log('This script downloads sample images from Unsplash.');
  console.log('For production, replace with your own professional photos.\n');

  // Ensure base directory exists
  ensureDir(baseDir);

  let downloaded = 0;
  let failed = 0;

  for (const [folder, files] of Object.entries(images)) {
    const folderPath = path.join(baseDir, folder);
    ensureDir(folderPath);

    console.log(`\n📁 ${folder}/`);

    for (const file of files) {
      const destPath = path.join(folderPath, file.filename);
      
      // Skip if already exists
      if (fs.existsSync(destPath)) {
        console.log(`  ✓ ${file.filename} (exists)`);
        downloaded++;
        continue;
      }

      process.stdout.write(`  ⏳ Downloading ${file.filename}... `);
      
      try {
        await downloadImage(file.url, destPath);
        console.log('✓');
        downloaded++;
      } catch (err) {
        console.log(`✗ (${err.message})`);
        createPlaceholder(destPath);
        failed++;
      }
      
      // Small delay to be nice to Unsplash
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Downloaded: ${downloaded} images`);
  console.log(`⚠️  Failed/Created placeholder: ${failed} images`);
  console.log('='.repeat(50));
  console.log('\nNext steps:');
  console.log('1. Run: npm run dev');
  console.log('2. Open: http://localhost:3000');
  console.log('\nNote: Replace placeholder images with your own photos for production.');
}

main().catch(console.error);
