'use client';

import useCustomRouter from '@/hooks/useCustomRouter';

export default function Sort() {
  const { pushQuery, query } = useCustomRouter();

  return (
    <div>
      Sort: {` `}
      <select
        className='text-black'
        onChange={(e) => pushQuery({ sort: e.target.value })}
        value={query.sort || 'createdAt'}>
        <option value='createdAt'>A - Z</option>
        <option value='-createdAt'>Z - A</option>
      </select>
    </div>
  );
}
