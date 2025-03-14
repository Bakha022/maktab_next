'use client';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'Jan', value: 100000 },
  { name: 'Feb', value: 120000 },
  { name: 'Mar', value: 180000 },
  { name: 'Apr', value: 160000 },
  { name: 'May', value: 140000 },
  { name: 'Jun', value: 170000 },
  { name: 'Jul', value: 200000 },
];

const Chart = () => {
  return (
    <div>
      <div>
        
      </div>
      <div
        style={{
          // width: '100%',
          height: 243,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="0"
              stroke="rgba(0, 0, 0, 0.1)"
            />

            <XAxis
              padding={{ left: 10, right: 10 }}
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickCount={5}
              domain={['auto', dataMax => dataMax * 1.2]}
              hide
            />
            <Tooltip cursor={false} content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#007BFF"
              strokeWidth={2}
              dot={{ r: 6, stroke: '#007BFF', strokeWidth: 2 }}
              activeDot={<CustomActiveDot />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: 'white',
          padding: '12px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        <p className="text-[#C7C7C7] text-sm font-normal font-inter leading-5">
          15 Aug 2022
        </p>
        <p className="text-base font-inter font-medium leading-6">
          {payload[0].value.toLocaleString()} so’m
        </p>
      </div>
    );
  }
  return null;
};

const CustomActiveDot = props => {
  const { cx, cy } = props;
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
        height={248 - cy}
        fill="url(#customGradient)"
        rx="4"
      />

      <circle cx={cx} cy={cy} r={6} fill="#007BFF" />
    </g>
  );
};

export default Chart;
