import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { ApplicationData } from '@/types/types';
import ModalPropuestaDetallada from './ModalPropuestaDetallada';

interface ApplicationCardProps {
  application: ApplicationData;
}

export const CardPostulacion = ({ application }: ApplicationCardProps) => {
  const { tareaId } = useParams<{ tareaId: string }>();
  const { id, descripcion, fechaEnvioPropuesta } = application;
  const tareaIdNumber = tareaId ? Number(tareaId) : undefined;

  return (
    <Card className=''>
      <CardContent className='flex mt-4 flex-col'>
        <CardDescription className='text-[#2C3E50]'>
          {descripcion}
        </CardDescription>
        <CardDescription className='text-[#2C3E50]'>
          Fecha de envio: {fechaEnvioPropuesta}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <ModalPropuestaDetallada id={id} tareaId={tareaIdNumber} />
      </CardFooter>
    </Card>
  );
};
