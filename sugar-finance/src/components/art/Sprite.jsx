// Small pixel-art sprites for Sugar Items, crafting recipes, and the mascot.
// Built from SVG rects on a 16x16 grid (mascot on 24x24) so they stay crisp.

const C = {
  pink: "#ff7aa2",
  rose: "#f43e5f",
  deep: "#b91442",
  gold: "#f5c451",
  cream: "#ffe6b0",
  white: "#ffffff",
  grape: "#a259ff",
  grapeSoft: "#c8a0ff",
  mint: "#5be1b0",
  sky: "#7cc0ff",
  wood: "#b9762f",
  woodDark: "#7c4f1c",
  ink: "#221a2e",
  amber: "#e79b3c",
  green: "#5ec46b",
  red: "#e0344f",
};

function P({ x, y, w = 1, h = 1, fill }) {
  return <rect x={x} y={y} width={w} height={h} fill={fill} />;
}

const SPRITES = {
  lollipop: (
    <g>
      <P x={5} y={2} w={6} h={1} fill={C.rose} />
      <P x={4} y={3} w={8} h={5} fill={C.rose} />
      <P x={5} y={8} w={6} h={1} fill={C.deep} />
      <P x={6} y={3} w={1} h={5} fill={C.white} />
      <P x={8} y={3} w={1} h={5} fill={C.gold} />
      <P x={10} y={4} w={1} h={3} fill={C.white} />
      <P x={7} y={9} w={2} h={5} fill={C.cream} />
    </g>
  ),
  cape: (
    <g>
      <P x={5} y={2} w={6} h={1} fill={C.grapeSoft} />
      <P x={4} y={3} w={8} h={2} fill={C.grape} />
      <P x={3} y={5} w={10} h={6} fill={C.grape} />
      <P x={4} y={11} w={2} h={2} fill={C.grape} />
      <P x={7} y={11} w={2} h={2} fill={C.grape} />
      <P x={10} y={11} w={2} h={2} fill={C.grape} />
      <P x={6} y={3} w={1} h={7} fill={C.grapeSoft} />
      <P x={7} y={4} w={2} h={1} fill={C.gold} />
    </g>
  ),
  wings: (
    <g>
      <P x={7} y={4} w={2} h={8} fill={C.gold} />
      <P x={3} y={4} w={4} h={2} fill={C.white} />
      <P x={2} y={6} w={5} h={2} fill={C.pink} />
      <P x={3} y={8} w={4} h={2} fill={C.white} />
      <P x={9} y={4} w={4} h={2} fill={C.white} />
      <P x={9} y={6} w={5} h={2} fill={C.pink} />
      <P x={9} y={8} w={4} h={2} fill={C.white} />
    </g>
  ),
  pancake: (
    <g>
      <P x={6} y={2} w={4} h={1} fill={C.gold} />
      <P x={3} y={3} w={10} h={2} fill={C.rose} />
      <P x={2} y={5} w={12} h={1} fill={C.deep} />
      <P x={5} y={3} w={1} h={2} fill={C.white} />
      <P x={9} y={3} w={1} h={2} fill={C.white} />
      <P x={7} y={6} w={2} h={5} fill={C.amber} />
      <P x={5} y={11} w={6} h={2} fill={C.cream} />
      <P x={5} y={11} w={6} h={1} fill={C.gold} />
    </g>
  ),
  gummy: (
    <g>
      <P x={5} y={2} w={2} h={2} fill={C.amber} />
      <P x={9} y={2} w={2} h={2} fill={C.amber} />
      <P x={4} y={4} w={8} h={6} fill={C.gold} />
      <P x={3} y={6} w={2} h={3} fill={C.amber} />
      <P x={11} y={6} w={2} h={3} fill={C.amber} />
      <P x={5} y={10} w={2} h={3} fill={C.amber} />
      <P x={9} y={10} w={2} h={3} fill={C.amber} />
      <P x={6} y={6} w={1} h={1} fill={C.ink} />
      <P x={9} y={6} w={1} h={1} fill={C.ink} />
      <P x={7} y={8} w={2} h={1} fill={C.deep} />
    </g>
  ),
  compass: (
    <g>
      <P x={6} y={2} w={4} h={1} fill={C.gold} />
      <P x={4} y={3} w={8} h={2} fill={C.gold} />
      <P x={3} y={5} w={10} h={6} fill={C.gold} />
      <P x={4} y={11} w={8} h={2} fill={C.amber} />
      <P x={5} y={6} w={6} h={4} fill={C.ink} />
      <P x={7} y={6} w={2} h={2} fill={C.rose} />
      <P x={7} y={8} w={2} h={2} fill={C.white} />
    </g>
  ),
  syrup: (
    <g>
      <P x={7} y={1} w={2} h={2} fill={C.grey || "#9aa4c7"} />
      <P x={6} y={3} w={4} h={2} fill={C.sky} />
      <P x={5} y={5} w={6} h={8} fill={C.grape} />
      <P x={5} y={5} w={6} h={2} fill={C.grapeSoft} />
      <P x={6} y={8} w={2} h={2} fill={C.pink} />
      <P x={8} y={10} w={2} h={2} fill={C.white} />
      <P x={5} y={13} w={6} h={1} fill={C.deep} />
    </g>
  ),
};

export function Sprite({ name, size = 44, className = "" }) {
  const glyph = SPRITES[name] || SPRITES.lollipop;
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} className={`pixelated ${className}`} aria-hidden="true">
      {glyph}
    </svg>
  );
}

// The Sugar mascot: a friendly marshmallow king with a red cape and a coin.
export function Mascot({ size = 120, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={`pixelated ${className}`} aria-hidden="true">
      {/* crown */}
      <P x={8} y={2} w={1} h={2} fill={C.gold} />
      <P x={11} y={1} w={2} h={3} fill={C.gold} />
      <P x={15} y={2} w={1} h={2} fill={C.gold} />
      <P x={8} y={4} w={8} h={1} fill={C.gold} />
      <P x={10} y={2} w={1} h={1} fill={C.rose} />
      <P x={13} y={2} w={1} h={1} fill={C.rose} />
      {/* head */}
      <P x={7} y={5} w={10} h={8} fill={C.cream} />
      <P x={7} y={5} w={10} h={1} fill={C.white} />
      <P x={9} y={8} w={2} h={2} fill={C.ink} />
      <P x={13} y={8} w={2} h={2} fill={C.ink} />
      <P x={10} y={11} w={4} h={1} fill={C.rose} />
      <P x={7} y={10} w={1} h={1} fill={C.pink} />
      <P x={16} y={10} w={1} h={1} fill={C.pink} />
      {/* body + cape */}
      <P x={6} y={13} w={12} h={6} fill={C.deep} />
      <P x={8} y={13} w={8} h={6} fill={C.cream} />
      <P x={11} y={14} w={2} h={4} fill={C.gold} />
      {/* arms */}
      <P x={5} y={14} w={2} h={3} fill={C.cream} />
      <P x={17} y={14} w={2} h={3} fill={C.cream} />
      {/* coin held */}
      <P x={3} y={13} w={3} h={3} fill={C.rose} />
      <P x={4} y={14} w={1} h={1} fill={C.white} />
      {/* feet */}
      <P x={8} y={19} w={3} h={2} fill={C.cream} />
      <P x={13} y={19} w={3} h={2} fill={C.cream} />
    </svg>
  );
}

export default Sprite;
