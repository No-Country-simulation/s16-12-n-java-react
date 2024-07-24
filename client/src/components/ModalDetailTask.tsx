import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import useTaskStore from '@/store/taskStore';
import { Skeleton } from './ui/skeleton';

interface ModalDetailTaskProps {
  id: number;
}

export const ModalDetailTask = ({ id }: ModalDetailTaskProps) => {
  const [open, setOpen] = useState(false);
  const { fetchTaskById, currentTask, isLoading } = useTaskStore();

  useEffect(() => {
    if (open && (!currentTask || currentTask.id !== id)) fetchTaskById(id);
  }, [open, id, fetchTaskById, currentTask]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className='text-center w-full mx-5'>
        <Button variant='default' className='bg-[#2C3E50]'>
          Ver propuesta
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-3xl'>
        {isLoading ? (
          <div className='flex gap-5'>
            <DialogHeader className='flex flex-col gap-4 w-1/2'>
              <div className='flex justify-center'>
                <Skeleton className='w-[369px] h-[246px] rounded-lg' />
              </div>
              <Skeleton className='h-6 w-3/4' />
              <Skeleton className='h-4 w-1/2' />
            </DialogHeader>
            <div className='py-5 flex flex-col gap-5 w-1/2'>
              <Skeleton className='h-10 w-full' />
              <Skeleton className='h-10 w-full border' />
              <div className='flex flex-col gap-2'>
                <Skeleton className='h-4 w-3/4' />
                <Skeleton className='h-4 w-1/2' />
                <Skeleton className='h-4 w-1/4' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-1/3' />
              </div>
            </div>
          </div>
        ) : (
          <div className='flex gap-5'>
            <DialogHeader className='flex flex-col gap-4 w-1/2'>
              <div className='flex justify-center'>
                <img
                  src={currentTask?.imagenUrl}
                  alt=''
                  className='w-[369px] rounded-lg'
                />
              </div>
              <DialogTitle className='text-xl'>
                {currentTask?.titulo}
              </DialogTitle>
              <DialogDescription>{currentTask?.descripcion}</DialogDescription>
            </DialogHeader>
            <div className='py-5 flex flex-col gap-5 w-1/2'>
              <Button className='bg-[#2C3E50]'>Aplicar</Button>
              <Button
                variant='outline'
                className='text-[#1C8C4E] border-[#1C8C4E]'
              >
                Guardar tarea
              </Button>
              <div className='flex flex-col gap-2'>
                <p>Categoría: {currentTask?.categoria}</p>
                <p>Fecha límite: {currentTask?.plazo}</p>
                <p>Presupuesto: {currentTask?.presupuesto}</p>
                <p>
                  Habilidades Requeridas: {currentTask?.habilidades.join(', ')}
                </p>
                <p>Nombre del Empleador: {currentTask?.contratador.nombre}</p>
                <p>Ubicación:</p>
                <p>Estado:</p>
                <p>Propuestas Recibidas:</p>
                <p>Fecha de Publicación: {currentTask?.fechaPublicacion}</p>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
