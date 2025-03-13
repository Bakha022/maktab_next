import Navbar from '@/components/Navbar';
import Heroxport from './Hero';

const Header = () => {
  return (
    <div
      style={{ backgroundImage: "url('/bg.png')" }}
      className="bg-center bg-cover bg-no-repeat"
    >
      <Navbar />
      <Heroxport />
    </div>
  );
};

export default Header;
