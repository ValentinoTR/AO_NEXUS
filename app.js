// ==========================================================================
// AO NEXUS - Lógica del sitio
// ==========================================================================

// Función para toggle del contenido del footer
function toggleFooterContent(element, contentId) {
    const content = document.getElementById(contentId);
    const chevron = element.querySelector('i');

    if (content.style.display === 'none') {
        content.style.display = 'block';
        chevron.style.transform = 'rotate(90deg)';
    } else {
        content.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
    }
}

// Nombres legibles para cada categoría (se usan en tarjetas y resultados de búsqueda)
const categoryLabels = {
    "amd": "Procesador AMD",
    "intel": "Procesador Intel",
    "placa-am4": "Placa Madre · AM4",
    "placa-am5": "Placa Madre · AM5",
    "placa-lga1851": "Placa Madre · LGA1851",
    "ddr4": "Memoria RAM DDR4",
    "ddr5": "Memoria RAM DDR5",
    "almacenamiento": "Almacenamiento",
    "fuente-bronze": "Fuente de Poder · Bronze",
    "fuente-silver": "Fuente de Poder · Silver",
    "fuente-gold": "Fuente de Poder · Gold",
    "fuente-platinum": "Fuente de Poder · Platinum",
    "refrigeracion-liquida": "Refrigeración Líquida",
    "refrigeracion-aire": "Refrigeración de Aire"
};

