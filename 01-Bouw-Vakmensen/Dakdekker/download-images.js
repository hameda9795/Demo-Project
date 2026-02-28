/**
 * Image Download Script for Dakdekker Website
 * 
 * This script downloads sample images from Unsplash for the roofing website.
 * Run: node download-images.js
 * 
 * NOTE: For production, replace these with your own professional photos.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Image configuration with Unsplash source URLs
const images = {
  'hero': [
    { name: 'sunset-roof.jpg', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80', desc: 'Dramatic sunset over roof silhouette' },
    { name: 'worker-ladder.jpg', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80', desc: 'Professional worker on ladder' },
    { name: 'skyline.jpg', url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80', desc: 'Utrecht/Amsterdam city skyline' },
    { name: 'dramatic-sky.jpg', url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&q=80', desc: 'Stormy dramatic sky' },
  ],
  'services': [
    { name: 'repair-leak.jpg', url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80', desc: 'Water damage repair' },
    { name: 'new-tiles.jpg', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', desc: 'Red roof tiles installation' },
    { name: 'gutter-cleaning.jpg', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', desc: 'Gutter with autumn leaves' },
    { name: 'solar-roof.jpg', url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80', desc: 'Solar panels on roof' },
    { name: 'chimney.jpg', url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80', desc: 'Brick chimney' },
    { name: 'insulation.jpg', url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80', desc: 'Attic insulation view' },
  ],
  'projects': [
    { name: 'before-storm.jpg', url: 'https://images.unsplash.com/photo-1566916358117-b2c1e0dc6399?w=1200&q=80', desc: 'Damaged roof from storm' },
    { name: 'after-renovation.jpg', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', desc: 'Clean new roof after renovation' },
    { name: 'modern-house.jpg', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', desc: 'Modern Dutch architecture' },
    { name: 'traditional-house.jpg', url: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&q=80', desc: 'Traditional Dutch house' },
    { name: 'commercial-building.jpg', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', desc: 'Commercial flat roof' },
    { name: 'detail-work.jpg', url: 'https://images.unsplash.com/photo-1558618047-f4b511ae5dc2?w=1200&q=80', desc: 'Roof craftsmanship detail' },
    { name: 'storm-damage-utrecht.jpg', url: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=1200&q=80', desc: 'Storm damage repair work' },
    { name: 'modern-tiles-amsterdam.jpg', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80', desc: 'Modern tiles Amsterdam style' },
  ],
  'team': [
    { name: 'foreman.jpg', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', desc: 'Professional foreman portrait' },
    { name: 'worker-1.jpg', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80', desc: 'Worker with safety helmet' },
    { name: 'team.jpg', url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', desc: 'Team working on roof' },
  ],
  'icons': [
    { name: 'guarantee-badge.png', url: 'https://via.placeholder.com/200x200/ea580c/ffffff?text=10+Jaar', desc: '10 year guarantee badge' },
    { name: 'certification.png', url: 'https://via.placeholder.com/200x200/475569/ffffff?text=VCA', desc: 'VCA certification placeholder' },
  ],
};

const baseDir = path.join(__dirname, 'public', 'images', 'dakdekker');

// Create directories
Object.keys(images).forEach(folder => {
  const dir = path.join(baseDir, folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Download function
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirects
        downloadImage(response.headers.location, dest)
          .then(resolve)
          .catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

// Download all images
async function downloadAll() {
  console.log('\n🚀 Starting image downloads...\n');
  let success = 0;
  let failed = 0;

  for (const [folder, files] of Object.entries(images)) {
    console.log(`\n📁 Processing folder: ${folder}/`);
    
    for (const file of files) {
      const dest = path.join(baseDir, folder, file.name);
      const shortUrl = file.url.length > 60 ? file.url.substring(0, 60) + '...' : file.url;
      
      try {
        await downloadImage(file.url, dest);
        console.log(`  ✅ ${file.name}`);
        console.log(`     ${file.desc}`);
        success++;
      } catch (err) {
        console.log(`  ❌ ${file.name} - ${err.message}`);
        console.log(`     URL: ${shortUrl}`);
        failed++;
        
        // Create a placeholder text file for failed downloads
        const placeholder = path.join(baseDir, folder, `${file.name}.txt`);
        fs.writeFileSync(placeholder, 
          `Placeholder for: ${file.name}\nDescription: ${file.desc}\nIntended URL: ${file.url}\n\nPlease manually download an appropriate image and save it as: ${file.name}\n`);
      }
    }
  }

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Download complete!`);
  console.log(`   Success: ${success}`);
  console.log(`   Failed: ${failed}`);
  console.log(`${'='.repeat(50)}\n`);
  
  if (failed > 0) {
    console.log('⚠️  Some images failed to download.');
    console.log('   Check the .txt files in each folder for manual download instructions.\n');
  }
}

// Create README with manual download instructions
function createReadme() {
  const readmePath = path.join(baseDir, 'README.md');
  const content = `# Dakdekker Website Images

This folder contains all images used in the Dakwerken Van der Berg website.

## Folder Structure

\`\`\`
public/images/dakdekker/
├── hero/           # Hero section background images
├── services/       # Service card images
├── projects/       # Project gallery images
├── team/           # Team member photos
└── icons/          # Icons and badges
\`\`\`

## Manual Image Download

If automatic download failed, you can manually download images from these sources:

### Recommended: Unsplash (Free, High Quality)
Visit https://unsplash.com and search for:
- "roof worker"
- "roof tiles"
- "gutter cleaning"
- "solar panels roof"
- "chimney repair"
- "storm damage roof"
- "house exterior dutch"

### Alternative: Pexels
Visit https://pexels.com for similar roofing imagery.

### Naming Convention
Save downloaded images using the exact names referenced in the code:
- \`sunset-roof.jpg\` - Dramatic sky/hero image
- \`worker-ladder.jpg\` - Professional with safety gear
- \`repair-leak.jpg\` - Water damage
- etc.

## Image Requirements

- **Hero images**: 1920x1080 or larger, high quality
- **Service images**: 800x600, good compression
- **Project images**: 1200x800, show before/after contrast
- **Team images**: 600x600, professional headshots
- **Icons**: 200x200 PNG with transparency preferred

## License

Ensure all images are properly licensed for commercial use.
Unsplash and Pexels images are free for commercial use.
`;
  fs.writeFileSync(readmePath, content);
  console.log(`📄 Created README at: ${readmePath}`);
}

// Run
console.log('╔══════════════════════════════════════════╗');
console.log('║   Dakdekker Image Download Script        ║');
console.log('║   Dakwerken Van der Berg                 ║');
console.log('╚══════════════════════════════════════════╝');

downloadAll().then(() => {
  createReadme();
}).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
