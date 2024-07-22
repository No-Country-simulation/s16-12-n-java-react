import { useEffect } from 'react';
import { toast } from 'sonner';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAuthStore from '@/store/authStore';
// import { useNavigate } from 'react-router-dom';
import { UserData } from '@/types/types';
import { LoginSchema } from '@/validations/authSchema';

const Login = () => {
  const { login, isLoading, error, clearError, isAuthenticated } =
    useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<UserData>({ resolver: zodResolver(LoginSchema) });

  useEffect(() => {
    if (isAuthenticated()) navigate('/');
  }, [isAuthenticated, navigate]);

  const handleInputChange = async (field: any) => {
    await trigger(field);
  };

  const onSubmit: SubmitHandler<UserData> = async (userData) => {
    try {
      await login(userData);
      reset();
      toast.success('Ingresando al sistema');
      navigate('/');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Error desconocido';
      toast.error(`${errorMessage}`);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
      clearError();
    }
  }, [error, clearError]);

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events
    <div className='h-screen flex justify-center items-center'>
      <Card className='bg-white rounded-lg p-10 flex max-w-2xl w-full'>
        <div className='w-1/2'>
          <h2 className='text-4xl font-bold mb-4 text-[#2C3E50]'>Ingresa</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex justify-center flex-col py-20 gap-3 w-1/2'
        >
          <div className='w-full flex flex-col items-center gap-1.5'>
            <Label htmlFor='email' className='text-start w-full'>
              Email
            </Label>
            <Input
              type='email'
              id='email'
              {...register('email')}
              onBlur={() => handleInputChange('email')}
              placeholder='Escribe tu email...'
              required
            />
            {errors.email && (
              <p className='text-red-500'>{errors.email?.message}</p>
            )}
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='contrasena' className='text-start w-full'>
              Contraseña
            </Label>
            <Input
              type='password'
              id='contrasena'
              {...register('contrasena')}
              onBlur={() => handleInputChange('contrasena')}
              placeholder='*************'
              required
            />
            {errors.contrasena && (
              <p className='text-red-500'>{errors.contrasena?.message}</p>
            )}
          </div>
          <Button
            type='submit'
            className='bg-[#2C3E50] text-white px-4 py-2 rounded-md'
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : 'Ingresa'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
