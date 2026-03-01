/**
 * Image Download Script for Het Kleine Paradijs
 * Run: node download-images.js
 * 
 * This script downloads sample images from Unsplash for the B&B website.
 * In production, these should be replaced with actual photos of the property.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Image configuration with Unsplash URLs
const images = {
  'breakfast/croissants-basket.jpg': 'https://images.unsplash.com/photo-1555507036-ab1f40388085?w=800&q=80',
  'breakfast/jam-jars.jpg': 'https://images.unsplash.com/photo-1563729768601-d63d6e0ccfab?w=800&q=80',
  'breakfast/coffee-pour.jpg': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
  'breakfast/fresh-fruit.jpg': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
  'breakfast/breakfast-table-setting.jpg': 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80',
  'breakfast/cheese-platter.jpg': 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&q=80',
  'breakfast/farm-eggs.jpg': 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=800&q=80',
  'breakfast/fresh-juice.jpg': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80',
  
  'rooms/zonnebloem-room.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  'rooms/romantisch-hoekje.jpg': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
  'rooms/tuinkamer.jpg': 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
  'rooms/attic-suite.jpg': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
  'rooms/bathroom-details.jpg': 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  'rooms/bedroom-detail.jpg': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
  
  'garden/morning-terrace.jpg': 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
  'garden/flowers-closeup.jpg': 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
  'garden/garden-seating.jpg': 'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80',
  'garden/entrance-path.jpg': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
  'garden/garden-aerial.jpg': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  
  'hosts/maria-jan-portrait.jpg': 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=800&q=80',
  'hosts/hosts-with-guests-blurred.jpg': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  'hosts/kitchen-preparing.jpg': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  'hosts/host-woman.jpg': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
  
  'details/key-vintage.jpg': 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
  'details/flowers-vase.jpg': 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',
  'details/bedside-table.jpg': 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80',
  'details/window-view.jpg': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
  'details/lamp-detail.jpg': 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
  'details/cozy-corner.jpg': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
};

const baseDir = path.join(__dirname, 'public', 'images', 'bnb');

// Ensure directories exist
function ensureDir(filePath) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
    console.log(`Created directory: ${dirname}`);
  }
}

// Download single image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(baseDir, filepath);
    ensureDir(fullPath);
    
    // Skip if already exists
    if (fs.existsSync(fullPath)) {
      console.log(`✓ Already exists: ${filepath}`);
      resolve();
      return;
    }
    
    const file = fs.createWriteStream(fullPath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(fullPath, () => {});
      reject(err);
    });
  });
}

// Main download function
async function downloadAll() {
  console.log('\n🌸 Welkom bij Het Kleine Paradijs - Image Downloader 🌸\n');
  console.log('Downloading sample images for the B&B website...\n');
  
  let success = 0;
  let failed = 0;
  
  for (const [filepath, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filepath);
      success++;
    } catch (error) {
      console.error(`✗ Failed: ${filepath} - ${error.message}`);
      failed++;
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log(`Download complete! ✓ ${success} successful, ✗ ${failed} failed`);
  console.log('='.repeat(50));
  console.log('\n📁 Images saved to: public/images/bnb/');
  console.log('\n⚠️  NOTE: These are placeholder images from Unsplash.');
  console.log('   For production, replace with actual photos of your B&B.\n');
}

downloadAll().catch(console.error);
