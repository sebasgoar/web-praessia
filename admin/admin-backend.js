/* Admin — Backend integration for login and sales (overrides visual stubs)
   - Uses backend endpoints: /login, /record-sale/*
   - Sends requests with credentials included so httpOnly cookie is used
*/

'use strict';

// Base URL for backend API
const API_BASE = window.__BACKEND_BASE__ || (['localhost', '127.0.0.1', ''].includes(window.location.hostname) || window.location.protocol === 'file:' ? 'http://localhost:3008' : '/api');

function showAdminToast(msg, type) {
  const t = document.getElementById('toastRecarga') || document.getElementById('adminToast');
  if (t) {
    const msgEl = document.getElementById('toastMsg');
    if (msgEl) msgEl.textContent = msg;
    else t.textContent = msg;
    t.style.background = type === 'error' ? 'var(--red, #c0392b)' : 'var(--wine-dark, #4e1e25)';
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
  } else {
    alert(msg);
  }
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function backendValidatePasswordStrength(pw) {
  return typeof pw === 'string' && /[A-Z]/.test(pw) && /[a-z]/.test(pw) && /\d/.test(pw) && /[^A-Za-z0-9]/.test(pw) && pw.length >= 8;
}

/* Helper for API calls: includes Authorization header from localStorage token if present; keeps credentials for cookie case */
function apiFetch(path, opts = {}) {
  const token = localStorage.getItem('authToken');
  const headers = Object.assign({}, opts.headers || {});
  if (token) headers['Authorization'] = 'Bearer ' + token;
  opts.headers = headers;
  if (typeof opts.credentials === 'undefined') opts.credentials = 'include';
  return fetch(API_BASE + path, opts);
}

function bindBackendLoginEvents() {
  const btn = document.getElementById('btnLogin');
  if (btn) {
    btn.onclick = (e) => {
      e.preventDefault();
      backendAttemptLogin();
    };
  }
  const input = document.getElementById('loginInput');
  if (input) {
    input.onkeydown = (e) => {
      if (e.key === 'Enter') backendAttemptLogin();
    };
  }
  document.getElementById('btnLogout')?.addEventListener('click', backendLogout);

  // Persona lookup on blur of document field
  const clientDocEl = document.getElementById('clientDoc');
  if (clientDocEl) {
    clientDocEl.addEventListener('blur', async () => {
      const documento = clientDocEl.value?.trim();
      if (!documento) return;
      try {
        const res = await apiFetch(`/record-sale/persona/${encodeURIComponent(documento)}`);
        if (!res.ok) return; // not found or no auth
        const txt = await res.text();
        let payload = {};
        try { payload = txt ? JSON.parse(txt) : {}; } catch (e) { payload = {}; }
        if (payload.success && payload.data) {
          const p = payload.data;
          document.getElementById('clientDocType').value = p.tipoDocumento || '';
          document.getElementById('clientName').value = p.nombres || p.nombre || '';
          document.getElementById('clientLastname').value = p.apellidos || p.apellido || '';
          document.getElementById('clientPhone').value = p.telefono || '';
          document.getElementById('clientEmail').value = p.email || p.correo || '';
          const departmentEl = document.getElementById('clientDepartment');
          departmentEl.value = p.departamento || '';
          if (departmentEl.value) {
            departmentEl.dispatchEvent(new Event('change'));
          }
          document.getElementById('clientMunicipality').value = p.ciudad || p.municipio || '';
          document.getElementById('clientAddress').value = p.direccion || '';
          document.getElementById('clientNeighborhood').value = p.barrio || '';
          document.getElementById('clientNotes').value = p.informacionAdicional || '';
        }
      } catch (e) {
        console.warn('Persona lookup error', e);
      }
    });
  }

  // Ensure saveSale override is bound cleanly
  const saveBtn = document.getElementById('btnSaveSale');
  if (saveBtn) {
    saveBtn.onclick = (e) => {
      e.preventDefault();
      if (!validateStep2()) return;
      saveSaleBackend();
    };
  }

  bindBackendReloadEvents();
}

async function backendAttemptLogin() {
  const userEl = document.getElementById('loginUser');
  const passEl = document.getElementById('loginInput');
  const usuario = userEl?.value?.trim();
  const password = passEl?.value?.trim();
  if (!usuario || !password) { showLoginError('Usuario y contraseña son obligatorios'); return; }

  const btn = document.getElementById('btnLogin');
  btn.disabled = true; btn.innerHTML = '<span class="spinner"></span>';

  try {
    const res = await apiFetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, password })
    });
    const text = await res.text();
    let data = {};
    try { data = text ? JSON.parse(text) : {}; } catch (e) { data = {}; }
    if (!res.ok) {
      showLoginError(data?.message || `Error en inicio de sesión (${res.status})`);
      return;
    }

    if (data.needPasswordUpdate) {
      // Ask user to change password before continuing
      let newPw = '';
      do {
        newPw = prompt('Debes actualizar tu contraseña. Ingresa nueva contraseña (min 8 chars, mayúscula, minúscula, número y carácter especial):');
        if (newPw === null) { showLoginError('Cambio de contraseña requerido'); return; }
        if (!backendValidatePasswordStrength(newPw)) {
          alert('Contraseña inválida. Debe tener 8+ caracteres, una mayúscula, una minúscula, un número y un caracter especial.');
          newPw = '';
        }
      } while (!newPw);

      // Call change-password
      const ch = await apiFetch('/login/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario, currentPassword: password, newPassword: newPw })
      });
      const chText = await ch.text();
      let chRes = {};
      try { chRes = chText ? JSON.parse(chText) : {}; } catch (e) { chRes = {}; }
      if (!ch.ok) { showLoginError(chRes?.message || `No se pudo actualizar la contraseña (${ch.status})`); return; }
      // save fallback token if provided
      if (chRes.token) localStorage.setItem('authToken', chRes.token);
      // after successful change-password, verify session cookie or token too
      try {
        const chk2 = await apiFetch('/login/check');
        const txtChk2 = await chk2.text();
        const ok2 = (() => { try { return txtChk2 ? JSON.parse(txtChk2) : {}; } catch (e) { return {}; } })();
        if (!(chk2.ok && ok2.success)) { showLoginError('No se pudo validar sesión tras cambio de contraseña'); return; }
      } catch (e) { showLoginError('Error verificando sesión tras cambio de contraseña'); return; }
    }

    // Store token fallback BEFORE checking session, so /login/check can use
    // the Authorization: Bearer header even if the httpOnly cookie didn't
    // survive the round trip (e.g. file://, distinto puerto, cookies de
    // terceros bloqueadas, navegación privada).
    if (data.token) localStorage.setItem('authToken', data.token);

    // Verify cookie/token was accepted by server before proceeding
    try {
      const chk = await apiFetch('/login/check');
      const txt2 = await chk.text();
      const okPayload = (() => { try { return txt2 ? JSON.parse(txt2) : {}; } catch (e) { return {}; } })();
      if (chk.ok && okPayload.success) {
        if (typeof enterPanel === 'function') enterPanel();
        await enterPanelBackendData();
      } else {
        showLoginError('No se pudo validar sesión tras el login. Refresca e intenta de nuevo.');
        return;
      }
    } catch (e) {
      showLoginError('Error verificando sesión tras login.');
      return;
    }
  } catch (e) {
    console.error('Login error', e);
    showLoginError('Error de conexión al servidor');
  } finally {
    btn.disabled = false; btn.innerHTML = 'Ingresar';
  }
}

