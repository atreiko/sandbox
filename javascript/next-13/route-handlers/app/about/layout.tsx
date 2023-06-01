import Link from 'next/link';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className='mb-4'>About us</h1>
      <ul className='flex gap-2 mb-4'>
        <li className='bg-slate-800 p-1'>
          <Link href='/about/contacts'>Contacts</Link>
        </li>
        <li className='bg-slate-800 p-1'>
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
