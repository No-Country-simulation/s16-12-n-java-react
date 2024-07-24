import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import logo from '../assets/logo.png';
import { Button } from '@/components/ui/button';
import useAuthStore from '@/store/authStore';
import SearchBar from './SearchBar';

const NavBar = () => {
  const { logout, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada exitosamente');
    navigate('/auth/login');
  };
  return (
    <nav className='flex items-center justify-between p-6 bg-palette_primary shadow-md font-bold text-palette_white'>
      <div className='w-9/12 mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='h-5 w-auto' />
          </Link>
          <SearchBar />
        </div>
        <div className='flex items-center space-x-4'>
          {isAuthenticated() ? (
            <div className='flex items-center space-x-4 '>
              <Link to='/dashboard' className='hover:text-gray-600 '>
                Dashboard
              </Link>
              <Link to='/perfil' className='hover:text-gray-600'>
                Perfil
              </Link>
              <Link to='/tareas' className='hover:text-gray-600'>
                Mis Tareas
              </Link>
              <Button onClick={handleLogout} className='bg-palette_secondary text-palette_white font-bold'>
                Logout
              </Button>
            </div>
          ) : (
            <div className='flex items-center space-x-4 '>
              <Link to='/' className='hover:text-gray-600 '>
                Inicio
              </Link>
              <Link to='/about' className='hover:text-gray-600'>
                Nosotros
              </Link>
              <Button asChild className='bg-palette_secondary text-palette_white font-bold'>
                <Link to='/auth/login'>Login</Link>
              </Button>
              <Button asChild className='bg-palette_white text-palette_dark font-bold hover:text-white'>
                <Link to='/auth/register'>Registrar</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
