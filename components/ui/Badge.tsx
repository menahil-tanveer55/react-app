import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'info' | 'outline'
  className?: string
}

const variants = {
  default: 'bg-primary/10 text-primary',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
  info: 'bg-blue-100 text-blue-700',
  outline: 'border border-border text-muted',
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-body',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
