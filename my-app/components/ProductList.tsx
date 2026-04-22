import Link from "next/link";

export const products = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    description: "Premium over-ear headphones with 30-hour battery life and adaptive noise cancellation.",
    price: 129.99,
    category: "Electronics",
    emoji: "🎧",
  },
  {
    id: 2,
    title: "Ergonomic Mechanical Keyboard",
    description: "Compact TKL layout with tactile brown switches, RGB backlighting, and aluminium frame.",
    price: 89.99,
    category: "Peripherals",
    emoji: "⌨️",
  },
  {
    id: 3,
    title: "Ultra-Wide Curved Monitor",
    description: "34 inch QHD IPS panel with 165Hz refresh rate and HDR600 for immersive productivity.",
    price: 449.99,
    category: "Displays",
    emoji: "🖥️",
  },
  {
    id: 4,
    title: "Smart Desk Lamp",
    description: "Touch-dimming LED lamp with 5 colour temperatures and USB-A/C charging ports.",
    price: 39.99,
    category: "Accessories",
    emoji: "💡",
  },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {products.map((p) => (
        <Link href={`/products/${p.id}`} key={p.id}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-md transition-all duration-200">

          {/* Emoji Banner */}
          <div className="bg-slate-100 p-8 text-center text-5xl">{p.emoji}</div>

          {/* Product Info */}
          <div className="p-5">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">{p.category}</span>
            <h3 className="font-bold text-slate-900 text-sm mt-1 mb-2 leading-snug">{p.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">{p.description}</p>
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-lg text-slate-900">${p.price}</span>
              <span className="text-sky-500 text-xs font-semibold">View Details →</span>
            </div>
          </div>

        </Link>
      ))}
    </div>
  );
}