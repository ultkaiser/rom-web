import React, { useState } from 'react';
import { Heart, Smile, Sun, Music, Sparkles, Star } from 'lucide-react';

const Reasons: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const reasons = [
    {
      id: 1,
      icon: Smile,
      title: 'Your Beautiful Smile',
      description: 'It lights up every room and makes even the darkest days bright. Your smile is my favorite thing in the world.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 2,
      icon: Heart,
      title: 'Your Kind Heart',
      description: 'You care for everyone around you with such genuine warmth. Your compassion inspires me every day.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 3,
      icon: Sun,
      title: 'Your Positive Energy',
      description: 'You bring sunshine wherever you go. Your optimism and joy are contagious and make life so much better.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 4,
      icon: Music,
      title: 'Your Laugh',
      description: 'The most beautiful sound in the universe. I would do anything just to hear you laugh every single day.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 5,
      icon: Star,
      title: 'Your Intelligence',
      description: 'You challenge me to think deeper and see the world from new perspectives. Conversations with you are pure magic.',
      color: 'from-pink-400 to-purple-400'
    },
    {
      id: 6,
      icon: Sparkles,
      title: 'Simply Being You',
      description: 'You don\'t need to try to be perfect - you already are. Your authentic self is everything I could ever want.',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section id="reasons" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 px-6 py-3 rounded-full mb-6">
            <Heart className="w-5 h-5 text-pink-600 fill-current animate-pulse" />
            <span className="text-pink-600 font-medium">From My Heart</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Why I Love You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            There are countless reasons, but here are just a few that make my heart skip a beat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className="relative group animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(reason.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-pink-100 h-full">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 mx-auto transition-transform duration-300 ${hoveredCard === reason.id ? 'scale-110 rotate-12' : ''}`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-4 text-center">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {reason.description}
                </p>
                
                {/* Floating hearts on hover */}
                {hoveredCard === reason.id && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    <div className="absolute top-2 right-2 animate-float">
                      <Heart className="w-4 h-4 text-pink-400 fill-current" />
                    </div>
                    <div className="absolute bottom-2 left-2 animate-float-delayed">
                      <Heart className="w-3 h-3 text-purple-400 fill-current" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;