import { useEffect, useRef, useState, type CSSProperties, type Ref } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, UserPlus, ClipboardCheck, Stethoscope, Sprout, TrendingUp, RefreshCcw } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useInView } from '@/hooks/useInView';
import { cycleSteps } from '@/data/homeContent';

const icons = [UserPlus, ClipboardCheck, Stethoscope, Sprout, TrendingUp, RefreshCcw];
const n = cycleSteps.length;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

/* ───────── botanical bits ───────── */

const LEAF = 'M0 0 C5 -11 20 -13 30 -2 C21 7 7 8 0 0Z';
const LEAF_HL = 'M0 0 C5 -11 20 -13 30 -2 C20 -5 8 -4 0 0Z';

function MiniLeaf({ fill = '#2f6b3f' }: { fill?: string }) {
  return (
    <g>
      <path d={LEAF} fill={fill} />
      <path d={LEAF_HL} fill="#8fd18a" fillOpacity="0.55" />
      <path d="M2 0 C12 -2 22 -3 28 -2" stroke="rgba(255,255,255,.45)" strokeWidth="0.8" fill="none" />
    </g>
  );
}

/** Branch with leaves that grows out of the spine when the vine reaches it. */
function Sprig({ show, flip = false }: { show: boolean; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 90 44"
      width="90"
      height="44"
      className="overflow-visible"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden
    >
      <g
        style={{
          transform: `scale(${show ? 1 : 0})`,
          transformOrigin: '0px 22px',
          transition: 'transform .9s cubic-bezier(.34,1.56,.64,1)',
        }}
      >
        <path d="M0 22 C18 22 30 16 46 14 S72 10 84 14" stroke="#8a5a3c" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <g transform="translate(24 19) rotate(-42)"><MiniLeaf /></g>
        <g transform="translate(30 19) rotate(38) scale(.8)"><MiniLeaf fill="#3e8a4f" /></g>
        <g transform="translate(50 13) rotate(-35) scale(.9)"><MiniLeaf fill="#27553a" /></g>
        <g transform="translate(58 13) rotate(40) scale(.75)"><MiniLeaf /></g>
        <g transform="translate(84 14) rotate(-8) scale(1.1)"><MiniLeaf fill="#3e8a4f" /></g>
        <circle cx="70" cy="11" r="2.6" fill="#d9b45a" />
      </g>
    </svg>
  );
}

/** Ring of leaves that blooms around a step's medallion. */
function Wreath({ bloom }: { bloom: boolean }) {
  const count = 12;
  return (
    <svg viewBox="-64 -64 128 128" className="absolute -inset-5 w-[calc(100%+2.5rem)] h-[calc(100%+2.5rem)] overflow-visible" aria-hidden>
      <circle
        r="31"
        fill="none"
        stroke="#8a5a3c"
        strokeWidth="1.6"
        style={{ opacity: bloom ? 0.55 : 0.15, transition: 'opacity .8s ease' }}
      />
      {Array.from({ length: count }).map((_, k) => {
        const alt = k % 2 === 1;
        return (
          <g key={k} transform={`rotate(${k * (360 / count)}) translate(31 0)`}>
            <g
              style={{
                transform: `scale(${bloom ? (alt ? 0.78 : 1) : 0}) rotate(${alt ? -20 : 20}deg)`,
                transformOrigin: '0px 0px',
                transition: 'transform .7s cubic-bezier(.34,1.56,.64,1)',
                transitionDelay: `${k * 55}ms`,
              }}
            >
              <MiniLeaf fill={alt ? '#3e8a4f' : '#2f6b3f'} />
            </g>
          </g>
        );
      })}
    </svg>
  );
}

/* ───────── one step ───────── */