// Base de datos de productos actualizada con tags de categoría
const products = [
    // AMD
    {
        id: 1,
        name: "RYZEN 5 9600X",
        category: "amd",
        price: 680,
        stock: 5,
        featured: true,
        image: "img/RYZEN_5_9600X.jpg",
        specs: { "Familia": "Ryzen 5 9600X", "Cores/Threads": "6C/12T", "Frecuencia Base": "3.9 GHz", "Frecuencia Turbo": "5.4 GHz", "Socket": "AM5", "TDP": "65W" }
    },
    {
        id: 2,
        name: "RYZEN 7 7800X3D",
        category: "amd",
        price: 1450,
        stock: 1,
        featured: true,
        image: "img/RYZEN_7_7800X3D.jpg",
        specs: { "Familia": "Ryzen 7 7800X3D", "Cores/Threads": "8C/16T", "Frecuencia Base": "4.2 GHz", "Frecuencia Turbo": "5.0 GHz", "Socket": "AM5", "TDP": "120W", "3D V-Cache": "Sí" }
    },
    {
        id: 3,
        name: "RYZEN 7 9800X3D",
        category: "amd",
        price: 1700,
        stock: 2,
        featured: true,
        image: "img/RYZEN_7_9800X3D.jpg",
        specs: { "Familia": "Ryzen 7 9800X3D", "Cores/Threads": "8C/16T", "Frecuencia Base": "4.7 GHz", "Frecuencia Turbo": "5.2 GHz", "Socket": "AM5", "TDP": "120W", "3D V-Cache": "Sí" }
    },
    {
        id: 4,
        name: "RYZEN 9 9950X3D",
        category: "amd",
        price: 2500,
        stock: 1,
        featured: true,
        image: "img/RYZEN_9_9500X3D.jpg",
        specs: { "Familia": "Ryzen 9 9950X3D", "Cores/Threads": "16C/32T", "Frecuencia Base": "4.3 GHz", "Frecuencia Turbo": "5.7 GHz", "Socket": "AM5", "TDP": "120W", "3D V-Cache": "Sí" }
    },
    // INTEL
    {
        id: 5,
        name: "INTEL CORE ULTRA 5 225F",
        category: "intel",
        price: 550,
        stock: 2,
        featured: false,
        image: "img/ULTRA_5_225F.jpg",
        specs: { "Familia": "Core Ultra 5 225F", "Cores/Threads": "6C/8T", "Frecuencia Base": "3.3 GHz", "Frecuencia Turbo": "4.9 GHz", "Socket": "LGA1851", "TDP": "58W" }
    },
    {
        id: 6,
        name: "INTEL CORE ULTRA 7 270K PLUS",
        category: "intel",
        price: 1200,
        stock: 1,
        featured: true,
        image: "img/ULTRA_7_270K_PLUS.jpg",
        specs: { "Familia": "Core Ultra 7 270K PLUS", "Cores/Threads": "8C/12T", "Frecuencia Base": "3.7 GHz", "Frecuencia Turbo": "5.5 GHz", "Socket": "LGA1851", "TDP": "125W" }
    },
    {
        id: 7,
        name: "INTEL CORE ULTRA 9 285K",
        category: "intel",
        price: 2000,
        stock: 1,
        featured: true,
        image: "img/ULTRA_9_285K.jpg",
        specs: { "Familia": "Core Ultra 9 285K", "Cores/Threads": "24C/24T", "Frecuencia Base": "3.7 GHz", "Frecuencia Turbo": "5.7 GHz", "Socket": "LGA1851", "TDP": "125W" }
    },
    // PLACAS MADRE
    {
        id: 8,
        name: "B550-PLUS ASUS TUF WIFI II",
        category: "placa-am4",
        price: 480,
        stock: 2,
        featured: true,
        image: "img/B550_PLUS_WIFI_ll.jpg",
        specs: { "Modelo": "B550-PLUS WIFI II ASUS TUF GAMING", "Socket": "AM4", "Chipset": "B550", "Factor Forma": "ATX", "WiFi": "WiFi 6" }
    },
    {
        id: 9,
        name: "B850M-E ASUS TUF WIFI",
        category: "placa-am5",
        price: 680,
        stock: 1,
        featured: true,
        image: "img/B850M-E_ASUS_TUF_WIFI.jpg",
        specs: { "Modelo": "B850M-E ASUS TUF WIFI", "Socket": "AM5", "Chipset": "B850M", "Factor Forma": "Micro-ATX", "WiFi": "WiFi 7" }
    },
    {
        id: 10,
        name: "B850 MAX GAMING WIFI W",
        category: "placa-am5",
        price: 670,
        stock: 1,
        featured: false,
        image: "img/B850_MAX_GAMING_WIFI_W.jpg",
        specs: { "Modelo": "B850 MAX GAMING WIFI W", "Socket": "AM5", "Chipset": "B850", "Factor Forma": "ATX", "WiFi": "WiFi 6E" }
    },
    // RAM
    {
        id: 11,
        name: "NETAC 2X16GB 3200MHZ DDR4",
        category: "ddr4",
        price: 700,
        stock: 1,
        featured: false,
        image: "img/NETAC_2X16GB_3200MHZ.jpg",
        specs: { "Capacidad": "2x16GB (32GB Total)", "Tipo": "DDR4", "Velocidad": "3200 MHz", "CAS Latency": "CAS 16", "Voltaje": "1.35V" }
    },
    {
        id: 12,
        name: "TEAMGROUP 2x8GB TFORCE VULCAN 5200MHZ DDR5",
        category: "ddr5",
        price: 720,
        stock: 1,
        featured: false,
        image: "img/TEAMGROUP_TFORCE_VULCAN_DDR5.jpg",
        specs: { "Capacidad": "2x8GB (16GB Total)", "Tipo": "DDR5", "Velocidad": "5200 MHz", "CAS Latency": "CAS 24", "Voltaje": "1.25V" }
    },
    // ALMACENAMIENTO
    {
        id: 13,
        name: "SSD SAMSUNG 9100 PRO 1TB",
        category: "almacenamiento",
        price: 950,
        stock: 1,
        featured: true,
        image: "img/SSD_SAMSUNG_9100_PRO_1TB.jpg",
        specs: { "Capacidad": "1TB", "Interfaz": "NVMe PCIe Gen 5.0", "Factor Forma": "M.2 2280", "Lectura": "14,800 MB/s", "Escritura": "13,400 MB/s" }
    },
    {
        id: 14,
        name: "SSD T-FORCE G50 4TB",
        category: "almacenamiento",
        price: 2400,
        stock: 1,
        featured: false,
        image: "img/SSD_T-FORCE_G50_4TB.jpg",
        specs: { "Capacidad": "4TB", "Interfaz": "NVMe PCIe Gen 4.0", "Factor Forma": "M.2 2280", "Lectura": "5,000 MB/s", "Escritura": "4,500 MB/s" }
    },
    // FUENTE DE PODER
    {
        id: 15,
        name: "CORSAIR CX750 750W",
        category: "fuente-bronze",
        price: 200,
        stock: 1,
        featured: false,
        image: "img/CORSAIR_CX750_750W.jpg",
        specs: { "Potencia": "750W", "Certificación": "80+ Bronze", "Tipo": "No Modular", "Factor Forma": "ATX", "Garantía": "1 año" }
    },
    // COOLER
    {
        id: 16,
        name: "COOLERMASTER ELITE 240MM",
        category: "refrigeracion-liquida",
        price: 120,
        stock: 3,
        featured: false,
        image: "img/COOLERMASTER_ELITE_240MM.jpg",
        specs: { "Tipo": "Liquid Cooler AIO", "Tamaño": "240mm", "TDP": "Hasta 250W", "Compatibilidad": "Intel & AMD", "Garantía": "1 año" }
    },
    {
        id: 17,
        name: "THERMALRIGHT PEERLESS ASSASSIN 120 DIGITAL ARGB WHITE",
        category: "refrigeracion-aire",
        price: 170,
        stock: 2,
        featured: false,
        image: "img/THERMALRIGHT_RGB.jpg",
        specs: { "Tipo": "Refrigeración por Aire Dual Tower", "TDP": "245W", "Ventiladores": "2x 120mm ARGB", "Compatibilidad": "Intel LGA115X/1200/1700/1851 & AMD AM4/AM5", "Color": "Blanco", "Pantalla": "Digital CPU/GPU" }
    }
];

