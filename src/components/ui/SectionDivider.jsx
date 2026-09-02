import { motion } from 'motion/react'
import GoldfishSVG from './GoldfishSVG'

function SectionDivider({ flip = false }) {
  return (
    <div className="relative h-16 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/2 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)' }}
      />
      <motion.div
        initial={{ x: flip ? '110vw' : '-10vw', opacity: 0, scaleX: flip ? -1 : 1 }}
        whileInView={{ x: flip ? '-10vw' : '110vw', opacity: [0, 1, 1, 0], scaleX: flip ? -1 : 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 3.2, ease: 'linear' }}
        className="absolute top-1/2 -translate-y-1/2 w-10"
      >
        <GoldfishSVG className="w-full drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
      </motion.div>
    </div>
  )
}

export default SectionDivider
