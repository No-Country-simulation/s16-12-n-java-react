import { Link } from 'react-router-dom';

const TareaRechazada = () => {
  return (
    <div className='flex w-full h-screen bg-fondoNota items-center justify-center'>
      <div className='flex flex-col w-2/3 bg-white m-20 text-black text-left pl-24 py-16'>
        <h1 className='text-6xl my-4'>Propuesta Rechazada</h1>
        <h2 className='text-4xl my-4'>
          Haz rechazado la propuesta de Juan Pérez
        </h2>
        <h2 className='text-3xl'>para la tarea: Diseño de Logo</h2>
        <h2 className='mt-20 text-3xl'>Freelance: Juan Pérez</h2>
        <ul className='text-xl text-black'>
          <li className='flex flex-row my-6'>Habilidades: Diseño gráfico</li>
          <li>Presupuesto: USD$150.00</li>
        </ul>
        <div className='my-40 text-center'>
          <Link to='/propuestas'>
            <button className='bg-palette_primary text-white text-xl border rounded-xl w-1/4 py-2'>
              Regresar a la lista de Propuestas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TareaRechazada;
