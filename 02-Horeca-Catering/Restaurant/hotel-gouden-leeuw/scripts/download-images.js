/**
 * Image Download Script for Hotel De Gouden Leeuw
 * Downloads sample images from Unsplash for demo purposes
 * 
 * Usage: node scripts/download-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Image URLs mapped to their destination paths
const images = {
  // Exterior images
  'exterior/facade-golden-hour.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
  'exterior/entrance-night.jpg': 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
  'exterior/terrace-canal.jpg': 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
  
  // Lobby images
  'lobby/reception-desk.jpg': 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
  'lobby/lobby-seating.jpg': 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80',
  'lobby/stairs-grand.jpg': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
  
  // Room images
  'rooms/superior-room-1.jpg': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
  'rooms/superior-room-bathroom.jpg': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
  'rooms/deluxe-suite-living.jpg': 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
  'rooms/deluxe-suite-view.jpg': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80',
  'rooms/junior-suite-bed.jpg': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80',
  'rooms/penthouse-panorama.jpg': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
  'rooms/room-detail-1.jpg': 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80',
  'rooms/room-detail-2.jpg': 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&q=80',
  
  // Restaurant images
  'restaurant/dining-room.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
  'restaurant/breakfast-buffet.jpg': 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=80',
  'restaurant/dish-gourmet-1.jpg': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  'restaurant/dish-gourmet-2.jpg': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80',
  'restaurant/wine-cellar.jpg': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80',
  
  // Spa images
  'spa/treatment-room.jpg': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
  'spa/sauna.jpg': 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80',
  'spa/relaxation-area.jpg': 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&q=80',
  'spa/massage.jpg': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80',
  
  // Amenities images
  'amenities/concierge.jpg': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
  'amenities/key-card.jpg': 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80',
  'amenities/toiletries.jpg': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80',
  'amenities/gym.jpg': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
};

const baseDir = path.join(__dirname, '..', 'public', 'images', 'hotel');

// Ensure directory exists
function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

// Download a single image
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    ensureDir(dest);
    
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${path.basename(dest)}`);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        file.close();
        fs.unlinkSync(dest);
        downloadImage(response.headers.location, dest)
          .then(resolve)
          .catch(reject);
      } else {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) {
        fs.unlinkSync(dest);
      }
      reject(err);
    });
  });
}

// Main function
async function main() {
  console.log('='.repeat(60));
  console.log('Hotel De Gouden Leeuw - Image Download Script');
  console.log('='.repeat(60));
  console.log(`\nDownloading ${Object.keys(images).length} images...\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const [relativePath, url] of Object.entries(images)) {
    const destPath = path.join(baseDir, relativePath);
    try {
      await downloadImage(url, destPath);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed: ${relativePath} - ${error.message}`);
      failCount++;
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`Download complete: ${successCount} success, ${failCount} failed`);
  console.log('='.repeat(60));
  
  if (failCount > 0) {
    process.exit(1);
  }
}

main().catch(console.error);
