import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';

interface CardData {
  imagen: string;
  title: string;
  subtitle: string;
}

export function Cards() {
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
        <Card key={index}>
          <CardHeader>
            <div className='flex justify-center items-center w-full h-28'>
              <img
                src={card.imagen}
                alt={card.title}
                className='object-fill w-full h-full'
              />
            </div>

            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className='flex gap-2'>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
