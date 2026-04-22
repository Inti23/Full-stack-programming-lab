import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products onAddToCart={() => setCartCount(c => c + 1)} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;