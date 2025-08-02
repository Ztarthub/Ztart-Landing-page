import React from 'react';

interface ZtartLogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

const ZtartLogo: React.FC<ZtartLogoProps> = ({ 
  className = '', 
  width = 40, 
  height = 40, 
  showText = true 
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          {/* Gradients for the logo elements */}
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        
        {/* Main circular elements creating the swirl pattern */}
        <path
          d="M100 20 C140 20, 180 60, 180 100 C180 140, 140 180, 100 180 C80 180, 60 170, 50 150"
          stroke="url(#gradient1)"
          strokeWidth="24"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M100 180 C60 180, 20 140, 20 100 C20 60, 60 20, 100 20 C120 20, 140 30, 150 50"
          stroke="url(#gradient2)"
          strokeWidth="24"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M150 50 C170 70, 180 100, 170 130 C160 160, 130 170, 100 160 C80 155, 65 140, 60 120"
          stroke="url(#gradient3)"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          d="M50 150 C30 130, 20 100, 30 70 C40 40, 70 30, 100 40 C120 45, 135 60, 140 80"
          stroke="url(#gradient4)"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      
      {showText && (
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          Ztart
        </span>
      )}
    </div>
  );
};

export default ZtartLogo;