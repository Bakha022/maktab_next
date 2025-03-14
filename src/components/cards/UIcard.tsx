import Image from 'next/image';
import Link from 'next/link';

interface IProp {
  img: string;
  title: string;
  subtitle: string;
  data: string;
}
const UIcard = ({ img, title, subtitle, data }: IProp) => {
  return (
    <div>
      <Link href={'/'}>
        <Image
          className="w-full"
          height={164}
          width={0}
          priority
          src={img}
          alt={title}
        />
      </Link>
      <div className="flex flex-col h-auto gap-3 sm:h-[164px] mt-6 justify-between">
        <h3 className="font-inter font-semibold text-xl sm:text-2xl leading-[30px] sm:leading-8 line-clamp-2 h-auto sm:min-h-[56px]">
          {title}
        </h3>
        <p className="font-inter font-normal text-base leading-6 text-gray-600">
          {subtitle}
        </p>
        <p className="font-inter font-normal text-sm leading-5 text-gray-600">
          {data}
        </p>
      </div>
    </div>
  );
};

export default UIcard;
