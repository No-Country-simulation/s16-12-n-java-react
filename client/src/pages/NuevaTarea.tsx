
import { Image, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const NuevaTarea = () => {
  return (
    <>
    <div className='w-full bg-fondoNota h-screen content-center'>
      <form className='flex bg-white flex-col ml-48 w-3/4 pb-24'>
        <h1 className='text-4xl text-black text-left pl-32 pt-16 pb-12'>
          Titulo de la tarea
        </h1>
        <div className='text-left pl-32'>
          <h4 className='flex text-xl mb-1'>
            Descripción detallada de lo que se necesita
          </h4>
          <input
            type='text'
            className='w-11/12 border pl-2 text-start rounded-xl border-black h-40'
            placeholder='Necesito un logo moderno...'
          />
        </div>
        <div className='mt-4 text-left pl-32 w-11/12 '>
          <h4 className='text-xl mb-1'>Imagen</h4>
          <div className='flex flex-row  border pl-1 text-left rounded-xl border-black h-10 relative content-center'>
            <Image />
            <input
              type='text'
              placeholder='Subir imagen...'
              className='pl-3 pr-1'
            />
            <Upload />
          </div>
        </div>
        <div className='mt-4 text-left pl-32'>
          <h4 className='text-xl mb-1'>Plazo</h4>
          <input
            type='text'
            className='w-11/12 border pl-2 text-start rounded-xl border-black h-10'
            placeholder='Escribir una fecha de plazo'
          />
        </div>
        <div className='mt-4 text-left pl-32'>
          <h4 className='text-xl mb-1'>Presupuesto</h4>
          <input
            type='number'
            className='w-11/12 border pl-2 text-start rounded-xl border-black h-10'
            placeholder='Escribe cuánto estás dispuesto a pagar por el trabajo'
          />
        </div>
        <div className='flex justify-center'>
          <Link to='/'>
            <button className='text-white text-xl bg-black my-8 w-60 p-2 border rounded-xl'>
              Publicar nueva tarea
            </button>
          </Link>
        </div>
      </form>
    </div>
    </>
  );
};
export default NuevaTarea;
