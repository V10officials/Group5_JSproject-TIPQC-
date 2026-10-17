/* ============================================================
   SportsHub — shared data & site logic
   ============================================================ */

/* ---------- Product catalog ---------- */

const PRODUCTS = [
  {
    id: "basketball",
    styles: [
      { name: "Orange", price: 39.99, oldPrice: 54.99 },
      { name: "Red", price: 42.99, oldPrice: null },
      { name: "Blue", price: 47.99, oldPrice: null },
      { name: "Black", price: 54.99, oldPrice: null }
    ],
    name: "Pro Grip Basketball",
    category: "Basketballs",
    price: 39.99,
    oldPrice: 54.99,
    rating: 4.8,
    reviews: 312,
    icon: "basketball",
    desc: "Official size and weight indoor/outdoor basketball with a deep-channel composite cover for a locked-in grip in any weather.",
    detail: "Engineered with a full-grain composite leather cover and deep channels for superior control on every dribble and shot.",
    sizes: ["Size 5", "Size 6", "Size 7"]
  },

  {
    id: "jersey",
    styles: [
      { name: "White", price: 74.99, oldPrice: null },
      { name: "Red", price: 79.99, oldPrice: null },
      { name: "Blue", price: 89.99, oldPrice: null },
      { name: "Black", price: 94.99, oldPrice: null }
    ],
    name: "Home Court Jersey",
    category: "Jerseys",
    price: 74.99,
    oldPrice: null,
    rating: 4.6,
    reviews: 148,
    icon: "jersey",
    desc: "Lightweight, breathable game jersey and shorts set built for full-speed play from tip-off to the final buzzer.",
    detail: "Moisture-wicking mesh fabric keeps you cool, with reinforced stitching at the seams so it holds up possession after possession.",
    sizes: ["S", "M", "L", "XL"]
  },

  {
    id: "shoes",
    styles: [
      { name: "Mint Green", price: 129.99, oldPrice: 149.99 },
      { name: "Blue", price: 134.99, oldPrice: null },
      { name: "Multicolor", price: 139.99, oldPrice: null },
      { name: "Black", price: 149.99, oldPrice: null }
    ],
    name: "Court Sprint Shoes",
    category: "Shoes",
    price: 129.99,
    oldPrice: 149.99,
    rating: 4.7,
    reviews: 201,
    icon: "shoes",
    desc: "High-top court shoes with responsive cushioning and a grippy outsole for hard cuts and quick first steps.",
    detail: "A padded ankle collar and dual-density midsole give you support on landings without slowing you down on the break.",
    sizes: ["8", "9", "10", "11", "12"]
  },

  {
    id: "gear",
    styles: [
      { name: "Knee Pads", price: 34.99, oldPrice: null },
      { name: "Water Bottle", price: 14.99, oldPrice: null },
      { name: "Sport Glasses", price: 44.99, oldPrice: null },
      { name: "Headband", price: 11.99, oldPrice: null }
    ],
    name: "All-Sport Training Kit",
    category: "Sports Gear",
    price: 34.99,
    oldPrice: null,
    rating: 4.5,
    reviews: 96,
    icon: "gear",
    desc: "A grab-bag of training essentials — from resistance gear to recovery tools — for whatever sport you play.",
    detail: "Built for daily training: durable materials that stand up to repeated use both indoors and out.",
    sizes: ["One Size"]
  },

  {
    id: "resistance-bands",
    styles: [
      { name: "Green", price: 24.99, oldPrice: null },
      { name: "Blue", price: 27.99, oldPrice: null },
      { name: "Red", price: 29.99, oldPrice: null },
      { name: "Black", price: 34.99, oldPrice: null }
    ],
    name: "Resistance Band Set",
    category: "Sports Gear",
    price: 24.99,
    oldPrice: null,
    rating: 4.4,
    reviews: 87,
    icon: "gear",
    desc: "A three-band resistance set for warm-ups, mobility work, and strength training anywhere.",
    detail: "Light, medium, and heavy bands let you scale resistance as you build strength, with a mesh bag for travel.",
    sizes: ["Light", "Medium", "Heavy"]
  },

  {
    id: "headband",
    styles: [
      { name: "Black", price: 9.99, oldPrice: null },
      { name: "White", price: 11.99, oldPrice: null },
      { name: "Navy", price: 12.99, oldPrice: null },
      { name: "Red", price: 14.99, oldPrice: null }
    ],
    name: "Performance Headband",
    category: "Accessories",
    price: 9.99,
    oldPrice: null,
    rating: 4.3,
    reviews: 54,
    icon: "accessory",
    desc: "Sweat-wicking headband that stays put through overtime.",
    detail: "Soft stretch knit with a silicone grip strip on the inside band.",
    sizes: ["One Size"]
  }
];


