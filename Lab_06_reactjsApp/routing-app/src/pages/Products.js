import { useState } from 'react';
import './Products.css';

const PRODUCTS = [
  { id: 1, cat: 'UI Kits',   emoji: '🎨', title: 'Aurora Design System',   desc: 'A comprehensive Figma & React component library with 200+ components, dark/light themes, and full documentation.', price: '$49' },
  { id: 2, cat: 'Templates', emoji: '⚡', title: 'Velocity Landing Kit',    desc: 'High-converting landing page templates built for SaaS startups. Includes 12 sections and mobile-first layouts.',  price: '$29' },
  { id: 3, cat: 'Courses',   emoji: '📚', title: 'React Mastery Bundle',    desc: 'From hooks to advanced patterns — a 40-hour video course with real-world projects and lifetime access.',           price: '$99' },
  { id: 4, cat: 'Icons',     emoji: '✦',  title: 'Flux Icon Set',           desc: '3,000+ handcrafted SVG icons in 4 styles (outline, filled, duotone, sharp). Figma & SVG export ready.',            price: '$19' },
  { id: 5, cat: 'Fonts',     emoji: '🔤', title: 'Meridian Typeface',       desc: 'An editorial serif with 8 weights and matching italics, optimized for both print and screen rendering.',             price: '$39' },
  { id: 6, cat: 'Apps',      emoji: '🛠️', title: 'Forma Prototype Tool',    desc: 'Browser-based rapid prototyping app with AI-assisted layout suggestions and one-click Figma export.',               price: '$79' },
];

function Products({ onAddToCart }) {
  const [added, setAdded] = useState({});

  const handleAdd = (id) => {
    setAdded(prev => ({ ...prev, [id]: true }));
    onAddToCart();
    setTimeout(() => setAdded(prev => ({ ...prev, [id]: false })), 1500);
  };

  return (
    <div className="page section-wrap">
      <span className="section-tag">Our Products</span>
      <h2 className="section-title">Tools built for<br />serious creators.</h2>
      <p className="section-sub">Every product ships with lifetime updates, documentation, and community support.</p>

      <div className="products-grid">
        {PRODUCTS.map(p => (
          <div className="product-card" key={p.id}>
            <div className="product-img">{p.emoji}</div>
            <div className="product-body">
              <div className="product-cat">{p.cat}</div>
              <div className="product-title">{p.title}</div>
              <div className="product-desc">{p.desc}</div>
              <div className="product-footer">
                <span className="product-price">{p.price}</span>
                <button
                  className={`cart-btn ${added[p.id] ? 'added' : ''}`}
                  onClick={() => handleAdd(p.id)}
                >
                  {added[p.id] ? '✓ Added!' : '+ Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;