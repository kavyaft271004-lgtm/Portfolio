import { motion } from 'motion/react'

function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      {eyebrow && (
        <p className="text-[var(--gold)] text-sm tracking-[0.2em] uppercase mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-[var(--font-heading)]">{title}</h2>
    </motion.div>
  )
}

export default SectionHeading
