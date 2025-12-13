import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.min(100, Math.max(0, ((current) / total) * 100));

  return (
    <div className="w-full max-w-xl mx-auto mb-6">
      <div className="flex justify-between text-sm font-bold text-gray-400 mb-1">
        <span>Start</span>
        <span>Question {current + 1} of {total}</span>
        <span>Finish</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
        <div 
          className="h-full bg-brand-green transition-all duration-500 ease-out flex items-center justify-end"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 5 && <div className="w-2 h-2 bg-white rounded-full mr-1 opacity-50" />}
        </div>
      </div>
    </div>
  );
};