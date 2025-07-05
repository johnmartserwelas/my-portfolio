# Open Graph Image Guide

Your portfolio now has Open Graph meta tags configured! When you share your portfolio link on social media platforms like Facebook, Twitter, LinkedIn, or WhatsApp, it will show a preview with an image.

## Current Setup

- ✅ Open Graph meta tags are configured in `src/app/layout.tsx`
- ✅ Twitter Card meta tags are configured
- ✅ Basic image is set up (`public/og-image.png`)

## Creating a Better OG Image

For optimal social media sharing, your OG image should be:
- **Size**: 1200x630 pixels (16:9 aspect ratio)
- **Format**: PNG or JPG
- **Content**: Include your name, title, and possibly your photo

### Option 1: Use the HTML Template (Recommended)

1. Open `public/og-template.html` in your browser
2. Take a screenshot at 1200x630 pixels
3. Save it as `public/og-image.png`

### Option 2: Create a Custom Image

You can create a custom image using any design tool (Canva, Figma, Photoshop, etc.) with these elements:

- **Background**: Gradient or solid color
- **Your Name**: "John Mart" (large, bold text)
- **Title**: "Full Stack Developer" (medium text)
- **Tech Stack**: "React • Next.js • TypeScript • Node.js" (smaller text)
- **Your Photo**: Circular profile picture (optional)
- **Visual Elements**: Icons, shapes, or patterns

### Option 3: Use Online OG Image Generators

- [Canva](https://canva.com) - Free design tool with templates
- [Figma](https://figma.com) - Professional design tool
- [OG Image Generator](https://og-image.vercel.app) - Simple online generator

## Testing Your OG Image

1. **Facebook**: Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. **Twitter**: Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. **LinkedIn**: Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## File Structure

```
my-portfolio/
├── public/
│   ├── og-image.png          # Your OG image (1200x630px)
│   ├── og-template.html      # HTML template for creating OG image
│   └── pic.png              # Your profile picture
├── scripts/
│   ├── generate-og-image.js  # Simple template generator
│   └── create-og-image.js    # Advanced image generator (requires canvas)
└── src/
    └── app/
        └── layout.tsx        # Meta tags configuration
```

## Current Meta Tags

Your portfolio includes these meta tags:

- **Open Graph**: For Facebook, LinkedIn, WhatsApp
- **Twitter Cards**: For Twitter
- **Basic SEO**: Title, description, keywords
- **Social Media**: Profile information

## Next Steps

1. Create a better OG image using one of the methods above
2. Test the sharing on different platforms
3. Update the image periodically to keep it fresh

## Troubleshooting

If the image doesn't show up:
1. Clear the cache on social media platforms
2. Use the debugging tools mentioned above
3. Make sure the image URL is accessible
4. Check that the image is the correct size and format 