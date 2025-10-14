# Gallery Image Management Guide

## Directory Structure

```
public/gallery/
├── hair/           # Hair styling images
├── nails/          # Nail care images
├── makeup/         # Makeup artistry images
├── spa/            # Spa & massage images
└── interior/       # Salon interior images
```

## Image Naming Conventions

### Format
`{category}-{number}.{extension}`

### Examples
- `hair-01.webp`
- `nails-02.jpg`
- `makeup-03.webp`
- `spa-04.jpg`
- `interior-05.webp`

### Rules
- Use lowercase
- Use hyphens (not underscores or spaces)
- Number sequentially (01, 02, 03, etc.)
- Use descriptive category prefix
- Preferred format: WebP (with JPEG fallback)

## Image Specifications

### Recommended Specs
- **Format**: WebP (primary), JPEG (fallback)
- **Max Width**: 1200px
- **Quality**: 80-85%
- **File Size**: < 200KB per image (optimize before upload)
- **Aspect Ratio**: Natural (don't force crop)
- **Color Space**: sRGB

### Supported Aspect Ratios
- **Portrait**: 3:4, 2:3, 9:16
- **Landscape**: 4:3, 3:2, 16:9
- **Square**: 1:1

The masonry grid handles mixed aspect ratios automatically.

## Adding New Images

### 1. Prepare Images
```bash
# Example using ImageMagick or similar tool
convert source.jpg -resize 1200x -quality 85 optimized.jpg
```

### 2. Place in Category Folder
```bash
public/gallery/hair/hair-05.webp
```

### 3. Update Gallery Data
Edit `lib/gallery-data.ts`:

```typescript
{
  id: 'hair-5',
  src: '/gallery/hair/hair-05.webp',  // Use local path for production
  category: 'hair',
  alt: 'Descriptive alt text for accessibility',
  description: 'Brief description shown in lightbox',
  width: 800,   // Actual image width
  height: 1000, // Actual image height
}
```

### 4. Alt Text Guidelines
- Be descriptive and specific
- Include key visual elements
- Mention the service/context
- Keep under 125 characters
- Don't start with "Image of" or "Picture of"

**Good Examples:**
- "Beautiful blonde hair styling with natural beach waves"
- "French manicure with classic white tips and nude base"
- "Professional bridal makeup with smokey eye and nude lip"

**Bad Examples:**
- "Image 1" ❌
- "Hair" ❌
- "A picture of a woman" ❌

### 5. Description Guidelines
- Optional but recommended
- Appears in lightbox below image
- Can be more detailed than alt text
- Include service name or technique
- Keep under 100 characters

**Examples:**
- "Professional hair styling with natural waves"
- "Classic French manicure"
- "Bridal makeup service"
- "Rejuvenating facial treatment"

## Image Optimization

### Before Upload Checklist
- [ ] Image resized to max 1200px width
- [ ] File size < 200KB
- [ ] Converted to WebP (or optimized JPEG)
- [ ] Image properly cropped
- [ ] Good lighting and focus
- [ ] Color corrected if needed
- [ ] No sensitive client information visible

### Optimization Tools
- **Online**: TinyPNG, Squoosh, Compressor.io
- **CLI**: ImageMagick, Sharp, cwebp
- **Design Tools**: Photoshop "Save for Web", Figma export

### Example Optimization Commands

```bash
# Using ImageMagick
convert input.jpg -resize 1200x -quality 85 output.jpg

# Using cwebp (WebP conversion)
cwebp -q 85 input.jpg -o output.webp

# Using Sharp (Node.js)
sharp('input.jpg')
  .resize(1200)
  .webp({ quality: 85 })
  .toFile('output.webp')
```

## Replacing Placeholder Images

### Current State
The gallery currently uses Unsplash placeholder images via external URLs.

### Migration to Production Images

1. **Gather Professional Photos**
   - Take high-quality salon photos
   - Get client permission for before/after images
   - Ensure good lighting and composition
   - Organize by category

2. **Optimize Images**
   - Follow specs above
   - Create WebP versions
   - Test file sizes

3. **Update Gallery Data**
   - Replace Unsplash URLs with local paths
   - Update alt text with real descriptions
   - Verify categories are correct

4. **Example Migration**

```typescript
// Before (Placeholder)
{
  id: 'hair-1',
  src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
  category: 'hair',
  alt: 'Beautiful blonde hair styling with waves',
  width: 800,
  height: 1000,
}

// After (Production)
{
  id: 'hair-1',
  src: '/gallery/hair/hair-01.webp',
  category: 'hair',
  alt: 'Client Sarah with balayage blonde highlights and loose curls',
  description: 'Balayage highlighting and professional styling',
  width: 800,
  height: 1000,
}
```

5. **Update Next.js Config**
   - Remove Unsplash from `remotePatterns` if no longer used
   - Keep configuration for any other external image sources

## Categories

### Current Categories
1. **hair** - Hair Styling services
2. **nails** - Nail care and manicure services
3. **makeup** - Makeup artistry
4. **spa** - Spa treatments and massages
5. **interior** - Salon interior and ambiance

### Adding New Categories

1. **Create Directory**
```bash
mkdir public/gallery/new-category
```

2. **Update TypeScript Type**
In `lib/gallery-data.ts`:
```typescript
export type GalleryCategory = 'all' | 'hair' | 'nails' | 'makeup' | 'spa' | 'interior' | 'new-category';
```

3. **Add Category Label**
```typescript
export const categoryLabels: Record<GalleryCategory, string> = {
  // ... existing categories
  'new-category': 'Display Name',
};
```

4. **Add Images**
- Place images in new category folder
- Update `galleryImages` array with new entries

## Best Practices

### Photography Tips
- Use professional camera or high-quality phone camera
- Natural lighting preferred (or proper studio lighting)
- Clean, uncluttered backgrounds
- Focus on the work (hair, nails, makeup, etc.)
- Get multiple angles
- Show before/after when appropriate
- Ensure client consent for publication

### Content Guidelines
- Showcase variety of styles and services
- Include diverse clients (with permission)
- Update gallery regularly with fresh content
- Remove outdated or low-quality images
- Maintain 4-8 images per category minimum
- Balance portfolio across categories

### Legal Considerations
- ✅ Get written client consent for all images
- ✅ Store consent forms securely
- ✅ Respect client privacy
- ✅ Blur faces if no consent
- ❌ Don't use stock photos claiming they're your work
- ❌ Don't use images without permission

## Performance Monitoring

### Check After Adding Images
- Run Lighthouse audit
- Verify LCP < 2.5s
- Check total page weight
- Test on slow 3G network
- Verify lazy loading works

### If Performance Degrades
- Further compress images
- Reduce number of images per page
- Implement pagination or infinite scroll
- Consider CDN for image delivery
- Use blur placeholders

## Maintenance Schedule

### Monthly
- [ ] Review and remove outdated images
- [ ] Add new portfolio pieces
- [ ] Check for broken images
- [ ] Verify alt text quality

### Quarterly
- [ ] Audit total gallery size
- [ ] Re-optimize images if needed
- [ ] Update popular images
- [ ] Review client consent forms

### Annually
- [ ] Complete gallery refresh
- [ ] Professional photoshoot
- [ ] Category reorganization if needed
- [ ] Update branding if changed

## Troubleshooting

### Images Not Displaying
1. Check file path is correct
2. Verify file exists in public folder
3. Check Next.js Image configuration
4. Clear browser cache
5. Check browser console for errors

### Images Loading Slowly
1. Check file sizes (should be < 200KB)
2. Verify WebP format being used
3. Check lazy loading is enabled
4. Test network speed
5. Consider CDN

### Layout Issues
1. Verify width/height values are correct
2. Check aspect ratios
3. Test on different screen sizes
4. Verify masonry grid classes
5. Check for CSS conflicts

## Future Enhancements

### Planned Features
- [ ] Admin interface for uploads
- [ ] Instagram integration for live feed
- [ ] Client-submitted photos with approval workflow
- [ ] Before/after slider component
- [ ] Video support for transformation timelapses
- [ ] Cloudflare Images or similar CDN integration
- [ ] Automatic image optimization pipeline
- [ ] Search functionality
- [ ] Tags and advanced filtering

---

**Last Updated:** October 14, 2025  
**Maintained By:** Development Team  
**Questions?** Check `openspec/changes/add-gallery-page/` for implementation details