/* ---------- Category metadata ---------- */

const CATEGORY_META = [
  { name: "Basketballs", icon: "basketball", count: 18 },
  { name: "Jerseys", icon: "jersey", count: 42 },
  { name: "Shoes", icon: "shoes", count: 27 },
  { name: "Sports Gear", icon: "gear", count: 35 },
  { name: "Accessories", icon: "accessory", count: 16 }
];


/* ---------- Icons ---------- */

const ICONS = {

  basketball: `<svg viewBox="0 0 120 120" class="prod-icon" aria-hidden="true">
    <circle cx="60" cy="60" r="52" fill="#d9762f"/>
    <path d="M60 8 V112 M8 60 H112 M22 22 C45 45 45 75 22 98 M98 22 C75 45 75 75 98 98"
      fill="none" stroke="#2a1608" stroke-width="4"/>
  </svg>`,

  jersey: `<svg viewBox="0 0 120 120" class="prod-icon" aria-hidden="true">
    <path d="M35 10 L15 28 L28 45 L38 38 V108 H82 V38 L92 45 L105 28 L85 10 C85 20 75 26 60 26 C45 26 35 20 35 10 Z"
      fill="#c0392b" stroke="#7a1f16" stroke-width="2"/>
    <text x="60" y="80" font-size="26" fill="#f5c451"
      text-anchor="middle" font-family="Arial, sans-serif"
      font-weight="bold">1</text>
  </svg>`,

  shoes: `<svg viewBox="0 0 120 120" class="prod-icon" aria-hidden="true">
    <path d="M10 90 C10 75 25 70 35 68 C45 66 50 55 62 55 C74 55 78 68 90 70 C102 72 110 78 110 90 C110 96 105 100 98 100 H20 C14 100 10 96 10 90 Z"
      fill="#f4f4f4" stroke="#1a1a1a" stroke-width="3"/>
    <path d="M35 68 L45 45 L60 50 L62 55"
      fill="none" stroke="#c0392b" stroke-width="4"/>
    <path d="M20 100 V90 M40 100 V90 M60 100 V90 M80 100 V90 M100 100 V90"
      stroke="#1a1a1a" stroke-width="2"/>
  </svg>`,

  gear: `<svg viewBox="0 0 120 120" class="prod-icon" aria-hidden="true">
    <circle cx="35" cy="80" r="16" fill="#d9762f"/>
    <rect x="70" y="30" width="12" height="55" rx="6" fill="#2c2c2c"/>
    <rect x="60" y="20" width="32" height="14" rx="7" fill="#1a1a1a"/>
    <circle cx="90" cy="75" r="12" fill="#3a6ea5"/>
    <rect x="15" y="40" width="30" height="10" rx="5" fill="#555"/>
  </svg>`,

  accessory: `<svg viewBox="0 0 120 120" class="prod-icon" aria-hidden="true">
    <rect x="20" y="50" width="80" height="20" rx="10" fill="#2c2c2c"/>
    <circle cx="60" cy="60" r="6" fill="#d9762f"/>
  </svg>`
};


/* ---------- Formatting ---------- */

function fmt(n) {
  return "$" + Number(n).toFixed(2);
}


function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}


/* ---------- Product images (shared by shop + wishlist) ---------- */

const PRODUCT_IMAGES = {
  basketball: "Basketballs/ball1.png",
  jersey: "Jerseys/jersey1.png",
  shoes: "Shoes/shoes1.png",
  gear: "Gears/gear1.png",
  "resistance-bands": "Gears/gear1.png"
};


function getProductImage(product) {
  return PRODUCT_IMAGES[product.id] || "";
}


/* ---------- Cart ---------- */

const CART_KEY = "sportshub_cart";


function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}


function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}


/* Which style (thumbnail) is currently picked on the product page */
let selectedStyle = null;


function addToCart(id, qty, size) {
  const cart = getCart();
  const product = getProduct(id);

  let price = product ? product.price : 0;
  let finalSize = size;

  if (
    selectedStyle &&
    selectedStyle.id === id &&
    product &&
    product.styles &&
    product.styles[selectedStyle.index]
  ) {
    const style = product.styles[selectedStyle.index];
    price = style.price;
    finalSize = size + " \u00b7 " + style.name;
  }

  const existing = cart.find(
    l => l.id === id && l.size === finalSize
  );

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id,
      qty,
      size: finalSize,
      price
    });
  }

  saveCart(cart);
}


