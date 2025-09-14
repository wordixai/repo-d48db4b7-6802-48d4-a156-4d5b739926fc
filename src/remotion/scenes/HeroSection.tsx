import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { AnimatedText } from '../components/AnimatedText';
import { LogoAnimation } from '../components/LogoAnimation';
import { GeometricShapes } from '../components/GeometricShapes';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  brandColor: string;
  logoUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  brandColor,
  logoUrl
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const logoOpacity = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const titleDelay = 20;
  const titleProgress = spring({
    frame: frame - titleDelay,
    fps,
    config: { damping: 200 },
  });

  const subtitleDelay = 40;
  const subtitleProgress = spring({
    frame: frame - subtitleDelay,
    fps,
    config: { damping: 200 },
  });

  const scaleEffect = interpolate(
    frame,
    [0, durationInFrames],
    [1, 1.1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill className="flex items-center justify-center relative">
      <GeometricShapes brandColor={brandColor} />
      
      <div 
        className="text-center z-10 px-8"
        style={{ transform: `scale(${scaleEffect})` }}
      >
        {logoUrl && (
          <div 
            className="mb-8"
            style={{ opacity: logoOpacity }}
          >
            <LogoAnimation logoUrl={logoUrl} brandColor={brandColor} />
          </div>
        )}
        
        <div style={{ opacity: titleProgress }}>
          <AnimatedText
            text={title}
            className="text-6xl font-bold text-white mb-6"
            brandColor={brandColor}
            delay={titleDelay}
          />
        </div>
        
        {subtitle && (
          <div style={{ opacity: subtitleProgress }}>
            <AnimatedText
              text={subtitle}
              className="text-2xl text-gray-300"
              brandColor={brandColor}
              delay={subtitleDelay}
            />
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};