import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAuthStore from '@/store/authStore';
import { UserData } from '@/types/types';
import { RegisterSchema } from '@/validations/authSchema';

const Register = () => {
  const {
    register: registerUser,
    isLoading,
    error,
    clearError,
    isAuthenticated,
  } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<UserData>({ resolver: zodResolver(RegisterSchema) });

  useEffect(() => {
    if (isAuthenticated()) navigate('/');
  }, [isAuthenticated, navigate]);

  const handleInputChange = async (field: any) => {
    await trigger(field);
  };

  const onSubmit: SubmitHandler<UserData> = async (userData) => {
    try {
      await registerUser(userData);
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
            <Label htmlFor='nombre' className='text-start w-full'>
              Nombre y Apellido
            </Label>
            <Input
              type='text'
              id='nombre'
              {...register('nombre')}
              onBlur={() => handleInputChange('nombre')}
              placeholder='Escribe tu nombre completo...'
            />
            {errors.nombre && (
              <p className='text-red-500'>{errors.nombre?.message}</p>
            )}
          </div>
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
            />
            {errors.contrasena && (
              <p className='text-red-500'>{errors.contrasena?.message}</p>
            )}
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='contrasena' className='text-start w-full'>
              Repetir Contraseña
            </Label>
            <Input
              type='password'
              id='confirmPassword'
              {...register('confirmPassword')}
              onBlur={() => handleInputChange('confirmPassword')}
              placeholder='*************'
            />
            {errors.confirmPassword && (
              <p className='text-red-500'>{errors.confirmPassword?.message}</p>
            )}
          </div>
          <Button
            className='bg-[#2C3E50] text-white px-4 py-2 rounded-md'
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : 'Regístrate'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
