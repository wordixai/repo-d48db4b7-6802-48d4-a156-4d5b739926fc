import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { CodeBlock } from '../components/CodeBlock';
import { AnimatedText } from '../components/AnimatedText';

interface CodeRevealSectionProps {
  codeSnippets: Array<{
    code: string;
    language: string;
    highlightLines?: number[];
  }>;
  brandColor: string;
  showTitle?: boolean;
  title?: string;
}

export const CodeRevealSection: React.FC<CodeRevealSectionProps> = ({
  codeSnippets,
  brandColor,
  showTitle,
  title
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill className="flex items-center justify-center p-16">
      <div className="w-full max-w-5xl">
        {showTitle && title && (
          <div className="mb-12 text-center">
            <AnimatedText
              text={title}
              className="text-4xl font-bold text-white"
              brandColor={brandColor}
              delay={0}
            />
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-8">
          {codeSnippets.map((snippet, index) => (
            <CodeBlock
              key={index}
              code={snippet.code}
              language={snippet.language}
              highlightLines={snippet.highlightLines}
              brandColor={brandColor}
              delay={index * 60}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};