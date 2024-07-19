import { Link } from 'react-router-dom';
import { Image, Upload } from 'lucide-react';

const NuevaPropuestaDetallada = () => {
  return (
    <div className='flex w-full h-screen bg-fondoNota justify-center'>
      <div className='flex flex-col w-2/3 bg-white m-20 text-black pt-16'>
        <div className='flex flex-row content-center justify-between'>
          <h1 className='text-left pl-24 text-4xl my-4'>Título de la Tarea</h1>
          <Link to='/NuevaTarea'>
            <button className='my-4 pr-24'>
              <h2 className='text-xl text-right '>X</h2>
            </button>
          </Link>
        </div>
        <div className='px-24'>
          <h2 className='py-2'>Descripción detallada de lo que se necesita</h2>
          <h2 className='border border-black pl-4 p-2 pt-4 rounded-xl pb-12'>
            Loren Ipsum Ebis vendae eaqui solupta turera prepe parum ut estrum,
            cus as nient aut aut pa nost, consed ut reroribus ex ea dolor as
            secestrum qui con preprae sequam ipsaeperum is ipsamus aectibustior
            accae perovit quas as modipsunt ut volorro beatemolenis veremporum
            quianda perchil es quam eum. Loren Ipsum Ebis vendae eaqui solupta
            turera prepe parum ut estrum, cus as nient aut aut pa nost, consed
            ut reroribus ex ea dolor as secestrum qui con preprae sequam
            ipsaeperum is ipsamus aectibustior accae perovit quas as modipsunt
            ut volorro beatemolenis veremporum quianda perchil es quam eum.
          </h2>
        </div>
        <div className='px-24'>
          <h2 className='py-3'>Imagen</h2>
          <div className='flex flex-row items-center border border-black pl-4 p-2 rounded-xl'>
            <Image />
            <h2 className='px-4'>Subir nueva imagen</h2>
            <Upload />
          </div>
        </div>
        <div className='px-24'>
          <h2 className='py-3'>Plazo</h2>
          <h2 className='flex flex-row items-center border border-black pl-4 p-2 rounded-xl'>
            Lorem ipsum dolor
          </h2>
        </div>
        <div className='px-24'>
          <h2 className='py-3'>Presupuesto</h2>
          <h2 className='flex flex-row items-center border border-black pl-4 p-2 rounded-xl'>
            USD$00.00
          </h2>
        </div>
        <div className='flex justify-center'>
          <Link to='/NuevaTarea'>
            <button className='text-white text-xl bg-black mt-24 mb-8 w-60 p-2 border rounded-xl'>
              Publicar nueva edición
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NuevaPropuestaDetallada;
