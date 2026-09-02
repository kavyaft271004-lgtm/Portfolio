import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import GoldfishSVG from '../ui/GoldfishSVG'

function Loader({ onFinish }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)] overflow-hidden"
        >
          <motion.div
            initial={{ x: '-20vw' }}
            animate={{ x: '20vw' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="w-40"
          >
            <GoldfishSVG className="w-full drop-shadow-[0_0_24px_rgba(212,175,55,0.4)]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
