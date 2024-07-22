import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export const FullWithLayout = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};
