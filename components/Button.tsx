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
  const baseStyles = "px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-200 transform active:scale-95 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-yellow hover:bg-yellow-300 text-yellow-900 border-b-4 border-yellow-500 active:border-b-0 active:mt-1",
    secondary: "bg-white hover:bg-gray-50 text-gray-700 border-b-4 border-gray-200 active:border-b-0 active:mt-1",
    outline: "bg-transparent border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
    success: "bg-brand-green hover:bg-green-400 text-green-900 border-b-4 border-green-600 active:border-b-0 active:mt-1",
    danger: "bg-brand-pink hover:bg-pink-400 text-white border-b-4 border-pink-600 active:border-b-0 active:mt-1",
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};