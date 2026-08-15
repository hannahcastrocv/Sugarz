// Clean pixel-art placeholder portraits for the Sugar NFT gallery. These stand
// in for the real 7,777 artwork, which gets dropped in later. No fake names,
// traits, rarities, or prices are attached anywhere. Six candy-creature busts,
// each on its own backdrop, keep the gallery looking intentional pre-launch.

function P({ x, y, w = 1, h = 1, fill }) {
  return <rect x={x} y={y} width={w} height={h} fill={fill} />;
}

const INK = "#20182c";
const WHITE = "#ffffff";

const VARIANTS = [
  {
    // Popcorn cluster
    bg: ["#7bd389", "#2f9e6b"],
    outfit: "#4a5b3a",
    collar: "#d8e6a0",
    head: (
      <g>
        <P x={5} y={2} w={6} h={1} fill="#ffe9a8" />
        <P x={4} y={3} w={8} h={4} fill="#ffd76b" />
        <P x={3} y={4} w={2} h={2} fill="#fff0c0" />
        <P x={11} y={4} w={2} h={2} fill="#fff0c0" />
        <P x={5} y={7} w={6} h={2} fill="#f2c24a" />
        <P x={6} y={5} w={1} h={1} fill={INK} />
        <P x={9} y={5} w={1} h={1} fill={INK} />
        <P x={7} y={7} w={2} h={1} fill="#c9781f" />
      </g>
    ),
  },
  {
    // Cherry head
    bg: ["#ff9ec0", "#c8447a"],
    outfit: "#2f5d8a",
    collar: "#bcd8ff",
    head: (
      <g>
        <P x={7} y={1} w={2} h={2} fill="#5ec46b" />
        <P x={4} y={3} w={8} h={6} fill="#e0344f" />
        <P x={5} y={2} w={6} h={1} fill="#f26d82" />
        <P x={5} y={5} w={1} h={1} fill={WHITE} />
        <P x={10} y={5} w={1} h={1} fill={WHITE} />
        <P x={6} y={5} w={1} h={1} fill={INK} />
        <P x={9} y={5} w={1} h={1} fill={INK} />
        <P x={6} y={7} w={4} h={1} fill="#8a1730" />
      </g>
    ),
  },
  {
    // Grape cluster
    bg: ["#6be3c8", "#1f8f88"],
    outfit: "#6a3fae",
    collar: "#d0b6ff",
    head: (
      <g>
        <P x={4} y={2} w={8} h={5} fill="#a259ff" />
        <P x={3} y={4} w={2} h={2} fill="#8e3fe6" />
        <P x={11} y={4} w={2} h={2} fill="#8e3fe6" />
        <P x={5} y={7} w={6} h={2} fill="#8e3fe6" />
        <P x={6} y={4} w={1} h={1} fill={INK} />
        <P x={9} y={4} w={1} h={1} fill={INK} />
        <P x={5} y={3} w={1} h={1} fill="#c8a0ff" />
        <P x={7} y={7} w={2} h={1} fill="#5a2a99" />
      </g>
    ),
  },
  {
    // Peppermint swirl
    bg: ["#ff8fd0", "#b53c8c"],
    outfit: "#b91442",
    collar: "#ffd0dd",
    head: (
      <g>
        <P x={4} y={2} w={8} h={7} fill={WHITE} />
        <P x={4} y={2} w={2} h={2} fill="#e0344f" />
        <P x={10} y={2} w={2} h={2} fill="#e0344f" />
        <P x={4} y={6} w={2} h={2} fill="#e0344f" />
        <P x={10} y={6} w={2} h={2} fill="#e0344f" />
        <P x={7} y={4} w={2} h={2} fill="#ff9ab5" />
        <P x={6} y={4} w={1} h={1} fill={INK} />
        <P x={9} y={4} w={1} h={1} fill={INK} />
        <P x={7} y={7} w={2} h={1} fill="#e0344f" />
      </g>
    ),
  },
  {
    // Gingerbread
    bg: ["#e8b878", "#9c6a2e"],
    outfit: "#4a2f1a",
    collar: "#f0d6a0",
    head: (
      <g>
        <P x={4} y={2} w={8} h={7} fill="#c9803a" />
        <P x={5} y={2} w={6} h={1} fill="#e0a05a" />
        <P x={6} y={4} w={1} h={1} fill={WHITE} />
        <P x={9} y={4} w={1} h={1} fill={WHITE} />
        <P x={6} y={3} w={1} h={1} fill="#fff" />
        <P x={9} y={3} w={1} h={1} fill="#fff" />
        <P x={7} y={6} w={2} h={1} fill="#5a3016" />
        <P x={5} y={5} w={1} h={1} fill="#e0344f" />
        <P x={10} y={5} w={1} h={1} fill="#e0344f" />
      </g>
    ),
  },
  {
    // Cotton candy
    bg: ["#8fc7ff", "#3f6fb5"],
    outfit: "#6a3fae",
    collar: "#cfe4ff",
    head: (
      <g>
        <P x={4} y={2} w={8} h={2} fill="#ff9ec0" />
        <P x={3} y={3} w={10} h={3} fill="#c8a0ff" />
        <P x={4} y={6} w={8} h={3} fill="#ff9ec0" />
        <P x={6} y={5} w={1} h={1} fill={INK} />
        <P x={9} y={5} w={1} h={1} fill={INK} />
        <P x={7} y={7} w={2} h={1} fill="#b53c8c" />
      </g>
    ),
  },
];

export default function NFTPlaceholder({ variant = 0, className = "" }) {
  const v = VARIANTS[variant % VARIANTS.length];
  const gid = `nftbg-${variant}`;
  return (
    <svg viewBox="0 0 16 16" className={`pixelated block h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={v.bg[0]} />
          <stop offset="100%" stopColor={v.bg[1]} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="16" height="16" fill={`url(#${gid})`} />
      {/* subtle floor */}
      <P x={0} y={14} w={16} h={2} fill="rgba(0,0,0,0.18)" />
      {v.head}
      {/* shoulders / outfit */}
      <P x={3} y={11} w={10} h={5} fill={v.outfit} />
      <P x={6} y={9} w={4} h={2} fill={v.collar} />
      <P x={5} y={11} w={6} h={2} fill={v.collar} />
      <P x={7} y={11} w={2} h={5} fill="rgba(255,255,255,0.12)" />
    </svg>
  );
}
