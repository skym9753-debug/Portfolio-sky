export default function Header() {
  return (
    <header className="sticky top-0 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EFE8DC] z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-sparrowBrown">Haneul Kim.</div>
        <nav className="flex gap-6 font-medium text-[#5C4E44]">
          <a href="#about" className="hover:text-sparrowBrown transition-colors">About</a>
          <a href="#skills" className="hover:text-sparrowBrown transition-colors">Skills</a>
          <a href="#projects" className="hover:text-sparrowBrown transition-colors">Projects</a>
          <a href="#contact" className="hover:text-sparrowBrown transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}