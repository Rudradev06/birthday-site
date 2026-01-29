# 🎨 Quick Customization Guide

## 1. Change the Name

**File**: `app/components/HeroSection.tsx`
**Line**: ~45
```typescript
<motion.h2 className="text-4xl md:text-6xl font-serif text-gradient mb-8">
  Beautiful Soul! 🎉  // ← Change this name
</motion.h2>
```

## 2. Update the Birthday Message

**File**: `app/components/MessageSection.tsx`
**Lines**: ~8-30
```typescript
const message = [
  "Dear Beautiful Soul,",  // ← Change the greeting
  "",
  "Another year around the sun...",  // ← Customize the message
  // ... edit the entire message array
];
```

## 3. Add Real Photos

**File**: `app/components/MemoryGallery.tsx`
**Lines**: ~7-32

1. Add photos to the `public` folder
2. Update the memories array:
```typescript
const memories = [
  {
    id: 1,
    image: '/your-actual-photo.jpg',  // ← Your photo path
    caption: 'Your memory caption',   // ← Your caption
    alt: 'Photo description'
  },
  // ... add more photos
];
```

## 4. Change Colors

**File**: `app/globals.css`
**Lines**: ~4-8
```css
:root {
  --background: #fef7f7;  // ← Background color
  --foreground: #2d1b69;  // ← Text color
}
```

## 5. Add Background Music

**File**: `app/components/MusicToggle.tsx`
**Line**: ~17
```typescript
// audio.src = '/birthday-music.mp3';  // ← Uncomment and add your music file
```

## 6. Customize Final Message

**File**: `app/components/FinalSurprise.tsx`
**Lines**: ~85-92
```typescript
<p className="text-lg text-purple-800 leading-relaxed">
  "This site was made just for you — and only exists today 💖"  // ← Change this
</p>
```

## 7. Adjust Animation Timing

Each component has `transition` props you can modify:
```typescript
transition={{ duration: 1, delay: 0.5 }}  // ← Adjust timing
```

## Quick Setup Checklist

- [ ] Change the name in HeroSection
- [ ] Update the birthday message
- [ ] Add real photos to memory gallery
- [ ] Add background music (optional)
- [ ] Test on mobile device
- [ ] Deploy to share!

## Need Help?

Check the main README.md for detailed instructions and technical details.