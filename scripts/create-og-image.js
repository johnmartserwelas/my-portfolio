const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

async function createOGImage() {
  try {
    // Create a 1200x630 canvas (optimal size for social media)
    const canvas = createCanvas(1200, 630);
    const ctx = canvas.getContext('2d');

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);

    // Add some decorative elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1100, 500, 80, 0, Math.PI * 2);
    ctx.fill();

    // Add main text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 72px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add text shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    ctx.fillText('John Mart', 600, 250);
    
    // Reset shadow for subtitle
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    ctx.font = '36px Inter, Arial, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText('Full Stack Developer', 600, 320);
    
    // Add tech stack
    ctx.font = '24px Inter, Arial, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText('React • Next.js • TypeScript • Node.js', 600, 380);
    
    // Add profile image if it exists
    try {
      const profileImage = await loadImage(path.join(__dirname, '../public/pic.png'));
      
      // Create circular mask for profile image
      const imageSize = 120;
      const imageX = 600 - imageSize / 2;
      const imageY = 100;
      
      ctx.save();
      ctx.beginPath();
      ctx.arc(imageX + imageSize / 2, imageY + imageSize / 2, imageSize / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      
      ctx.drawImage(profileImage, imageX, imageY, imageSize, imageSize);
      ctx.restore();
      
      // Add border to profile image
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(imageX + imageSize / 2, imageY + imageSize / 2, imageSize / 2, 0, Math.PI * 2);
      ctx.stroke();
    } catch (error) {
      console.log('Profile image not found, creating image without it');
    }
    
    // Add some decorative lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 450);
    ctx.lineTo(400, 450);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(800, 450);
    ctx.lineTo(1000, 450);
    ctx.stroke();

    // Save the image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(__dirname, '../public/og-image.png'), buffer);
    
    console.log('✅ Open Graph image created successfully!');
    console.log('📁 Saved as: public/og-image.png');
    console.log('🌐 Your portfolio will now show a preview when shared on social media');
    
  } catch (error) {
    console.error('❌ Error creating OG image:', error);
    console.log('💡 Make sure you have the "canvas" package installed: npm install canvas');
  }
}

// Check if canvas is available
try {
  require('canvas');
  createOGImage();
} catch (error) {
  console.log('📦 Canvas package not found. Installing...');
  console.log('💡 Run: npm install canvas');
  console.log('🔄 Then run this script again');
  
  // Create a simple fallback
  console.log('📝 For now, you can:');
  console.log('1. Open public/og-template.html in your browser');
  console.log('2. Take a screenshot (1200x630px)');
  console.log('3. Save it as "og-image.png" in the public folder');
} 