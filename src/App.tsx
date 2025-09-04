import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Camera, MessageCircleHeart as MessageHeart, Star, Sparkles, ArrowDown } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import Reasons from './components/Reasons';
import MessageSection from './components/MessageSection';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <FloatingHearts />
      <Header />
      <main>
        <Hero />
        <PhotoGallery />
        <Timeline />
        <Reasons />
        <MessageSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;