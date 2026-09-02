import { motion } from 'motion/react'
import { cn } from '../../lib/utils'

function GlassCard({ children, className, delay = 0, hoverLift = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      whileHover={hoverLift ? { y: -8 } : undefined}
      className={cn(
        'rounded-[var(--radius)] border border-[var(--gold)]/20 backdrop-blur-md p-6',
        className,
      )}
      style={{ background: 'rgba(9, 22, 36, 0.55)' }}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
