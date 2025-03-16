import { FC, ReactNode } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
};
