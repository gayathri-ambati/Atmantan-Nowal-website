interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const wordmarkColor = variant === 'light' ? '#F6F2E9' : '#263D30';
  const subtitleColor = variant === 'light' ? '#DFA900' : '#A5B39A';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LotusMark className="w-8 h-8 flex-shrink-0" />
      <div className="flex flex-col leading-none">
        <span
          className="font-serif text-2xl tracking-[0.15em] font-medium"
          style={{ color: wordmarkColor }}
        >
          NOWAL
        </span>
        <span
          className="text-[0.55rem] font-sans font-semibold tracking-[0.3em] uppercase mt-0.5"
          style={{ color: subtitleColor }}
        >
          NatureCare
        </span>
      </div>
    </div>
  );
}

function LotusMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M24 4 C20 12, 18 20, 18 28 C18 32, 20 36, 24 38 C28 36, 30 32, 30 28 C30 20, 28 12, 24 4 Z"
          fill="#DFA900"
          opacity="0.9"
        />
        <path
          d="M10 14 C14 18, 16 24, 16 30 C16 34, 18 37, 22 38 C18 36, 14 32, 12 26 C11 22, 10 18, 10 14 Z"
          fill="#DFA900"
          opacity="0.65"
        />
        <path
          d="M38 14 C34 18, 32 24, 32 30 C32 34, 30 37, 26 38 C30 36, 34 32, 36 26 C37 22, 38 18, 38 14 Z"
          fill="#DFA900"
          opacity="0.65"
        />
        <path
          d="M4 24 C10 26, 16 28, 22 32 C18 30, 12 28, 6 26 C5 25, 4 24, 4 24 Z"
          fill="#DFA900"
          opacity="0.4"
        />
        <path
          d="M44 24 C38 26, 32 28, 26 32 C30 30, 36 28, 42 26 C43 25, 44 24, 44 24 Z"
          fill="#DFA900"
          opacity="0.4"
        />
        <circle cx="24" cy="40" r="2" fill="#DFA900" />
      </g>
    </svg>
  );
}
