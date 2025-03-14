import Navbar from '@/components/Navbar';
import Heroexport from './Hero';

const Header = () => {
  return (
    <div
      style={{ backgroundImage: "url('/bg.png')" }}
      className="bg-center bg-cover bg-no-repeat"
    >
      <Navbar />
      <Heroexport />
    </div>
  );
};

export default Header;
