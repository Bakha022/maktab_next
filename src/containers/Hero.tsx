import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import img from '../assets/images/Image.svg';
import imgRes from '../assets/images/ImageRes.svg';
const Hero = () => {
  return (
    <div className="flex flex-col tablet:flex-row gap-16 tablet:gap-0 tablet:items-center justify-between mt-16 pb-24">
      <div className="flex flex-col gap-6">
        <h1 className="font-inter font-semibold  w-auto lg:w-[712px] leading-[44px] sm:leading-[72px] text-gray-900 text-4xl sm:text-[60px]">
          O’z malakangizni oshiring va rivojlaning
        </h1>
        <p className="font-inter font-normal leading-8 sm:leading-[30px] text-lg sm:text-xl text-gray-800 w-auto tablet:w-[560px]">
          Bu platforma sizni o’zingiz ustingizda ishlashga undaydi va yordam
          beradi, bu orqali siz tez fursatda rivojlanasiz
        </p>
        <Link className="hidden tablet:block" href={'#'}>
          <Button className="text-white transition duration-200 bg-[#00359E] hover:bg-[#00359ee9]">
            Qo&apos;llanma
          </Button>
        </Link>
      </div>
      <div className="right">
        <Image
          className="hidden tablet:block"
          priority
          src={img}
          alt="hero-img"
          width={560}
          height={640}
        />
        <Image
          className="block tablet:hidden"
          priority
          src={imgRes}
          alt="hero-img"
          width={'100%'}
          height={640}
        />
      </div>
    </div>
  );
};

export default Hero;
