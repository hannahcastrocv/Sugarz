// A self-contained pixel-art scene for the Overview hero: a candy kingdom at
// the foot of sugar-frosted mountains, with lollipop trees and the marshmallow
// mascot at the gate. Built entirely from SVG so it scales crisply and never
// looks like a generated 3D render.

function P({ x, y, w = 1, h = 1, fill }) {
  return <rect x={x} y={y} width={w} height={h} fill={fill} />;
}

export default function HeroKingdom({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 132"
      preserveAspectRatio="xMidYMid slice"
      className={`pixelated h-full w-full ${className}`}
      aria-label="Pixel-art view of the Sugar kingdom"
      role="img"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2350" />
          <stop offset="55%" stopColor="#4b3b7a" />
          <stop offset="100%" stopColor="#7d5a9c" />
        </linearGradient>
        <radialGradient id="sun" cx="78%" cy="20%" r="30%">
          <stop offset="0%" stopColor="rgba(255,220,150,0.55)" />
          <stop offset="100%" stopColor="rgba(255,220,150,0)" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect x="0" y="0" width="220" height="132" fill="url(#sky)" />
      <rect x="0" y="0" width="220" height="132" fill="url(#sun)" />

      {/* stars */}
      <P x={18} y={12} fill="#fff" />
      <P x={40} y={20} fill="#ffe" />
      <P x={64} y={9} fill="#fff" />
      <P x={150} y={14} fill="#fff" />
      <P x={196} y={26} fill="#ffe" />

      {/* clouds */}
      <g fill="#efe7ff">
        <P x={24} y={30} w={16} h={4} />
        <P x={28} y={26} w={9} h={4} />
        <P x={168} y={36} w={20} h={4} />
        <P x={174} y={32} w={10} h={4} />
      </g>

      {/* far mountains with snow */}
      <g>
        <P x={0} y={64} w={70} h={20} fill="#4a3d78" />
        <P x={16} y={52} w={40} h={12} fill="#4a3d78" />
        <P x={28} y={46} w={16} h={6} fill="#4a3d78" />
        <P x={30} y={46} w={12} h={4} fill="#e7dcff" />
        <P x={24} y={52} w={22} h={3} fill="#e7dcff" />
        <P x={150} y={60} w={70} h={24} fill="#544285" />
        <P x={168} y={48} w={36} h={12} fill="#544285" />
        <P x={180} y={42} w={14} h={6} fill="#544285" />
        <P x={182} y={42} w={10} h={4} fill="#efe7ff" />
        <P x={172} y={48} w={24} h={3} fill="#efe7ff" />
      </g>

      {/* mid hills */}
      <P x={0} y={82} w={220} h={16} fill="#3f7d4a" />
      <P x={0} y={80} w={220} h={3} fill="#4f9b5c" />

      {/* lollipop trees (left) */}
      <g>
        <P x={12} y={70} w={2} h={16} fill="#7c4f1c" />
        <P x={8} y={62} w={10} h={9} fill="#ff5c8a" />
        <P x={10} y={64} w={2} h={2} fill="#fff" />
        <P x={30} y={74} w={2} h={12} fill="#7c4f1c" />
        <P x={27} y={68} w={8} h={7} fill="#ffd05a" />
      </g>

      {/* castle */}
      <g>
        {/* towers */}
        <P x={92} y={40} w={10} h={44} fill="#e7b9a0" />
        <P x={118} y={40} w={10} h={44} fill="#e7b9a0" />
        <P x={104} y={30} w={12} h={54} fill="#f0c8b0" />
        {/* tower shading */}
        <P x={92} y={40} w={3} h={44} fill="#d79c82" />
        <P x={118} y={40} w={3} h={44} fill="#d79c82" />
        {/* battlements */}
        <P x={92} y={38} w={2} h={2} fill="#e7b9a0" />
        <P x={96} y={38} w={2} h={2} fill="#e7b9a0" />
        <P x={100} y={38} w={2} h={2} fill="#e7b9a0" />
        <P x={118} y={38} w={2} h={2} fill="#e7b9a0" />
        <P x={122} y={38} w={2} h={2} fill="#e7b9a0" />
        <P x={126} y={38} w={2} h={2} fill="#e7b9a0" />
        {/* roofs */}
        <P x={90} y={34} w={14} h={6} fill="#e0344f" />
        <P x={95} y={30} w={4} h={4} fill="#e0344f" />
        <P x={116} y={34} w={14} h={6} fill="#e0344f" />
        <P x={121} y={30} w={4} h={4} fill="#e0344f" />
        <P x={102} y={24} w={16} h={6} fill="#e0344f" />
        <P x={108} y={20} w={4} h={4} fill="#e0344f" />
        {/* flags */}
        <P x={97} y={26} w={1} h={4} fill="#fff" />
        <P x={98} y={26} w={4} h={2} fill="#ff5c8a" />
        <P x={109} y={16} w={1} h={4} fill="#fff" />
        <P x={110} y={16} w={5} h={2} fill="#ff5c8a" />
        <P x={123} y={26} w={1} h={4} fill="#fff" />
        <P x={124} y={26} w={4} h={2} fill="#ff5c8a" />
        {/* windows */}
        <P x={95} y={48} w={3} h={5} fill="#b91442" />
        <P x={122} y={48} w={3} h={5} fill="#b91442" />
        <P x={107} y={40} w={3} h={5} fill="#b91442" />
        <P x={110} y={40} w={3} h={5} fill="#b91442" />
        {/* gate */}
        <P x={104} y={64} w={12} h={20} fill="#8a1730" />
        <P x={106} y={66} w={8} h={18} fill="#b91442" />
      </g>

      {/* lollipop trees (right) */}
      <g>
        <P x={140} y={70} w={2} h={16} fill="#7c4f1c" />
        <P x={135} y={62} w={12} h={9} fill="#a259ff" />
        <P x={138} y={64} w={2} h={2} fill="#fff" />
        <P x={158} y={74} w={2} h={12} fill="#7c4f1c" />
        <P x={155} y={68} w={8} h={7} fill="#5be1b0" />
      </g>

      {/* foreground grass */}
      <P x={0} y={98} w={220} h={34} fill="#2f6b3b" />
      <P x={0} y={96} w={220} h={3} fill="#3f7d4a" />

      {/* mascot at the gate */}
      <g>
        <P x={104} y={84} w={12} h={10} fill="#b91442" />
        <P x={106} y={84} w={8} h={10} fill="#ffe6b0" />
        <P x={107} y={80} w={6} h={5} fill="#ffe6b0" />
        <P x={108} y={82} w={1} h={1} fill="#20182c" />
        <P x={111} y={82} w={1} h={1} fill="#20182c" />
        <P x={109} y={78} w={1} h={2} fill="#f5c451" />
        <P x={111} y={78} w={1} h={2} fill="#f5c451" />
        <P x={109} y={94} w={2} h={2} fill="#ffe6b0" />
        <P x={112} y={94} w={2} h={2} fill="#ffe6b0" />
        {/* held coin */}
        <P x={101} y={86} w={4} h={4} fill="#f43e5f" />
        <P x={102} y={87} w={1} h={1} fill="#fff" />
      </g>

      {/* floating sugar coins */}
      <g>
        <P x={78} y={58} w={4} h={4} fill="#f43e5f" />
        <P x={79} y={59} w={1} h={1} fill="#fff" />
        <P x={150} y={52} w={4} h={4} fill="#f43e5f" />
        <P x={151} y={53} w={1} h={1} fill="#fff" />
      </g>
    </svg>
  );
}
