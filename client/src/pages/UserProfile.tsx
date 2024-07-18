import { Edit2, Edit2Icon, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const UserProfile = () => {
  return (
    <main className='max-w-7xl mx-auto md:px-4 px-8 my-10'>
      <div className='flex justify-between mb-5'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-3 items-center'>
            <h1 className='text-2xl font-bold'>Gestión de perfil</h1>
            <Edit2 className='w-5' />
          </div>
          <p>Nombre: Georgina Canales</p>
          <p>Email: gcanalesz@miemail.com</p>
          <p>Teléfono: +54 11 1234-5678</p>
          <div className='flex gap-3 items-center'>
            <h1 className='text-xl font-bold'>Activar perfil como frelance</h1>
            <Edit2 className='w-5' />
          </div>
          <p>Rol/Especialidad: Diseñador Gráfico</p>
          <p>Portfolio: https://gcanales.portfol.io</p>
          <p>Habilidades: UI, Photoshop, Figma</p>
          <p>Experiencia: 5 años</p>
          <p>Disponibilidad: Inmediata</p>
          <div className='flex gap-3 items-center'>
            <h1 className='text-xl font-bold'>
              Activar vista de perfil para los empleadores
            </h1>
            <Edit2 className='w-5' />
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            alt=''
            className='w-32'
          />
          <Edit2Icon />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-3 items-center'>
          <h1 className='text-2xl font-bold'>Descripción</h1>
          <Edit2 className='w-5' />
        </div>
        <Card className='p-4'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Card>
        <div>
          <h1 className='text-2xl font-bold'>Método de pago</h1>
        </div>
        <Card className='p-4'>
          <p className='mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button variant='outline' className='flex gap-2 items-center'>
            <PlusIcon /> Agregar método de pago
          </Button>
        </Card>
        <div className='flex gap-3 items-center'>
          <h1 className='text-2xl font-bold'>Información de contacto</h1>
          <Edit2 className='w-5' />
        </div>
        <Card className='p-4'>
          <p>User id: emailQemail.com</p>
          <p>Zona horaria: GMT-3 Argentina (BA DF SC TF)</p>
          <p>País: Argentina</p>
          <p>Dirección 1: Calle Los Olivos 678</p>
          <p>Dirección 2: Edificio 24 int. 305</p>
          <p>Ciudad: Buenos Aires</p>
          <p>Provincia: CABA</p>
          <p>Código postal/ZIP: 0000000</p>
        </Card>
        <div className='mt-5 flex w-full justify-center gap-4'>
          <Button>Guardar Cambios</Button>
          <Button variant='outline'>Desechar Cambios</Button>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
