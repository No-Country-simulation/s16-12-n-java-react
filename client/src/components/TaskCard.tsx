import { useLocation, Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ModalDetailTask } from './ModalDetailTask';
import { TaskResponseData } from '@/types/types';
import { Button } from './ui/button';

interface TaskCardProps {
  task: TaskResponseData;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const location = useLocation();
  const { id, titulo, imagenUrl } = task;

  return (
    <Card className=''>
      <CardHeader className='p-0'>
        <div className='flex justify-center items-center w-full h-[200px] overflow-hidden'>
          <img src={imagenUrl} alt={titulo} className='w-full object-cover' />
        </div>
      </CardHeader>
      <CardContent className='flex mt-4'>
        <CardTitle className='text-[#2C3E50]'>{titulo}</CardTitle>
      </CardContent>
      <CardFooter className='flex justify-center'>
        {location.pathname === '/tareas/mis-tareas' ? (
          <Link to={`/tareas/postulaciones/${id}`}>
            <Button variant='default' className='bg-[#2C3E50]'>
              Ver postulaciones
            </Button>
          </Link>
        ) : (
          <ModalDetailTask id={id} />
        )}
      </CardFooter>
    </Card>
  );
};
