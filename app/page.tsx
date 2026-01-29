'use client';

import { HeroSection } from './components/HeroSection';
import { MemoryGallery } from './components/MemoryGallery';
import { MessageSection } from './components/MessageSection';
import { FinalSurprise } from './components/FinalSurprise';
import { MusicToggle } from './components/MusicToggle';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <MusicToggle />
      <HeroSection />
      <MemoryGallery />
      <MessageSection />
      <FinalSurprise />
    </main>
  );
}