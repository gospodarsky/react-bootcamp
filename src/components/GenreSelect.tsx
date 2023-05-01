import { useState } from 'react';

export const GenreSelect = (
  { genres, selectedGenre, onSelect }: { genres: string[], selectedGenre: string | undefined, onSelect: (genre: string | undefined) => void }
) => {
  const [genre, setGenre] = useState<string | undefined>(selectedGenre);
  const isAllSelected = !genres.find(value => value === genre);

  const handleAllClick = () => {
    setGenre(undefined);
    onSelect(undefined);
  };

  const handleGenreClick = (value: string) => {
    setGenre(value);
    onSelect(value);
  };

  const highlightedClasses = 'border-b-4 border-gray-200';
  const highlightedEffectClasses = 'hover:border-b-4 hover:border-gray-200 focus:border-b-4 focus:border-gray-200';
  return (
    <ul className="flex justify-center space-x-4 pt-8 text-3xl text-gray-200">
      <li>
        <button
          onClick={handleAllClick}
          className={`outline-none ${isAllSelected ? highlightedClasses : highlightedEffectClasses}`}
        >
          All
        </button>
      </li>
      {
        genres.map(
          value => (
            <li key={value}>
              <button
                onClick={() => handleGenreClick(value)}
                className={`outline-none ${value === genre ? highlightedClasses : highlightedEffectClasses}`}
              >
                {value}
              </button>
            </li>
          )
        )
      }
    </ul>
  );
};
