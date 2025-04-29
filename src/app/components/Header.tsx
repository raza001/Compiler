import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#23272f] border-b border-[#34394b] py-3 px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          AllCompiler
        </Link>
        <span className="text-xs text-[#dea584] bg-[#23272f] px-2 py-1 rounded ml-2">Beta</span>
      </div>
      <nav className="flex items-center space-x-6">
        <Link href="/python-compiler" className="text-white hover:text-[#3472A6] transition">Python</Link>
        <Link href="/js-compiler" className="text-white hover:text-[#F7E018] transition">JavaScript</Link>
        <Link href="/java-compiler" className="text-white hover:text-[#EA2D2E] transition">Java</Link>
        <Link href="/rust-compiler" className="text-white hover:text-[#dea584] transition">Rust</Link>
      </nav>
      <div className="text-xs text-[#aaa]">by Raza</div>
    </header>
  );
}
