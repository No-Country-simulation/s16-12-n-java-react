import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import logo from '../assets/Logo.jpeg';
import { Button } from '@/components/ui/button';
import useAuthStore from '@/store/authStore';

const NavBar = () => {
  const { logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada exitosamente');
    navigate('/auth/login');
  };
  return (
    <nav className='flex items-center justify-between p-4 bg-white shadow-md'>
      <div className='flex items-center space-x-4'>
        <img src={logo} alt='Logo' className='h-10 w-auto' />
      </div>
      <div className='flex items-center space-x-4'>
        <Link to='/' className='text-gray-800 hover:text-gray-600'>
          Inicio
        </Link>
        <Link to='/about' className='text-gray-800 hover:text-gray-600'>
          Nosotros
        </Link>
        {isAuthenticated() ? (
          <Button onClick={handleLogout} asChild className='bg-[#2C3E50]'>
            Logout
          </Button>
        ) : (
          <div>
            <Button asChild className='bg-[#2C3E50]'>
              <Link to='/auth/register'>Register</Link>
            </Button>
            <Button asChild className='bg-[#2C3E50]'>
              <Link to='/auth/login'>Login</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
