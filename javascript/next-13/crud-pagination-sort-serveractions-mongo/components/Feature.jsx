import SearchForm from './SearchForm';
import Sort from './Sort';

export default function Feature() {
  return (
    <div className='flex gap-4 my-4 px-4'>
      <SearchForm />
      <Sort />
    </div>
  );
}
