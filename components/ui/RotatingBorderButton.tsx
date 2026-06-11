import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href: string
  size?: 'sm' | 'md'
  className?: string
}

export function RotatingBorderButton({ children, href, size = 'md', className = '' }: Props) {
  return (
    <a
      href={href}
      className={`rotating-border-wrap ${size === 'sm' ? 'rotating-border-wrap-sm' : ''} ${className}`}
    >
      <span className="rotating-border-inner">{children}</span>
    </a>
  )
}
