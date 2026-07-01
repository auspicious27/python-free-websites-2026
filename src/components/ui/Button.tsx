interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
}

export default function Button({ children, variant = 'primary', size = 'md', href, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer'
  const sizes = { sm: 'px-5 py-2.5 text-sm', md: 'px-6 py-3 text-sm', lg: 'px-8 py-4 text-base' }
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white shadow-glow-primary hover:shadow-glow-primary hover:scale-[1.03]',
    secondary: 'border-2 border-primary/40 text-text-primary hover:bg-primary/10 hover:border-primary',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) return <a href={href} className={classes}>{children}</a>
  return <button className={classes}>{children}</button>
}
