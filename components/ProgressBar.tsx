import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.min(100, Math.max(0, ((current) / total) * 100));

  return (
    <div className="w-full max-w-xl mx-auto mb-8 relative">
      <div className="flex justify-between text-sm font-bold text-gray-400 mb-2 px-1">
        <span>Start 🏁</span>
        <span className="text-xmas-green">Part {current + 1} / {total}</span>
        <span>Finish 🎁</span>
      </div>
      
      {/* Candy Cane Striped Background for bar container */}
      <div className="h-5 bg-gray-200 rounded-full overflow-visible border border-gray-300 relative">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-xmas-green rounded-full transition-all duration-500 ease-out flex items-center relative"
          style={{ width: `${percentage}%` }}
        >
          {/* Moving Santa */}
          <div className="absolute right-[-16px] top-[-14px] text-3xl filter drop-shadow-md transform transition-transform hover:scale-110 cursor-default" style={{ zIndex: 10 }}>
            🎅
          </div>
        </div>
      </div>
    </div>
  );
};