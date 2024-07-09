import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export function HomeCarousel() {
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
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className='h-screen bg-slate-200 flex justify-center items-center'
          >
            <div className='text-center max-w-xl'>
              <h1 className='text-4xl font-bold mb-5'>
                Título o nombre de proyecto
              </h1>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                rem, consequatur in perspiciatis consectetur adipisicing elit.
                Alias rem, consequatur in perspiciatis.
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
