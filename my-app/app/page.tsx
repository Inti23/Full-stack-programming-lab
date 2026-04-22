import Link from "next/link";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-6 text-center">
        <p className="text-xs tracking-widest uppercase text-sky-400 font-semibold mb-4">
          Next.js Lab 08 · Full Stack Programming
        </p>
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Welcome to <span className="text-sky-400">NextStore</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          A multi-page Next.js app with dynamic routing, reusable components, and a global layout.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/products" className="bg-sky-400 text-slate-900 px-7 py-3 rounded-lg font-bold hover:bg-sky-300 transition">
            Browse Products →
          </Link>
          <Link href="/about" className="border border-slate-600 text-white px-7 py-3 rounded-lg font-semibold hover:border-slate-400 transition">
            Learn More
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-10">What's Inside</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            { icon: "🗂️", title: "Multi-Page App",  desc: "Home, About, Contact via file-based routing." },
            { icon: "🧩", title: "Components",       desc: "Reusable Header and Footer on every page." },
            { icon: "🛒", title: "Product List",     desc: "ProductList component with title, desc and price." },
            { icon: "🔗", title: "Dynamic Routes",   desc: "app/products/[id] for individual product pages." },
          ].map((f) => (
            <div key={f.title} className="bg-slate-50 rounded-xl p-6 border-t-4 border-sky-400 shadow-sm">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}