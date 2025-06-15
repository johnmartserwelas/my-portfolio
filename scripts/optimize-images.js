const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const images = ['1.png', '2.png', '3.png', '4.png'];

async function optimizeImages() {
  for (const image of images) {
    const inputPath = path.join(publicDir, image);
    const outputPath = path.join(publicDir, `optimized-${image}`);

    try {
      await sharp(inputPath)
        .resize(1200, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ quality: 80 })
        .toFile(outputPath);

      console.log(`Optimized ${image}`);
    } catch (error) {
      console.error(`Error optimizing ${image}:`, error);
    }
  }
}

optimizeImages(); 