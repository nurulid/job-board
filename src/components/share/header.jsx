import Link from 'next/link';

export const Header = () => {
  return (
    <header className="py-5 px-10 shadow bg-white sticky top-0 z-[9]">
      <nav className="nav-menu flex items-center">
        <Link href="/" className='font-mono'>Jobs in Germany</Link>
      </nav>
    </header>
  );
};
