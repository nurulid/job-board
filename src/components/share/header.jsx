import Link from 'next/link';

const menu = [
  { title: 'Jobs', link: '#' },
];

export const Header = () => {
  return (
    <header className="py-5 px-10 shadow bg-white">
      <nav className="nav-menu flex items-center justify-between">
        <Link href="/">Home</Link>

        <ul className="nav-menu uppercase text-sm flex items-center flex-wrap gap-5">
          {menu.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:underline transition-all text-gray-500"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex gap-5 items-center">
          <li>
            <a
              href="#"
              className="py-[10px] px-6 text-sm bg-black hover:scale-105 transition-all rounded-xl text-white inline-block"
            >
              Sign in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
