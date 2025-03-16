import UIcard from '@/components/cards/UIcard';
import Explanation from '@/components/Explanation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const data = [
  {
    img: '/w.png',
    title: 'Direktorlar endi tekinga imtixon topshirishadi',
    subtitle:
      'How do you create compelling presentations that wow your colleagues and impress your managers?',
    data: '20 Jan 2024',
  },
  {
    img: '/p.png',
    title: 'Migrating to Linear 101',
    subtitle:
      'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
    data: '20 Jan 2024',
  },
  {
    img: '/r.png',
    title: 'Barcha malumotlar imtihonda beriladi',
    subtitle:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    data: '20 Jan 2024',
  },
];

const News = () => {
  return (
    <div className="my-20">
      <Explanation
        title={'Yangiliklar bilan tanishing'}
        subtitle={'Yangiliklar'}
        description={"Bu yerda ta'limga oid so'ngi yanligilkar"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-12">
        {data.map((item, index) => (
          <UIcard
            key={index}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            data={item.data}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link href={'/'}>
          <Button className="text-white transition duration-200 bg-[#00359E] hover:bg-[#00359ee9]">
            Barchasi
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default News;
