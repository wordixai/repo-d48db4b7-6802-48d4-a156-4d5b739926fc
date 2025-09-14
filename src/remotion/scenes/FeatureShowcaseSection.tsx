import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { Check } from 'lucide-react';

interface FeatureShowcaseSectionProps {
  features: string[];
  brandColor: string;
}

export const FeatureShowcaseSection: React.FC<FeatureShowcaseSectionProps> = ({
  features,
  brandColor
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="flex items-center justify-center p-16">
      <div className="w-full max-w-4xl">
        <h2 className="text-5xl font-bold text-white text-center mb-16">
          Powerful Features
        </h2>
        
        <div className="grid grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const delay = index * 30;
            const progress = spring({
              frame: frame - delay,
              fps,
              config: { damping: 200 },
            });

            return (
              <div
                key={index}
                className="flex items-center space-x-4 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                style={{
                  opacity: progress,
                  transform: `translateY(${20 * (1 - progress)}px)`,
                }}
              >
                <div 
                  className="p-2 rounded-full"
                  style={{ backgroundColor: brandColor }}
                >
                  <Check size={24} className="text-white" />
                </div>
                <span className="text-xl text-white font-medium">
                  {feature}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};