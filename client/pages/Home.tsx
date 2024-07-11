import React from 'react';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  return (
    <h1 className='text-3xl font-bold underline'>
      Hello world!
      <Button>Button</Button>
    </h1>
  );
};

export default Home;
