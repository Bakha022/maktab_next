import Header from '@/containers/Header';
import News from '@/containers/News';
import Statstic from '@/containers/Statstic';
import UsefulLinks from '@/containers/UsefulLinks';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <News />
      <Statstic />
      <UsefulLinks />
    </div>
  );
};

export default HomePage;
