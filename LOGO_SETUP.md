# Logo Setup Guide

## Logo Placement

To add your actual logos to the website:

1. **Create a `public` folder** in the root directory (if it doesn't exist)
2. **Add your logo files**:
   - `public/logo-landscape.png` - Landscape version (recommended: 200x50px or similar aspect ratio)
   - `public/logo-square.png` - Square version (recommended: 50x50px or similar)

3. **Update the Logo component** (`components/Logo.tsx`):
   - Uncomment the Image import and usage code
   - Comment out or remove the placeholder div with the "S" letter

## Current Implementation

The website currently uses a placeholder logo (gradient square with "S" letter). The Logo component is set up to easily switch to your actual logo images once you add them to the `public` folder.

## Logo Variants

- **Landscape**: Used in header and footer (with text)
- **Square**: Can be used in compact spaces (without text)

Both variants are ready to use - just add your logo files and uncomment the Image code in `components/Logo.tsx`.

