import { Navigate, Route, Routes } from 'react-router-dom';

import { FullWithLayout } from '../hocs/layouts/FullWithLayout';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import useAuthStore from '../store/authStore';
import { AuthLayout } from '../hocs/layouts/AuthLayout';
import Dashboard from '@/pages/Dashboard';
import Tasks from '@/pages/Tasks';
import Home from '@/pages/Home';
import MyTasks from '@/pages/MyTasks';
import Applications from '@/pages/Applications';
import UserProfile from '@/pages/UserProfile';
import NotFound from '@/pages/NotFound';
import AboutUs from '@/pages/AboutUs';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Postulaciones from '@/pages/Postulaciones';

export const AppRouter = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <Routes>
      <Route path='/' element={<FullWithLayout />}>
        <Route index element={<Home />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/tareas'
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
        <Route
          path='/tareas/mis-tareas'
          element={
            <ProtectedRoute>
              <MyTasks />
            </ProtectedRoute>
          }
        />
        <Route
          path='/tareas/mis-postulaciones'
          element={
            <ProtectedRoute>
              <Applications />
            </ProtectedRoute>
          }
        />
        <Route
          path='/tareas/postulaciones/:tareaId'
          element={
            <ProtectedRoute>
              <Postulaciones />
            </ProtectedRoute>
          }
        />
        <Route path='/about' element={<AboutUs />} />
        <Route
          path='/perfil'
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path='/*' element={<NotFound />} />
      </Route>
      <Route
        path='/auth'
        element={
          isAuthenticated() ? <Navigate to='/' replace /> : <AuthLayout />
        }
      >
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
};
