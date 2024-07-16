import { Link } from "react-router-dom"


const AceptarORechazarPropuesta = () => {
    return (
        <div className='flex w-full h-screen bg-fondoNota items-center justify-center'>
            <div className='flex flex-col w-2/3 bg-white m-20 text-black text-left pl-24 pt-16'>
                <h1 className='text-6xl my-4'>Detalles de la propuesta</h1>
                <h2 className='text-4xl my-4'>
                    Tarea 2: Diseño de logo
                </h2>
                <h2 className='text-2xl my-4'>Freelance: Diego Vela</h2>
                <h2 className='my-4 text-2xl'>Habilidades: Diseño gráfico</h2>
                <h2 className='text-2xl my-4'>Experiencia: 5 años</h2>
                <h2 className='my-4 text-2xl'>Presupuesto: USD $150.00</h2>
                <h2 className='text-2xl my-4'>Comentarios: Estoy disponible para comenzar de inmediato</h2>
            
            <div className='my-20 text-center'>
                <Link to='/'>
                    <button className='hover:bg-black hover:text-white border-black bg-white text-black text-xl border rounded-xl w-1/4 py-2 mx-4'>
                        Aceptar
                    </button>
                </Link>
                <Link to='/'>
                    <button className='hover:bg-black hover:text-white border-black bg-white text-black  text-xl border rounded-xl w-1/4 py-2 mx-4'>
                        Rechazar
                    </button>
                </Link>
            </div>
            </div>
        </div>


    )
}

export default AceptarORechazarPropuesta
