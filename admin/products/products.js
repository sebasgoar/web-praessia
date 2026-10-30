/* ============================================================
   Praessia — admin/products/products.js
   Lógica del módulo de administración de catálogo/productos.
   ============================================================ */

'use strict';

const API_BASE = (['localhost', '127.0.0.1', ''].includes(window.location.hostname) || window.location.protocol === 'file:') ? 'http://localhost:3008' : '/api';

let allProducts = [];
let productModal = null;

document.addEventListener('DOMContentLoaded', () => {
  productModal = new bootstrap.Modal(document.getElementById('productModal'));
  loadProducts();
  bindEvents();
});

async function loadProducts() {
  try {
    const res = await fetch(`${API_BASE}/products`);
    const data = await res.json();
    if (data.success && Array.isArray(data.data)) {
      allProducts = data.data;
      renderTable(allProducts);
    } else {
      showError('No se pudo cargar el catálogo de productos');
    }
  } catch (err) {
    console.error('Error cargando productos:', err);
    showError('Error al conectar con el servidor');
  }
}

function renderTable(products) {
  const tbody = document.getElementById('productsTableBody');
  const countEl = document.getElementById('prodCount');
  if (!tbody) return;

  if (countEl) countEl.textContent = `${products.length} producto(s)`;

  if (products.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center py-4 text-muted">
          <i class="bi bi-search me-2"></i>No se encontraron productos en la búsqueda.
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = products.map(p => {
    const hasImg = p.image && p.image !== 'x' && p.image !== '';
    const genderClass = `gender-${p.gender || 'unisex'}`;
    const formattedPrice = '$' + Number(p.price).toLocaleString('es-CO');
    const isActivo = Number(p.estado) !== 0;

    return `
    <tr style="${!isActivo ? 'opacity:0.5; background:#fafafa;' : ''}">
      <td class="fw-bold">#${p.numericId || p.id}</td>
      <td>
        ${hasImg
          ? `<img src="${p.image}" class="product-thumb" alt="${escapeHtml(p.name)}">`
          : `<div class="product-thumb-placeholder"><i class="bi bi-droplet"></i></div>`
        }
      </td>
      <td>
        <div class="fw-bold text-dark">${escapeHtml(p.name)}</div>
        <div class="small text-muted">${escapeHtml(p.detail?.familia || 'Inspiración olfativa')}</div>
      </td>
      <td class="fw-bold text-wine">${formattedPrice}</td>
      <td>
        <span class="gender-badge ${genderClass}">${p.gender || 'Unisex'}</span>
      </td>
      <td>
        ${isActivo
          ? `<span class="badge bg-success-subtle text-success border border-success-subtle">Activo</span>`
          : `<span class="badge bg-secondary-subtle text-secondary border border-secondary-subtle">Inactivo</span>`
        }
      </td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-dark btn-action me-1" onclick="openEditModal(${p.numericId})">
          <i class="bi bi-pencil"></i> Editar
        </button>
      </td>
    </tr>`;
  }).join('');
}

function bindEvents() {
  document.getElementById('btnOpenAddModal')?.addEventListener('click', openAddModal);

  document.getElementById('productSearch')?.addEventListener('input', applyFilters);
  document.getElementById('genderFilter')?.addEventListener('change', applyFilters);

  document.getElementById('productForm')?.addEventListener('submit', handleSaveProduct);

  document.getElementById('prodImgFile')?.addEventListener('change', handleImageUpload);
}

function applyFilters() {
  const search = document.getElementById('productSearch')?.value?.toLowerCase()?.trim() || '';
  const gender = document.getElementById('genderFilter')?.value || 'all';

  const filtered = allProducts.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || String(p.numericId).includes(search);
    const matchGender = gender === 'all' || p.gender === gender;
    return matchSearch && matchGender;
  });

  renderTable(filtered);
}

function openAddModal() {
  document.getElementById('productModalTitle').textContent = 'Agregar Nuevo Producto';
  document.getElementById('prodId').value = '';
  document.getElementById('prodName').value = '';
  document.getElementById('prodPrice').value = '139900';
  document.getElementById('prodGender').value = 'masculina';
  document.getElementById('prodEstado').value = '1';
  document.getElementById('prodImgPath').value = '';
  document.getElementById('prodFamilia').value = '';
  document.getElementById('prodConcentracion').value = 'Extrait de Parfum';
  document.getElementById('prodClima').value = '';
  document.getElementById('prodOcasion').value = '';
  document.getElementById('prodDescripcion').value = '';
  document.getElementById('prodSalida').value = '';
  document.getElementById('prodCorazon').value = '';
  document.getElementById('prodFondo').value = '';
  document.getElementById('prodTags').value = '';

  updateImgPreview('');
  productModal.show();
}

