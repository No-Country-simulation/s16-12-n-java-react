import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import NuevaTarea from './pages/NuevaTarea';
import TareaConfirmada from './pages/TareaConfirmada';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/nuevaTarea' element={<NuevaTarea />} />
      <Route path='/TareaConfirmada' element={<TareaConfirmada />} />
    </Routes>
  );
}
