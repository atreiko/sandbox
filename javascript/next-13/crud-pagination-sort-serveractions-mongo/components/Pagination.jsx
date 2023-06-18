'use client';
import useCustomRouter from '@/hooks/useCustomRouter';

export default function Pagination({ totalPages }) {
  const pages = [...Array(totalPages)].map((_, index) => index + 1);

  const { pushQuery, query } = useCustomRouter();

  return (
    <div className='mt-20 flex justify-center gap-4'>
      {pages.map((page) => (
        <button
          onClick={() => pushQuery({ page })}
          key={page}
          className='border rounded py-2 px-4'
          style={{ background: (query.page || 1) === page ? 'red' : 'transparent' }}>
          {page}
        </button>
      ))}
    </div>
  );
}
