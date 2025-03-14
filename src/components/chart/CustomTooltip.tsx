import { TooltipProps } from 'recharts';

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length && payload[0].value !== undefined) {
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
        <p className="text-[12px] font-inter font-semibold leading-4.5 text-white">
          {payload[0].value.toLocaleString()} foydalanuvchi
        </p>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
