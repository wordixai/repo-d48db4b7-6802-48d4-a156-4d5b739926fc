import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { LogoAnimation } from '../components/LogoAnimation';
import { AnimatedText } from '../components/AnimatedText';

interface ClosingSectionProps {
  title: string;
  brandColor: string;
  logoUrl?: string;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  title,
  brandColor,
  logoUrl
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoProgress = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const textProgress = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill className="flex items-center justify-center relative">
      <div className="text-center z-10">
        {logoUrl && (
          <div 
            className="mb-8"
            style={{ opacity: logoProgress }}
          >
            <LogoAnimation logoUrl={logoUrl} brandColor={brandColor} />
          </div>
        )}
        
        <div style={{ opacity: textProgress }}>
          <AnimatedText
            text="Thank you for watching!"
            className="text-4xl font-bold text-white mb-4"
            brandColor={brandColor}
            delay={20}
          />
          <AnimatedText
            text={title}
            className="text-2xl text-gray-300"
            brandColor={brandColor}
            delay={40}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};