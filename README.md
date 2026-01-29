# 🎉 Magical 3D Birthday Website

A stunning, interactive 3D birthday website built with Next.js, React Three Fiber, and Framer Motion. This site creates a magical, emotional experience like opening a virtual gift.

## ✨ Features

- **3D Hero Section**: Floating elements with parallax mouse movement
- **Memory Gallery**: Interactive photo cards with hover effects
- **Heartfelt Message**: Animated typewriter-style message
- **Interactive Cake**: 3D birthday cake with clickable candle
- **Confetti Animation**: Celebration effects when making a wish
- **Background Music**: Optional ambient music with toggle
- **Responsive Design**: Mobile-first, works on all devices
- **Smooth Animations**: Framer Motion powered transitions

## 🎨 Design

- **Aesthetic**: Soft luxury + dreamy
- **Colors**: Pastel pink, lavender, cream, subtle gold
- **Typography**: Playfair Display (headings) + Inter (body)
- **Style**: Glassmorphism with soft shadows and glows

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── components/
│   ├── 3D/
│   │   ├── BirthdayCake.tsx      # Interactive 3D cake
│   │   └── FloatingElements.tsx   # Hero section 3D elements
│   ├── Confetti.tsx              # Celebration confetti
│   ├── FinalSurprise.tsx         # Wish section with cake
│   ├── HeroSection.tsx           # Main landing section
│   ├── MemoryGallery.tsx         # Photo gallery
│   ├── MessageSection.tsx        # Birthday message
│   └── MusicToggle.tsx           # Background music control
├── globals.css                   # Global styles and animations
├── layout.tsx                    # Root layout with fonts
└── page.tsx                      # Main page component
```

## 🎵 Adding Music

To add background music:

1. Add your music file to the `public` folder (e.g., `birthday-music.mp3`)
2. Update the `MusicToggle.tsx` component:
   ```typescript
   audio.src = '/birthday-music.mp3';
   ```

## 📸 Adding Photos

To add real photos to the memory gallery:

1. Add your photos to the `public` folder
2. Update the `memories` array in `MemoryGallery.tsx`:
   ```typescript
   const memories = [
     {
       id: 1,
       image: '/your-photo-1.jpg',
       caption: 'Your memory caption',
       alt: 'Photo description'
     },
     // ... more photos
   ];
   ```

## 🎯 Customization

### Personalize the Message

Edit `MessageSection.tsx` to customize the birthday message:

```typescript
const message = [
  "Dear [Name],",
  "Your personalized message here...",
  // ... rest of message
];
```

### Change Colors

Update the color scheme in `globals.css`:

```css
:root {
  --background: #your-color;
  --foreground: #your-color;
}
```

### Modify Animations

All animations use Framer Motion. Customize timing and effects in each component.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **React Three Fiber** - 3D graphics with Three.js
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS v4** - Utility-first styling
- **TypeScript** - Type safety

## 📱 Mobile Optimization

- Touch-friendly interactions
- Responsive design (mobile-first)
- Optimized 3D performance for mobile devices
- Smooth scrolling on iOS and Android

## 🎁 Special Features

- **Parallax Effects**: Mouse movement creates depth
- **Glassmorphism**: Modern glass-like UI elements
- **Scroll Animations**: Elements animate as you scroll
- **Interactive Elements**: Clickable cake, hover effects
- **Performance Optimized**: Lightweight 3D elements

## 🌟 Deployment

Deploy easily on Vercel:

```bash
npm run build
```

Or deploy to any hosting platform that supports Next.js.

## 💖 Made with Love

This website was created as a special birthday surprise. Every animation, color, and interaction was carefully crafted to create a memorable experience.

---

*"This site was made just for you — and only exists today 💖"*