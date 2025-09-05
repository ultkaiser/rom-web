import React, { useState } from 'react';
import { MessageCircleHeart as MessageHeart, Heart } from 'lucide-react';

const MessageSection: React.FC = () => {
  return (
    <section id="message" className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Heart className="w-8 h-8 text-white fill-current" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Heart className="w-6 h-6 text-white fill-current" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float">
          <Heart className="w-10 h-10 text-white fill-current" />
        </div>
        <div className="absolute bottom-40 right-10 animate-float-delayed">
          <Heart className="w-4 h-4 text-white fill-current" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <MessageHeart className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Personal Message</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            A Message From My Heart
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                My dearest love, words cannot fully capture how you make me feel, but I want you to know 
                that you are my everything. You've brought so much joy, laughter, and meaning into my life. 
                Every day with you is a gift, and I promise to love you more with each passing moment. 
                You are not just my girlfriend - you are my best friend, my inspiration, and my heart's home.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="flex items-center space-x-2 text-pink-200">
                  <Heart className="w-6 h-6 fill-current animate-pulse" />
                  <span className="font-serif text-lg">Forever yours</span>
                  <Heart className="w-6 h-6 fill-current animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;