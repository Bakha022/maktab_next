import Image from 'next/image';
import Link from 'next/link';

interface IProp {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
}

const ContactList = ({ title, subtitle, link, icon }: IProp) => {
  return (
    <div className="col-span-1 flex gap-4 items-start mb-12">
      <div>
        <Image
          className="object-cover"
          width={48}
          height={48}
          src={icon}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-gray-900 font-inter font-semibold leading-7 text-xl">
          {title}
        </h3>
        <p className='text-base font-inter font-normal leading-6 text-gray-600='>{subtitle}</p>
        <Link className='text-inter text-base font-semibold leading-6 text-blue-900 max-w-[212px]' href={'/'}>{link}</Link>
      </div>
    </div>
  );
};

export default ContactList;
