import { SearchForm } from './SearchForm';
import { GenreSelect } from './GenreSelect';
import { GENRES } from '../data';

export const App = () => (
  <main className='h-screen w-screen bg-gradient-to-b from-gray-600 to-gray-500'>
    <div className='container mx-auto'>
      <SearchForm onSearch={(value) => { console.log(value); }} query="Comedy" />
      <GenreSelect genres={GENRES} selectedGenre={"Crime"} onSelect={(genre) => { console.log(genre); }} />
    </div>
  </main>
);
