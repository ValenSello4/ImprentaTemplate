export function BridgeSVG() {
  return (
    <svg
      viewBox="0 0 1200 400"
      className="absolute inset-0 w-full h-full object-cover opacity-10"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Puente visto desde abajo */}
      {/* Arcos principales */}
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Estructura principal del puente */}
      {/* Arco izquierdo */}
      <path
        d="M 100 350 Q 100 150, 300 100 Q 500 50, 600 50"
        stroke="#1a1a1a"
        strokeWidth="25"
        fill="none"
        filter="url(#shadow)"
      />

      {/* Arco derecho */}
      <path
        d="M 600 50 Q 700 50, 900 100 Q 1100 150, 1100 350"
        stroke="#1a1a1a"
        strokeWidth="25"
        fill="none"
        filter="url(#shadow)"
      />

      {/* Cables de suspensión izquierdo */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`cable-left-${i}`}
          x1={200 + i * 80}
          y1={120}
          x2={250 + i * 80}
          y2={250}
          stroke="#1a1a1a"
          strokeWidth="4"
          opacity="0.6"
          filter="url(#shadow)"
        />
      ))}

      {/* Cables de suspensión derecho */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={`cable-right-${i}`}
          x1={750 + i * 80}
          y1={120}
          x2={700 + i * 80}
          y2={250}
          stroke="#1a1a1a"
          strokeWidth="4"
          opacity="0.6"
          filter="url(#shadow)"
        />
      ))}

      {/* Plataforma principal */}
      <rect x="150" y="280" width="900" height="35" fill="#1a1a1a" opacity="0.8" filter="url(#shadow)" />

      {/* Vigas transversales */}
      {[200, 400, 600, 800, 1000].map((x) => (
        <line
          key={`viga-${x}`}
          x1={x}
          y1={280}
          x2={x}
          y2={320}
          stroke="#1a1a1a"
          strokeWidth="3"
          opacity="0.5"
        />
      ))}

      {/* Detalles de la perspectiva desde abajo */}
      <path
        d="M 100 350 L 200 380 L 1000 380 L 1100 350"
        stroke="#1a1a1a"
        strokeWidth="3"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}