function StepRow({
  i,
  reached,
  current,
  liRef,
}: {
  i: number;
  reached: boolean;
  current: boolean;
  liRef: Ref<HTMLLIElement>;
}) {
  const step = cycleSteps[i];
  const Icon = icons[i];
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const flip = i % 2 === 1;

  // slide in from the outside edge, one element after another
  const anim = (ms: number, x = 0, y = 0): CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : `translate(${x}px, ${y}px)`,
    transition: `opacity .8s ease ${ms}ms, transform .9s cubic-bezier(.22,1,.36,1) ${ms}ms`,
  });
  const textX = flip ? -60 : 60;

  return (
    <li ref={liRef} className="relative">
      <div
        ref={ref}
        className="grid grid-cols-[56px_1fr] lg:grid-cols-[1fr_96px_1fr] gap-x-4 lg:gap-x-10 gap-y-6 items-center py-10 lg:py-14 lg:min-h-[440px]"
      >
        {/* medallion */}
        <div className="col-start-1 row-start-1 row-span-2 lg:row-span-1 lg:col-start-2 flex justify-center self-start lg:self-center">
          <div className="relative w-24 h-24 flex items-center justify-center scale-[.62] lg:scale-100 z-10">
            <Wreath bloom={reached} />
            <div
              className={`relative w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${
                reached ? 'bg-forest-700 border-gold-400 text-gold-400' : 'bg-ivory border-forest-700/25 text-forest-700/50'
              } ${current ? 'anim-node-pulse' : ''}`}
            >
              <Icon size={22} />
            </div>
          </div>
        </div>

        {/* polaroid */}
        <div className={`col-start-2 row-start-1 w-full max-w-sm ${flip ? 'lg:col-start-3 lg:justify-self-start' : 'lg:col-start-1 lg:justify-self-end'}`}>
          <div className="relative" style={anim(0, flip ? 110 : -110, 20)}>
            <div
              className="relative bg-white p-2.5 pb-9 shadow-2xl transition-transform duration-700 hover:rotate-0"
              style={{ transform: `rotate(${flip ? 2.5 : -2.5}deg)` }}
            >
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-gold-400/45 -rotate-3"
                aria-hidden
              />
              <img src={step.image} alt={step.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <p className="absolute bottom-2 inset-x-0 text-center font-serif italic text-sm text-charcoal/60">{step.title}</p>
            </div>
          </div>
        </div>

        {/* explanation */}
        <div
          className={`relative col-start-2 row-start-2 lg:row-start-1 w-full max-w-md ${
            flip ? 'lg:col-start-1 lg:justify-self-end lg:text-right' : 'lg:col-start-3 lg:justify-self-start'
          }`}
        >
          <span
            className={`pointer-events-none absolute -top-14 ${flip ? 'lg:right-0' : 'lg:left-0'} right-0 font-serif text-[8rem] leading-none text-transparent select-none`}
            style={{ WebkitTextStroke: '1px rgba(185,148,60,.35)', ...anim(200, 0, 30) }}
            aria-hidden
          >
            {String(i + 1).padStart(2, '0')}
          </span>

          <p className="relative text-xs tracking-wider text-gold-500" style={anim(250, textX)}>
            Step {i + 1} of {n}
          </p>
          <h3 className="relative font-serif text-3xl md:text-4xl text-forest-700 mt-2 leading-tight" style={anim(400, textX)}>
            {step.title}
          </h3>
          <p className="relative mt-4 text-charcoal/70 leading-relaxed" style={anim(550, textX)}>
            {step.detail}
          </p>
          <ul className="relative mt-5 space-y-2">
            {step.points.map((pt, k) => (
              <li
                key={pt}
                className={`flex items-center gap-2.5 text-sm text-charcoal/75 ${flip ? 'lg:flex-row-reverse' : ''}`}
                style={anim(750 + k * 140, textX * 0.6)}
              >
                <span className="w-5 h-5 rounded-full bg-forest-700 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Check size={12} strokeWidth={3} />
                </span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

/* ───────── section ───────── */

export default function HealingCycle() {
  const listRef = useRef<HTMLOListElement>(null);
  const rows = useRef<(HTMLLIElement | null)[]>([]);
  const [fill, setFill] = useState(0);
  const [reached, setReached] = useState(-1);
  const [marks, setMarks] = useState<{ y: number; right: boolean }[]>([]);

  useEffect(() => {
    let raf = 0;

    const measure = () => {
      const m: { y: number; right: boolean }[] = [];
      const first = rows.current[0];
      if (first) m.push({ y: first.offsetTop + 30, right: true });
      rows.current.forEach((el, i) => {
        if (!el || i >= n - 1) return;
        const b = el.offsetTop + el.offsetHeight;
        m.push({ y: b - 75, right: i % 2 === 0 }, { y: b + 75, right: i % 2 !== 0 });
      });
      setMarks(m);
    };

    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;
      const line = window.innerHeight * 0.65; // the "reading line"
      const r = list.getBoundingClientRect();
      setFill(clamp(line - r.top, 0, r.height));
      let k = -1;
      rows.current.forEach((el, i) => {
        if (!el) return;
        const b = el.getBoundingClientRect();
        if (b.top + b.height / 2 <= line) k = i;
      });
      setReached(k);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    measure();
    update();
    const ro = new ResizeObserver(() => {
      measure();
      on();
    });
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative bg-ivory py-20 md:py-32 overflow-hidden">
      <div className="container-lux">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">How Healing Works</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-700 leading-[1.15] text-balance">
            The Nowal Healing Cycle
          </h2>
          <p className="mt-4 text-charcoal/60 text-lg leading-relaxed">
            Six steps from your first enquiry to life back home. Scroll to follow the vine through each one.
          </p>
        </Reveal>

        <ol ref={listRef} className="relative mt-12 lg:mt-20">
          {/* the spine: a faint track, and a vine that grows down it as you scroll */}
          <div className="absolute top-0 bottom-0 left-[28px] lg:left-1/2 -translate-x-1/2 w-1 rounded bg-forest-700/10" aria-hidden />
          <div
            className="absolute top-0 left-[28px] lg:left-1/2 -translate-x-1/2 w-1 rounded bg-gradient-to-b from-[#c19067] to-[#8a5a3c]"
            style={{ height: fill }}
            aria-hidden
          />
          {fill > 0 && (
            <span
              className="absolute left-[28px] lg:left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-gold-400 shadow-[0_0_0_4px_rgba(217,180,90,.35)]"
              style={{ top: fill }}
              aria-hidden
            />
          )}

          {/* sprigs sprout along the spine */}
          {marks.map((m, k) => (
            <div
              key={k}
              className={`absolute left-[28px] lg:left-1/2 pointer-events-none ${m.right ? '' : 'hidden lg:block lg:-translate-x-full'}`}
              style={{ top: m.y - 22 }}
              aria-hidden
            >
              <Sprig show={fill > m.y} flip={!m.right} />
            </div>
          ))}

          {cycleSteps.map((s, i) => (
            <StepRow
              key={s.title}
              i={i}
              reached={i <= reached}
              current={i === reached}
              liRef={(el) => {
                rows.current[i] = el;
              }}
            />
          ))}
        </ol>

        <Reveal className="mt-10 text-center">
          <Link to="/plan-your-stay" className="btn-gold">
            Start With Step 1
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}