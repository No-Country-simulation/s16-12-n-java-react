import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import useAuthApplicationStore from '@/store/authApplicationStore';
import useAuthTaskStore from '@/store/authTaskStore';
import { Skeleton } from './ui/skeleton';

const ModalPropuestaDetallada = ({
  id,
  tareaId,
}: {
  id: number;
  tareaId?: number;
}) => {
  const [open, setOpen] = useState(false);
  const { fetchApplicationById, applicationById, isLoading } =
    useAuthApplicationStore();
  const { acceptApplication, declineApplication } = useAuthTaskStore();

  const { descripcion, fechaEnvioPropuesta, freelance } = applicationById || {};

  useEffect(() => {
    if (open) fetchApplicationById(id);
  }, [open, id, fetchApplicationById]);

  const handleAcceptProposal = async () => {
    console.log('handleAcceptProposal called. tareaId:', tareaId, 'id:', id);
    if (!tareaId || !id || !applicationById) {
      console.error('Información necesaria no disponible');
      toast.error('No se puede procesar la solicitud en este momento');
      return;
    }

    try {
      await acceptApplication(tareaId, id);
      setOpen(false);
      toast.success(
        `Propuesta aceptada: ${applicationById.freelance?.nombre || 'Freelance'}`
      );
    } catch (error: any) {
      console.error('Error al aceptar la propuesta:', error);
      const errorMessage =
        error.response?.data?.error || error.message || 'Error desconocido';
      toast.error(`Error al aceptar la propuesta: ${errorMessage}`);
    }
  };

  const handleDeclineProposal = async () => {
    if (!tareaId || !id || !applicationById) {
      console.error('Información necesaria no disponible');
      toast.error('No se puede procesar la solicitud en este momento');
      return;
    }

    try {
      await declineApplication(tareaId, id);
      setOpen(false);
      toast.success(
        `Propuesta rechazada: ${applicationById.freelance?.nombre || 'Freelance'}`
      );
    } catch (error: any) {
      console.error('Error al rechazar la propuesta:', error);
      const errorMessage =
        error.response?.data?.error || error.message || 'Error desconocido';
      toast.error(`Error al rechazar la propuesta: ${errorMessage}`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className='text-center w-full mx-5'>
        <Button variant='default' className='bg-[#2C3E50]'>
          Ver propuesta
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-3xl'>
        <div className='flex gap-5 flex-col'>
          <DialogHeader>
            <DialogTitle className='text-xl'>
              Detalles de la propuesta
            </DialogTitle>
          </DialogHeader>
          {isLoading || !applicationById ? (
            <>
              <Skeleton className='h-4 w-[250px]' />
              <Skeleton className='h-4 w-[200px]' />
              <Skeleton className='h-20 w-full' />
            </>
          ) : (
            <>
              <DialogDescription>
                Freelance: {freelance?.nombre}
              </DialogDescription>
              <DialogDescription>
                Fecha de postulación: {fechaEnvioPropuesta}
              </DialogDescription>
              <DialogDescription>Comentarios: {descripcion}</DialogDescription>
            </>
          )}
          <DialogFooter>
            <Button className='bg-[#2C3E50]' onClick={handleAcceptProposal}>
              Aceptar
            </Button>
            <Button className='bg-[#DC3545]' onClick={handleDeclineProposal}>
              Rechazar
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalPropuestaDetallada;
