import Map from '@/components/cards/Map';
import Explanation from '@/components/Explanation';

const Contact = () => {
  return (
    <div className="my-16">
      <Explanation
        title={'Biz bilan bog’laning'}
        subtitle={'Kontaktimiz'}
        description={
          'Bizning do’stona jamoamiz sizni barcha savollaringizga tezda javob beradi'
        }
      />
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
