import Header from '@/containers/Header';
import News from '@/containers/News';
import Statstic from '@/containers/Statstic';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <News />
      <Statstic />
    </div>
  );
};

export default HomePage;
