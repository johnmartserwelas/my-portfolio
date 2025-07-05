const fs = require('fs');
const path = require('path');

// This is a simple script to create a placeholder for the OG image
// In a real implementation, you might want to use a library like Canvas or Sharp
// to generate a proper image with text and graphics

console.log('Open Graph image generation script');
console.log('For now, you can use your existing pic.png or create a custom 1200x630 image');
console.log('Recommended: Create an image with your name, title, and some visual elements');
console.log('Save it as "og-image.png" in the public folder');

// Create a simple HTML template for generating the OG image
const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>John Mart - Full Stack Developer</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 1200px;
            height: 630px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Inter', sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        .container {
            text-align: center;
            padding: 40px;
        }
        h1 {
            font-size: 64px;
            font-weight: bold;
            margin: 0 0 20px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .title {
            font-size: 32px;
            margin: 0 0 30px 0;
            opacity: 0.9;
        }
        .tech-stack {
            font-size: 24px;
            opacity: 0.8;
            margin-top: 20px;
        }
        .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 4px solid white;
            margin: 0 auto 30px auto;
            display: block;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="pic.png" alt="John Mart" class="profile-image">
        <h1>John Mart</h1>
        <div class="title">Full Stack Developer</div>
        <div class="tech-stack">React • Next.js • TypeScript • Node.js</div>
    </div>
</body>
</html>
`;

// Write the HTML template to a file
fs.writeFileSync(path.join(__dirname, '../public/og-template.html'), htmlTemplate);

console.log('Created og-template.html in public folder');
console.log('You can open this in a browser and take a screenshot to create your OG image');
console.log('Save the screenshot as "og-image.png" in the public folder'); 