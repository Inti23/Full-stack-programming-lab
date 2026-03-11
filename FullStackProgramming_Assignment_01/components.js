// ============================================
// HOTSPRING PORTABLE SPAS - SHARED COMPONENTS
// ============================================

function getHeader(activePage) {
  return `
  <div class="top-bar">
    <div class="container">
      <div class="support">Call for Customer support: <span>020 38989565</span></div>
      <div class="top-links">
        <a href="my-account.html">My Account</a>
        <a href="wishlist.html">Wishlist</a>
        <a href="checkout.html">To Checkout</a>
      </div>
    </div>
  </div>

  <header class="site-header">
    <div class="container">
      <div class="header-inner">
        <div class="logo">
          <a href="index.html">
            <h1>HOTSPRING<span>Portable Spas</span></h1>
          </a>
        </div>
        <div class="cart-widget" onclick="window.location='cart.html'">
          <span class="cart-icon">🛒</span>
          <span>My Cart:</span>
          <span id="cart-count-display">0 Items</span>
          <span>($0)</span>
          <span>▼</span>
        </div>
      </div>
    </div>
  </header>

  <nav class="main-nav">
    <div class="container">
      <div class="nav-inner">
        <button class="hamburger" onclick="toggleNav()" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-menu" id="mainNavMenu">
          <li class="${activePage==='category'?'active':''}">
            <a href="category.html">CATEGORY</a>
          </li>
          <li class="${activePage==='brand'?'active':''}">
            <a href="#">BRAND</a>
          </li>
          <li class="${activePage==='info'?'active':''}">
            <a href="#">INFO
              <span class="nav-divider">|</span>
            </a>
          </li>
        </ul>
        <div class="nav-search">
          <input type="text" placeholder="Search" id="siteSearch" onkeypress="handleSearch(event)">
          <button onclick="doSearch()">SEARCH</button>
        </div>
      </div>
    </div>
  </nav>`;
}

function getPartnerLogos() {
  return `
  <div class="partner-logos">
    <div class="container">
      <div class="logos-inner">
        <div class="logo-badge logo-save">SAVE $1,000'S<br><small>ON THE TOP SPA BRANDS</small><br><small>HUGE DISCOUNTS</small></div>
        <div class="logo-badge logo-oceanic">Oceanic<em>Spa</em></div>
        <div class="logo-badge logo-caldera">Caldera<strong>Spas</strong></div>
        <div class="logo-badge logo-island">Island<strong>Spas</strong><br><small>by ARTESIAN</small></div>
      </div>
    </div>
  </div>`;
}

function getFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Contact Us</h4>
          <p>yoursitename.com</p>
          <p class="phone">CALL 24/7: 888-201-8899</p>
          <p>Your Address:</p>
          <p>Street</p>
          <p>State & Zip Code</p>
          <p>City & Country</p>
          <p>Email: servicemail@yoursitename.com</p>
          <div class="footer-social">
            <a href="#" class="social-tw">T</a>
            <a href="#" class="social-fb">f</a>
            <a href="#" class="social-li">in</a>
            <a href="#" class="social-gp">G+</a>
            <a href="#" class="social-yt">▶</a>
            <a href="#" class="social-pi">P</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Information</h4>
          <a href="about.html">About Us</a>
          <a href="#">Customer Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Site Map</a>
          <a href="#">Search Terms</a>
          <a href="contact.html">Contact Us</a>
          <a href="about.html">About Us</a>
        </div>
        <div class="footer-col">
          <h4>My Account</h4>
          <a href="login.html">Sign In</a>
          <a href="cart.html">View Cart</a>
          <a href="#">My Wishlist</a>
        </div>
        <div class="footer-col">
          <h4>Signup for a Newsletter</h4>
          <p>Sign up for our news letter:</p>
          <div class="newsletter-input">
            <input type="email" placeholder="Your email">
            <button>GO</button>
          </div>
          <p style="margin-top:15px; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#888;">Payment Solutions</p>
          <div class="payment-icons">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>DISC</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2014 Hottubspaservice.com. All Rights Reserved.</p>
    </div>
  </footer>`;
}

function toggleNav() {
  const menu = document.getElementById('mainNavMenu');
  menu.classList.toggle('open');
}

function handleSearch(e) {
  if (e.key === 'Enter') doSearch();
}

function doSearch() {
  const q = document.getElementById('siteSearch').value.trim();
  if (q) window.location = 'category.html?search=' + encodeURIComponent(q);
}

// Cart functionality
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('hotspring_cart') || '[]');
  } catch(e) { return []; }
}

function saveCart(cart) {
  try { localStorage.setItem('hotspring_cart', JSON.stringify(cart)); } catch(e) {}
  updateCartDisplay();
}

function updateCartDisplay() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const price = cart.reduce((s, i) => s + (i.price * i.qty), 0);
  const el = document.getElementById('cart-count-display');
  if (el) el.textContent = total + ' Items ($' + price.toFixed(2) + ')';
}

function addToCart(name, price, qty) {
  const cart = getCart();
  const existing = cart.find(i => i.name === name);
  if (existing) existing.qty += qty;
  else cart.push({ name, price, qty: qty || 1 });
  saveCart(cart);
  showToast(name + ' added to cart!', 'success');
}

function showToast(msg, type) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification toast-' + (type || 'info');
  toast.textContent = msg;
  toast.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:12px 20px;border-radius:4px;color:#fff;font-size:13px;z-index:9999;font-family:Montserrat,sans-serif;font-weight:600;animation:slideUp 0.3s ease;box-shadow:0 4px 15px rgba(0,0,0,0.2)';
  if (type === 'success') toast.style.background = '#27ae60';
  else if (type === 'error') toast.style.background = '#c0392b';
  else toast.style.background = '#2c3e50';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Form validation helper
function validateField(input) {
  const val = input.value.trim();
  const errEl = input.parentNode.querySelector('.form-error');
  if (!val) {
    input.classList.add('error');
    if (errEl) errEl.classList.add('show');
    return false;
  }
  input.classList.remove('error');
  if (errEl) errEl.classList.remove('show');
  return true;
}

function validateEmail(input) {
  const val = input.value.trim();
  const errEl = input.parentNode.querySelector('.form-error');
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  if (!valid) {
    input.classList.add('error');
    if (errEl) { errEl.textContent = val ? 'Please enter a valid email.' : 'Email is required.'; errEl.classList.add('show'); }
    return false;
  }
  input.classList.remove('error');
  if (errEl) errEl.classList.remove('show');
  return true;
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  updateCartDisplay();
});
