import Footer from '@/components/Footer';
import Contact from '@/containers/Contact';
import Header from '@/containers/Header';
import News from '@/containers/News';
import Statstic from '@/containers/Statstic';
import UsefulLinks from '@/containers/UsefulLinks';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Header />
        <News />
        <Statstic />
        <UsefulLinks />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
