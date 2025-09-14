import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { PresentationProps } from '../schemas/CompositionSchemas';
import { DataVisualizationSection } from '../scenes/DataVisualizationSection';
import { HeroSection } from '../scenes/HeroSection';
import { ParticleBackground } from '../components/ParticleBackground';

export const DataVisualizationComposition: React.FC<PresentationProps> = ({
  title,
  subtitle,
  data,
  brandColor,
  logoUrl
}) => {
  const { durationInFrames } = useVideoConfig();
  
  const heroEnd = Math.floor(durationInFrames * 0.25);
  const dataStart = heroEnd;

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
      
      <Sequence from={dataStart} durationInFrames={durationInFrames - dataStart}>
        <DataVisualizationSection 
          data={data}
          brandColor={brandColor}
        />
      </Sequence>
    </AbsoluteFill>
  );
};