async function backendLogout() {
  try {
    await apiFetch('/login/logout', { method: 'POST' });
    localStorage.removeItem('authToken');
  } catch (e) { console.warn('Logout failed', e); }
  if (typeof logout === 'function') logout();
}

async function fetchBackendProducts() {
  try {
    const res = await apiFetch('/record-sale/products');
    if (!res.ok) return;
    const text = await res.text();
    const payload = (() => { try { return text ? JSON.parse(text) : {}; } catch (e) { return {}; } })();
    if (!payload.success) return;
    // NOTA: se guarda en window.saleProducts (NO en `perfumes`), porque
    // data-perfumes.js ya declara `const perfumes` a nivel global (catálogo
    // estático del quiz, sin estado ni costoVenta). Sobrescribir
    // `window.perfumes` no cambia lo que lee ese `const`, así que el
    // formulario de venta terminaba usando siempre el catálogo del quiz.
    window.saleProducts = (payload.data || []).map(p => ({ id: p.id, name: p.fragancia || p.producto || '', valor_unitario: p.valor_unitario || p.costoVenta || 0 }));

    // Update existing select rows (preserva selección y sincroniza precio)
    document.querySelectorAll('select[id^="saleProduct-"]').forEach(sel => {
      const id = sel.id.replace('saleProduct-', '');
      if (typeof fillSaleSelectForRow === 'function') {
        try { fillSaleSelectForRow(id); } catch (e) {}
      }
    });

    // Delegar el evento 'change' para fijar el precio automáticamente.
    // Se registra una sola vez por carga de página, sin importar cuántas
    // veces se llame fetchBackendProducts() (evita listeners duplicados).
    if (!window.__salePriceChangeListenerBound) {
      window.__salePriceChangeListenerBound = true;
      document.addEventListener('change', function (e) {
        const t = e.target;
        if (!t || !t.id || !t.id.startsWith('saleProduct-')) return;
        const rid = t.id.replace('saleProduct-', '');
        if (typeof setSalePriceFromProduct === 'function') setSalePriceFromProduct(rid);
      });
    }

  } catch (e) {
    console.warn('Error loading products', e);
  }
}

