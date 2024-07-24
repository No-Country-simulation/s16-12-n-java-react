import React, { useEffect, useState } from 'react';
import { TaskCard } from './TaskCard';

interface CardData {
  id: number;
  imagen: string;
  title: string;
  subtitle: string;
}

export const CardContainer: React.FC = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <TaskCard key={card.id} card={card} />
      ))}
    </div>
  );
};
