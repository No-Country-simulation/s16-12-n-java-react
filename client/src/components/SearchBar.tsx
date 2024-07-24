import React, { useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input'; // Ajusta la ruta según corresponda

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for:', query);
  };

  return (
    <div className='flex items-center bg-white rounded-lg shadow-md p-2 h-10'>
      <Label htmlFor='search' className='text-start'>
        Buscar tareas
      </Label>
      <Input
        id='search'
        type='text'
        placeholder='Buscar tareas'
        value={query}
        onChange={handleInputChange}
        className='bg-transparent outline-none border-none font-semibold text-gray-700 px-2 flex-grow focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:border-none'
      />
      <button
        onClick={handleSearch}
        className='p-2 focus:outline-none focus:ring-0 focus:border-transparent'
      >
        <Search className='w-5 h-5 text-palette_primary' />
      </button>
    </div>
  );
};

export default SearchBar;
