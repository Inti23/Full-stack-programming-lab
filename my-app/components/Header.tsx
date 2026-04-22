import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span>⚡</span>
          <span>Next<span className="text-sky-400">Store</span></span>
        </Link>

        {/* Nav Links */}
        <nav className="flex gap-1">
          <Link href="/"         className="px-4 py-1.5 rounded-md text-sm text-slate-300 hover:bg-sky-500 hover:text-slate-900 transition">Home</Link>
          <Link href="/about"    className="px-4 py-1.5 rounded-md text-sm text-slate-300 hover:bg-sky-500 hover:text-slate-900 transition">About</Link>
          <Link href="/contact"  className="px-4 py-1.5 rounded-md text-sm text-slate-300 hover:bg-sky-500 hover:text-slate-900 transition">Contact</Link>
          <Link href="/products" className="px-4 py-1.5 rounded-md text-sm text-slate-300 hover:bg-sky-500 hover:text-slate-900 transition">Products</Link>
        </nav>

      </div>
    </header>
  );
}