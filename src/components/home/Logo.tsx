import type { CSSProperties } from 'react';

/** Placeholder logo: dark leaf badge, gold tree and wordmark. Replace with your real logo later. */
export default function NowalLogo({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      style={style}
      role="img"
      aria-label="Nowal NatureCare logo"
    >
      <path
        d="M14 104 C52 14 200 -6 304 60 C316 84 304 124 292 144 C200 206 74 198 14 104Z"
        fill="#14261b"
        stroke="#3e8a4f"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* tree */}
      <g fill="#d9b45a" stroke="#d9b45a" strokeLinecap="round">
        <circle cx="96" cy="74" r="22" stroke="none" />
        <circle cx="77" cy="90" r="16" stroke="none" />
        <circle cx="115" cy="90" r="16" stroke="none" />
        <path d="M96 96 V134" strokeWidth="5" fill="none" />
        <path d="M96 128 C86 138 76 140 68 152 M96 128 C106 138 116 140 124 152 M96 134 V154" strokeWidth="3" fill="none" />
      </g>
      {/* wordmark */}
      <text x="138" y="108" fontFamily="'Playfair Display', Georgia, serif" fontStyle="italic" fontSize="54" fill="#d9b45a">
        Nowal
      </text>
      <text x="141" y="130" fontFamily="Georgia, serif" fontSize="12" letterSpacing="5" fill="#e9dfc2">
        NATURECARE
      </text>
    </svg>
  );
}