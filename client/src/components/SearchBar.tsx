import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

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
      <input
        type='text'
        placeholder='Buscar tareas'
        value={query}
        onChange={handleInputChange}
        className='bg-transparent outline-none font-semibold text-gray-700 px-2 flex-grow'
      />
      <button onClick={handleSearch} className='p-2 focus:outline-none'>
        <IoIosSearch className='w-5 h-5 text-palette_primary' />
      </button>
    </div>
  );
};

export default SearchBar;
