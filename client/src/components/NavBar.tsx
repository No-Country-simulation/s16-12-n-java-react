import { FunctionComponent } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpeg';
import { Button } from '@/components/ui/button';
import { useModalStore } from '../store/modalStore';

interface INavBarProps { }

const NavBar: FunctionComponent<INavBarProps> = () => {
    const setMostrarRegister = useModalStore((state) => state.setMostrarRegister);
    const setMostrarLogin = useModalStore((state) => state.setMostrarLogin);

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-800 hover:text-gray-600">Inicio</Link>
                <Link to="/about" className="text-gray-800 hover:text-gray-600">Nosotros</Link>
                <Button className="px-4 py-2 text-gray-800 border border-gray-800 rounded bg-gray-100 hover:bg-gray-100" onClick={() => setMostrarRegister(true)}>Registrar</Button>
                <Button className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-600" onClick={() => setMostrarLogin(true)}>Login</Button>
            </div>
        </nav>
    );
}

export default NavBar;