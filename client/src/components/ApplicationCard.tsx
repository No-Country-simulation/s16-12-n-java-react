import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { ApplicationData } from '@/types/types';

interface ApplicationCardProps {
  application: ApplicationData;
}

export const ApplicationCard = ({ application }: ApplicationCardProps) => {
  const { descripcion, fechaEnvioPropuesta } = application;

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
    </Card>
  );
};
