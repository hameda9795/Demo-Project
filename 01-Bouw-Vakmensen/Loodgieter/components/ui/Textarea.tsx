'use client'

import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

/**
 * Textarea component with floating label animation
 * Auto-resizes based on content
 */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="floating-label-group relative">
          <textarea
            ref={ref}
            rows={rows}
            className={cn(
              'w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl resize-none',
              'focus:border-water-blue focus:outline-none transition-colors duration-200',
              'placeholder:text-transparent',
              error && 'border-red-500 focus:border-red-500',
              className
            )}
            placeholder={label || ' '}
            {...props}
          />
          {label && (
            <label className="absolute left-4 top-3 text-steel-gray transition-all duration-200 pointer-events-none origin-left bg-white px-1">
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

Textarea.displayName = 'Textarea'