async function saveSaleBackend() {
  try {
    // Build persona
    const persona = {
      documento: document.getElementById('clientDoc')?.value?.trim(),
      tipoDocumento: document.getElementById('clientDocType')?.value || '',
      nombres: document.getElementById('clientName')?.value || '',
      apellidos: document.getElementById('clientLastname')?.value || '',
      telefono: document.getElementById('clientPhone')?.value || '',
      correo: document.getElementById('clientEmail')?.value || '',
      departamento: document.getElementById('clientDepartment')?.value || '',
      municipio: document.getElementById('clientMunicipality')?.value || '',
      direccion: document.getElementById('clientAddress')?.value || '',
      barrio: document.getElementById('clientNeighborhood')?.value || '',
      informacionAdicional: document.getElementById('clientNotes')?.value || ''
    };

    // Build detalles
    const detalles = [];
    document.querySelectorAll('.product-row').forEach(row => {
      const rid = row.id.replace('product-row-', '');
      const prodId = document.getElementById(`saleProduct-${rid}`)?.value;
      const qty = parseInt(document.getElementById(`saleQty-${rid}`)?.value) || 0;
      const price = parseFloat(document.getElementById(`salePrice-${rid}`)?.value) || 0;
      if (prodId && qty > 0) {
        detalles.push({ referencia: prodId, cantidad: qty, valorUnitario: price });
      }
    });

    const canalVenta = document.getElementById('saleChannel')?.value || '';
    const medioPago = document.getElementById('salePaymentMethod')?.value || '';
    const referencia = document.getElementById('saleExternalSeller')?.value || '';
    const fecha = document.getElementById('saleDate')?.value || new Date().toISOString();

    const body = { persona, detalles, canalVenta, medioPago, referencia, fecha };

    const res = await apiFetch('/record-sale/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const txt = await res.text();
    const payload = (() => { try { return txt ? JSON.parse(txt) : {}; } catch (e) { return {}; } })();
    if (!res.ok) {
      showAdminToast(payload?.message || `Error al registrar venta (${res.status})`, 'error');
      return;
    }

    showAdminToast('Venta registrada correctamente');
    // reset form
    if (typeof resetSaleForm === 'function') resetSaleForm();
    // Optionally refresh recent sales UI — best-effort
    if (typeof loadSales === 'function') loadSales().then(renderRecentSales).catch(() => {});

  } catch (e) {
    console.error('Error saving sale', e);
    showAdminToast('Error al registrar venta. Revisa la consola.', 'error');
  }
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Re-bind login events and sales handlers to backend-aware versions
  bindBackendLoginEvents();
  // Si ya hay una sesión válida (token guardado de un login previo),
  // entra directo al panel sin mostrar la pantalla de login. Esto evita
  // que navegar a otra página (p. ej. /supply-recharge/) y volver se
  // sienta como un cierre de sesión, cuando en realidad el token sigue
  // siendo válido — solo que antes nunca se revisaba al recargar.
  checkExistingSession();
});

async function checkExistingSession() {
  const token = localStorage.getItem('authToken');
  if (!token) return; // no hay sesión previa, se queda en el login

  try {
    const res = await apiFetch('/login/check');
    const text = await res.text();
    const data = (() => { try { return text ? JSON.parse(text) : {}; } catch (e) { return {}; } })();

    if (res.ok && data.success) {
      if (typeof enterPanel === 'function') enterPanel();
      await enterPanelBackendData();
    } else {
      // Token vencido o inválido: se limpia para no reintentar en vano
      localStorage.removeItem('authToken');
    }
  } catch (e) {
    console.warn('No se pudo verificar la sesión existente', e);
  }
}

