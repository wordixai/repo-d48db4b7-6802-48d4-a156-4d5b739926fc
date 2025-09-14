import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { ProductDemoProps } from '../schemas/CompositionSchemas';
import { HeroSection } from '../scenes/HeroSection';
import { FeatureShowcaseSection } from '../scenes/FeatureShowcaseSection';
import { TerminalSection } from '../scenes/TerminalSection';
import { ClosingSection } from '../scenes/ClosingSection';
import { ParticleBackground } from '../components/ParticleBackground';

export const ProductDemoComposition: React.FC<ProductDemoProps> = ({
  title,
  subtitle,
  features,
  brandColor,
  logoUrl
}) => {
  const { durationInFrames } = useVideoConfig();
  
  const heroEnd = Math.floor(durationInFrames * 0.2);
  const featuresStart = heroEnd;
  const featuresEnd = Math.floor(durationInFrames * 0.6);
  const terminalStart = featuresEnd;
  const terminalEnd = Math.floor(durationInFrames * 0.85);
  const closingStart = terminalEnd;

  return (
    <AbsoluteFill className="bg-gray-900 relative overflow-hidden">
      <ParticleBackground brandColor={brandColor} />
      
      <Sequence from={0} durationInFrames={heroEnd}>
        <HeroSection 
          title={title}
          subtitle={subtitle}
          brandColor={brandColor}
          logoUrl={logoUrl}
        />
      </Sequence>
      
      <Sequence from={featuresStart} durationInFrames={featuresEnd - featuresStart}>
        <FeatureShowcaseSection 
          features={features}
          brandColor={brandColor}
        />
      </Sequence>
      
      <Sequence from={terminalStart} durationInFrames={terminalEnd - terminalStart}>
        <TerminalSection brandColor={brandColor} />
      </Sequence>
      
      <Sequence from={closingStart} durationInFrames={durationInFrames - closingStart}>
        <ClosingSection 
          title={title}
          brandColor={brandColor}
          logoUrl={logoUrl}
        />
      </Sequence>
    </AbsoluteFill>
  );
};