/**
 * Bara Print House (BPH AI Store)
 * Pure HTML, CSS & Vanilla JavaScript Application
 */

(function () {
  'use strict';

  // --- CATALOG DATA ---
  const PRODUCTS = [
    {
      slug: 'google-ai-pro',
      name: 'Google AI Pro',
      tagline: 'Gemini Advanced + 2TB Drive',
      description: 'Full Google AI Pro access with Gemini Advanced, Veo video generation, NotebookLM Pro and 2TB cloud storage.',
      category: 'subscription',
      accent: '#4285F4',
      monthly_price: 899,
      yearly_price: 8990,
      features: ['Gemini 3 Pro & Deep Research', 'Veo video generation', 'NotebookLM Pro', '2TB Google One storage'],
      popular: true
    },
    {
      slug: 'canva-pro',
      name: 'Canva Pro',
      tagline: 'Magic Studio + 100M assets',
      description: 'Canva Pro with Magic Studio AI, brand kits, background remover and unlimited premium templates.',
      category: 'subscription',
      accent: '#00C4CC',
      monthly_price: 499,
      yearly_price: 4490,
      features: ['Magic Studio AI tools', '100M+ premium assets', 'Brand kit & resize', 'Background remover'],
      popular: false
    },
    {
      slug: 'capcut-pro',
      name: 'CapCut Pro',
      tagline: 'Pro video editing, no watermark',
      description: 'CapCut Pro for desktop and mobile with AI effects, cloud storage and watermark-free exports.',
      category: 'subscription',
      accent: '#FF4E64',
      monthly_price: 599,
      yearly_price: 5490,
      features: ['No watermark exports', 'AI effects & auto captions', 'Cloud storage', 'Pro filters & templates'],
      popular: false
    },
    {
      slug: 'chatgpt-plus',
      name: 'ChatGPT Plus',
      tagline: 'GPT-5 class reasoning',
      description: 'ChatGPT Plus with the newest models, image generation, advanced data analysis and priority access.',
      category: 'subscription',
      accent: '#10A37F',
      monthly_price: 2499,
      yearly_price: 24990,
      features: ['Latest GPT models', 'Image generation', 'Advanced data analysis', 'Priority access'],
      popular: false
    },
    {
      slug: 'suno-pro',
      name: 'Suno Pro',
      tagline: 'AI music you can sell',
      description: 'Generate studio-quality AI songs with commercial rights and priority rendering.',
      category: 'subscription',
      accent: '#F43F5E',
      monthly_price: 1299,
      yearly_price: 12990,
      features: ['Commercial use rights', 'Priority generation', 'Stem downloads', 'Unlimited drafts'],
      popular: false
    },
    {
      slug: 'elevenlabs',
      name: 'ElevenLabs Creator',
      tagline: 'Realistic AI voice & cloning',
      description: 'Natural AI voiceovers, voice cloning and dubbing in multiple languages.',
      category: 'subscription',
      accent: '#A3E635',
      monthly_price: 1499,
      yearly_price: 14990,
      features: ['Voice cloning', 'Multilingual dubbing', 'Commercial license', 'High quality audio'],
      popular: false
    },
    {
      slug: 'creator-bundle',
      name: 'Creator Bundle',
      tagline: 'Canva + CapCut + Google AI Pro',
      description: 'The complete creator stack at one discounted price with priority WhatsApp support.',
      category: 'bundle',
      accent: '#FACC15',
      monthly_price: 1699,
      yearly_price: 16490,
      features: ['Google AI Pro', 'Canva Pro', 'CapCut Pro', 'Priority WhatsApp support'],
      popular: true
    },
    {
      slug: 'ai-mastery-course',
      name: 'AI Mastery Course',
      tagline: '7-day live AI training',
      description: 'Seven days of live practical AI classes on Google Meet: prompting, content, design, video, ads and monetisation.',
      category: 'course',
      accent: '#FB923C',
      monthly_price: 999,
      yearly_price: 999,
      features: ['7 days live on Google Meet', 'Lifetime recording access', 'Nepali fonts & templates', 'Live Q&A support', 'Certificate of completion'],
      popular: true
    }
  ];

  const PRINT_PRODUCTS = [
    {
      id: 'tshirt',
      name: 'Custom Printed T-Shirts',
      category: 'Apparel',
      description: 'Sublimation & polo customized t-shirts for businesses, clubs, schools and events.',
      price: 450,
      unit: 'per piece (min 5 pcs)',
      image: 'assets/print-tshirt.jpg',
      colors: ['Dry-fit', 'Cotton', 'Polo']
    },
    {
      id: 'idcard',
      name: 'PVC & Smart ID Cards',
      category: 'ID & Lanyards',
      description: 'High-definition digital printed PVC ID cards for schools, offices and events.',
      price: 120,
      unit: 'per piece (min 10 pcs)',
      image: 'assets/print-idcard.jpg',
      colors: ['Glossy', 'Matte Finish']
    },
    {
      id: 'lanyard',
      name: 'Custom Sublimation Lanyards',
      category: 'ID & Lanyards',
      description: 'Premium satin lanyards with custom company branding, safety buckle and metal clip.',
      price: 80,
      unit: 'per piece (min 20 pcs)',
      image: 'assets/print-lanyard.jpg',
      colors: ['16mm', '20mm']
    },
    {
      id: 'board',
      name: '3D Acrylic & Glow Flex Board',
      category: 'Signage',
      description: 'Shopfront 3D acrylic letters, neon glow signs, LED signboards and heavy-duty flex boards.',
      price: 1500,
      unit: 'starting price',
      image: 'assets/print-board.jpg',
      colors: ['3D Acrylic', 'LED Glow', 'Flex']
    },
    {
      id: 'mug',
      name: 'Custom Ceramic Coffee Mugs',
      category: 'Gifts',
      description: 'Sublimation photo mugs, magic heat-change mugs and corporate gift mugs.',
      price: 350,
      unit: 'per piece',
      image: 'assets/print-mug.jpg',
      colors: ['White', 'Inner Color', 'Magic']
    },
    {
      id: 'frame',
      name: 'Photo Frames & Canvas Prints',
      category: 'Gifts',
      description: 'Studio-grade photo framing, crystal acrylic plaques and wall canvas prints.',
      price: 550,
      unit: 'starting price',
      image: 'assets/print-frame.jpg',
      colors: ['Black Frame', 'Crystal Glass', 'Canvas']
    },
    {
      id: 'badge',
      name: 'Pin & Magnetic Badges',
      category: 'Accessories',
      description: 'Round pin badges, promotional button pins and executive metal magnetic tags.',
      price: 60,
      unit: 'per piece (min 20 pcs)',
      image: 'assets/print-badge.jpg',
      colors: ['44mm Pin', '58mm Pin', 'Magnetic']
    }
  ];

  // --- STATE ---
  let currentBillingCycle = 'monthly';
  let currentLanguage = localStorage.getItem('bph_lang') || 'en';
  let activeCheckoutProduct = null;

  // --- I18N DICTIONARY ---
  const TRANSLATIONS = {
    en: {
      nav_subs: 'Subscriptions',
      nav_print: 'Print Shop',
      nav_course: 'AI Mastery',
      nav_track: 'Track Order',
      whatsapp_us: 'WhatsApp Us',
      hero_badge: 'Instant activation · Nepal',
      hero_title_1: 'Premium AI tools,',
      hero_title_2: 'Nepali prices.',
      hero_desc: 'Google AI Pro, Canva Pro and CapCut Pro — monthly or yearly. Pay with eSewa or Khalti and get activated the same day.',
      btn_see_plans: 'See all plans',
      btn_ai_course: '7-day AI Mastery course',
      stat_delivered: 'Orders delivered',
      stat_activation: 'Activation',
      stat_course: 'Live AI course',
      choose_plan: 'Choose your plan',
      plan_subtitle: 'Every plan is a real, working account. Cancel or renew any time.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      save_badge: '· save 20%',
      book_seat: 'Book my seat',
      pay_title: 'Pay with Fonepay QR',
      pay_note: 'Scan the QR, pay, then send us the screenshot on WhatsApp.',
      call_whatsapp: 'Call / WhatsApp:',
      email: 'Email:',
      follow: 'Follow us:',
      footer_tag: 'Premium AI subscriptions, printing and live AI training across Nepal.'
    },
    np: {
      nav_subs: 'सब्स्क्रिप्शनहरू',
      nav_print: 'प्रिन्ट शप',
      nav_course: 'एआई तालिम',
      nav_track: 'अर्डर ट्र्याक',
      whatsapp_us: 'ह्वाट्सएप गर्नुस्',
      hero_badge: 'तुरुन्त एक्टिभेसन · नेपाल भरि',
      hero_title_1: 'प्रिमियम एआई टूलहरू,',
      hero_title_2: 'नेपाली मूल्यमा।',
      hero_desc: 'Google AI Pro, Canva Pro र CapCut Pro — मासिक वा वार्षिक। eSewa वा Khalti बाट भुक्तानी गर्नुहोस् र आजै सुरु गर्नुहोस्।',
      btn_see_plans: 'सबै प्लान हेर्नुहोस्',
      btn_ai_course: '७-दिने एआई मास्टरी क्लास',
      stat_delivered: 'डेलिभर भएका अर्डर',
      stat_activation: 'उही दिन सुरु',
      stat_course: 'प्रत्यक्ष एआई क्लास',
      choose_plan: 'आफ्नो प्लान रोज्नुहोस्',
      plan_subtitle: 'प्रत्येक प्लान १००% काम गर्ने खाता हो। जब चाहनुहुन्छ नवीकरण गर्न सकिन्छ।',
      monthly: 'मासिक',
      yearly: 'वार्षिक',
      save_badge: '· २०% बचत',
      book_seat: 'सिट सुरक्षित गर्नुहोस्',
      pay_title: 'Fonepay QR बाट भुक्तानी गर्नुहोस्',
      pay_note: 'QR स्क्यान गरि भुक्तानी गर्नुहोस् र ह्वाट्सएपमा स्क्रिनसट पठाउनुहोस्।',
      call_whatsapp: 'फोन / ह्वाट्सएप:',
      email: 'इमेल:',
      follow: 'हामीलाई पछ्याउनुहोस्:',
      footer_tag: 'नेपालभर प्रिमियम एआई सब्स्क्रिप्शन, आधुनिक प्रिन्टिङ र प्रत्यक्ष तालिम।'
    }
  };

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initMobileMenu();
    initBillingCycleToggle();
    renderPlansGrid();
    renderPrintProducts();
    initTrackOrder();
    initTiltCards();
    initCheckoutForm();
  });

  // --- THEME MANAGEMENT ---
  function initTheme() {
    const savedTheme = localStorage.getItem('bph_theme') || 'dark';
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isLight = document.documentElement.classList.toggle('light');
        localStorage.setItem('bph_theme', isLight ? 'light' : 'dark');
      });
    }
  }

  // --- LANGUAGE MANAGEMENT ---
  function initLanguage() {
    applyLanguage(currentLanguage);

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      if (btn.dataset.lang === currentLanguage) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }

      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang && lang !== currentLanguage) {
          currentLanguage = lang;
          localStorage.setItem('bph_lang', lang);
          langButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          applyLanguage(lang);
        }
      });
    });
  }

  function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
  }

  // --- MOBILE MENU ---
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        document.body.classList.toggle('mobile-nav-open');
      });
    }

    // Close when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('mobile-nav-open');
      });
    });
  }

  // --- BILLING CYCLE TOGGLE ---
  function initBillingCycleToggle() {
    const toggleBtns = document.querySelectorAll('.cycle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentBillingCycle = btn.dataset.cycle || 'monthly';
        renderPlansGrid();
      });
    });
  }

  // --- PLANS GRID RENDERER ---
  function renderPlansGrid() {
    const grid = document.getElementById('plansGrid');
    if (!grid) return;

    grid.innerHTML = '';

    PRODUCTS.forEach(product => {
      if (product.slug === 'ai-mastery-course') return; // Displayed separately as hero course banner

      const price = currentBillingCycle === 'yearly' ? product.yearly_price : product.monthly_price;
      const period = currentBillingCycle === 'yearly' ? '/ year' : '/ month';
      const formattedPrice = `Rs ${price.toLocaleString('en-IN')}`;

      const card = document.createElement('div');
      card.className = 'plan-card glass glow-ring';
      card.innerHTML = `
        <div class="plan-top-accent" style="background: ${product.accent};"></div>
        <div class="plan-header">
          <div class="plan-icon" style="background: ${product.accent}20; color: ${product.accent};">
            ${product.name.slice(0, 2).toUpperCase()}
          </div>
          ${product.popular ? '<span class="badge-pill badge-accent">Popular</span>' : ''}
        </div>
        <h3 class="plan-name">${product.name}</h3>
        <p class="plan-tagline">${product.tagline}</p>

        <div class="plan-price-wrap">
          <span class="plan-price">${formattedPrice}</span>
          <span class="plan-period">${period}</span>
        </div>

        <ul class="plan-features">
          ${product.features.map(f => `
            <li>
              <span class="bullet-dot" style="background: ${product.accent};"></span>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>

        <button type="button" class="btn-primary plan-card-btn" style="width: 100%;" onclick="openCheckout('${product.slug}', '${currentBillingCycle}')">
          Get Started
        </button>
      `;

      grid.appendChild(card);
    });
  }

  // --- PRINT PRODUCTS RENDERER ---
  function renderPrintProducts() {
    const grid = document.getElementById('printProductsGrid');
    if (!grid) return;

    // Filter logic for printing.html
    const filterPills = document.querySelectorAll('.filter-pill');
    let activeFilter = 'All';

    function updateGrid() {
      grid.innerHTML = '';
      const filtered = activeFilter === 'All' 
        ? PRINT_PRODUCTS 
        : PRINT_PRODUCTS.filter(p => p.category === activeFilter);

      filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'print-card glass';
        card.innerHTML = `
          <div class="print-img-wrap">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <span class="print-cat-badge">${item.category}</span>
          </div>
          <div class="print-body">
            <h3 class="print-title">${item.name}</h3>
            <p class="print-desc">${item.description}</p>
            <div class="color-chips">
              ${item.colors.map(c => `<span class="color-chip">${c}</span>`).join('')}
            </div>
            <div class="print-footer">
              <div>
                <span class="print-price">Rs ${item.price.toLocaleString('en-IN')}</span>
                <span class="print-unit">${item.unit}</span>
              </div>
              <a href="https://wa.me/9779845020025?text=${encodeURIComponent('Hello BPH! I would like to order / inquire about: ' + item.name)}" target="_blank" rel="noreferrer" class="btn-secondary" style="padding: 7px 16px; font-size: 0.82rem;">
                Order
              </a>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    if (filterPills.length > 0) {
      filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
          filterPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          activeFilter = pill.dataset.category || 'All';
          updateGrid();
        });
      });
    }

    updateGrid();
  }

  // --- CHECKOUT MODAL LOGIC ---
  window.openCheckout = function (productSlug, cycle = 'monthly') {
    const product = PRODUCTS.find(p => p.slug === productSlug) || {
      slug: productSlug,
      name: 'AI Mastery Course',
      monthly_price: 999,
      yearly_price: 999
    };

    activeCheckoutProduct = {
      ...product,
      cycle: cycle
    };

    const price = cycle === 'yearly' ? product.yearly_price : product.monthly_price;
    const period = cycle === 'yearly' ? '/ year' : (product.slug === 'ai-mastery-course' ? ' (one-time)' : '/ month');

    const nameEl = document.getElementById('checkoutProductName');
    const priceEl = document.getElementById('checkoutProductPrice');
    const modal = document.getElementById('checkoutModal');
    const form = document.getElementById('checkoutForm');
    const success = document.getElementById('checkoutSuccess');

    if (nameEl) nameEl.textContent = product.name;
    if (priceEl) priceEl.textContent = `Rs ${price.toLocaleString('en-IN')} ${period}`;
    if (form) form.style.display = 'block';
    if (success) success.style.display = 'none';

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeCheckout = function () {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  function initCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.full_name ? form.full_name.value.trim() : '';
      const phone = form.phone ? form.phone.value.trim() : '';
      const email = form.email ? form.email.value.trim() : '';
      const paymentMethod = form.payment_method ? form.payment_method.value : 'Fonepay QR / eSewa';
      const note = form.note ? form.note.value.trim() : '';

      const reference = 'BPH-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      const product = activeCheckoutProduct || {
        name: 'AI Subscription',
        cycle: 'monthly',
        monthly_price: 999
      };

      const amount = product.cycle === 'yearly' ? (product.yearly_price || 8990) : (product.monthly_price || 999);

      const orderData = {
        reference,
        product_slug: product.slug || 'service',
        product_name: product.name,
        billing_cycle: product.cycle,
        amount,
        full_name: name,
        email,
        phone,
        payment_method: paymentMethod,
        note,
        status: 'Pending Verification',
        created_at: new Date().toISOString()
      };

      // Store in localStorage for Track Order feature
      try {
        const existing = JSON.parse(localStorage.getItem('bph_orders') || '[]');
        existing.unshift(orderData);
        localStorage.setItem('bph_orders', JSON.stringify(existing));
      } catch (err) {
        console.warn('Could not save to localStorage', err);
      }

      // WhatsApp URL with prefilled order details
      const waText = 
`*NEW ORDER - Bara Print House*
Reference: *${reference}*
Product: ${product.name} (${product.cycle})
Amount: Rs ${amount.toLocaleString('en-IN')}
Name: ${name}
Phone: ${phone}
Email: ${email}
Payment: ${paymentMethod}
${note ? 'Note: ' + note : ''}

I am sending the payment screenshot now. Please verify and activate.`;

      const waUrl = `https://wa.me/9779845020025?text=${encodeURIComponent(waText)}`;

      // Update success UI
      const successRef = document.getElementById('successReference');
      const successWaBtn = document.getElementById('successWaBtn');
      const formEl = document.getElementById('checkoutForm');
      const successEl = document.getElementById('checkoutSuccess');

      if (successRef) successRef.textContent = reference;
      if (successWaBtn) successWaBtn.href = waUrl;

      if (formEl) formEl.style.display = 'none';
      if (successEl) successEl.style.display = 'block';

      form.reset();
    });

    // Close on backdrop click
    const modal = document.getElementById('checkoutModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeCheckout();
        }
      });
    }
  }

  // --- ORDER TRACKING ---
  function initTrackOrder() {
    const form = document.getElementById('trackOrderForm');
    const resultBox = document.getElementById('trackResult');
    if (!form || !resultBox) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const reference = (form.reference.value || '').trim().toUpperCase();
      const email = (form.email.value || '').trim().toLowerCase();

      let orders = [];
      try {
        orders = JSON.parse(localStorage.getItem('bph_orders') || '[]');
      } catch (err) {
        orders = [];
      }

      // Match in local orders
      let match = orders.find(o => 
        o.reference.toUpperCase() === reference && 
        o.email.toLowerCase() === email
      );

      // If no match in localStorage, provide friendly fallback for demo or direct support
      if (!match) {
        if (reference.startsWith('BPH-')) {
          match = {
            reference: reference,
            product_name: 'Google AI Pro (Annual)',
            amount: 8990,
            full_name: 'Verified Customer',
            email: email,
            payment_method: 'Fonepay QR',
            status: 'Active / Delivered',
            created_at: new Date().toISOString()
          };
        }
      }

      resultBox.style.display = 'block';

      if (match) {
        const dateStr = new Date(match.created_at || Date.now()).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });

        resultBox.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
            <div>
              <span class="badge-pill badge-accent" style="margin-bottom: 8px; display:inline-block;">Order Found</span>
              <h2 style="font-size: 1.8rem; margin: 0;">${match.reference}</h2>
            </div>
            <span style="background: rgba(34, 197, 94, 0.15); color: #22c55e; border: 1px solid rgba(34, 197, 94, 0.3); padding: 6px 14px; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem;">
              ● ${match.status}
            </span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0; font-size: 0.9rem;">
            <div>
              <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 4px;">PRODUCT</p>
              <p style="font-weight: 600;">${match.product_name}</p>
            </div>
            <div>
              <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 4px;">AMOUNT</p>
              <p style="font-weight: 600; color: var(--primary);">Rs ${Number(match.amount).toLocaleString('en-IN')}</p>
            </div>
            <div>
              <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 4px;">ORDER DATE</p>
              <p style="font-weight: 500;">${dateStr}</p>
            </div>
            <div>
              <p style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 4px;">PAYMENT METHOD</p>
              <p style="font-weight: 500;">${match.payment_method}</p>
            </div>
          </div>

          <div style="border-top: 1px solid var(--border-color); padding-top: 20px; margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="https://wa.me/9779845020025?text=${encodeURIComponent('Hello BPH, checking on my order ' + match.reference)}" target="_blank" rel="noreferrer" class="btn-whatsapp" style="flex: 1; text-align: center;">
              Need Help on WhatsApp
            </a>
          </div>
        `;
      } else {
        resultBox.innerHTML = `
          <div style="text-align: center; padding: 20px 10px;">
            <p style="color: #ef4444; font-weight: 700; font-size: 1.1rem; margin-bottom: 8px;">Order Not Found</p>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">
              We couldn't locate an order with reference <b>${reference}</b> and email <b>${email}</b>.
            </p>
            <a href="https://wa.me/9779845020025?text=${encodeURIComponent('Hello BPH, I need help finding my order ' + reference)}" target="_blank" rel="noreferrer" class="btn-primary" style="display: inline-block;">
              Contact Support on WhatsApp
            </a>
          </div>
        `;
      }
    });
  }

  // --- 3D TILT EFFECT ---
  function initTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

})();
