import Chart from '@/components/Chart';
import Explanation from '@/components/Explanation';

const Statstic = () => {
  return (
    <div className="my-16">
      <Explanation
        title={'Bizni aniq sonlarimiz bilan tanishing'}
        subtitle={'Statistika'}
        description={
          'Barcha malumotlar faktga asoslangan bolib barchasi aniq va ravshan sonlar hisoblanadi, siz bizni platformaga yanada yaxshi baho berishingiz uchunam shu . narsa qilinga'
        }
      />
      <Chart />
    </div>
  );
};

export default Statstic;
