import { Link } from 'react-router-dom';

const RevisionDeTareas = () => {
  return (
    <div className='flex w-full h-screen bg-fondoNota items-center justify-center'>
      <div className='flex flex-col w-2/3 bg-white m-20 text-black text-left pl-24 pt-16'>
        <h1 className='text-6xl my-4'>Revisión de Tarea</h1>
        <h2 className='text-4xl my-4'>
          Haz aceptado la propuesta de Juan Pérez
        </h2>
        <h2 className='text-3xl'>para la tarea: Diseño de Logo</h2>
        <h2 className='mt-20 text-3xl'>Trabajo Entregado</h2>
        <ul className='text-xl text-black'>
          <li className='flex flex-row my-6'>Archivo: logo-final.jpg</li>
          <li>Comentarios del freelance: Adjunto diseño final del logo</li>
        </ul>
        <h2 className='mt-20 text-3xl mb-5'>Comentarios del Empleador</h2>
        <div className=' flex flex-col w-4/5 bg-white text-black'>
          <input type='text' />
          <p className='py-4 text-justify px-4 border border-black w-full h-32'>
            Loren Ipsum Ebis vendae eaqui solupta turera prepe parum ut estrum,
            cus as nient aut aut pa nost, consed ut reroribus ex ea dolor as
            secestrum qui con preprae sequam ipsaeperum is ipsamus aectibustior
            accae perovit quas as modipsunt ut volorro beatemolenis veremporum
            quianda perchil es quam eum.
          </p>
        </div>
        <div className='my-20 text-center'>
          <Link to='/'>
            <button className='bg-palette_primary text-white  text-xl border rounded-xl w-1/4 py-2 mx-4'>
              Aceptar Trabajo
            </button>
          </Link>
          <Link to='/'>
            <button className=' border-palette_success bg-white text-palette_success  text-xl border rounded-xl w-1/4 py-2 mx-4'>
              Solicitar Modificacion
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RevisionDeTareas;
