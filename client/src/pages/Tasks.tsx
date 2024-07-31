import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Tasks = () => {
  return (
    <div className='container mx-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Mis Tareas</h1>
      <div className='flex justify-center items-center h-full gap-x-5'>
        <Card className='bg-[#FFC484] border border-[#E07400] text-center'>
          <CardHeader>
            <CardTitle className='font-bold text-2xl text-[#2C3E50]'>
              Mis tareas publicadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Revisa tus tareas creadas</CardDescription>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <Link
              to='/tareas/mis-tareas'
              className='bg-[#2C3E50] text-2xl font-bold py-1 px-10 rounded-lg text-white'
            >
              Ver tareas
            </Link>
          </CardFooter>
        </Card>
        <Card className='bg-[#FFC484] border border-[#E07400] text-center'>
          <CardHeader>
            <CardTitle className='font-bold text-2xl text-[#2C3E50]'>
              Mis tareas postuladas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Revisa tus postulaciones</CardDescription>
          </CardContent>
          <CardFooter className='flex justify-center'>
            <Link
              to='/tareas/mis-postulaciones'
              className='bg-[#2C3E50] text-2xl font-bold py-1 px-10 rounded-lg text-white'
            >
              Ver tareas
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Tasks;