function bindBackendReloadEvents() {
  const reloadBtn = document.getElementById('btnGuardarRecarga') || document.getElementById('btnReload');
  if (reloadBtn) {
    reloadBtn.onclick = (e) => {
      e.preventDefault();
      saveReloadBackend();
    };
  }

  const btnLimpiar = document.getElementById('btnLimpiar');
  if (btnLimpiar) {
    btnLimpiar.onclick = (e) => {
      e.preventDefault();
      ['fecha', 'insumo', 'reloadItem', 'cantidad', 'reloadQty', 'unidad', 'costo', 'reloadCost', 'proveedor', 'notas', 'reloadNotes'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
    };
  }
}

async function fetchBackendSuppliers() {
  try {
    const res = await apiFetch('/supply-recharge/suppliers');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.success || !Array.isArray(data.data)) return;

    const sel = document.getElementById('proveedor');
    if (!sel) return;

    sel.innerHTML = '<option value="" disabled selected>Seleccione Proveedor</option>';
    data.data.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.proveedor || p.nombre || `Proveedor #${p.id}`;
      sel.appendChild(opt);
    });
  } catch (e) {
    console.warn('Error fetching suppliers', e);
  }
}

async function fetchBackendSuppliesAndFragrances() {
  try {
    const res = await apiFetch('/supply-recharge/fragances');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.success || !Array.isArray(data.data)) return;

    const sel = document.getElementById('insumo') || document.getElementById('reloadItem');
    if (!sel) return;

    sel.innerHTML = '<option value="" disabled selected>Seleccione Insumo</option>';

    const fragGroup = document.createElement('optgroup');
    fragGroup.label = 'Fragancias / Esencias';

    const matGroup = document.createElement('optgroup');
    matGroup.label = 'Materiales e Insumos';

    data.data.forEach(item => {
      const name = item.insumo || String(item.id);
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = name;

      if (name.toLowerCase().startsWith('esencia')) {
        fragGroup.appendChild(opt);
      } else {
        matGroup.appendChild(opt);
      }
    });

    if (fragGroup.children.length > 0) sel.appendChild(fragGroup);
    if (matGroup.children.length > 0) sel.appendChild(matGroup);
  } catch (e) {
    console.warn('Error fetching supply fragrances', e);
  }
}

async function fetchBackendInventoryEssences() {
  const wrap = document.getElementById('inventoryEssencesGrid');
  if (!wrap) return;

  try {
    const res = await apiFetch('/supply-recharge/fragances');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.success || !Array.isArray(data.data)) return;

    const rows = data.data.map(item => {
      const stock = parseFloat(item.stock) || 0;
      const unidad = parseFloat(item.unidad) || 1;
      const units = parseFloat(item.unidadesVendibles) || (unidad > 0 ? Math.floor(stock / unidad) : 0);

      const color = stock === 0 ? 'red' : (units < 5 ? 'yellow' : 'green');
      const estadoText = item.estado === 1 || stock > 0 ? 'Disponible' : 'Agotado';

      return `
        <tr>
          <td style="font-weight:600; color:var(--wine-dark);">${escapeHtml(item.insumo)}</td>
          <td style="font-weight:600;">${stock}</td>
          <td>${unidad}</td>
          <td style="font-weight:700; color:var(--wine);">${units}</td>
          <td>
            <span class="semaforo ${color}"></span>
            <span style="font-size:0.8rem; margin-left:6px; color:var(--muted);">${estadoText}</span>
          </td>
        </tr>
      `;
    }).join('');

    wrap.innerHTML = `
      <div class="admin-table-wrap">
        <div class="admin-table-header">
          <span class="admin-table-title"><i class="bi bi-droplet me-2"></i>Stock de esencias por referencia</span>
        </div>
        <div style="overflow-x:auto;">
          <table class="admin-table" style="width:100%;">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Stock</th>
                <th>Por Unidad</th>
                <th>Unidades vendibles</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              ${rows.length > 0 ? rows : '<tr><td colspan="5" class="text-center text-muted" style="padding:20px;">No hay insumos en inventario</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>`;

  } catch (err) {
    console.warn('Error fetching backend inventory essences:', err);
  }
}

