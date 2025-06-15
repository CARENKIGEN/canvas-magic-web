
import React from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface ProcessingAreaProps {
  uploadedImage: string;
  selectedStyle: string;
  isProcessing: boolean;
  onProcess: () => void;
}

export const ProcessingArea: React.FC<ProcessingAreaProps> = ({
  uploadedImage,
  selectedStyle,
  isProcessing,
  onProcess
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
        <Wand2 className="w-6 h-6 mr-2" />
        Process Image
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Original Image</span>
          <span>✓ Ready</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Style Selected</span>
          <span>✓ Ready</span>
        </div>
        
        {isProcessing && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Processing...</span>
              <span>⏳ In Progress</span>
            </div>
            <Progress value={66} className="h-2" />
          </div>
        )}
        
        <Button
          onClick={onProcess}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 text-lg"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5 mr-2" />
              Apply Style Transfer
            </>
          )}
        </Button>
        
        {isProcessing && (
          <p className="text-sm text-white/60 text-center">
            This may take a few seconds. The AI is analyzing your image and applying the artistic style.
          </p>
        )}
      </div>
    </div>
  );
};
