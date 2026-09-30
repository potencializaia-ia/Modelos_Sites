/**
 * Ilustração vetorial do hero: dente 3D envolto por uma cápsula translúcida,
 * fitas de luz, brilhos e um ramo verde. 100% SVG (leve e nítido em qualquer tela).
 */
const TOOTH =
  "M240 72C200 70 178 100 180 150C182 200 200 225 208 265C216 305 214 360 226 405C234 438 262 440 268 408C274 370 276 330 300 322C324 330 326 370 332 408C338 440 366 438 374 405C386 360 384 305 392 265C400 225 418 200 420 150C422 100 400 70 360 72C330 74 322 90 300 90C278 90 270 74 240 72Z";

const LEAF = "M0 0C10 -16 38 -20 56 0C38 18 10 16 0 0Z";

function Sparkle({ x, y, s = 1, o = 0.9 }: { x: number; y: number; s?: number; o?: number }) {
  return (
    <path
      d="M0 -9L1.8 -1.8L9 0L1.8 1.8L0 9L-1.8 1.8L-9 0L-1.8 -1.8Z"
      transform={`translate(${x} ${y}) scale(${s})`}
      fill="#fff"
      opacity={o}
    />
  );
}

export default function ToothIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="40 10 540 500" className={className} role="img" aria-labelledby="tooth-title">
      <title id="tooth-title">
        Ilustração de um dente branco saudável envolto por uma cápsula de luz, com um ramo verde
      </title>
      <defs>
        <linearGradient id="t-body" x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#f3f7fc" />
          <stop offset="1" stopColor="#c9d9ec" />
        </linearGradient>
        <radialGradient id="t-hi" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glass" cx="0.42" cy="0.38" r="0.62">
          <stop offset="0" stopColor="#fff" stopOpacity="0.04" />
          <stop offset="0.72" stopColor="#fff" stopOpacity="0.14" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.55" />
        </radialGradient>
        <linearGradient id="glass-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3d8a3f" />
          <stop offset="1" stopColor="#8cc46c" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="t-clip">
          <path d={TOOTH} />
        </clipPath>
        <filter id="blur-lg" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="blur-md" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="blur-sm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <filter id="t-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#3f6f9f" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Brilho de fundo */}
      <ellipse cx="310" cy="250" rx="250" ry="230" fill="url(#glow)" opacity="0.7" />

      {/* Cápsula translúcida */}
      <path
        d="M300 34C420 30 500 120 498 250C496 380 410 470 300 470C185 470 108 390 104 262C100 130 180 38 300 34Z"
        fill="url(#glass)"
        stroke="url(#glass-stroke)"
        strokeWidth="2"
      />
      <path
        d="M170 90C215 52 270 42 318 44"
        fill="none"
        stroke="#fff"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.75"
        filter="url(#blur-sm)"
      />

      {/* Fitas de luz */}
      <path
        d="M96 330C150 150 380 60 540 170"
        fill="none"
        stroke="url(#ribbon)"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.55"
        filter="url(#blur-sm)"
      />
      <path d="M120 360C220 190 420 150 560 250" fill="none" stroke="url(#ribbon)" strokeWidth="2" opacity="0.9" />
      <path
        d="M470 70C560 150 560 330 450 440"
        fill="none"
        stroke="url(#ribbon)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.7"
        filter="url(#blur-sm)"
      />

      {/* Reflexo no piso */}
      <ellipse cx="300" cy="452" rx="150" ry="20" fill="#fff" opacity="0.75" filter="url(#blur-md)" />
      <ellipse cx="300" cy="448" rx="90" ry="8" fill="#9db8d6" opacity="0.35" filter="url(#blur-md)" />

      {/* Dente */}
      <g filter="url(#t-shadow)">
        <path d={TOOTH} fill="url(#t-body)" />
      </g>
      <g clipPath="url(#t-clip)">
        {/* sombra lateral direita (volume) */}
        <ellipse cx="418" cy="220" rx="46" ry="210" fill="#9fb9d6" opacity="0.6" filter="url(#blur-lg)" />
        <ellipse cx="372" cy="400" rx="22" ry="60" fill="#a9c1dc" opacity="0.55" filter="url(#blur-md)" />
        {/* sulco entre as cúspides */}
        <ellipse cx="300" cy="96" rx="20" ry="7" fill="#c6d6e9" opacity="0.55" filter="url(#blur-md)" />
        {/* base das raízes levemente mais fria */}
        <rect x="170" y="330" width="260" height="130" fill="#c3d5ea" opacity="0.35" filter="url(#blur-lg)" />
        {/* sombra no garfo das raízes */}
        <ellipse cx="300" cy="370" rx="40" ry="70" fill="#b7cbe2" opacity="0.5" filter="url(#blur-lg)" />
        {/* realces especulares */}
        <ellipse cx="228" cy="170" rx="22" ry="78" fill="url(#t-hi)" transform="rotate(-8 228 170)" />
        <ellipse cx="262" cy="96" rx="44" ry="14" fill="url(#t-hi)" />
        <ellipse cx="352" cy="100" rx="30" ry="10" fill="url(#t-hi)" opacity="0.8" />
        <ellipse cx="236" cy="330" rx="8" ry="46" fill="url(#t-hi)" opacity="0.8" />
      </g>
      <path d={TOOTH} fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.8" />

      {/* Ramo verde */}
      <g>
        <path
          d="M252 438C220 420 186 392 158 350C146 332 136 316 126 300"
          fill="none"
          stroke="#4d8f3f"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <g transform="translate(236 428) rotate(-150)">
          <path d={LEAF} fill="url(#leaf)" />
          <path d="M2 0C20 -1 38 -1 54 0" stroke="#e9f6df" strokeWidth="1" opacity="0.7" fill="none" />
        </g>
        <g transform="translate(200 402) rotate(-40)">
          <path d={LEAF} fill="url(#leaf)" transform="scale(1.12)" />
          <path d="M2 0C22 -1 42 -1 60 0" stroke="#e9f6df" strokeWidth="1" opacity="0.7" fill="none" />
        </g>
        <g transform="translate(176 376) rotate(-165)">
          <path d={LEAF} fill="url(#leaf)" transform="scale(1.05)" />
          <path d="M2 0C20 -1 40 -1 56 0" stroke="#e9f6df" strokeWidth="1" opacity="0.7" fill="none" />
        </g>
        <g transform="translate(150 340) rotate(-60)">
          <path d={LEAF} fill="url(#leaf)" transform="scale(0.9)" />
        </g>
        <g transform="translate(134 314) rotate(-120)">
          <path d={LEAF} fill="url(#leaf)" transform="scale(0.72)" />
        </g>
      </g>

      {/* Brilhos */}
      <Sparkle x={468} y={132} s={1.3} />
      <Sparkle x={500} y={300} s={0.8} o={0.8} />
      <Sparkle x={150} y={200} s={0.7} o={0.7} />
      <Sparkle x={420} y={60} s={0.6} o={0.8} />
      <circle cx="486" cy="220" r="2.4" fill="#fff" />
      <circle cx="176" cy="130" r="1.8" fill="#fff" opacity="0.8" />
      <circle cx="444" cy="400" r="2" fill="#fff" opacity="0.9" />
    </svg>
  );
}
