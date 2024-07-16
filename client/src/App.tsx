import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import TareaRechazada from './pages/TareaRechazada';
import NuevaTarea from './pages/NuevaTarea';
import TareaConfirmada from './pages/TareaConfirmada';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AceptarORechazarPropuesta from './pages/AceptarORechazarPropuesta';

export default function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/TareaRechazada' element={<TareaRechazada />} />
      <Route path='/nuevaTarea' element={<NuevaTarea />} />
      <Route path='/TareaConfirmada' element={<TareaConfirmada />} />
      <Route path='/Propuesta' element={<AceptarORechazarPropuesta/>} />
    </Routes>
    <Footer/>
    </>
  );
}
