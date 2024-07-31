import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import useAuthApplicationStore from '@/store/authApplicationStore';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ApplicationFormData } from '@/types/types';

interface ModalFormApplicationProps {
  id: number;
  applyOpen: boolean;
  setApplyOpen: (open: boolean) => void;
}

const ModalFormApplication = ({
  id,
  applyOpen,
  setApplyOpen,
}: ModalFormApplicationProps) => {
  const { createApplication } = useAuthApplicationStore();
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const applicationData: ApplicationFormData = {
      descripcion: description,
      tareaId: id,
    };
    try {
      createApplication(applicationData);
      setApplyOpen(false);
      toast.success('Se aplicó correctamente a la tarea');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Error desconocido';
      toast.error(`${errorMessage}`);
    }
  };

  return (
    <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Formulario de Aplicación</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <Label
                htmlFor='description'
                className='block text-sm font-medium text-gray-700'
              >
                Descripción:
              </Label>
              <Textarea
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <Button type='submit'>Enviar Aplicación</Button>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFormApplication;
