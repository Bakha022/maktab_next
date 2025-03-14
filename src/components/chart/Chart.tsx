'use client';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';

import CustomActiveDot from './CustomActiveDot';
import CustomTooltip from './CustomTooltip';
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
              domain={['auto', (dataMax: number) => dataMax * 1.2]}
              tick={{
                fontSize: '12px',
                fontWeight: '400',
                fontFamily: 'Inter',
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={false}
              content={props => (
                <CustomTooltip {...(props as TooltipProps<number, string>)} />
              )}
            />
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

export default Chart;
