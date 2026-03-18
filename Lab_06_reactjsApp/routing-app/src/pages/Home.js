import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const features = [
    { icon: '⚡', title: 'Fast Delivery', desc: 'Get your orders within 48 hours, guaranteed.' },
    { icon: '🎨', title: 'Design-First', desc: 'Every product crafted with precision and intent.' },
    { icon: '🔒', title: 'Secure Payments', desc: '256-bit encryption on every transaction.' },
    { icon: '🌍', title: 'Ships Worldwide', desc: 'Delivering to 120+ countries globally.' },
  ];

  return (
    <div className="page hero">
      <div className="hero-left">
        <span className="hero-tag">✦ Welcome to Nexora</span>
        <h1>Design that speaks. <em>Products</em> that last.</h1>
        <p>We craft digital experiences and curated products for the modern era. From idea to execution — we obsess over every pixel and every detail.</p>
        <div className="hero-btns">
          <button className="btn btn-primary" onClick={() => navigate('/products')}>Explore Products →</button>
          <button className="btn btn-ghost" onClick={() => navigate('/about')}>Our Story</button>
        </div>
      </div>

      <div className="features-grid">
        {features.map(f => (
          <div className="feat-card" key={f.title}>
            <div className="feat-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;