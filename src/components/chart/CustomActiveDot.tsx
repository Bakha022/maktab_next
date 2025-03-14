import { DotProps } from 'recharts';

const CustomActiveDot: React.FC<DotProps> = ({ cx = 0, cy = 0 }) => {
  return (
    <g>
      {/* Vertikal Shaffof Gradient */}
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="customGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 144, 255, 0.4)" />
            <stop offset="80%" stopColor="rgba(0, 144, 255, 0)" />
          </linearGradient>
        </defs>
      </svg>

      <rect
        x={cx - 10}
        y={cy - 40}
        width={20}
        height={Math.max(248 - cy, 0)}
        fill="url(#customGradient)"
        rx="4"
      />

      <circle cx={cx} cy={cy} r={6} fill="#007BFF" />
    </g>
  );
};

export default CustomActiveDot;
