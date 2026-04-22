import { products } from "@/components/ProductList";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) notFound();

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">

      <Link href="/products" className="text-sky-500 text-sm font-semibold hover:underline flex items-center gap-1 mb-8">
        ← Back to Products
      </Link>

      <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">

        {/* Banner */}
        <div className="bg-slate-100 py-16 text-center text-8xl">{product.emoji}</div>

        <div className="p-8">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{product.category}</span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2 mb-4">{product.title}</h1>
          <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>

          {/* Price Box */}
          <div className="bg-slate-50 rounded-xl p-5 mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Price</div>
              <div className="text-3xl font-extrabold text-slate-900">${product.price}</div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">Dynamic Route</div>
              <code className="bg-slate-200 text-slate-800 text-xs px-3 py-1.5 rounded-lg font-mono">
                /products/{product.id}
              </code>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-slate-900 text-white rounded-xl py-3 font-bold hover:bg-slate-700 transition">
              Add to Cart 🛒
            </button>
            <button className="border border-slate-200 rounded-xl px-5 font-semibold text-slate-700 hover:border-slate-400 transition">
              ♡
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}