window.openEditModal = function(numericId) {
  const p = allProducts.find(item => item.numericId === numericId);
  if (!p) return;

  document.getElementById('productModalTitle').textContent = `Editar Producto #${p.numericId}`;
  document.getElementById('prodId').value = p.numericId;
  document.getElementById('prodName').value = p.name;
  document.getElementById('prodPrice').value = p.price;
  document.getElementById('prodGender').value = p.gender || 'unisex';
  document.getElementById('prodEstado').value = p.estado !== undefined ? String(p.estado) : '1';
  document.getElementById('prodImgPath').value = p.image || '';

  const d = p.detail || {};
  document.getElementById('prodFamilia').value = d.familia || '';
  document.getElementById('prodConcentracion').value = d.concentracion || 'Extrait de Parfum';
  document.getElementById('prodClima').value = d.clima || '';
  document.getElementById('prodOcasion').value = d.ocasion || '';
  document.getElementById('prodDescripcion').value = d.descripcion || '';
  document.getElementById('prodSalida').value = d.notas?.salida || '';
  document.getElementById('prodCorazon').value = d.notas?.corazon || '';
  document.getElementById('prodFondo').value = d.notas?.fondo || '';
  document.getElementById('prodTags').value = Array.isArray(d.tags) ? d.tags.join(', ') : (d.tags || '');

  updateImgPreview(p.image || '');
  productModal.show();
};

async function handleImageUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('image', file);

  try {
    const res = await fetch(`${API_BASE}/products/upload`, {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (data.success && data.imagePath) {
      document.getElementById('prodImgPath').value = data.imagePath;
      updateImgPreview(data.imagePath);
    } else {
      alert('Error subiendo imagen: ' + (data.message || 'Error desconocido'));
    }
  } catch (err) {
    console.error('Error al subir imagen:', err);
    alert('No se pudo subir la imagen.');
  }
}

function updateImgPreview(src) {
  const img = document.getElementById('imgPreview');
  const ph = document.getElementById('imgPreviewPlaceholder');
  if (src && src !== 'x') {
    img.src = src;
    img.style.display = 'block';
    ph.style.display = 'none';
  } else {
    img.style.display = 'none';
    ph.style.display = 'flex';
  }
}

async function handleSaveProduct(e) {
  e.preventDefault();

  const id = document.getElementById('prodId').value;
  const payload = {
    name: document.getElementById('prodName').value.trim(),
    producto: document.getElementById('prodName').value.trim(),
    costoVenta: Number(document.getElementById('prodPrice').value),
    genero: document.getElementById('prodGender').value,
    estado: Number(document.getElementById('prodEstado').value),
    img: document.getElementById('prodImgPath').value.trim(),
    familia: document.getElementById('prodFamilia').value.trim(),
    concentracion: document.getElementById('prodConcentracion').value.trim(),
    clima: document.getElementById('prodClima').value.trim(),
    ocasion: document.getElementById('prodOcasion').value.trim(),
    descripcion: document.getElementById('prodDescripcion').value.trim(),
    salida: document.getElementById('prodSalida').value.trim(),
    corazon: document.getElementById('prodCorazon').value.trim(),
    fondo: document.getElementById('prodFondo').value.trim(),
    tags: document.getElementById('prodTags').value.trim()
  };

  const btn = document.getElementById('btnSaveProduct');
  if (btn) btn.disabled = true;

  try {
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${API_BASE}/products/${id}` : `${API_BASE}/products`;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data.success) {
      productModal.hide();
      await loadProducts();
    } else {
      alert('Error al guardar: ' + (data.message || 'Error desconocido'));
    }
  } catch (err) {
    console.error('Error guardando producto:', err);
    alert('Error al conectar con el servidor.');
  } finally {
    if (btn) btn.disabled = false;
  }
}

function showError(msg) {
  const tbody = document.getElementById('productsTableBody');
  if (tbody) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center text-danger py-4">${escapeHtml(msg)}</td></tr>`;
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
