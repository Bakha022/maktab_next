import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center gap-5 items-center mt-[200px]">
        <h1 className="text-center font-inter font-semibold text-4xl">
          Bunday sahifa topilmadi
        </h1>
        <Link href={'/'}>
          <Button className="font-inter font-semibold bg-blue-900 text-base leading-6">
            Asosiy Sahifaga o'tish
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
