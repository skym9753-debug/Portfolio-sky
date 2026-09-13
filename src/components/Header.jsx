import { Link, NavLink } from 'react-router-dom';

export default function Header() { // 상단 메뉴
  const navStyle = ({ isActive }) =>
    `transition-colors font-medium text-sm md:text-base ${
      isActive ? 'text-[#A66A3F] font-bold' : 'text-[#5C4E44] hover:text-[#A66A3F]'
    }`;

  return (
    <header className="sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EFE8DC] z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[#A66A3F] tracking-tight">
          Haneul.dev
        </Link>
        <nav className="flex gap-6">
          <NavLink to="/" className={navStyle}>Home</NavLink>
          <NavLink to="/projects" className={navStyle}>Projects</NavLink>
        </nav>
      </div>
    </header>
  );
}