import UsefulLinkContent from '@/components/contents/UsefulLinkContent';
import Explanation from '@/components/Explanation';

const UsefulLinks = () => {
  const data = [
    {
      icon: '/Ficon.svg',
      title: 'Share team inboxes',
      subtitle:
        'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      principles: [
        'Leverage automation to move fast',
        'Always give customers a human to chat to',
        'Automate customer support and close leads faster',
      ],
      left: false,
      img: '/MockupWrap.png',
    },
    {
      icon: '/iconOne.svg',
      title: 'Deliver instant answers',
      subtitle:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      principles: [
        'Keep your customers in the loop with live chat',
        'Embed help articles right on your website',
        'Customers never have to leave the page to find an answer',
      ],
      left: true,
      img: '/MockupOne.png',
    },
    {
      icon: '/iconTwo.svg',
      title: 'Kitob ko’roq o’qing',
      subtitle:
        'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      principles: [
        'Filter, export, and drilldown on the data quickly',
        'Save, schedule, and automate reports to your inbox',
        'Connect the tools you already use with 100+ integrations',
      ],
      left: false,
      img: '/MockupTwo.png',
    },
  ];
  return (
    <div id='links' className="my-20">
      <Explanation
        title={'Siz uchun yangi havolalar'}
        subtitle={'Foydali havolalar'}
        description={
          'Siz bilim olishingiz uchun barcha kerakli sizga foydali boladigan havolalarni joyladik, batafsil o’rganib o’zingizni rivojlantiring'
        }
      />
      {data.map((item, index) => (
        <UsefulLinkContent
          key={index}
          title={item.title}
          icon={item.icon}
          subtitle={item.subtitle}
          principles={item.principles}
          left={item.left}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default UsefulLinks;