async function fetchBackendReloads() {
  try {
    const res = await apiFetch('/supply-recharge');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.success || !Array.isArray(data.data)) return;

    const tbody = document.getElementById('reloadHistoryBody');
    if (!tbody) return;

    if (data.data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state"><i class="bi bi-arrow-repeat"></i> Sin recargas registradas</div></td></tr>`;
      return;
    }

    tbody.innerHTML = data.data.map(r => {
      let rawDate = r.fecha || r.created_at;
      let displayDate = '—';
      if (rawDate) {
        try {
          const d = new Date(rawDate);
          displayDate = isNaN(d.getTime()) ? String(rawDate) : d.toLocaleDateString('es-CO');
        } catch (e) {
          displayDate = String(rawDate);
        }
      }

      let proveedorStr = r.proveedor || '—';
      let userStr = r.usuario || (r.idUsuario ? `ID: ${r.idUsuario}` : 'Admin');
      let cleanNotas = (r.notas && r.notas !== '[object Object]' && typeof r.notas === 'string') ? r.notas.trim() : '—';
      if (!cleanNotas) cleanNotas = '—';

      return `
        <tr>
          <td style="color:var(--muted); font-size:0.82rem; white-space:nowrap;">${displayDate}</td>
          <td style="font-weight:600; color:var(--wine-dark);">${r.insumo || '—'}</td>
          <td style="font-weight:500;">${r.cantidad} ${r.tipoDato || r.unidad || ''}</td>
          <td style="font-family:'Kiona'; color:var(--wine); font-weight:700;">$${(parseFloat(r.costo) || 0).toLocaleString('es-CO')}</td>
          <td style="font-weight:500; color:var(--wine);">${proveedorStr}</td>
          <td><span class="user-badge"><i class="bi bi-person-fill me-1"></i>${userStr}</span></td>
          <td style="font-size:0.85rem; color:var(--muted);">${cleanNotas}</td>
        </tr>
      `;
    }).join('');
  } catch (e) {
    console.warn('Error loading reloads history', e);
  }
}

async function saveReloadBackend() {
  const itemEl = document.getElementById('insumo') || document.getElementById('reloadItem');
  const qtyEl = document.getElementById('cantidad') || document.getElementById('reloadQty');
  const costEl = document.getElementById('costo') || document.getElementById('reloadCost');
  const unitEl = document.getElementById('unidad');
  const provEl = document.getElementById('proveedor');
  const dateEl = document.getElementById('fecha');
  const notesEl = document.getElementById('notas') || document.getElementById('reloadNotes');

  const item = itemEl?.value;
  const qty = parseFloat(qtyEl?.value);
  const cost = parseFloat(costEl?.value) || 0;
  const notes = notesEl?.value?.trim() || '';
  const proveedor = provEl?.value || 'Admin Panel';
  const fecha = dateEl?.value || new Date().toISOString().slice(0, 19).replace('T', ' ');

  if (!item) { showAdminToast('Selecciona un insumo', 'error'); return; }
  if (!qty || qty <= 0) { showAdminToast('Ingresa una cantidad válida', 'error'); return; }

  const isEssence = !['envase', 'caja', 'bolsa', 'perfumero', 'alcohol', 'fijador', 'agua'].includes(item);
  const unidad = unitEl?.value || (isEssence ? 'g' : (['alcohol', 'fijador', 'agua'].includes(item) ? 'ml' : 'unidad'));

  const btn = document.getElementById('btnGuardarRecarga') || document.getElementById('btnReload');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span> Guardando...';
  }

  try {
    const res = await apiFetch('/supply-recharge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fecha,
        insumo: item,
        cantidad: qty,
        unidad,
        costo: cost,
        proveedor,
        notas: typeof notes === 'string' ? notes : ''
      })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      showAdminToast(data.message || 'Error al guardar recarga', 'error');
      return;
    }

    showAdminToast('Recarga guardada correctamente');
    if (itemEl) itemEl.value = '';
    if (qtyEl) qtyEl.value = '';
    if (costEl) costEl.value = '';
    if (notesEl) notesEl.value = '';
    if (unitEl) unitEl.value = '';
    if (provEl) provEl.value = '';

    // Cerrar el modal de recarga si está abierto
    const modalEl = document.getElementById('modalAddReload');
    if (modalEl && window.bootstrap && window.bootstrap.Modal) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();
    }

    await fetchBackendReloads();
  } catch (e) {
    console.error('Error saving reload', e);
    showAdminToast('Error al conectar con el servidor', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="bi bi-plus-circle me-1"></i> Añadir al inventario';
    }
  }
}

