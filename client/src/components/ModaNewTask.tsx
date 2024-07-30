import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

import NuevaTarea from './NuevaTarea';

export function ModalNewTask() {
  return (
    <Dialog>
      <DialogTrigger asChild className='text-center w-full mx-5'>
        <Button variant='default' className='bg-[#2C3E50] w-1/5 font-bold'>
          Publicar Nueva Tarea
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-3xl h-dvh overflow-x-hidden'>
        <NuevaTarea />
      </DialogContent>
    </Dialog>
  );
}
