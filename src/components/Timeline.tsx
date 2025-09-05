import React from 'react';
import { Calendar, Heart, Star, Gift } from 'lucide-react';

const Timeline: React.FC = () => {
  const milestones = [
    {
      id: 1,
      date: 'First Meeting',
      title: 'The Day Everything Changed',
      description: 'The moment I saw you, with those two badges on your tie, thats the moment I though we will have a looong story.',
      icon: Star,
      color: 'bg-pink-500'
    },
    {
      id: 2,
      date: 'First Talks',
      title: 'School & Conversations',
      description: 'When you came to my class.Hours felt like minutes as when talked about everything and nothing. I knew I wanted to spend forever learning about you.',
      icon: Heart,
      color: 'bg-purple-500'
    },
    {
      id: 3,
      date: 'Becoming Official',
      title: 'We Said Yes',
      description: 'The happiest day of my life when you agreed to be mine. My heart has been full ever since.',
      icon: Gift,
      color: 'bg-pink-600'
    },
    {
      id: 4,
      date: 'Present Day',
      title: 'Still Falling Deeper',
      description: 'Every day I discover new reasons to love you. Our story is just beginning, and I can\'t wait for all the chapters ahead.',
      icon: Calendar,
      color: 'bg-purple-600'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-6 py-3 rounded-full mb-6">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-medium">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            The Story of Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From our first hello to this very moment, every step of our journey has been magical.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className="relative mb-12 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-8">
                <div className={`flex-shrink-0 w-16 h-16 ${milestone.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow ml-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2 md:mb-0">
                        {milestone.title}
                      </h3>
                      <span className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                        {milestone.date}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Connecting Line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-pink-300 to-purple-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;