let currentProduct = null;
let currentFilter = null;
let currentSort = "default";
let onlyInStock = false;
let searchTerm = "";
const compareIds = new Set();
const MAX_COMPARE = 3;

// --------------------------------------------------------------------------
// Utilidades
// --------------------------------------------------------------------------

function getStockClass(stock) {
    return stock === 0 ? 'no' : stock < 3 ? 'low' : '';
}

function getStockText(stock) {
    return stock === 0 ? 'SIN STOCK' : `STOCK: ${stock}`;
}

// Genera el HTML de una tarjeta de producto (reutilizado en destacados, filtros y búsqueda)
function renderProductCard(product) {
    const stockClass = getStockClass(product.stock);
    const stockText = getStockText(product.stock);
    const categoryLabel = categoryLabels[product.category] || '';
    const isChecked = compareIds.has(product.id) ? 'checked' : '';

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-container" onclick="openModal(${product.id})">
                <div class="compare-checkbox-wrapper" onclick="event.stopPropagation()">
                    <label>
                        <input type="checkbox" ${isChecked} onchange="toggleCompare(${product.id}, this)">
                        Comparar
                    </label>
                </div>
                <img src="${product.image}" alt="${product.name}" loading="lazy"
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23475569%22 width=%22200%22 height=%22200%22/%3E%3C/svg%3E'">
                <span class="stock-badge ${stockClass}">${stockText}</span>
            </div>
            <div class="product-info" onclick="openModal(${product.id})">
                ${categoryLabel ? `<div class="product-brand">${categoryLabel}</div>` : ''}
                <div class="product-name">${product.name}</div>
                <div>
                    <div class="product-price">S/ ${product.price}</div>
                    <button class="btn-details">Ver Detalles</button>
                </div>
            </div>
        </div>
    `;
}

function sortProducts(list, sortMode) {
    const sorted = [...list];
    if (sortMode === 'price-asc') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sortMode === 'price-desc') {
        sorted.sort((a, b) => b.price - a.price);
    } else if (sortMode === 'name-asc') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
}

// --------------------------------------------------------------------------
// Renderizado principal
// --------------------------------------------------------------------------

// Mostrar productos destacados al cargar
function loadFeaturedProducts() {
    const featured = products.filter(p => p.featured);
    const container = document.getElementById('featuredGrid');
    container.innerHTML = featured.map(renderProductCard).join('');
}

function goHome() {
    currentFilter = null;
    searchTerm = "";
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = "";

    document.getElementById('heroSection').style.display = 'flex';
    document.getElementById('featuredSection').style.display = 'block';
    document.getElementById('productsSection').style.display = 'none';

    document.querySelectorAll('.subcategory-item').forEach(item => {
        item.classList.remove('active');
    });

    document.querySelectorAll('.subcategory-container').forEach(container => {
        container.classList.remove('open');
    });

    document.querySelectorAll('.category-main').forEach(category => {
        category.classList.remove('expanded');
    });

    document.querySelector('.placa-amd-sockets').style.display = 'none';
    document.querySelector('.placa-intel-sockets').style.display = 'none';

    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }

    window.scrollTo(0, 0);
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

function toggleCategory(e, catId) {
    e.stopPropagation();
    const container = document.getElementById(catId + '-subcats');
    const categoryMain = e.currentTarget;

    container.classList.toggle('open');
    categoryMain.classList.toggle('expanded');
}

function togglePlacaSub(e) {
    e.stopPropagation();
    const text = e.currentTarget.textContent.trim();
    if (text.includes('AMD')) {
        const socketsDiv = document.querySelector('.placa-amd-sockets');
        socketsDiv.style.display = socketsDiv.style.display === 'none' ? 'block' : 'none';
    } else if (text.includes('Intel')) {
        const socketsDiv = document.querySelector('.placa-intel-sockets');
        socketsDiv.style.display = socketsDiv.style.display === 'none' ? 'block' : 'none';
    }
}

// Filtrar por categoría desde el sidebar. Recibe el evento explícitamente
// (antes dependía del global `window.event`, frágil entre navegadores).
function filterProducts(filter, e) {
    currentFilter = filter;
    searchTerm = "";
    currentSort = "default";
    onlyInStock = false;

    document.querySelectorAll('.subcategory-item').forEach(item => {
        item.classList.remove('active');
    });
    const evt = e || window.event;
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }

    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }

    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('featuredSection').style.display = 'none';
    document.getElementById('productsSection').style.display = 'block';

    renderProducts();
    window.scrollTo(0, 200);
}

// Renderiza la vista de productos según filtro de categoría, búsqueda,
// stock y orden actuales.
function renderProducts() {
    const container = document.getElementById('productsContainer');

    let list = products;

    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        list = list.filter(p =>
            p.name.toLowerCase().includes(term) ||
            (categoryLabels[p.category] || '').toLowerCase().includes(term)
        );
    } else if (currentFilter) {
        list = list.filter(p => p.category === currentFilter);
    }

    if (onlyInStock) {
        list = list.filter(p => p.stock > 0);
    }

    list = sortProducts(list, currentSort);

    let headerHtml = `
        <div class="filters-bar">
            <label class="filter-toggle">
                <input type="checkbox" id="stockFilterCheckbox" ${onlyInStock ? 'checked' : ''} onchange="handleStockFilterChange(this)">
                Solo mostrar con stock
            </label>
            <select class="sort-select" id="sortSelect" onchange="handleSortChange(this)">
                <option value="default" ${currentSort === 'default' ? 'selected' : ''}>Ordenar por: Relevancia</option>
                <option value="price-asc" ${currentSort === 'price-asc' ? 'selected' : ''}>Precio: menor a mayor</option>
                <option value="price-desc" ${currentSort === 'price-desc' ? 'selected' : ''}>Precio: mayor a menor</option>
                <option value="name-asc" ${currentSort === 'name-asc' ? 'selected' : ''}>Nombre: A-Z</option>
            </select>
        </div>
    `;

    if (searchTerm) {
        headerHtml += `
            <div class="search-results-info">
                ${list.length} resultado(s) para "<strong>${searchTerm}</strong>"
                <button class="btn-clear-search" onclick="clearSearch()">Limpiar búsqueda</button>
            </div>
        `;
    }

    if (list.length === 0) {
        container.innerHTML = headerHtml + `
            <div class="empty-state">
                <div class="empty-state-icon"><i class="fas fa-box-open"></i></div>
                <p>Sin productos disponibles</p>
                <p class="empty-state-sub">${searchTerm ? 'Intenta con otro término de búsqueda' : 'Esta categoría aún no tiene productos'}</p>
            </div>
        `;
        return;
    }

    const gridHtml = `<div class="products-grid">${list.map(renderProductCard).join('')}</div>`;
    container.innerHTML = headerHtml + gridHtml;
}

function handleStockFilterChange(checkbox) {
    onlyInStock = checkbox.checked;
    renderProducts();
}

function handleSortChange(select) {
    currentSort = select.value;
    renderProducts();
}

// --------------------------------------------------------------------------
// Buscador
// --------------------------------------------------------------------------

function handleSearchInput(value) {
    searchTerm = value.trim();

    if (!searchTerm) {
        // Si borran la búsqueda y no hay filtro activo, regresar al inicio
        if (!currentFilter) {
            goHome();
            return;
        }
        renderProducts();
        return;
    }

    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('featuredSection').style.display = 'none';
    document.getElementById('productsSection').style.display = 'block';
    currentFilter = null;
    renderProducts();
}

function clearSearch() {
    searchTerm = "";
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = "";
    goHome();
}

// --------------------------------------------------------------------------
// Comparador de productos
// --------------------------------------------------------------------------

function toggleCompare(productId, checkbox) {
    if (checkbox.checked) {
        if (compareIds.size >= MAX_COMPARE) {
            checkbox.checked = false;
            alert(`Solo puedes comparar hasta ${MAX_COMPARE} productos a la vez.`);
            return;
        }
        compareIds.add(productId);
    } else {
        compareIds.delete(productId);
    }
    updateCompareBar();
}

function removeFromCompare(productId) {
    compareIds.delete(productId);
    updateCompareBar();
    // Actualiza el checkbox correspondiente si está visible en la página
    const card = document.querySelector(`.product-card[data-id="${productId}"] input[type="checkbox"]`);
    if (card) card.checked = false;
}

function updateCompareBar() {
    const bar = document.getElementById('compareBar');
    const itemsContainer = document.getElementById('compareBarItems');
    const compareBtn = document.getElementById('btnCompareNow');

    if (compareIds.size === 0) {
        bar.classList.remove('active');
        return;
    }

    bar.classList.add('active');
    const items = Array.from(compareIds).map(id => {
        const p = products.find(prod => prod.id === id);
        if (!p) return '';
        return `
            <div class="compare-bar-item">
                <span>${p.name}</span>
                <i class="fas fa-times" onclick="removeFromCompare(${id})"></i>
            </div>
        `;
    }).join('');

    itemsContainer.innerHTML = items;
    compareBtn.disabled = compareIds.size < 2;
}

function openCompareModal() {
    if (compareIds.size < 2) return;

    const selected = Array.from(compareIds).map(id => products.find(p => p.id === id)).filter(Boolean);
    const allSpecKeys = [...new Set(selected.flatMap(p => Object.keys(p.specs)))];

    let tableHtml = '<div class="compare-table-wrapper"><table class="compare-table"><thead><tr><th>Especificación</th>';
    selected.forEach(p => {
        tableHtml += `<th>${p.name}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    tableHtml += '<tr><td>Precio</td>' + selected.map(p => `<td>S/ ${p.price}</td>`).join('') + '</tr>';
    tableHtml += '<tr><td>Stock</td>' + selected.map(p => `<td>${getStockText(p.stock)}</td>`).join('') + '</tr>';

    allSpecKeys.forEach(key => {
        tableHtml += `<tr><td>${key}</td>`;
        selected.forEach(p => {
            tableHtml += `<td>${p.specs[key] || '—'}</td>`;
        });
        tableHtml += '</tr>';
    });

    tableHtml += '</tbody></table></div>';

    document.getElementById('modalProductName').textContent = 'Comparación de Productos';
    document.getElementById('modalProductDetails').innerHTML = tableHtml;
    document.getElementById('modalPrice').style.display = 'none';
    document.querySelector('.btn-whatsapp').style.display = 'none';

    document.getElementById('productModal').style.display = 'block';
}