function removeFromCart(id, size) {
  saveCart(
    getCart().filter(
      l => !(l.id === id && l.size === size)
    )
  );
}


function setQty(id, size, qty) {
  const cart = getCart();

  const line = cart.find(
    l => l.id === id && l.size === size
  );

  if (!line) return;

  if (qty <= 0) {
    removeFromCart(id, size);
    return;
  }

  line.qty = qty;

  saveCart(cart);
}


function cartLines() {
  return getCart()
    .map(l => {
      const base = getProduct(l.id);

      if (!base) return { ...l, product: null };

      const price =
        typeof l.price === "number" ? l.price : base.price;

      return {
        ...l,
        product: { ...base, price }
      };
    })
    .filter(l => l.product);
}


function cartCount() {
  return getCart().reduce(
    (n, l) => n + l.qty,
    0
  );
}


function cartSubtotal() {
  return cartLines().reduce(
    (sum, l) =>
      sum + l.product.price * l.qty,
    0
  );
}


function updateCartBadge() {
  const badge =
    document.getElementById("cart-count-badge");

  if (!badge) return;

  const n = cartCount();

  badge.textContent = n;

  badge.style.display =
    n > 0 ? "flex" : "none";
}


/* ---------- Add to Cart button (checkmark feedback) ---------- */

/* Green "added" style, injected here so no CSS file edit is needed */
(function () {
  const style = document.createElement("style");
  style.textContent = `
    .add-cart-btn.added {
      background: #2e9e5b;
      border-color: #2e9e5b;
      color: #fff;
    }
  `;
  document.head.appendChild(style);
})();


function addProductToCart(id, btn) {

  const product = getProduct(id);
  if (!product) return;

  const size =
    product.sizes && product.sizes.length
      ? product.sizes[0]
      : "One Size";

  addToCart(id, 1, size);   // also updates the cart badge

  if (!btn) return;

  /* SHOW CHECKMARK */
  clearTimeout(btn._timer);

  if (!btn.dataset.original) {
    btn.dataset.original = btn.innerHTML;
  }

  btn.innerHTML = "&#10003; Added";
  btn.classList.add("added");

  btn._timer = setTimeout(function () {
    btn.innerHTML = btn.dataset.original;
    btn.classList.remove("added");
  }, 1500);

}


/* ---------- Wishlist ---------- */

const WISHLIST_KEY = "sportshub_wishlist";


function getWishlist() {
  try {
    return JSON.parse(
      localStorage.getItem(WISHLIST_KEY)
    ) || [];
  } catch (e) {
    return [];
  }
}


function saveWishlist(list) {
  localStorage.setItem(
    WISHLIST_KEY,
    JSON.stringify(list)
  );

  updateWishlistBadge();
}


function isWished(id) {
  return getWishlist().includes(id);
}


function toggleWishlist(id) {
  const list = getWishlist();

  const idx = list.indexOf(id);

  if (idx === -1) {
    list.push(id);
  } else {
    list.splice(idx, 1);
  }

  saveWishlist(list);

  return list.includes(id);
}


function removeFromWishlist(id) {
  saveWishlist(
    getWishlist().filter(x => x !== id)
  );
}


function wishlistProducts() {
  return getWishlist()
    .map(getProduct)
    .filter(Boolean);
}


function updateWishlistBadge() {
  const badge =
    document.getElementById(
      "wishlist-count-badge"
    );

  if (!badge) return;

  const n = getWishlist().length;

  badge.textContent = n;

  badge.style.display =
    n > 0 ? "flex" : "none";
}


/* ---------- Wishlist button (heart on product cards) ---------- */

(function () {
  const style = document.createElement("style");
  style.textContent = `
    .card { position: relative; }
    .wish-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 2;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.92);
      color: #555;
      font-size: 20px;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      transition: transform 0.15s ease, color 0.15s ease;
    }
    .wish-btn:hover { transform: scale(1.1); }
    .wish-btn.active { color: #e0245e; }
  `;
  document.head.appendChild(style);
})();


function toggleWishBtn(id, btn) {
  const wished = toggleWishlist(id);   // also updates the wishlist badge

  btn.classList.toggle("active", wished);
  btn.innerHTML = wished ? "&#9829;" : "&#9825;";
  btn.setAttribute(
    "aria-label",
    wished ? "Remove from wishlist" : "Add to wishlist"
  );
}


