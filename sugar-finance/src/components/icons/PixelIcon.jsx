// Blocky, crisp-edged SVG icons that carry the pixel-art personality without
// relying on any external image or AI-generated artwork. Each icon draws on a
// 24x24 grid with hard edges so it stays sharp at any size.

const C = {
  pink: "#ff4d7d",
  rose: "#f43e5f",
  deep: "#b91442",
  gold: "#f5c451",
  cream: "#ffe6b0",
  grape: "#a259ff",
  grapeSoft: "#c8a0ff",
  mint: "#34d399",
  sky: "#5aa9ff",
  white: "#ffffff",
  ink: "#0b0f1e",
  wood: "#b9762f",
  woodDark: "#8a531d",
  tan: "#e6b17a",
  green: "#4caf50",
  grey: "#9aa4c7",
  steel: "#6b7699",
};

function P({ x, y, w = 1, h = 1, fill }) {
  return <rect x={x} y={y} width={w} height={h} fill={fill} />;
}

const ICONS = {
  home: (
    <g>
      <P x={11} y={3} w={2} h={2} fill={C.rose} />
      <P x={9} y={5} w={6} h={2} fill={C.rose} />
      <P x={7} y={7} w={10} h={2} fill={C.rose} />
      <P x={5} y={9} w={14} h={2} fill={C.deep} />
      <P x={7} y={11} w={10} h={8} fill={C.cream} />
      <P x={9} y={13} w={2} h={2} fill={C.sky} />
      <P x={13} y={13} w={2} h={2} fill={C.sky} />
      <P x={10} y={16} w={4} h={3} fill={C.wood} />
    </g>
  ),
  coin: (
    <g>
      <P x={8} y={4} w={8} h={2} fill={C.rose} />
      <P x={6} y={6} w={12} h={2} fill={C.rose} />
      <P x={5} y={8} w={14} h={8} fill={C.rose} />
      <P x={6} y={16} w={12} h={2} fill={C.rose} />
      <P x={8} y={18} w={8} h={2} fill={C.deep} />
      <P x={13} y={8} w={2} h={2} fill={C.white} />
      <P x={10} y={9} w={4} h={2} fill={C.white} />
      <P x={10} y={11} w={4} h={2} fill={C.white} />
      <P x={12} y={13} w={2} h={2} fill={C.white} />
      <P x={9} y={14} w={4} h={2} fill={C.white} />
    </g>
  ),
  castle: (
    <g>
      <P x={4} y={5} w={2} h={3} fill={C.rose} />
      <P x={11} y={4} w={2} h={4} fill={C.rose} />
      <P x={18} y={5} w={2} h={3} fill={C.rose} />
      <P x={4} y={8} w={16} h={2} fill={C.tan} />
      <P x={5} y={10} w={14} h={9} fill={C.tan} />
      <P x={5} y={8} w={2} h={11} fill={C.rose} />
      <P x={17} y={8} w={2} h={11} fill={C.rose} />
      <P x={10} y={12} w={4} h={7} fill={C.deep} />
      <P x={8} y={13} w={2} h={2} fill={C.gold} />
      <P x={14} y={13} w={2} h={2} fill={C.gold} />
    </g>
  ),
  safari: (
    <g>
      <P x={5} y={7} w={14} h={2} fill={C.woodDark} />
      <P x={11} y={4} w={2} h={3} fill={C.wood} />
      <P x={6} y={9} w={12} h={9} fill={C.cream} />
      <P x={6} y={9} w={12} h={2} fill={C.gold} />
      <P x={10} y={12} w={4} h={6} fill={C.deep} />
      <P x={5} y={9} w={2} h={9} fill={C.wood} />
      <P x={17} y={9} w={2} h={9} fill={C.wood} />
      <P x={3} y={18} w={18} h={2} fill={C.green} />
    </g>
  ),
  map: (
    <g>
      <P x={4} y={5} w={5} h={14} fill={C.cream} />
      <P x={9} y={4} w={6} h={15} fill={C.tan} />
      <P x={15} y={5} w={5} h={14} fill={C.cream} />
      <P x={6} y={8} w={4} h={2} fill={C.deep} />
      <P x={14} y={12} w={4} h={2} fill={C.rose} />
      <P x={11} y={9} w={2} h={2} fill={C.mint} />
      <P x={12} y={11} w={2} h={2} fill={C.mint} />
      <P x={13} y={13} w={2} h={2} fill={C.mint} />
    </g>
  ),
  flask: (
    <g>
      <P x={9} y={4} w={6} h={2} fill={C.grey} />
      <P x={10} y={6} w={4} h={4} fill={C.sky} />
      <P x={8} y={10} w={8} h={2} fill={C.grape} />
      <P x={6} y={12} w={12} h={6} fill={C.grape} />
      <P x={7} y={18} w={10} h={2} fill={C.deep} />
      <P x={9} y={13} w={2} h={2} fill={C.grapeSoft} />
      <P x={13} y={15} w={2} h={2} fill={C.pink} />
      <P x={11} y={16} w={2} h={2} fill={C.white} />
    </g>
  ),
  nft: (
    <g>
      <P x={6} y={4} w={12} h={2} fill={C.grape} />
      <P x={5} y={6} w={14} h={14} fill={C.grape} />
      <P x={7} y={8} w={10} h={10} fill={C.ink} />
      <P x={9} y={10} w={2} h={2} fill={C.pink} />
      <P x={13} y={10} w={2} h={2} fill={C.pink} />
      <P x={9} y={14} w={6} h={2} fill={C.gold} />
      <P x={8} y={12} w={2} h={2} fill={C.mint} />
      <P x={14} y={12} w={2} h={2} fill={C.mint} />
    </g>
  ),
  gem: (
    <g>
      <P x={8} y={5} w={8} h={2} fill={C.grapeSoft} />
      <P x={6} y={7} w={12} h={2} fill={C.grape} />
      <P x={7} y={9} w={10} h={2} fill={C.grape} />
      <P x={8} y={11} w={8} h={2} fill={C.pink} />
      <P x={9} y={13} w={6} h={2} fill={C.pink} />
      <P x={10} y={15} w={4} h={2} fill={C.deep} />
      <P x={11} y={17} w={2} h={2} fill={C.deep} />
      <P x={9} y={7} w={2} h={2} fill={C.white} />
    </g>
  ),
  anvil: (
    <g>
      <P x={5} y={8} w={14} h={4} fill={C.steel} />
      <P x={17} y={9} w={3} h={2} fill={C.steel} />
      <P x={7} y={12} w={4} h={3} fill={C.steel} />
      <P x={6} y={15} w={12} h={2} fill={C.ink} />
      <P x={5} y={17} w={14} h={2} fill={C.grey} />
      <P x={5} y={8} w={14} h={1} fill={C.grey} />
      <P x={12} y={5} w={2} h={2} fill={C.rose} />
      <P x={11} y={6} w={4} h={2} fill={C.pink} />
    </g>
  ),
  gear: (
    <g>
      <P x={10} y={3} w={4} h={2} fill={C.steel} />
      <P x={10} y={19} w={4} h={2} fill={C.steel} />
      <P x={3} y={10} w={2} h={4} fill={C.steel} />
      <P x={19} y={10} w={2} h={4} fill={C.steel} />
      <P x={6} y={6} w={12} h={12} fill={C.steel} />
      <P x={5} y={8} w={14} h={8} fill={C.steel} />
      <P x={8} y={5} w={8} h={14} fill={C.steel} />
      <P x={9} y={9} w={6} h={6} fill={C.ink} />
      <P x={10} y={10} w={4} h={4} fill={C.pink} />
    </g>
  ),
  help: (
    <g>
      <P x={8} y={5} w={8} h={2} fill={C.pink} />
      <P x={7} y={7} w={2} h={2} fill={C.pink} />
      <P x={15} y={7} w={2} h={2} fill={C.pink} />
      <P x={13} y={9} w={2} h={2} fill={C.pink} />
      <P x={11} y={11} w={2} h={2} fill={C.pink} />
      <P x={11} y={14} w={2} h={1} fill={C.pink} />
      <P x={11} y={16} w={2} h={2} fill={C.pink} />
    </g>
  ),
  usdg: (
    <g>
      <P x={7} y={5} w={10} h={2} fill={C.mint} />
      <P x={5} y={7} w={14} h={10} fill={C.mint} />
      <P x={7} y={17} w={10} h={2} fill={C.green} />
      <P x={11} y={6} w={2} h={12} fill={C.ink} />
      <P x={9} y={8} w={6} h={2} fill={C.white} />
      <P x={9} y={14} w={6} h={2} fill={C.white} />
      <P x={9} y={10} w={2} h={2} fill={C.white} />
      <P x={13} y={12} w={2} h={2} fill={C.white} />
    </g>
  ),
  eth: (
    <g>
      <P x={11} y={4} w={2} h={2} fill={C.grapeSoft} />
      <P x={9} y={6} w={6} h={2} fill={C.grapeSoft} />
      <P x={7} y={8} w={10} h={2} fill={C.grape} />
      <P x={8} y={10} w={8} h={2} fill={C.sky} />
      <P x={10} y={12} w={4} h={2} fill={C.grape} />
      <P x={8} y={14} w={8} h={2} fill={C.grape} />
      <P x={10} y={16} w={4} h={2} fill={C.grapeSoft} />
    </g>
  ),
  leaf: (
    <g>
      <P x={13} y={5} w={5} h={2} fill={C.green} />
      <P x={11} y={7} w={7} h={2} fill={C.green} />
      <P x={9} y={9} w={9} h={2} fill={C.mint} />
      <P x={8} y={11} w={8} h={2} fill={C.green} />
      <P x={8} y={13} w={6} h={2} fill={C.green} />
      <P x={6} y={15} w={4} h={4} fill={C.woodDark} />
    </g>
  ),
  shield: (
    <g>
      <P x={7} y={5} w={10} h={2} fill={C.steel} />
      <P x={6} y={7} w={12} h={6} fill={C.steel} />
      <P x={7} y={13} w={10} h={2} fill={C.grey} />
      <P x={9} y={15} w={6} h={2} fill={C.grey} />
      <P x={11} y={17} w={2} h={2} fill={C.grey} />
      <P x={10} y={9} w={4} h={2} fill={C.gold} />
      <P x={11} y={7} w={2} h={4} fill={C.gold} />
    </g>
  ),
};

export default function PixelIcon({ name, size = 24, className = "" }) {
  const glyph = ICONS[name] || ICONS.help;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`pixelated ${className}`}
      aria-hidden="true"
      role="img"
    >
      {glyph}
    </svg>
  );
}
