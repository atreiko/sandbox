import { Navigation } from './Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

const TheHeader = () => {
  return (
    <header className=' bg-slate-800 px-4 py-2 flex gap-4'>
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { TheHeader };
