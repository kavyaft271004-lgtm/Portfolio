function GoldfishSVG({ className }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="90" cy="50" rx="55" ry="26" fill="url(#body)" />
      <path d="M30 50 L0 25 L8 50 L0 75 Z" fill="url(#tail)" />
      <path d="M70 30 Q90 0 110 28 Q95 35 70 30Z" fill="url(#fin)" opacity="0.85" />
      <path d="M75 70 Q95 100 115 72 Q98 65 75 70Z" fill="url(#fin)" opacity="0.85" />
      <circle cx="125" cy="44" r="3.2" fill="#04070F" />
      <defs>
        <linearGradient id="body" x1="35" y1="24" x2="145" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2D16B" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="tail" x1="0" y1="25" x2="30" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2D16B" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="fin" x1="70" y1="0" x2="115" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD966" />
          <stop offset="1" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default GoldfishSVG
