import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Heart className="w-6 h-6 text-pink-400 fill-current animate-pulse" />
          <span className="font-serif text-2xl font-bold">Made with Love</span>
          <Heart className="w-6 h-6 text-pink-400 fill-current animate-pulse" />
        </div>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          This website was created as a digital love letter, a small token of the infinite love 
          I have for you. You deserve all the beautiful things in this world and more.
        </p>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-500">
            © 2024 • Created with all my love for the most amazing woman in the world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;