async function fetchBackendSalesHistory(filterStatus = 'all') {
  try {
    const res = await apiFetch('/history/sales');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.success || !Array.isArray(data.data)) return;

    const tbody = document.getElementById('salesHistoryBody');
    if (!tbody) return;

    let sales = data.data;
    window.__SALES_CACHE__ = sales;

    // Filtrar por estado si se seleccionó una opción diferente a 'all'
    if (filterStatus && filterStatus !== 'all') {
      sales = sales.filter(s => String(s.estadoTransaccion).toUpperCase() === filterStatus.toUpperCase());
    }

    if (sales.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10"><div class="empty-state"><i class="bi bi-clock-history"></i> Sin ventas registradas en esta categoría</div></td></tr>`;
      return;
    }

    tbody.innerHTML = sales.map(s => {
      let rawDate = s.fecha;
      let displayDate = '—';
      if (rawDate) {
        try {
          const d = new Date(rawDate);
          displayDate = isNaN(d.getTime()) ? String(rawDate) : d.toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' });
        } catch (e) {
          displayDate = String(rawDate);
        }
      }

      // Regla Asesor: si es ID 1 o usuario admin, mostrar "Compra Web"
      const isWebSale = !s.idAsesor || s.idAsesor === 1 || String(s.usuarioAsesor).toLowerCase() === 'admin';
      const advisorDisplayName = isWebSale ? 'Compra Web' : (s.nombreAsesor || s.usuarioAsesor || `Asesor #${s.idAsesor}`);

      // Cliente info
      const clientName = s.nombreCliente || 'Cliente Registrado';
      const clientDoc = s.documentoCliente ? `<div style="font-size:0.78rem; color:var(--muted);"><i class="bi bi-card-text me-1"></i>${s.documentoCliente}</div>` : '';
      const clientPhone = s.telefonoCliente ? `<div style="font-size:0.78rem; color:var(--muted);"><i class="bi bi-telephone me-1"></i>${s.telefonoCliente}</div>` : '';
      const clientLoc = (s.ciudadCliente || s.direccionCliente) ? `<div style="font-size:0.75rem; color:var(--gold-soft);"><i class="bi bi-geo-alt me-1"></i>${s.ciudadCliente || ''} ${s.direccionCliente ? '· ' + s.direccionCliente : ''}</div>` : '';

      // Canal y Medio de Pago (tomado del primer item o de la venta)
      const firstItem = (s.items && s.items.length > 0) ? s.items[0] : {};
      const canalStr = firstItem.canalVenta || 'Tienda Web';
      const medioPagoStr = firstItem.medioPago || 'Transferencia / Pasarela';

      // Estado transacción
      const estadoStr = String(s.estadoTransaccion || 'APROBADA').toUpperCase();
      const statusBadgeClass = estadoStr === 'APROBADA' || estadoStr === 'COMPLETADA' ? 'status-badge-approved' : 'status-badge-pending';

      // Despacho y Nota
      const despachadaVal = String(s.despachada || '').trim();
      let despachoHtml = '<span style="color:var(--muted); font-size:0.85rem;">—</span>';
      if (despachadaVal) {
        const isOk = ['despachada', 'enviada', 'entregado', 'ok'].includes(despachadaVal.toLowerCase());
        despachoHtml = `<span class="${isOk ? 'badge-despacho-ok' : 'badge-despacho-warn'}"><i class="bi ${isOk ? 'bi-truck' : 'bi-exclamation-triangle'} me-1"></i>${despachadaVal}</span>`;
      }

      const notaVal = (s.nota && s.nota !== '[object Object]') ? String(s.nota).trim() : '';
      const notaHtml = notaVal ? `<span style="font-size:0.83rem; color:var(--muted);">${notaVal}</span>` : '<span style="color:var(--muted); font-size:0.85rem;">—</span>';

      // Productos en la venta
      const itemsHtml = (s.items && s.items.length > 0) ? `
        <div class="items-purchased-box">
          ${s.items.map(item => `
            <div class="item-purchased-pill">
              <span class="item-purchased-name">${item.nombreProducto || 'Producto #' + item.referencia}</span>
              <div class="d-flex align-items-center gap-2">
                <span class="item-purchased-qty">x${item.cantidad}</span>
                <span class="item-purchased-price">$${(parseFloat(item.valorUnitario) || 0).toLocaleString('es-CO')}</span>
              </div>
            </div>
          `).join('')}
        </div>
      ` : '<span style="color:var(--muted); font-size:0.85rem;">Sin detalle de productos</span>';

      return `
        <tr class="sale-row-clickable" onclick="openEditSaleModal(${s.idVenta})">
          <td style="font-size:0.83rem; color:var(--muted); white-space:nowrap;">
            <strong style="color:var(--text);">${displayDate}</strong>
            <div style="font-size:0.75rem; opacity:0.8;">#Venta: ${s.idVenta} ${s.orderId ? '· ' + s.orderId : ''}</div>
          </td>

          <td>
            <div style="font-weight:600; color:var(--wine-dark);">${clientName}</div>
            ${clientDoc}
            ${clientPhone}
            ${clientLoc}
          </td>

          <td>
            ${itemsHtml}
          </td>

          <td style="font-family:'Kiona'; font-weight:700; color:var(--wine); font-size:1.05rem; white-space:nowrap;">
            $${(parseFloat(s.valorTotal) || 0).toLocaleString('es-CO')}
          </td>

          <td>
            ${isWebSale ? `
              <span class="badge-web"><i class="bi bi-globe me-1"></i>Compra Web</span>
            ` : `
              <span class="badge-advisor"><i class="bi bi-person-badge me-1"></i>${advisorDisplayName}</span>
            `}
          </td>

          <td>
            <div style="font-size:0.84rem; font-weight:600; text-transform:capitalize; color:var(--wine-dark);">${canalStr}</div>
            <div style="font-size:0.78rem; color:var(--muted); text-transform:capitalize;"><i class="bi bi-credit-card me-1"></i>${medioPagoStr}</div>
          </td>

          <td>
            <span class="${statusBadgeClass}"><i class="bi bi-check-circle-fill me-1"></i>${estadoStr}</span>
          </td>

          <td>
            ${despachoHtml}
          </td>

          <td>
            ${notaHtml}
          </td>

          <td>
            <button class="btn btn-sm btn-outline-dark" type="button" onclick="event.stopPropagation(); openEditSaleModal(${s.idVenta});">
              <i class="bi bi-pencil-square"></i> Editar
            </button>
          </td>
        </tr>
      `;
    }).join('');
  } catch (e) {
    console.warn('Error loading sales history', e);
  }
}

