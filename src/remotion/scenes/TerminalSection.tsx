import React from 'react';
import { AbsoluteFill } from 'remotion';
import { TerminalAnimation } from '../components/TerminalAnimation';

interface TerminalSectionProps {
  brandColor: string;
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({
  brandColor
}) => {
  return (
    <AbsoluteFill className="flex items-center justify-center p-16">
      <div className="w-full max-w-4xl">
        <TerminalAnimation brandColor={brandColor} />
      </div>
    </AbsoluteFill>
  );
};