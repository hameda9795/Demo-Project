import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  shimmer?: boolean
}

/**
 * Skeleton loading component with shimmer effect
 * Used for loading states throughout the application
 */
export function Skeleton({ className, shimmer = true }: SkeletonProps) {
  return (
    <div className={cn('relative overflow-hidden bg-concrete/20 rounded', className)}>
      {shimmer && (
        <div className="absolute inset-0 -translate-x-full animate-shimmer">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      )}
    </div>
  )
}

/**
 * Skeleton card for project/service cards
 */
export function SkeletonCard() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-48 w-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}
