import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Wrap the home sections in <VineTrail>. A single vine starts where the hero logo lands,
 * runs down the page edges, swoops across at every section boundary and grows as you scroll.
 * Leaves sprout when the vine reaches them. Hidden below 1024px.
 */

const SAMPLE = 6; // px between length samples
const COLORS = ['#2f6b3f', '#3e8a4f', '#5aa35f', '#27553a'];

interface Pt { x: number; y: number }
interface Leaf { len: number; x: number; y: number; angle: number; scale: number; color: string; variant: number }
interface Geometry { d: string; width: number; height: number; length: number; ys: number[]; leaves: Leaf[] }

function buildPath(pts: Pt[]) {
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    const my = (a.y + b.y) / 2;
    d += ` C${a.x} ${my} ${b.x} ${my} ${b.x} ${b.y}`;
  }
  return d;
}

function analyse(d: string) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('style', 'position:absolute;visibility:hidden;width:0;height:0');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  svg.appendChild(path);
  document.body.appendChild(svg);

  const length = path.getTotalLength();
  const ys: number[] = [];
  for (let l = 0; l <= length; l += SAMPLE) ys.push(path.getPointAtLength(l).y);

  const leaves: Leaf[] = [];
  let k = 0;
  for (let l = 160; l < length - 40; l += 210 + ((k * 53) % 90)) {
    const a = path.getPointAtLength(l);
    const b = path.getPointAtLength(l + 2);
    const ang = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
    const dir = k % 2 ? 1 : -1;
    leaves.push({
      len: l,
      x: a.x,
      y: a.y,
      angle: ang + dir * (55 + ((k * 17) % 25)),
      scale: 0.9 + ((k * 37) % 40) / 100,
      color: COLORS[k % COLORS.length],
      variant: k % 4,
    });
    k++;
  }

  document.body.removeChild(svg);
  return { length, ys, leaves };
}

