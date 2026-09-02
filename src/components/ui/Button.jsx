import { motion } from 'motion/react'
import { cn } from '../../lib/utils'

function Button({ children, variant = 'primary', className, as = 'button', ...props }) {
  const Component = motion[as] ?? motion.button

  const base = 'inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3 font-medium transition-colors'
  const variants = {
    primary: 'bg-[var(--gold)] text-[var(--background)]',
    outline: 'border border-[var(--gold)]/50 text-[var(--text)]',
  }

  return (
    <Component
      whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(212,175,55,0.4)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
