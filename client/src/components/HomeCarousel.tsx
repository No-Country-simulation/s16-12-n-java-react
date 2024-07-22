import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Bg1 from '@/assets/images/bg-hero-1.webp';
import Bg2 from '@/assets/images/bg-hero-2.webp';
import Bg3 from '@/assets/images/bg-hero-3.webp';

export function HomeCarousel() {
  const carousel = [
    {
      bg: Bg3,
      title: 'Desarrollo de Software',
      description:
        'Impulsa tus proyectos con soluciones innovadoras. Encuentra expertos en desarrollo de software listos para convertir tus ideas en realidad, desde aplicaciones móviles hasta sistemas complejos.',
      textColor: 'text-white',
    },
    {
      bg: Bg2,
      title: 'Diseño y Creatividad',
      description:
        'Transforma tu visión en arte. Colabora con diseñadores creativos que pueden dar vida a tus conceptos con diseño gráfico, ilustraciones, branding y más.',
      textColor: 'text-gray-700',
    },
    {
      bg: Bg1,
      title: 'Traducción y Redacción',
      description:
        'Comunica tu mensaje al mundo. Accede a profesionales en traducción y redacción que pueden crear contenido persuasivo y preciso en múltiples idiomas.',
      textColor: 'text-white',
    },
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className='w-full'
      opts={{ loop: true }}
    >
      <CarouselContent>
        {carousel.map((data, i) => (
          <CarouselItem
            key={i}
            className='h-screen bg-slate-200 flex justify-center items-center relative'
          >
            <img src={data.bg} alt='' className='absolute bg-cover w-full' />
            <div className='text-center max-w-2xl z-10 text-gray-500'>
              <h1 className={`text-6xl font-bold mb-5 ${data.textColor}`}>
                {data.title}
              </h1>
              <p className={`text-lg ${data.textColor}`}>{data.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
