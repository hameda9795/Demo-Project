/**
 * Image Download Script
 * Van den Berg Timmerwerken Website
 * 
 * This script downloads placeholder images from Unsplash
 * for the timmerman website demo.
 * 
 * Usage: node download-images.js
 * 
 * Creates the following structure:
 * /public/images/timmerman/
 *   /hero/
 *     - workshop-depth.jpg
 *     - hands-chiseling.jpg
 *     - wood-grain-macro.jpg
 *   /projects/
 *     - cabinet-oak-finished.jpg
 *     - cabinet-oak-raw.jpg
 *     - staircase-walnut.jpg
 *     - garden-house-cedar.jpg
 *     - restored-door-heritage.jpg
 *     - custom-table-live-edge.jpg
 *   /wood-types/
 *     - oak-grain.jpg
 *     - walnut-grain.jpg
 *     - pine-grain.jpg
 *     - bamboo-grain.jpg
 *   /workshop/
 *     - tools-wall.jpg
 *     - sawing-process.jpg
 *     - sanding-detail.jpg
 *     - varnish-application.jpg
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Image URLs from Unsplash
const IMAGES = {
  hero: {
    'workshop-depth.jpg': 'https://images.unsplash.com/photo-1581147036324-c17ac41dd161?w=1920&q=80',
    'hands-chiseling.jpg': 'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=1200&q=80',
    'wood-grain-macro.jpg': 'https://images.unsplash.com/photo-1543446860-24757c244585?w=1200&q=80',
  },
  projects: {
    'cabinet-oak-finished.jpg': 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=1200&q=80',
    'cabinet-oak-raw.jpg': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    'staircase-walnut.jpg': 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    'garden-house-cedar.jpg': 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?w=1200&q=80',
    'restored-door-heritage.jpg': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    'custom-table-live-edge.jpg': 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=1200&q=80',
  },
  'wood-types': {
    'oak-grain.jpg': 'https://images.unsplash.com/photo-1543446860-24757c244585?w=800&q=80',
    'walnut-grain.jpg': 'https://images.unsplash.com/photo-1610505463858-618e18d75871?w=800&q=80',
    'pine-grain.jpg': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    'bamboo-grain.jpg': 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80',
  },
  workshop: {
    'tools-wall.jpg': 'https://images.unsplash.com/photo-1581147036324-c17ac41dd161?w=1200&q=80',
    'sawing-process.jpg': 'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=1200&q=80',
    'sanding-detail.jpg': 'https://images.unsplash.com/photo-1601058268499-e5262a3b9c66?w=1200&q=80',
    'varnish-application.jpg': 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80',
  },
};

// Base directory
const BASE_DIR = path.join(__dirname, 'public', 'images', 'timmerman');

/**
 * Download a single image
 */
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${url} (Status: ${response.statusCode})`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(dest)}`);
        resolve(dest);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

/**
 * Create directory if it doesn't exist
 */
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(60));
  console.log('Van den Berg Timmerwerken - Image Download Script');
  console.log('='.repeat(60));
  console.log('');
  
  // Create base directory
  ensureDir(BASE_DIR);
  
  const downloads = [];
  
  // Download all images
  for (const [folder, files] of Object.entries(IMAGES)) {
    const folderPath = path.join(BASE_DIR, folder);
    ensureDir(folderPath);
    
    for (const [filename, url] of Object.entries(files)) {
      const dest = path.join(folderPath, filename);
      
      // Skip if file already exists
      if (fs.existsSync(dest)) {
        console.log(`⚠ Skipped (exists): ${folder}/${filename}`);
        continue;
      }
      
      downloads.push(
        downloadImage(url, dest)
          .catch(err => console.error(`✗ Failed: ${folder}/${filename} - ${err.message}`))
      );
      
      // Small delay to be nice to Unsplash servers
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  await Promise.all(downloads);
  
  console.log('');
  console.log('='.repeat(60));
  console.log('Download complete!');
  console.log('='.repeat(60));
  console.log('');
  console.log('Images saved to: public/images/timmerman/');
  console.log('');
  console.log('Note: These are placeholder images from Unsplash.');
  console.log('For production, replace with actual client photos.');
}

main().catch(console.error);
