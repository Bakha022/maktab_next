import { CircleCheck } from 'lucide-react';
import style from './Principle.module.css';
interface IProp {
  item: string;
}

const Principle = ({ item }: IProp) => {
  return (
    <div className="flex items-start gap-3">
      <CircleCheck className={style['checkIcon']} color="#00359E" />
      <p className="text:base sm:text-lg leading-7 font-inter font-normal text-gray-600">
        {item}
      </p>
    </div>
  );
};

export default Principle;
