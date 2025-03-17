import UIcard from '@/components/cards/UIcard';
import Pagination from '@/components/Pagination/PaginationFooter';
import Title from '@/components/Titles/Title';

const AllNews = () => {
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
  return (
    <>
      <Title text="All blog posts" />
      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <UIcard
            key={index}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            data={item.data}
            link={index}
          />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default AllNews;