export default function VineTrail({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [geo, setGeo] = useState<Geometry | null>(null);
  const [live, setLive] = useState({ drawn: 0, x: 0, y: 0 });

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const W = wrap.offsetWidth;
    const H = wrap.offsetHeight;
    const kids = Array.from(wrap.children).filter((c): c is HTMLElement => c instanceof HTMLElement);
    if (W < 1024 || kids.length < 3) {
      setGeo(null);
      return;
    }

    const vh = Math.max(window.innerHeight, 600);
    const hero = kids[0];
    const startY = hero.offsetTop + hero.offsetHeight - vh * 0.16; // where the logo lands
    const pad = Math.min(56, Math.max(22, W * 0.035));
    const xs = [pad, W - pad];
    let side = 0;
    let curY = startY + 260;

    const pts: Pt[] = [
      { x: W * 0.08, y: startY },
      { x: xs[side], y: curY },
    ];

    for (let i = 1; i < kids.length; i++) {
      const el = kids[i];
      const bottom = el.offsetTop + el.offsetHeight;
      const last = i === kids.length - 1;

      if (last) {
        const endY = Math.min(H - 40, bottom - 80);
        for (let y = curY + 420; y < endY - 200; y += 420) {
          pts.push({ x: xs[side] + (pts.length % 2 ? 16 : -16) * (side ? -1 : 1), y });
        }
        if (endY > pts[pts.length - 1].y + 40) pts.push({ x: xs[side], y: endY });
        break;
      }

      const swoopTop = Math.max(bottom - 150, curY + 60);
      for (let y = curY + 420; y < swoopTop - 200; y += 420) {
        pts.push({ x: xs[side] + (pts.length % 2 ? 16 : -16) * (side ? -1 : 1), y });
      }
      pts.push({ x: xs[side], y: swoopTop });
      side = 1 - side;
      curY = swoopTop + 300;
      pts.push({ x: xs[side], y: curY });
    }

    const d = buildPath(pts);
    setGeo((prev) => {
      if (prev && prev.d === d && prev.height === H && prev.width === W) return prev;
      return { d, width: W, height: H, ...analyse(d) };
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    const wrap = wrapRef.current;
    if (!wrap) return;
    let raf = 0;
    const again = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    const ro = new ResizeObserver(again);
    ro.observe(wrap);
    window.addEventListener('resize', again);
    window.addEventListener('load', again);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', again);
      window.removeEventListener('load', again);
      cancelAnimationFrame(raf);
    };
  }, [measure]);

  // grow the vine with scroll
  useEffect(() => {
    if (!geo) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const wrap = wrapRef.current;
      const path = pathRef.current;
      if (!wrap || !path) return;

      let drawn = geo.length;
      if (!reduce) {
        const tipY = window.innerHeight * 0.8 - wrap.getBoundingClientRect().top;
        if (tipY < geo.ys[0]) {
          drawn = 0;
        } else {
          let lo = 0;
          let hi = geo.ys.length - 1;
          while (lo < hi) {
            const m = (lo + hi) >> 1;
            if (geo.ys[m] < tipY) lo = m + 1;
            else hi = m;
          }
          drawn = Math.min(geo.length, lo * SAMPLE);
        }
      }
      const pt = path.getPointAtLength(drawn);
      setLive((prev) => (Math.abs(prev.drawn - drawn) < 1 ? prev : { drawn, x: pt.x, y: pt.y }));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [geo]);

  return (
    <div ref={wrapRef} className="home-root relative">
      {children}

      {geo && (
        <svg
          className="absolute top-0 left-0 pointer-events-none z-30"
          width={geo.width}
          height={geo.height}
          viewBox={`0 0 ${geo.width} ${geo.height}`}
          aria-hidden
        >
          <defs>
            <filter id="vine-shadow" x="-20%" y="-5%" width="140%" height="110%">
              <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.25" />
            </filter>
          </defs>

          <path
            ref={pathRef}
            d={geo.d}
            fill="none"
            stroke="#8a5a3c"
            strokeWidth={6}
            strokeLinecap="round"
            strokeDasharray={geo.length}
            strokeDashoffset={geo.length - live.drawn}
            filter="url(#vine-shadow)"
          />
          <path
            d={geo.d}
            fill="none"
            stroke="#c19067"
            strokeOpacity={0.6}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray={geo.length}
            strokeDashoffset={geo.length - live.drawn}
          />

          {geo.leaves.map((lf, i) => {
            const shown = live.drawn >= lf.len;
            return (
              <g key={i} transform={`translate(${lf.x} ${lf.y}) rotate(${lf.angle})`}>
                <g
                  style={{
                    transform: `scale(${shown ? lf.scale : 0})`,
                    transformOrigin: '0px 0px',
                    transition: 'transform 0.8s cubic-bezier(.34,1.56,.64,1)',
                  }}
                >
                  {/* stem */}
                  <path d="M0 0 Q9 -3 17 -2" stroke="#8a5a3c" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                  {/* main leaf */}
                  <g transform="translate(17 -2)">
                    <path d="M0 0 C6 -15 28 -17 44 -3 C30 9 10 11 0 0Z" fill={lf.color} />
                    <path d="M0 0 C6 -15 28 -17 44 -3 C28 -7 10 -5 0 0Z" fill="#8fd18a" fillOpacity="0.5" />
                    <path d="M3 0 C16 -3 30 -3 41 -3" stroke="rgba(255,255,255,.45)" strokeWidth="1" fill="none" />
                    <path d="M12 -2 l6 -5 M21 -3 l7 -5 M12 -1 l7 5 M22 -2 l8 5" stroke="rgba(255,255,255,.22)" strokeWidth="0.8" fill="none" />
                  </g>
                  {/* curling tendril */}
                  {lf.variant === 0 && (
                    <path d="M5 1 c9 7 20 2 16 -8 c-2 -5 -10 -4 -8 2" stroke="#6aa86a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                  )}
                  {/* small opposite leaf */}
                  {lf.variant === 2 && (
                    <g transform="translate(9 1) rotate(75) scale(.6)">
                      <path d="M0 0 C6 -15 28 -17 44 -3 C30 9 10 11 0 0Z" fill="#3e8a4f" />
                      <path d="M0 0 C6 -15 28 -17 44 -3 C28 -7 10 -5 0 0Z" fill="#8fd18a" fillOpacity="0.5" />
                    </g>
                  )}
                  {/* gold bud */}
                  {lf.variant === 3 && <circle cx="4" cy="6" r="3" fill="#d9b45a" />}
                </g>
              </g>
            );
          })}

          {live.drawn > 0 && live.drawn < geo.length && (
            <g>
              <circle cx={live.x} cy={live.y} r={5} fill="#d9b45a" className="vine-tip-ring" />
              <circle cx={live.x} cy={live.y} r={5} fill="#d9b45a" />
            </g>
          )}
        </svg>
      )}
    </div>
  );
}