// --------------------------------------------------------------------------
// Modal de detalle de producto
// --------------------------------------------------------------------------

function openModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;

    // Restaurar el modal por si quedó configurado para modo "comparar"
    document.getElementById('modalPrice').style.display = 'block';
    document.querySelector('.btn-whatsapp').style.display = 'flex';

    const modal = document.getElementById('productModal');
    document.getElementById('modalProductName').textContent = currentProduct.name;
    document.getElementById('modalPrice').textContent = `S/ ${currentProduct.price}`;

    const detailsHtml = Object.entries(currentProduct.specs).map(([key, value]) => `
        <div class="detail-row">
            <span class="detail-label">${key}:</span>
            <span class="detail-value">${value}</span>
        </div>
    `).join('');

    document.getElementById('modalProductDetails').innerHTML = detailsHtml;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function contactWhatsApp() {
    if (currentProduct) {
        const message = `Hola AO NEXUS 👋\n\nMe interesa:\n📦 ${currentProduct.name}\n💲 S/ ${currentProduct.price}\n📊 Stock: ${currentProduct.stock} unidad(es)`;
        window.open(`https://wa.me/51942956898?text=${encodeURIComponent(message)}`, '_blank');
    }
}

window.onclick = function (event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.close').onclick = closeModal;

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
    }

    const compareBtn = document.getElementById('btnCompareNow');
    if (compareBtn) {
        compareBtn.addEventListener('click', openCompareModal);
    }

    // Cargar productos destacados al iniciar
    loadFeaturedProducts();
});
