/**
 * Image Setup Script for Groen & Tuin Architectuur
 * Downloads sample garden images from Unsplash for local use
 * 
 * Run: npm run setup-images
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, 'public', 'images', 'hovenier');

// Unsplash image URLs (garden/landscaping related)
const images = {
  'hero/garden-sunset.jpg': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
  'hero/modern-garden.jpg': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80',
  'hero/hands-planting.jpg': 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&q=80',
  
  'before/messy-garden-1.jpg': 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1200&q=80',
  'before/bare-soil.jpg': 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80',
  'before/wild-grass.jpg': 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=1200&q=80',
  
  'after/design-1.jpg': 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80',
  'after/design-2.jpg': 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=1200&q=80',
  'after/terrace-garden.jpg': 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1200&q=80',
  
  'projects/city-garden-1.jpg': 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80',
  'projects/villa-lawn.jpg': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  'projects/roof-garden.jpg': 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=800&q=80',
  'projects/pond-garden.jpg': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
  'projects/maintenance-1.jpg': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  'projects/tree-care.jpg': 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80',
  'projects/seasonal-spring.jpg': 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
  'projects/seasonal-autumn.jpg': 'https://images.unsplash.com/photo-1507371341162-763b5e419408?w=800&q=80',
  
  'plants/hydrangea.jpg': 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80',
  'plants/lavender.jpg': 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&q=80',
  'plants/maple.jpg': 'https://images.unsplash.com/photo-1508349937086-99c9e621a7b8?w=600&q=80',
  'plants/buxus.jpg': 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80',
  'plants/grass.jpg': 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=600&q=80',
  'plants/perennials.jpg': 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80',
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.relative(BASE_DIR, filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function setupImages() {
  console.log('🌿 Setting up images for Groen & Tuin Architectuur...\n');
  
  // Ensure base directory exists
  if (!fs.existsSync(BASE_DIR)) {
    fs.mkdirSync(BASE_DIR, { recursive: true });
  }

  const downloads = Object.entries(images).map(([filename, url]) => {
    const filepath = path.join(BASE_DIR, filename);
    return downloadImage(url, filepath).catch(err => {
      console.error(`✗ Failed to download ${filename}:`, err.message);
    });
  });

  await Promise.all(downloads);
  
  console.log('\n✅ Image setup complete!');
  console.log('📁 Images saved to: public/images/hovenier/');
  console.log('\n📝 Note: These are placeholder images from Unsplash.');
  console.log('   Replace with your own images for production use.');
}

// Create placeholder SVGs for icons
function createPlaceholderIcons() {
  const iconsDir = path.join(BASE_DIR, 'icons');
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // Eco badge SVG
  const ecoBadgeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="#16a34a"/>
    <text x="50" y="40" text-anchor="middle" fill="white" font-size="14" font-weight="bold">ECO</text>
    <text x="50" y="60" text-anchor="middle" fill="white" font-size="10">Gecertificeerd</text>
  </svg>`;

  // Certified badge SVG
  const certifiedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="#166534"/>
    <text x="50" y="35" text-anchor="middle" fill="white" font-size="12" font-weight="bold">HOVENIER</text>
    <text x="50" y="55" text-anchor="middle" fill="white" font-size="10">Gecertificeerd</text>
    <text x="50" y="75" text-anchor="middle" fill="#4ade80" font-size="16">✓</text>
  </svg>`;

  fs.writeFileSync(path.join(iconsDir, 'eco-badge.svg'), ecoBadgeSvg);
  fs.writeFileSync(path.join(iconsDir, 'certified-hovenier.svg'), certifiedSvg);
  
  console.log('✓ Created placeholder SVG icons');
}

// Run setup
setupImages().then(() => {
  createPlaceholderIcons();
}).catch(err => {
  console.error('Setup failed:', err);
  process.exit(1);
});
