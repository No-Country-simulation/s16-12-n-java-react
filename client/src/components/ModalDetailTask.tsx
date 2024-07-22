import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import Bg1 from '@/assets/images/bg-hero-3.webp';

export function ModalDetailTask() {
  return (
    <Dialog>
      <DialogTrigger asChild className='text-center w-full mx-5'>
        <Button variant='default' className='bg-[#2C3E50]'>
          Ver propuesta
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-3xl'>
        <div className='flex gap-5'>
          <DialogHeader className='flex flex-col gap-4 w-1/2'>
            <div className='flex justify-center'>
              <img src={Bg1} alt='' className='w-[369px] rounded-lg' />
            </div>
            <DialogTitle className='text-xl'>
              Desarrollo de página web
            </DialogTitle>
            <DialogDescription>
              Desarrollar una página web responsiva para una empresa de comercio
              electrónico. El proyecto incluye la creación de un sitio web
              completamente funcional que permita a los usuarios navegar por
              productos, agregar artículos a un carrito de compras y realizar
              transacciones seguras a través de una pasarela de pagos. El diseño
              debe ser moderno y atractivo, asegurando una experiencia de
              usuario fluida y fácil de usar tanto en dispositivos móviles como
              en computadoras de escritorio. Además, se requiere la integración
              de un sistema de gestión de contenido (CMS) para que el cliente
              pueda actualizar productos, precios y otros contenidos fácilmente.
              Se espera también la optimización del sitio para motores de
              búsqueda (SEO) y la implementación de medidas de seguridad
              robustas para proteger los datos de los usuarios.
            </DialogDescription>
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
              <p>Categoría:</p>
              <p>Fecha límite:</p>
              <p>Presupuesto:</p>
              <p>Habilidades Requeridas:</p>
              <p>Nombre del Empleador:</p>
              <p>Ubicación:</p>
              <p>Estado:</p>
              <p>Propuestas Recibidas:</p>
              <p>Fecha de Publicación:</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
