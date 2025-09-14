import React from 'react';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { TutorialProps } from '../schemas/CompositionSchemas';
import { CodeRevealSection } from '../scenes/CodeRevealSection';
import { ParticleBackground } from '../components/ParticleBackground';

export const CodeRevealComposition: React.FC<TutorialProps> = ({
  title,
  codeSnippets,
  brandColor
}) => {
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-gray-900 relative overflow-hidden">
      <ParticleBackground brandColor={brandColor} />
      
      <Sequence from={0} durationInFrames={durationInFrames}>
        <CodeRevealSection 
          codeSnippets={codeSnippets}
          brandColor={brandColor}
          showTitle={true}
          title={title}
        />
      </Sequence>
    </AbsoluteFill>
  );
};