/**
 * Image Download Script for De Gouden Boon Café
 * Downloads sample images from Unsplash for demo purposes
 * Run: node scripts/download-images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..', 'public', 'images', 'cafe');

const images = {
  coffee: [
    { name: 'pour-latte-art.jpg', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80' },
    { name: 'espresso-detail.jpg', url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80' },
    { name: 'cold-brew.jpg', url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80' },
    { name: 'beans-roasted.jpg', url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80' },
    { name: 'cappuccino.jpg', url: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80' },
    { name: 'americano.jpg', url: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=800&q=80' },
  ],
  food: [
    { name: 'croissant-butter.jpg', url: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80' },
    { name: 'avocado-toast.jpg', url: 'https://images.unsplash.com/photo-1588137372308-15f75323ca8d?w=800&q=80' },
    { name: 'pastry-display.jpg', url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80' },
    { name: 'sandwich-club.jpg', url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80' },
    { name: 'brownie.jpg', url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80' },
    { name: 'muffin.jpg', url: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80' },
  ],
  interior: [
    { name: 'cozy-corner.jpg', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80' },
    { name: 'barista-bar.jpg', url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80' },
    { name: 'window-seats.jpg', url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80' },
    { name: 'terras-sunny.jpg', url: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80' },
    { name: 'coffee-roaster.jpg', url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80' },
  ],
  barista: [
    { name: 'barista-portrait.jpg', url: 'https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=800&q=80' },
    { name: 'making-coffee-action.jpg', url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80' },
    { name: 'latte-art-pour.jpg', url: 'https://images.unsplash.com/photo-1507133750069-69d3cdad863a?w=800&q=80' },
  ],
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, { 
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        file.close();
        fs.unlinkSync(filepath);
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('🖼️  De Gouden Boon - Image Download Script\n');
  console.log('⚠️  IMPORTANT: These images are from Unsplash and are for DEMO purposes only.');
  console.log('   Please replace with your own professional photos before production.\n');

  let successCount = 0;
  let errorCount = 0;

  for (const [category, categoryImages] of Object.entries(images)) {
    console.log(`\n📁 Category: ${category}`);
    const categoryDir = path.join(BASE_DIR, category);
    
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    for (const image of categoryImages) {
      const filepath = path.join(categoryDir, image.name);
      
      if (fs.existsSync(filepath)) {
        console.log(`  ⏭️  ${image.name} already exists, skipping`);
        continue;
      }

      process.stdout.write(`  ⬇️  Downloading ${image.name}... `);
      
      try {
        await downloadImage(image.url, filepath);
        console.log('✅');
        successCount++;
      } catch (error) {
        console.log(`❌ (${error.message})`);
        errorCount++;
      }
      
      // Small delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  console.log(`\n\n📊 Summary:`);
  console.log(`   ✅ Successfully downloaded: ${successCount}`);
  console.log(`   ❌ Failed: ${errorCount}`);
  console.log(`   ⏭️  Already existed: ${Object.values(images).flat().length - successCount - errorCount}`);
  
  if (errorCount > 0) {
    console.log(`\n⚠️  Some downloads failed. You can run this script again to retry.`);
    process.exit(1);
  } else {
    console.log(`\n🎉 All images ready! Your café website is set up.`);
  }
}

downloadAll().catch(console.error);