/* ---------- Auth ---------- */

const USER_KEY = "sportshub_user";


function getUser() {
  try {
    return JSON.parse(
      localStorage.getItem(USER_KEY)
    );
  } catch (e) {
    return null;
  }
}


function setUser(user) {
  localStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  );
}


function logOut() {
  localStorage.removeItem(USER_KEY);

  window.location.href = "index.html";
}


/* ---------- Header / Footer ---------- */

const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "Shop", href: "shop.html" },
  { label: "Wishlist", href: "wishlist.html" },
  { label: "Categories", href: "categories.html" },
  { label: "About Us", href: "about.html" },
  { label: "Contact Us", href: "contact.html" }
];


function renderHeader(active) {

  const el =
    document.getElementById("site-header");

  if (!el) return;


  const navHtml =
    NAV_LINKS.map(l =>
      `<a href="${l.href}"
          class="${l.label === active ? "active" : ""}">
          ${l.label}
       </a>`
    ).join("");


  const user = getUser();


  const authHtml = user

    ? `<a href="account.html"
          class="header-account">
          Hi, ${user.name.split(" ")[0]}
       </a>

       <button
          type="button"
          class="btn btn-outline btn-sm"
          onclick="logOut()">
          Log Out
       </button>`

    : `<a href="login.html"
          class="header-link">
          Log In
       </a>

       <a href="signup.html"
          class="btn btn-primary btn-sm">
          Sign Up
       </a>`;


  el.innerHTML = `

    <div class="wrap header-inner">

      <!-- CLICKABLE LOGO + SPORTSHUB TEXT -->

      <a href="index.html" class="logo">

        <img
          src="Logo.png"
          alt="SportsHub Logo"
          class="site-logo"
        >

        <span class="logo-text">
          Sports<span class="accent">Hub</span>
        </span>

      </a>


      <nav class="main-nav">
        ${navHtml}
      </nav>


      <div class="header-right">

        <div class="search-box">
          <span class="search-icon">&#9906;</span>

          <input
            type="text"
            placeholder="Search products..."
          >
        </div>


        <a
          href="wishlist.html"
          class="cart-link"
          aria-label="Wishlist"
        >
          &#9825;

          <span
            id="wishlist-count-badge"
            class="cart-badge"
          >0</span>
        </a>


        <a
          href="cart.html"
          class="cart-link"
          aria-label="Cart"
        >
          &#128722;

          <span
            id="cart-count-badge"
            class="cart-badge"
          >0</span>
        </a>


        <div class="auth-area">
          ${authHtml}
        </div>

      </div>

    </div>

  `;


  updateCartBadge();

  updateWishlistBadge();
}


function renderFooter() {

  const el =
    document.getElementById("site-footer");

  if (!el) return;


  const year =
    new Date().getFullYear();


  el.innerHTML = `

    <div class="wrap footer-inner">

      <span>
        &copy; ${year} SportsHub.
        All rights reserved.
      </span>

      <span class="footer-tag">
        Designed for Athletes
      </span>

    </div>

  `;
}



/* ---------- Style (thumbnail) pricing on product page ---------- */

function applyStylePrice(product, style) {
  const cur = document.querySelector(".price-current");
  if (cur) cur.textContent = fmt(style.price);

  const old = document.querySelector(".price-old");
  const badge = document.querySelector(".save-badge");

  if (old) {
    if (style.oldPrice) {
      old.textContent = fmt(style.oldPrice);
      old.style.display = "";
    } else {
      old.style.display = "none";
    }
  }

  if (badge) {
    if (style.oldPrice) {
      const pct = Math.round(
        (1 - style.price / style.oldPrice) * 100
      );
      badge.textContent = "SAVE " + pct + "%";
      badge.style.display = "";
    } else {
      badge.style.display = "none";
    }
  }
}


document.addEventListener("click", function (e) {
  const thumb = e.target.closest(".thumb-row > *");

  if (!thumb) return;

  const index = Array.prototype.indexOf.call(
    thumb.parentElement.children,
    thumb
  );

  const titleEl = document.querySelector(".pd-title");

  if (!titleEl) return;

  const product = PRODUCTS.find(
    p => p.name === titleEl.textContent.trim()
  );

  if (!product || !product.styles || !product.styles[index]) return;

  selectedStyle = { id: product.id, index };

  applyStylePrice(product, product.styles[index]);
});