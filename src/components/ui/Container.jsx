import { cn } from '../../lib/utils'

function Container({ children, className }) {
  return (
    <div className={cn('max-w-[1280px] mx-auto px-4 sm:px-6', className)}>
      {children}
    </div>
  )
}

export default Container
