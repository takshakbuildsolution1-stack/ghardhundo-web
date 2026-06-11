import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  variant?: 'default' | 'saffron'
  className?: string
}

export function GlassCard({ children, variant = 'default', className = '' }: Props) {
  return (
    <div className={`${variant === 'saffron' ? 'glass-card-saffron' : 'glass-card'} ${className}`}>
      {children}
    </div>
  )
}
