
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';

/* ---------- geometry (all generated from the real container size) ---------- */

type Pt = { x: number; y: number; nx: number; ny: number; w: number };
type Seg = [number, number][];

const HALF_W_TOP = 5.6; // trunk half-width at the top
const HALF_W_BOTTOM = 3.6; // ...and at the bottom (tapers)
const WAVE = 20; // how far the trunk sways left/right (px)
const SEG_LEN = 300; // approx. height of one S-curve segment (px)
const SPRIG_GAP = 170; // distance between sprigs (px)

/** Trunk centreline: smooth S-curves from the top to the very bottom (height H). */
function buildSegments(W: number, H: number): Seg[] {
  const cx = W / 2;
  const amp = Math.min(WAVE, W * 0.17);
  const n = Math.max(1, Math.round(H / SEG_LEN));
  const L = H / n;
  return Array.from({ length: n }, (_, i) => {
    const y0 = i * L;
    const s = i % 2 === 0 ? 1 : -1;
    const c1 = i === 0 ? -1 : s;
    return [
      [cx, y0],
      [cx + amp * c1, y0 + L / 3],
      [cx + amp * s, y0 + (2 * L) / 3],
      [cx, y0 + L],
    ] as Seg;
  });
}

const toPath = (segs: Seg[]) =>
  segs
    .map(
      (s, i) =>
        `${i === 0 ? `M${s[0][0]} ${s[0][1]} ` : ''}C ${s[1][0]} ${s[1][1]}, ${s[2][0]} ${s[2][1]}, ${s[3][0]} ${s[3][1]}`,
    )
    .join(' ');

const cubic = (p: Seg, t: number) => {
  const u = 1 - t;
  const f = (i: 0 | 1) =>
    u * u * u * p[0][i] + 3 * u * u * t * p[1][i] + 3 * u * t * t * p[2][i] + t * t * t * p[3][i];
  return { x: f(0), y: f(1) };
};

function sampleTrunk(segs: Seg[], H: number, perSeg = 40): Pt[] {
  const raw: { x: number; y: number }[] = [];
  segs.forEach((s, si) => {
    for (let i = si === 0 ? 0 : 1; i <= perSeg; i++) raw.push(cubic(s, i / perSeg));
  });
  return raw.map((p, i) => {
    const a = raw[Math.max(0, i - 1)];
    const b = raw[Math.min(raw.length - 1, i + 1)];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    return {
      x: p.x,
      y: p.y,
      nx: -dy / len,
      ny: dx / len,
      w: HALF_W_TOP + (HALF_W_BOTTOM - HALF_W_TOP) * (p.y / H),
    };
  });
}

// polygon covering the trunk between u0..u1 (-1 = left edge, 1 = right edge)
function band(pts: Pt[], u0: number, u1: number) {
  const left = pts.map((p) => `${(p.x + p.nx * p.w * u0).toFixed(2)} ${(p.y + p.ny * p.w * u0).toFixed(2)}`);
  const right = [...pts]
    .reverse()
    .map((p) => `${(p.x + p.nx * p.w * u1).toFixed(2)} ${(p.y + p.ny * p.w * u1).toFixed(2)}`);
  return `M${left.join(' L')} L${right.join(' L')} Z`;
}

/* ---------- leaves & sprigs ---------- */

const LEAF = 'M0 0 C 2 -4.5, 9 -5, 15 0 C 9 5, 2 4.5, 0 0 Z';

function Leaf({
  x, y, angle, size = 1, variant, progress, from,
}: {
  x: number; y: number; angle: number; size?: number; variant: 0 | 1 | 2;
  progress: MotionValue<number>; from: number;
}) {
  const scale = useTransform(progress, [from, from + 0.02], [0, 1]);
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${size})`}>
      <motion.g style={{ scale, transformBox: 'fill-box', transformOrigin: '0% 50%' }}>
        <path d={LEAF} fill={`url(#leaf${variant})`} />
        <path d="M0.5 0 L13 0" stroke="rgba(255,255,255,0.35)" strokeWidth={0.5} fill="none" />
      </motion.g>
    </g>
  );
}

