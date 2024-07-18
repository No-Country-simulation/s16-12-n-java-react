import { Link } from "react-router-dom";
import { Pencil, Image } from 'lucide-react';

const PropuestaDetallada = () => {
    return (
        <>
            <div className='flex w-full h-screen bg-fondoNota items-center justify-center'>
                <div className='flex flex-col w-2/3 bg-white m-20 text-black text-left pl-24 py-16'>
                    <div className="flex justify-between pr-16">
                        <div className="flex flex-row items-center">
                            <h1 className='text-6xl my-4'>Título de la tarea</h1>
                            <Link to='/ModificarPropuesta'>
                                <button className="content-center ml-4">
                                    <Pencil />
                                </button>
                            </Link>
                        </div>
                        <Link to='/NuevaTarea'>
                            <button className="content-center ml-4">
                                <h3 className="text-4xl">X</h3>
                            </button>
                        </Link>
                    </div>
                    <h2 className='text-2xl my-4'>Descripción:</h2>
                    <div className="flex flex-row">
                        <h2 className='text-2xl pr-16'>
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            <Link to='/'>
                                <button className="content-center ml-4">
                                    <Pencil />
                                </button>
                            </Link>
                        </h2>
                    </div>
                    <h2 className='mt-20 text-2xl'>Imagen:</h2>
                    <div className="flex flex-row">
                        <div className="border-black border-2 w-48 h-24 bg-fondoNota content-center px-20 mt-4">
                            <Image />
                        </div>
                        <Link to='/'>
                            <button className="content-center ml-4">
                                <Pencil />
                            </button>
                        </Link>
                    </div>
                    <h2 className='text-2xl mt-4'>Plazo:</h2>
                    <div className="flex flex-row">
                        <h2 className='text-2xl pt-2'>Lorem ipsum dolor</h2>
                        <Link to='/'>
                            <button className="content-center ml-4 ">
                                <Pencil />
                            </button>
                        </Link>
                    </div>
                    <h2 className='text-2xl mt-4'>Presupuesto:</h2>
                    <div className="flex flex-row">
                        <h2 className='text-2xl pt-2'>USD$00.00</h2>
                        <Link to='/'>
                            <button className="content-center ml-4 ">
                                <Pencil />
                            </button>
                        </Link>
                    </div>
                    <div className='my-40 text-center'>
                        <Link to='/propuestas'>
                            <button className='bg-black text-white text-xl border rounded-xl w-1/4 py-2'>
                                No realizar cambios
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropuestaDetallada;
