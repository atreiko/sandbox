'use client';
import useCustomRouter from '@/hooks/useCustomRouter';
import ButtonSubmit from './ButtonSubmit';

export default function SearchForm() {
  const { pushQuery, query } = useCustomRouter();

  const handleSearch = async (formData) => {
    const search = formData.get('search');
    pushQuery({ search, page: 1 })
  };

  return (
    <form className='flex gap-4' action={handleSearch}>
      <input
        className='outline-none p-2 rounded text-black'
        type='search'
        name='search'
        defaultValue={query.search || ''}
      />
      <ButtonSubmit value='search' />
    </form>
  );
}