function openEditSaleModal(idVenta) {
  const sales = window.__SALES_CACHE__ || [];
  const sale = sales.find(s => s.idVenta === idVenta || String(s.idVenta) === String(idVenta));
  if (!sale) return;

  const modalEl = document.getElementById('modalEditSale');
  if (!modalEl) return;

  const titleEl = document.getElementById('modalSaleIdTitle');
  const subEl = document.getElementById('modalSaleSubtitle');
  const editIdEl = document.getElementById('editSaleId');

  if (titleEl) titleEl.textContent = sale.idVenta;
  if (subEl) {
    let rawDate = sale.fecha;
    let displayDate = '—';
    if (rawDate) {
      try {
        const d = new Date(rawDate);
        displayDate = isNaN(d.getTime()) ? String(rawDate) : d.toLocaleString('es-CO');
      } catch (e) { displayDate = String(rawDate); }
    }
    subEl.textContent = `Fecha: ${displayDate} ${sale.orderId ? '· Ref: ' + sale.orderId : ''}`;
  }

  if (editIdEl) editIdEl.value = sale.idVenta;

  // Datos Informativos del Cliente
  const viewClientDoc = document.getElementById('viewClientDoc');
  const viewClientName = document.getElementById('viewClientName');
  const viewClientPhone = document.getElementById('viewClientPhone');
  const viewClientEmail = document.getElementById('viewClientEmail');
  const viewClientAddress = document.getElementById('viewClientAddress');

  if (viewClientDoc) viewClientDoc.textContent = sale.documentoCliente ? `Doc: ${sale.documentoCliente}` : 'Sin documento';
  if (viewClientName) viewClientName.textContent = sale.nombreCliente || 'Cliente Registrado';
  if (viewClientPhone) viewClientPhone.textContent = sale.telefonoCliente || '—';
  if (viewClientEmail) viewClientEmail.textContent = sale.correoCliente || '—';

  const locArr = [];
  if (sale.ciudadCliente) locArr.push(sale.ciudadCliente);
  if (sale.direccionCliente) locArr.push(sale.direccionCliente);
  if (viewClientAddress) viewClientAddress.textContent = locArr.length > 0 ? locArr.join(' · ') : '—';

  // Datos Informativos de Productos
  const itemsContainer = document.getElementById('viewSaleItemsContainer');
  const totalValEl = document.getElementById('viewTotalValue');

  if (totalValEl) totalValEl.textContent = `$${(parseFloat(sale.valorTotal) || 0).toLocaleString('es-CO')}`;

  if (itemsContainer) {
    if (sale.items && sale.items.length > 0) {
      itemsContainer.innerHTML = sale.items.map(i => `
        <div class="d-flex align-items-center justify-content-between p-2 rounded" style="background:#ffffff; border:1px solid var(--border);">
          <div>
            <div class="fw-bold text-dark" style="font-size:0.88rem;">${escapeHtml(i.nombreProducto || 'Producto #' + i.referencia)}</div>
            <div class="small text-muted">Cantidad: ${i.cantidad} · Unitario: $${(parseFloat(i.valorUnitario) || 0).toLocaleString('es-CO')}</div>
          </div>
          <div class="fw-bold color-wine" style="font-family:'Kiona', sans-serif;">$${(Number(i.cantidad) * parseFloat(i.valorUnitario || 0)).toLocaleString('es-CO')}</div>
        </div>
      `).join('');
    } else {
      itemsContainer.innerHTML = `<div class="text-muted small">Sin detalle de productos</div>`;
    }
  }

  // Datos Informativos de Canal, Pago y Asesor
  const firstItem = (sale.items && sale.items.length > 0) ? sale.items[0] : {};
  const viewSaleChannel = document.getElementById('viewSaleChannel');
  const viewPaymentMethod = document.getElementById('viewPaymentMethod');
  const viewSaleAdvisor = document.getElementById('viewSaleAdvisor');

  const isWebSale = !sale.idAsesor || sale.idAsesor === 1 || String(sale.usuarioAsesor).toLowerCase() === 'admin';
  const advisorDisplayName = isWebSale ? 'Compra Web' : (sale.nombreAsesor || sale.usuarioAsesor || `Asesor #${sale.idAsesor}`);

  if (viewSaleChannel) viewSaleChannel.textContent = firstItem.canalVenta || 'Tienda Web';
  if (viewPaymentMethod) viewPaymentMethod.textContent = firstItem.medioPago || 'Transferencia / Pasarela';
  if (viewSaleAdvisor) viewSaleAdvisor.textContent = advisorDisplayName;

  // Campos Editables (Despacho, Transacción, Nota)
  const editDespachadaEl = document.getElementById('editDespachada');
  const editEstadoEl = document.getElementById('editEstadoTransaccion');
  const editNotaEl = document.getElementById('editNota');

  if (editDespachadaEl) {
    const currentDespachada = sale.despachada || 'Pendiente';
    let exists = Array.from(editDespachadaEl.options).some(o => o.value.toLowerCase() === currentDespachada.toLowerCase());
    if (!exists && currentDespachada) {
      const opt = document.createElement('option');
      opt.value = currentDespachada;
      opt.textContent = currentDespachada;
      editDespachadaEl.appendChild(opt);
    }
    editDespachadaEl.value = currentDespachada;
  }

  if (editEstadoEl) {
    editEstadoEl.value = (sale.estadoTransaccion || 'APROBADA').toUpperCase();
  }

  if (editNotaEl) {
    editNotaEl.value = (sale.nota && sale.nota !== '[object Object]') ? sale.nota : '';
  }

  if (window.bootstrap && window.bootstrap.Modal) {
    const modalInstance = new window.bootstrap.Modal(modalEl);
    modalInstance.show();
  }
}

