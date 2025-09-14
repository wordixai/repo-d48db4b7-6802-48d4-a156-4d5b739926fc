import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { TutorialProps } from '../schemas/CompositionSchemas';
import { HeroSection } from '../scenes/HeroSection';
import { CodeRevealSection } from '../scenes/CodeRevealSection';
import { ClosingSection } from '../scenes/ClosingSection';
import { ParticleBackground } from '../components/ParticleBackground';

export const TechVideoComposition: React.FC<TutorialProps> = ({
  title,
  subtitle,
  codeSnippets,
  brandColor,
  logoUrl
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  
  const heroEnd = Math.floor(durationInFrames * 0.2);
  const codeStart = heroEnd;
  const codeEnd = Math.floor(durationInFrames * 0.8);
  const closingStart = codeEnd;

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
      
      <Sequence from={codeStart} durationInFrames={codeEnd - codeStart}>
        <CodeRevealSection 
          codeSnippets={codeSnippets}
          brandColor={brandColor}
        />
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