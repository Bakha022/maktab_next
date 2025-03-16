import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#252525] pt-16 pb-12">
      <div className="container">
        <div className="flex flex-col gap-12 md:flex-row items-start md:items-center justify-between mb-16">
          <Link href={'/'}>
            <Image
              width={112}
              height={32}
              alt="logo"
              src={'/logoSecondary.svg'}
            />
          </Link>
          <ul className="flex flex-col md:flex-row gap-8">
            <li>
              <Link
                className="text-base font-inter font-semibold left-6 text-white"
                href={'/'}
              >
                Yangiliklar
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-inter font-semibold left-6 text-white"
                href={'/'}
              >
                Statistika
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-inter font-semibold left-6 text-white"
                href={'/'}
              >
                Foydali havolalar
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-inter font-semibold left-6 text-white"
                href={'/'}
              >
                Kontakt
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-inter font-semibold left-6 text-white"
                href={'/'}
              >
                Qo’llanma
              </Link>
            </li>
          </ul>
        </div>
        <p className="pt-8 font-inter text-white font-normal text-base leading-6  border-t-[1px] border-[#F2F4F74D]">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
