import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-widest mb-3 font-body',
            dark ? 'text-primary' : 'text-primary'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'font-display font-bold leading-tight',
          'text-3xl sm:text-4xl lg:text-5xl',
          dark ? 'text-white' : 'text-secondary'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed font-body',
            dark ? 'text-slate-300' : 'text-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
