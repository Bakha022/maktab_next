import Image from 'next/image';
import Principle from '../lists/Principle';

interface IProp {
  icon?: string;
  title: string;
  subtitle: string;
  principles: string[];
  left: boolean;
  img?: string;
}

const UsefulLinkContent = ({
  icon,
  title,
  subtitle,
  principles,
  left,
  img,
}: IProp) => {

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 gap-10 tablet:gap-16 justify-between items-center mt-10 tablet:mt-[96px] grid-flow-dense">
      <div
        className={`${left ? 'tablet:order-2' : 'tablet:order-1'} flex flex-col gap-4`}
      >
        {icon ? (
          <Image
            height={48}
            width={48}
            src={icon}
            alt={title}
            className="object-contain"
          />
        ) : null}
        <h3 className="font-inter font-semibold  text-2xl sm:text-3xl leading-8 sm:leading-[38px] text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 font-inter font-normal leading-6 sm:leading-7 text-base sm:text-lg ">
          {subtitle}
        </p>
        <div className="flex flex-col gap-2">
          {principles?.map((item, key) => <Principle item={item} key={key} />)}
        </div>
      </div>
      <div className={`${left ? 'tablet:order-1' : 'tablet:order-2'}`}>
        {img ? (
          <Image
            className="w-full tablet:w-auto h-auto"
            width={0}
            height={0}
            src={img}
            alt="img"
          />
        ) : null}
      </div>
    </div>
  );
};

export default UsefulLinkContent;
