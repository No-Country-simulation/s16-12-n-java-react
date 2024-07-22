import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ModalDetailTask } from './ModalDetailTask';

interface CardData {
  imagen: string;
  title: string;
  subtitle: string;
}

export function TaskCard() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch('/data/cards.json');
        if (!response.ok) throw new Error('Network response was not ok');

        const data: { cards: CardData[] } = await response.json();
        setCards(data.cards);
      } catch (error) {
        setCards([]);
      }
    }

    fetchCards();
  }, []);

  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} className=''>
          <CardHeader className='p-0'>
            <div className='flex justify-center items-center w-full h-[200px] overflow-hidden'>
              <img
                src={card.imagen}
                alt={card.title}
                className='w-full object-cover'
              />
            </div>
          </CardHeader>
          <CardContent className='flex mt-4'>
            <CardTitle className='text-[#2C3E50]'>{card.title}</CardTitle>
          </CardContent>
          <CardFooter>
            <ModalDetailTask />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
