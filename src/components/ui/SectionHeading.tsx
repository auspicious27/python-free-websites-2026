interface SectionHeadingProps {
  label: string
  title: string
  highlight: string
  subtitle?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({ label, title, highlight, subtitle, align = 'center' }: SectionHeadingProps) {
  const parts = title.split(highlight)
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/5 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">{label}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
        {parts[0]}
        <span style={{ background: 'linear-gradient(135deg, #e63946, #ff4d5a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          {highlight}
        </span>
        {parts[1] || ''}
      </h2>
      {subtitle && <p className="text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed mx-auto">{subtitle}</p>}
    </div>
  )
}
