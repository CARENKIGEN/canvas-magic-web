
import React from 'react';
import { Palette, Sparkles } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">ArtifyAI</h1>
              <p className="text-sm text-blue-200">Neural Style Transfer</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-yellow-300">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">AI-Powered</span>
          </div>
        </div>
      </div>
    </header>
  );
};
