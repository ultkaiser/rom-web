import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Heart, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const loveTexts = [
    "My Beautiful Girlfriend",
    "My Heart's Home",
    "My Everything",
    "My Forever Love"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loveTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Multiple Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-pink-500/20"></div>
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-transparent to-purple-500/20 animate-pulse"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <Star className="w-8 h-8 text-yellow-200 fill-current" />
        </div>
        <div className="absolute top-32 right-16 animate-float-delayed opacity-40">
          <Sparkles className="w-12 h-12 text-pink-200" />
        </div>
        <div className="absolute top-60 left-1/4 animate-float opacity-25">
          <Heart className="w-6 h-6 text-white fill-current" />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-float-delayed opacity-35">
          <Star className="w-10 h-10 text-purple-200 fill-current" />
        </div>
        <div className="absolute bottom-60 left-16 animate-float opacity-30">
          <Sparkles className="w-7 h-7 text-pink-300" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-pink-300"></div>
              <Heart className="w-8 h-8 text-pink-200 fill-current animate-pulse" />
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-pink-300"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            To My
            <span className="block relative">
              <span 
                key={currentText}
                className="inline-block gradient-text animate-fade-in-up bg-gradient-to-r from-pink-200 to-white bg-clip-text text-transparent"
              >
                {loveTexts[currentText]}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light leading-relaxed">
              You are the poetry my heart writes
            </p>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              This digital love letter is my way of showing you just how much you mean to me. 
              Every pixel, every word, every moment captured here is filled with my love for you.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button
              onClick={scrollToGallery}
              className="group relative overflow-hidden bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-full font-medium transition-all duration-500 hover:bg-white/30 hover:scale-110 hover:shadow-2xl border border-white/30"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span className="text-lg">Explore Our Journey</span>
                <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-5 rounded-full font-medium transition-all duration-500 hover:from-pink-600 hover:to-purple-600 hover:scale-110 hover:shadow-2xl"
            >
              <span className="flex items-center space-x-2">
                <Heart className="w-5 h-5 fill-current group-hover:animate-pulse" />
                <span className="text-lg">Read My Message</span>
              </span>
            </button>
          </div>

          {/* Decorative Quote */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <div className="text-6xl text-pink-200/50 font-serif leading-none mb-2">"</div>
              <p className="text-white/90 text-lg italic font-light leading-relaxed -mt-4">
                In a world full of temporary things, you are a perpetual feeling of home.
              </p>
              <div className="flex justify-end">
                <div className="text-6xl text-pink-200/50 font-serif leading-none -mt-2">"</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-up opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;