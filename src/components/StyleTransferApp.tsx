
import React, { useState } from 'react';
import { Header } from './Header';
import { ImageUpload } from './ImageUpload';
import { StyleSelector } from './StyleSelector';
import { ProcessingArea } from './ProcessingArea';
import { ResultsDisplay } from './ResultsDisplay';

export const StyleTransferApp = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setProcessedImage(null);
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleProcess = async () => {
    if (!uploadedImage || !selectedStyle) return;
    
    setIsProcessing(true);
    
    // Simulate processing - in real implementation, this would call TensorFlow.js
    setTimeout(() => {
      setProcessedImage(uploadedImage); // Placeholder - would be actual processed image
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-white mb-4">
              Neural Style Transfer
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Transform your photos into stunning artworks using the power of AI. 
              Apply the styles of famous artists to your images in seconds.
            </p>
          </div>

          {/* Main Application */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Input */}
            <div className="space-y-6">
              <ImageUpload onImageUpload={handleImageUpload} />
              {uploadedImage && (
                <StyleSelector 
                  onStyleSelect={handleStyleSelect}
                  selectedStyle={selectedStyle}
                />
              )}
            </div>

            {/* Right Column - Processing & Results */}
            <div className="space-y-6">
              {uploadedImage && selectedStyle && (
                <ProcessingArea
                  uploadedImage={uploadedImage}
                  selectedStyle={selectedStyle}
                  isProcessing={isProcessing}
                  onProcess={handleProcess}
                />
              )}
              
              {processedImage && (
                <ResultsDisplay
                  originalImage={uploadedImage}
                  processedImage={processedImage}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
