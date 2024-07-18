import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import TareaRechazada from './pages/TareaRechazada';
import NuevaTarea from './pages/NuevaTarea';
import TareaConfirmada from './pages/TareaConfirmada';
import RevisionDeTareas from './pages/RevisionDeTareas';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/TareaRechazada' element={<TareaRechazada />} />
      <Route path='/nuevaTarea' element={<NuevaTarea />} />
      <Route path='/TareaConfirmada' element={<TareaConfirmada />} />
      <Route path='/RevisionDeTareas' element={<RevisionDeTareas />} />
    </Routes>
  );
}