async function saveSaleEditBackend() {
  const editIdEl = document.getElementById('editSaleId');
  const editDespachadaEl = document.getElementById('editDespachada');
  const editEstadoEl = document.getElementById('editEstadoTransaccion');
  const editNotaEl = document.getElementById('editNota');

  const idVenta = editIdEl?.value;
  if (!idVenta) return;

  const despachada = editDespachadaEl?.value;
  const estado = editEstadoEl?.value;
  const nota = editNotaEl?.value?.trim() || '';

  const btn = document.getElementById('btnSaveSaleEdit');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span> Guardando...';
  }

  try {
    const res = await apiFetch(`/history/sales/${idVenta}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ despachada, nota, estado })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      showAdminToast(data.message || 'Error al actualizar venta', 'error');
      return;
    }

    showAdminToast(`Venta #${idVenta} actualizada correctamente`);

    const modalEl = document.getElementById('modalEditSale');
    if (modalEl && window.bootstrap && window.bootstrap.Modal) {
      const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();
    }

    await fetchBackendSalesHistory();
  } catch (e) {
    console.error('Error updating sale:', e);
    showAdminToast('Error al conectar con el servidor', 'error');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '<i class="bi bi-check-circle me-1"></i> Guardar Cambios';
    }
  }
}

async function enterPanelBackendData() {
  await fetchBackendProducts();
  await fetchBackendSuppliesAndFragrances();
  await fetchBackendSuppliers();
  await fetchBackendReloads();
  await fetchBackendSalesHistory();
}