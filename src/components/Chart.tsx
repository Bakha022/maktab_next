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
  { name: 'Jan', value: 0 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 100 },
  { name: 'Apr', value: 70 },
  { name: 'May', value: 150 },
  { name: 'Jun', value: 200 },
  { name: 'Jul', value: 180 },
];

const Chart = () => {
  return (
    <div className="border px-3 py-4 rounded-2xl sm:p-0 sm:border-none">
      <div
        style={{
          height: 243,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
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
              label={{
                value: 'Aktiv foydalanuvchilar',
                angle: -90,
                position: 'center',
                fontSize: 12,
                fill: '#475467',
                dx: -20,
                fontWeight: '500',
                fontFamily: 'Inter',
              }}
              tickCount={5}
              dataKey={'value'}
              domain={['auto', dataMax => dataMax * 1.2]}
              tick={{
                fontSize: '12px',
                fontWeight: '400',
                fontFamily: 'Inter',
              }}
              axisLine={false}
              tickLine={false}
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
          background: '#00359E',
          padding: '8px 12px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}
      >
        {/* <p className="text-[#C7C7C7] text-sm font-normal font-inter leading-5">
          15 Aug 2022
        </p> */}
        <p className="text-[12px] font-inter font-semibold leading-4.5 text-white">
          {payload[0].value.toLocaleString()} foydalanuvchi
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
