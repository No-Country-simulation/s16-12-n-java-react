import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ModalDetailTask } from './ModalDetailTask';
import { TaskResponseData } from '@/types/types';

interface TaskCardProps {
  task: TaskResponseData;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { id, titulo, imagenUrl } = task;
  console.log(id);

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
      <CardFooter>
        <ModalDetailTask id={id} />
      </CardFooter>
    </Card>
  );
};
