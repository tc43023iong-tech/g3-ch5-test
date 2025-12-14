import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'danger';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  className = '', 
  disabled = false 
}) => {
  const baseStyles = "px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-200 transform active:scale-95 shadow-md flex items-center justify-center gap-2 relative overflow-hidden";
  
  const variants = {
    // Christmas Red Primary Button
    primary: "bg-xmas-red hover:bg-red-500 text-white border-b-4 border-red-700 active:border-b-0 active:mt-1",
    secondary: "bg-white hover:bg-gray-50 text-gray-700 border-b-4 border-gray-200 active:border-b-0 active:mt-1",
    outline: "bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    success: "bg-xmas-green hover:bg-green-400 text-white border-b-4 border-green-700 active:border-b-0 active:mt-1",
    danger: "bg-brand-pink hover:bg-pink-400 text-white border-b-4 border-pink-600 active:border-b-0 active:mt-1",
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {/* Subtle snow shine effect on primary */}
      {variant === 'primary' && (
        <div className="absolute top-0 right-0 p-1 opacity-20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L14 7L19 7L15 11L17 16L12 13L7 16L9 11L5 7L10 7L12 2Z"/></svg>
        </div>
      )}
      {children}
    </button>
  );
};