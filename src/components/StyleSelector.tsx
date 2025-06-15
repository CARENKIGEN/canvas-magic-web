
import React from 'react';
import { Check } from 'lucide-react';

interface StyleSelectorProps {
  onStyleSelect: (styleId: string) => void;
  selectedStyle: string | null;
}

const styles = [
  {
    id: 'starry-night',
    name: 'Starry Night',
    artist: 'Van Gogh',
    thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=150&h=150&fit=crop&crop=center',
    gradient: 'from-blue-600 to-yellow-500'
  },
  {
    id: 'scream',
    name: 'The Scream',
    artist: 'Munch',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'great-wave',
    name: 'Great Wave',
    artist: 'Hokusai',
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=150&h=150&fit=crop&crop=center',
    gradient: 'from-blue-500 to-teal-600'
  },
  {
    id: 'picasso',
    name: 'Cubist Style',
    artist: 'Picasso',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'monet',
    name: 'Impressionist',
    artist: 'Monet',
    thumbnail: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&h=150&fit=crop&crop=center',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    id: 'kandinsky',
    name: 'Abstract',
    artist: 'Kandinsky',
    thumbnail: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=150&h=150&fit=crop&crop=center',
    gradient: 'from-red-500 to-yellow-500'
  }
];

export const StyleSelector: React.FC<StyleSelectorProps> = ({ onStyleSelect, selectedStyle }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4">Choose Art Style</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {styles.map((style) => (
          <div
            key={style.id}
            className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
              selectedStyle === style.id 
                ? 'ring-2 ring-blue-400 shadow-lg shadow-blue-500/25' 
                : 'hover:shadow-lg'
            }`}
            onClick={() => onStyleSelect(style.id)}
          >
            <div className={`bg-gradient-to-br ${style.gradient} p-4 text-center relative`}>
              <div className="relative z-10">
                <div className="text-white font-bold text-sm mb-1">{style.name}</div>
                <div className="text-white/80 text-xs">{style.artist}</div>
              </div>
              
              {selectedStyle === style.id && (
                <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
