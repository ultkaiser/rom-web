import React, { useState } from 'react';
import { Camera, Heart, X } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const photos = [
    {
      id: 1,
      url: '/photos/photo1.jpg',
      caption: 'Our first scary adventure together'
    },
    {
      id: 2,
      url: '/photos/photo2.jpg',
      caption: 'The way we see each other is sooo much loveee'
    },
    {
      id: 3,
      url: '/photos/photo3.jpg',
      caption: 'Cute ghibli piccc'
    },
    {
      id: 4,
      url: '/photos/photo4.jpg',
      caption: 'Dancing under the stars'
    },
    {
      id: 5,
      url: '/photos/photo5.jpg',
      caption: 'The most colorful day'
    },
    {
      id: 6,
      url: '/photos/photo6.jpg',
      caption: 'The last pic(not really)'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 px-6 py-3 rounded-full mb-6">
            <Camera className="w-5 h-5 text-pink-600" />
            <span className="text-pink-600 font-medium">Our Memories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Picture Perfect Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every photo tells a story of our love, laughter, and the beautiful journey we're on together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{photo.caption}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-6 h-6 text-white fill-current animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={photos[selectedPhoto].url}
              alt={photos[selectedPhoto].caption}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg">
              {photos[selectedPhoto].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;