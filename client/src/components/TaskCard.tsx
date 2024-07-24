import React from 'react';
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

interface TaskCardProps {
  card: CardData;
}

export const TaskCard: React.FC<TaskCardProps> = ({ card }) => {
  return (
    <Card className=''>
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
  );
};
