function UnderwaterBackground() {
  const bubbles = Array.from({ length: 18 }, (_, i) => i)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(99,210,255,0.14), transparent 60%)',
          backgroundSize: '160% 160%',
          animation: 'drift-1 14s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 80%, rgba(212,175,55,0.09), transparent 55%)',
          backgroundSize: '160% 160%',
          animation: 'drift-2 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'repeating-linear-gradient(115deg, transparent 0px, transparent 60px, rgba(99,210,255,0.06) 62px, transparent 120px)',
        }}
      />
      {bubbles.map((b) => {
        const size = 4 + (b % 5) * 3
        const left = (b * 37) % 100
        const duration = 8 + (b % 6) * 2
        const delay = (b % 9) * 0.7
        return (
          <span
            key={b}
            className="absolute rounded-full bg-[var(--accent)]/30 animate-[float-up_linear_infinite]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: '-5%',
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        )
      })}
    </div>
  )
}

export default UnderwaterBackground
