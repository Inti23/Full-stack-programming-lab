import ProductList from "@/components/ProductList";

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <p className="text-xs tracking-widest uppercase text-sky-500 font-semibold mb-2">Our Catalogue</p>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Products</h1>
      <p className="text-slate-500 mb-10 leading-relaxed max-w-xl">
        Explore our handpicked selection of premium tech products.
      </p>

      <ProductList />

    </div>
  );
}