function Sprig({
  progress, trunk, y, side, H,
}: {
  progress: MotionValue<number>; trunk: Pt[]; y: number; side: number; H: number;
}) {
  // attach exactly on the trunk edge
  const p = trunk.reduce((best, q) => (Math.abs(q.y - y) < Math.abs(best.y - y) ? q : best));
  const sx = p.x + side * p.w * 0.6;
  const sy = p.y;
  const ex = sx + side * 26;
  const ey = sy - 15;
  const cx = sx + side * 12;
  const cy = sy - 1;

  // progress is 0..1 over the whole page, so keep timing in "pixels of growth"
  const at = Math.min(0.99, y / H - 6 / H);
  const px = (n: number) => n / H; // convert px -> progress units
  const len = useTransform(progress, [at, at + px(40)], [0, 1]);

  const q = (t: number) => ({
    x: (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * cx + t * t * ex,
    y: (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * cy + t * t * ey,
  });
  const endAngle = (Math.atan2(ey - cy, ex - cx) * 180) / Math.PI;
  const m1 = q(0.45);
  const m2 = q(0.75);
  const l = at + px(30);

  return (
    <g>
      <motion.path
        d={`M${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`}
        fill="none"
        stroke="#6a7f2e"
        strokeWidth={1.3}
        strokeLinecap="round"
        style={{ pathLength: len }}
      />
      <Leaf x={m1.x} y={m1.y} angle={endAngle - 55} size={0.8} variant={1} progress={progress} from={l} />
      <Leaf x={m2.x} y={m2.y} angle={endAngle + 50} size={0.85} variant={2} progress={progress} from={l + px(10)} />
      <Leaf x={ex} y={ey} angle={endAngle - 12} size={1.15} variant={0} progress={progress} from={l + px(20)} />
      <Leaf x={ex} y={ey} angle={endAngle + 38} size={0.9} variant={1} progress={progress} from={l + px(28)} />
    </g>
  );
}

/* ---------- component ---------- */

/**
 * The tree always fills the full height of its container.
 * Give the container the full page height, e.g.
 *   <ScrollTree className="absolute inset-y-0 left-0 w-28" />
 * inside a `relative` wrapper that holds your whole page content.
 */
export default function ScrollTree({
  className = 'absolute inset-y-0 left-0 w-28',
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, '');
  const maskId = `trunk-mask-${uid}`;
  const shadowId = `trunk-shadow-${uid}`;

  // measure the real container so the tree is drawn 1:1 (no stretching)
  const [size, setSize] = useState({ w: 120, h: 900 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      if (r.width && r.height) setSize({ w: Math.round(r.width), h: Math.round(r.height) });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const { w: W, h: H } = size;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 70%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  const { centerline, trunk, base, mid, light, sprigs } = useMemo(() => {
    const segs = buildSegments(W, H);
    const pts = sampleTrunk(segs, H);
    const count = Math.max(1, Math.floor((H - 160) / SPRIG_GAP) + 1);
    const list = Array.from({ length: count }, (_, i) => ({
      y: 110 + i * SPRIG_GAP,
      side: i % 2 === 0 ? 1 : -1,
    })).filter((s) => s.y < H - 30);
    return {
      centerline: toPath(segs),
      trunk: pts,
      base: band(pts, -1, 1),
      mid: band(pts, -0.75, 0.55),
      light: band(pts, -0.5, 0.0),
      sprigs: list,
    };
  }, [W, H]);
  const end = trunk[trunk.length - 1];

  return (
    <div ref={ref} aria-hidden className={`pointer-events-none ${className}`}>
      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        className="absolute inset-0 overflow-visible"
      >
        <defs>
          <linearGradient id="leaf0" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1c7a38" />
            <stop offset="1" stopColor="#5cbf3f" />
          </linearGradient>
          <linearGradient id="leaf1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2f9a45" />
            <stop offset="1" stopColor="#8fd24e" />
          </linearGradient>
          <linearGradient id="leaf2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#157a5a" />
            <stop offset="1" stopColor="#3fae48" />
          </linearGradient>

          <filter id={shadowId} x="-50%" y="-1%" width="200%" height="102%">
            <feDropShadow dx="2.2" dy="0" stdDeviation="1.6" floodColor="#5a4630" floodOpacity="0.28" />
          </filter>
          <filter id={`${shadowId}-soft`}>
            <feGaussianBlur stdDeviation="0.9" />
          </filter>

          {/* trunk is revealed top -> bottom by scroll */}
          <mask id={maskId} maskUnits="userSpaceOnUse" x={-40} y={-20} width={W + 80} height={H + 40}>
            <motion.path
              d={centerline}
              fill="none"
              stroke="#fff"
              strokeWidth={36}
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </mask>
        </defs>

        <g mask={`url(#${maskId})`} filter={`url(#${shadowId})`}>
          <path d={base} fill="#5b3a22" />
          <path d={mid} fill="#8a5a38" />
          <path d={light} fill="#b17c53" opacity={0.85} filter={`url(#${shadowId}-soft)`} />
          <ellipse cx={end.x} cy={end.y} rx={end.w} ry={end.w * 0.55} fill="#7a5233" />
        </g>

        {sprigs.map((s) => (
          <Sprig key={`${s.y}-${W}-${H}`} progress={progress} trunk={trunk} H={H} {...s} />
        ))}
      </svg>
    </div>
  );
}