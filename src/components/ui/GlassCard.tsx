interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glowOnHover?: boolean
}

export default function GlassCard({ children, className = '', glowOnHover = false }: GlassCardProps) {
  return (
    <div className={`glass rounded-2xl transition-all duration-300 ${glowOnHover ? 'hover:border-primary/40 hover:shadow-glow-sm' : ''} ${className}`}>
      {children}
    </div>
  )
}
