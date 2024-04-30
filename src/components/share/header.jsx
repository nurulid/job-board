import Link from 'next/link';

export const Header = () => {
  return (
    <header className="py-5 px-10 shadow bg-white sticky top-0 z-[9]">
      <nav className="nav-menu flex items-center justify-between max-w-7xl w-full mx-auto px-5 lg:px-10">
        <Link href="/" className='font-mono'>Jobs in Germany</Link>
        <Link href="/source" className='text-gray-400 text-sm underline'>Sources</Link>
      </nav>
    </header>
  );
};
