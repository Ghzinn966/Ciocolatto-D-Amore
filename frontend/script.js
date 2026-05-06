  // ─── STATE ───────────────────────────────────────────────
  let products = [
    { id: 1,  name: 'Brigadeiro Tradicional',                  category: 'Brigadeiros',       qty: 20, price: 14.50, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202509132221_1OIT_i.jpg' },
    { id: 2,  name: 'Bolo Vulcão Duo Choco Brownie',           category: 'Bolos Caseirinhos', qty: 10, price: 24.40, minStock: 3,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202507031020_MM6X_i.jpg' },
    { id: 3,  name: 'Bolo Vulcão Cenoura com Chocolate',       category: 'Bolos Caseirinhos', qty: 10, price: 24.40, minStock: 3,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202507031017_NF8A_i.jpg' },
    { id: 4,  name: 'Brownie de Brigadeiro Tradicional',       category: 'Brownies',          qty: 15, price: 15.40, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202509191501_28Y0_i.jpg' },
    { id: 5,  name: 'Pão de Mel',                              category: 'Pão de Mel',        qty: 30, price:  7.99, minStock: 10, img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202509132229_UMQ2_i.jpg' },
    { id: 6,  name: 'Geladinho Gourmet Morango',               category: 'Geladinho Gourmet', qty: 20, price: 13.99, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202512170956_OO07_i.jpg' },
    { id: 7,  name: 'Geladinho Gourmet Sensação',              category: 'Geladinho Gourmet', qty: 20, price: 13.99, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202512170958_N70E_i.jpg' },
    { id: 8,  name: 'Geladinho Gourmet Maracujá',              category: 'Geladinho Gourmet', qty: 20, price: 13.99, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202512170959_0HNY_i.jpg' },
    { id: 9,  name: 'Geladinho Gourmet Ninho com Creme de Avelã', category: 'Geladinho Gourmet', qty: 20, price: 13.99, minStock: 5, img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202512170947_3N5E_i.jpg' },
    { id: 10, name: 'Geladinho Gourmet Paçoca',                category: 'Geladinho Gourmet', qty: 20, price: 13.99, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202512170947_DYE0_i.jpg' },
    { id: 11, name: 'Geladinho Gourmet Açaí',                  category: 'Geladinho Gourmet', qty: 20, price: 13.99, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202512292121_1MP1_i.jpg' },
    { id: 12, name: 'Bombom Bolo de Cenoura',                  category: 'Bombom',            qty: 15, price: 18.99, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202603102057_2R86_i.jpg' },
    { id: 13, name: 'Bombom Cookie de Baunilha',               category: 'Bombom',            qty: 15, price: 18.99, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202603102101_L8KG_i.jpg' },
    { id: 14, name: 'Bombom Cookie de Chocolate',              category: 'Bombom',            qty: 15, price: 18.99, minStock: 5,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202603102103_75U5_i.jpg' },
    { id: 15, name: 'Empada de Frango',                        category: 'Empadas',           qty: 10, price: 35.99, minStock: 3,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202603102135_A0LE_i.jpg' },
    { id: 16, name: 'Empada de Palmito',                       category: 'Empadas',           qty: 10, price: 35.99, minStock: 3,  img: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/f407c2d6-6214-45ff-83f0-926fae16c5a8/202603102135_A0LE_i.jpg' },
  ];

  let sales = [];
  let nextId = 17;
  let currentFilter = 'all';
  let pendingAction = null;

  function updateTotal() {
    const qty = parseFloat(document.getElementById('sale-qty').value) || 0;
    const price = parseFloat(document.getElementById('sale-price').value) || 0;
    const total = qty * price;
    const box = document.getElementById('sale-total-box');
    const val = document.getElementById('sale-total-value');
    if (qty > 0 && price > 0) {
      box.style.display = 'flex';
      val.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
    } else {
      box.style.display = 'none';
    }
  }

  // ─── INIT ─────────────────────────────────────────────────
  document.getElementById('header-date').textContent = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
  });

  function init() {
    renderProducts();
    updateSummary();
    populateSaleSelect();
    renderSales();
  }

  // ─── RENDER PRODUCTS ─────────────────────────────────────
  function getStockStatus(p) {
    if (p.qty === 0) return { cls: 'stock-out', label: '● Zerado' };
    if (p.qty <= p.minStock) return { cls: 'stock-low', label: '● Baixo' };
    return { cls: 'stock-ok', label: '● Ok' };
  }

  function getCategoryEmoji(cat) {
    return cat.split(' ')[0] || '🍬';
  }

  function formatCategory(cat) {
    const map = {
      'Bolos Caseirinhos': 'Bolos Caseiros',
      'Pão de Mel': 'Pão de Mel',
      'Geladinho Gourmet': 'Geladinhos',
    };
    return map[cat] || cat;
  }

  function renderProducts() {
    const search = document.getElementById('search-input').value.toLowerCase();
    let list = products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search);
      if (currentFilter === 'low') return matchSearch && p.qty > 0 && p.qty <= p.minStock;
      if (currentFilter === 'out') return matchSearch && p.qty === 0;
      return matchSearch;
    });

    const tbody = document.getElementById('products-tbody');
    const empty = document.getElementById('empty-products');
    tbody.innerHTML = '';

    if (list.length === 0) {
      empty.style.display = 'block';
    } else {
      empty.style.display = 'none';
      list.forEach(p => {
        const st = getStockStatus(p);
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>
            <div class="product-cell">
              ${p.img
                ? `<img src="${p.img}" alt="${p.name}" style="width:44px;height:44px;border-radius:10px;object-fit:cover;flex-shrink:0;border:1px solid rgba(242,151,160,0.2);">`
                : `<div class="product-emoji">🍬</div>`}
              <div>
                <div class="product-name">${p.name}</div>
                <div class="product-category">${formatCategory(p.category)}</div>
              </div>
            </div>
          </td>
          <td style="font-weight:600;color:var(--chocolate)">${p.qty} un</td>
          <td class="price">R$ ${p.price.toFixed(2).replace('.',',')}</td>
          <td><span class="stock-badge ${st.cls}">${st.label}</span></td>
          <td>
            <button class="action-btn" onclick="openRestockModal(${p.id})">+ Repor</button>
            <button class="action-btn danger" onclick="openDeleteModal(${p.id})">✕</button>
          </td>`;
        tbody.appendChild(tr);
      });
    }

    updateSummary();
    populateSaleSelect();
  }

  // ─── FILTERS ─────────────────────────────────────────────
  function setFilter(f, btn) {
    currentFilter = f;
    document.querySelectorAll('.section-header .tabs .tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
  }

  function filterProducts() { renderProducts(); }

  // ─── SUMMARY ─────────────────────────────────────────────
  function updateSummary() {
    document.getElementById('total-products').textContent = products.length;
    const todayStr = new Date().toDateString();
    const todaySales = sales.filter(s => new Date(s.date).toDateString() === todayStr);
    document.getElementById('sales-today').textContent = todaySales.length;
    const rev = todaySales.reduce((a, s) => a + s.total, 0);
    document.getElementById('revenue-today').textContent = 'R$ ' + rev.toFixed(2).replace('.', ',');
    const lowCount = products.filter(p => p.qty > 0 && p.qty <= p.minStock || p.qty === 0).length;
    document.getElementById('low-stock').textContent = lowCount;
  }

  // ─── SELECT ───────────────────────────────────────────────
  function populateSaleSelect() {
    const sel = document.getElementById('sale-product');
    const cur = sel.value;
    sel.innerHTML = '<option value="">— Selecione —</option>';
    products.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = `${p.name} (${p.qty} un)`;
      sel.appendChild(opt);
    });
    sel.value = cur;

    // Auto-fill price
    sel.onchange = () => {
      const p = products.find(x => x.id == sel.value);
      if (p) document.getElementById('sale-price').value = p.price.toFixed(2);
    };
  }

  // ─── ADD PRODUCT ─────────────────────────────────────────
  function addProduct() {
    const name = document.getElementById('prod-name').value.trim();
    const cat = document.getElementById('prod-category').value;
    const qty = parseInt(document.getElementById('prod-qty').value) || 0;
    const price = parseFloat(document.getElementById('prod-price').value) || 0;
    const min = parseInt(document.getElementById('prod-min').value) || 5;

    if (!name) return showToast('Por favor, informe o nome do produto.', 'error');
    if (price <= 0) return showToast('Informe um preço válido.', 'error');

    products.push({ id: nextId++, name, category: cat, qty, price, minStock: min });
    document.getElementById('prod-name').value = '';
    document.getElementById('prod-qty').value = '';
    document.getElementById('prod-price').value = '';
    renderProducts();
    showToast(`"${name}" adicionado ao estoque!`, 'success');
  }

  // ─── REGISTER SALE ───────────────────────────────────────
  function registerSale() {
    const pId = parseInt(document.getElementById('sale-product').value);
    const qty = parseInt(document.getElementById('sale-qty').value);
    const price = parseFloat(document.getElementById('sale-price').value);
    const note = document.getElementById('sale-note').value.trim();

    if (!pId) return showToast('Selecione um produto.', 'error');
    if (!qty || qty < 1) return showToast('Informe uma quantidade válida.', 'error');
    if (!price || price <= 0) return showToast('Informe um preço válido.', 'error');

    const p = products.find(x => x.id === pId);
    if (!p) return;
    if (p.qty < qty) return showToast(`Estoque insuficiente! Disponível: ${p.qty} un.`, 'error');

    p.qty -= qty;
    sales.unshift({
      id: Date.now(),
      productName: p.name,
      emoji: getCategoryEmoji(p.category),
      qty,
      unitPrice: price,
      total: qty * price,
      note,
      date: new Date()
    });

    document.getElementById('sale-product').value = '';
    document.getElementById('sale-qty').value = '';
    document.getElementById('sale-price').value = '';
    document.getElementById('sale-total-value').textContent = 'R$ 0,00';
    updateTotal();
    document.getElementById('sale-note').value = '';

    renderProducts();
    renderSales();
    if (p.qty <= p.minStock && p.qty > 0) {
      showToast(`Venda registrada! ⚠️ Estoque de "${p.name}" está baixo (${p.qty} un).`, 'warning');
    } else if (p.qty === 0) {
      showToast(`Venda registrada! ❌ "${p.name}" zerou o estoque!`, 'warning');
    } else {
      showToast('Venda registrada com sucesso!', 'success');
    }
  }

  // ─── RENDER SALES ─────────────────────────────────────────
  function renderSales() {
    const container = document.getElementById('sales-list');
    if (sales.length === 0) {
      container.innerHTML = `<div class="empty-state"><span class="emoji">🧾</span>Nenhuma venda registrada ainda</div>`;
      return;
    }
    container.innerHTML = sales.slice(0, 8).map(s => `
      <div class="sale-item">
        <div class="sale-left">
          <div class="sale-dot"></div>
          <div>
            <div class="sale-product">${s.emoji} ${s.productName}</div>
            <div class="sale-info">${formatTime(s.date)}${s.note ? ' · ' + s.note : ''}</div>
          </div>
        </div>
        <div class="sale-right">
          <div class="sale-price">R$ ${s.total.toFixed(2).replace('.',',')}</div>
          <div class="sale-qty">${s.qty} un × R$ ${s.unitPrice.toFixed(2).replace('.',',')}</div>
        </div>
      </div>`).join('');
  }

  function formatTime(date) {
    return new Date(date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  // ─── TABS ─────────────────────────────────────────────────
  function switchTab(tab) {
    const isSale = tab === 'sale';
    document.getElementById('sale-form').style.display = isSale ? '' : 'none';
    document.getElementById('product-form').style.display = isSale ? 'none' : '';
    document.getElementById('form-title').textContent = isSale ? 'Registrar Venda' : 'Novo Produto';
    document.getElementById('tab-sale').classList.toggle('active', isSale);
    document.getElementById('tab-product').classList.toggle('active', !isSale);
  }

  // ─── MODALS ───────────────────────────────────────────────
  function openRestockModal(id) {
    const p = products.find(x => x.id === id);
    document.getElementById('modal-title').textContent = 'Repor Estoque';
    document.getElementById('modal-text').innerHTML = `
      <strong>${p.name}</strong><br>Estoque atual: ${p.qty} un<br><br>
      <label style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:8px;">Quantidade a adicionar</label>
      <input type="number" id="restock-qty" min="1" placeholder="Ex: 10" value="10"
        style="width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:10px;background:var(--cream);font-family:'DM Sans',sans-serif;font-size:14px;color:var(--ink);outline:none;">`;
    document.getElementById('modal-confirm-btn').textContent = 'Repor';
    pendingAction = () => {
      const qty = parseInt(document.getElementById('restock-qty').value) || 0;
      if (qty < 1) return showToast('Informe uma quantidade válida.', 'error');
      p.qty += qty;
      renderProducts();
      showToast(`${qty} unidades adicionadas a "${p.name}"!`, 'success');
      closeModal();
    };
    document.getElementById('modal-overlay').classList.add('open');
    setTimeout(() => document.getElementById('restock-qty')?.focus(), 300);
  }

  function openDeleteModal(id) {
    const p = products.find(x => x.id === id);
    document.getElementById('modal-title').textContent = 'Remover Produto';
    document.getElementById('modal-text').textContent = `Tem certeza que deseja remover "${p.name}" do estoque? Esta ação não pode ser desfeita.`;
    document.getElementById('modal-confirm-btn').textContent = 'Remover';
    document.getElementById('modal-confirm-btn').style.background = '#c0726a';
    pendingAction = () => {
      products = products.filter(x => x.id !== id);
      renderProducts();
      showToast(`"${p.name}" removido do estoque.`, 'success');
      closeModal();
    };
    document.getElementById('modal-overlay').classList.add('open');
  }

  function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.getElementById('modal-confirm-btn').style.background = '';
    pendingAction = null;
  }

  document.getElementById('modal-confirm-btn').onclick = () => { if (pendingAction) pendingAction(); };
  document.getElementById('modal-overlay').onclick = (e) => { if (e.target === e.currentTarget) closeModal(); };

  // ─── TOAST ────────────────────────────────────────────────
  function showToast(msg, type = 'success') {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<span>${type === 'success' ? '✓' : type === 'error' ? '✕' : '⚠'}</span> ${msg}`;
    c.appendChild(t);
    setTimeout(() => t.remove(), 3000);
  }

  // ─── START ────────────────────────────────────────────────
  init();
