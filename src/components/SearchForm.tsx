import { useState } from 'react';

export const SearchForm = ({ onSearch, query }: { onSearch: (query: string) => void, query: string }) => {
  const [value, setQuery] = useState(query);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch(value);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex justify-center pt-20">
      <input
        type="text"
        className="bg-gray-500 text-4xl rounded-xl mr-8 text-gray-200 p-4 outline-none focus:outline-gray-200 focus:outline-4"
        defaultValue={value}
        placeholder="..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <button
        className="text-4xl bg-gray-800 text-gray-200 px-8 rounded-xl outline-none focus:outline-4 focus:outline-gray-200 hover:bg-gray-900"
        onClick={() => onSearch(value)}
      >Search</button>
    </div>
  );
};
