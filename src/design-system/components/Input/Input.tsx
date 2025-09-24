import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'block px-3 py-2 border rounded-lg text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const stateClasses = error
    ? 'border-semantic-error focus:border-semantic-error focus:ring-semantic-error'
    : 'border-neutral-300 focus:border-brand-primary focus:ring-brand-primary hover:border-neutral-400';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const inputClasses = `${baseClasses} ${stateClasses} ${widthClass} ${className}`;
  
  const hasIcons = leftIcon || rightIcon;
  const iconInputClasses = hasIcons ? 'pl-10' : '';
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-1">
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-neutral-400">{leftIcon}</span>
          </div>
        )}
        
        <input
          className={`${inputClasses} ${iconInputClasses}`}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <span className="text-neutral-400">{rightIcon}</span>
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-semantic-error">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-text-tertiary">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
