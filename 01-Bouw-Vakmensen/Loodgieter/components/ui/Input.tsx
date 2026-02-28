'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

/**
 * Input component with floating label animation
 * Supports all standard input types with Dutch styling
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="floating-label-group relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-gray z-10">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl',
              'focus:border-water-blue focus:outline-none transition-colors duration-200',
              'placeholder:text-transparent',
              icon && 'pl-12',
              error && 'border-red-500 focus:border-red-500',
              className
            )}
            placeholder={label || ' '}
            {...props}
          />
          {label && (
            <label className="absolute left-4 top-3 text-steel-gray transition-all duration-200 pointer-events-none origin-left">
              {label}
            </label>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
