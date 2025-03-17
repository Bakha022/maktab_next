import Map from '@/components/cards/Map';
import ContactList from '@/components/lists/ContactList';
import Explanation from '@/components/Titles/Explanation';

const Contact = () => {
  const data = [
    {
      icon: '/email.svg',
      title: 'Email',
      subtitle: 'Our friendly team is here to help.',
      link: 'hi@untitledui.com',
    },
    {
      icon: '/location.svg',
      title: 'Office',
      subtitle: 'Come say hello at our office HQ.',
      link: '100 Smith Street Collingwood VIC 3066 AU',
    },
    {
      icon: '/call.svg',
      title: 'Phone',
      subtitle: 'Mon-Fri from 8am to 5pm.',
      link: '+1 (555) 000-0000',
    },
  ];

  return (
    <div id="contact" className="my-20">
      <Explanation
        title={'Biz bilan boglaning'}
        subtitle={'Kontaktimiz'}
        description={
          'Bizning do’stona jamoamiz sizni barcha savollaringizga tezda javob beradi'
        }
      />
      <div className="block tablet:grid tablet:grid-cols-3 gap-12 tablet:gap-16 mt-16">
        <div className="tablet:col-span-1">
          {data.map((item, key) => (
            <ContactList
              key={key}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
            />
          ))}
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
