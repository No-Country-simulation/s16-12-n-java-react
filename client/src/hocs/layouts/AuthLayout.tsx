import { Outlet } from 'react-router-dom';
import NavBar from '@/components/NavBar';

export const AuthLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
