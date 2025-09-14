import React from 'react';
import { AbsoluteFill } from 'remotion';
import { AnimatedChart } from '../components/AnimatedChart';

interface DataVisualizationSectionProps {
  data: Array<{
    name: string;
    users: number;
    revenue: number;
  }>;
  brandColor: string;
}

export const DataVisualizationSection: React.FC<DataVisualizationSectionProps> = ({
  data,
  brandColor
}) => {
  return (
    <AbsoluteFill className="flex items-center justify-center p-16">
      <div className="w-full max-w-6xl">
        <AnimatedChart data={data} brandColor={brandColor} />
      </div>
    </AbsoluteFill>
  );
};