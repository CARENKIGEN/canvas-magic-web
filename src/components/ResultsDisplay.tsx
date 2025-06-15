
import React, { useState } from 'react';
import { Download, Eye, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ResultsDisplayProps {
  originalImage: string | null;
  processedImage: string | null;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  originalImage,
  processedImage
}) => {
  const [activeTab, setActiveTab] = useState('result');

  const downloadImage = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'styled-image.jpg';
      link.click();
    }
  };

  if (!processedImage) return null;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <Eye className="w-6 h-6 mr-2" />
          Results
        </h2>
        
        <Button
          onClick={downloadImage}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/20">
          <TabsTrigger value="result" className="text-white">Styled Image</TabsTrigger>
          <TabsTrigger value="comparison" className="text-white">Before/After</TabsTrigger>
        </TabsList>
        
        <TabsContent value="result" className="mt-4">
          <div className="relative">
            <img
              src={processedImage}
              alt="Styled result"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-white text-sm font-medium">AI Style Transfer Applied</span>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="comparison" className="mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-white font-medium text-center">Original</h3>
              <img
                src={originalImage!}
                alt="Original"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-medium text-center">Styled</h3>
              <img
                src={processedImage}
                alt="Styled"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
        <p className="text-green-100 text-sm text-center">
          🎨 Style transfer complete! Your image has been transformed with AI-powered artistic styling.
        </p>
      </div>
    </div>
  );
};
