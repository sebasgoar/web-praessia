function activarFecha() {
    const fecha = document.querySelector('#fecha');
    if (!fecha || !fecha.value) {
        alert('¡Por favor, selecciona una fecha para la recarga!');
        return null;
    }
    return fecha.value;
}

function activarInsumo() {
    const insumo = document.querySelector('#insumo') || document.querySelector('#reloadItem');
    if (!insumo || !insumo.value) {
        alert('¡Por favor, selecciona un insumo para la recarga!');
        return null;
    }
    return insumo.value;
}

function activarCantidad() {
    const cantidad = document.querySelector('#cantidad') || document.querySelector('#reloadQty');
    if (!cantidad || !cantidad.value) {
        alert('¡Por favor, ingresa una cantidad válida para la recarga!');
        return null;
    }
    return cantidad.value;
}

function activarUnidad() {
    const unidad = document.querySelector('#unidad');
    if (!unidad || !unidad.value) {
        alert('¡Por favor, selecciona una unidad para la recarga!');
        return null;
    }
    return unidad.value;
}

function activarCosto() {
    const costo = document.querySelector('#costo') || document.querySelector('#reloadCost');
    return costo?.value || 0;
}

function activarProveedor() {
    const proveedor = document.querySelector('#proveedor');
    return proveedor?.value || 'Admin Panel';
}

function activarNotas() {
    const notas = document.querySelector('#notas') || document.querySelector('#reloadNotes');
    return notas?.value || '';
}

async function guardarRecarga() {
    if (typeof saveReloadBackend === 'function') {
        await saveReloadBackend();
        return;
    }

    const fecha = activarFecha();
    const insumo = activarInsumo();
    const cantidad = activarCantidad();
    const unidad = activarUnidad();
    const costo = activarCosto();
    const proveedor = activarProveedor();
    const notas = activarNotas();

    if (!fecha || !insumo || !cantidad || !unidad) {
        return;
    }

    const datos = {
        fecha,
        insumo,
        cantidad: parseFloat(cantidad),
        unidad,
        costo: parseFloat(costo) || 0,
        proveedor,
        notas
    };

    try {
        const apiBase = await detectApiBase();
        const response = await fetch(apiBase + '/supply-recharge', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });

        const resultado = await response.json();

        if (resultado.success) {
            limpiarFormulario();
            mostrarToast('Insumo añadido correctamente.');
            if (typeof fetchBackendReloads === 'function') fetchBackendReloads();
        } else {
            alert('Error: ' + resultado.message);
        }
    } catch (error) {
        alert('Error al conectar con el servidor: ' + error.message);
    }
}

async function detectApiBase() {
    if (window.__BACKEND_BASE__) return window.__BACKEND_BASE__;
    const isLocalHost = ['localhost', '127.0.0.1', ''].includes(window.location.hostname) || window.location.protocol === 'file:';
    const fallback = isLocalHost ? 'http://localhost:3008' : '/api';
    window.__BACKEND_BASE__ = fallback;
    return fallback;
}

function limpiarFormulario() {
    ['fecha', 'insumo', 'reloadItem', 'cantidad', 'reloadQty', 'unidad', 'costo', 'reloadCost', 'proveedor', 'notas', 'reloadNotes'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
}

function mostrarToast(mensaje) {
    const toast = document.getElementById('toastRecarga') || document.getElementById('adminToast');
    const toastMsg = document.getElementById('toastMsg');
    
    if (toastMsg) toastMsg.textContent = mensaje;
    if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
    }
}

async function cargarProveedores() {
    const selectProveedor = document.getElementById('proveedor');
    if (!selectProveedor) return;

    try {
        const apiBase = await detectApiBase();
        const response = await fetch(apiBase + '/supply-recharge/suppliers');
        const resultado = await response.json();

        if (resultado.success && Array.isArray(resultado.data)) {
            selectProveedor.innerHTML = '<option value="" disabled selected>Seleccione Proveedor</option>';

            resultado.data.forEach(p => {
                const option = document.createElement('option');
                option.value = p.id;
                option.textContent = p.proveedor || p.nombre || `Proveedor #${p.id}`;
                selectProveedor.appendChild(option);
            });
        }
    } catch (error) {
        console.warn('Error al cargar proveedores:', error);
    }
}

async function cargarFragances() {
    const selectInsumo = document.getElementById('insumo') || document.getElementById('reloadItem');
    if (!selectInsumo) return;

    try {
        const apiBase = await detectApiBase();
        const response = await fetch(apiBase + '/supply-recharge/fragances');
        const resultado = await response.json();

        if (resultado.success && Array.isArray(resultado.data)) {
            selectInsumo.innerHTML = '<option value="" disabled selected>Seleccione Insumo</option>';

            const fragGroup = document.createElement('optgroup');
            fragGroup.label = 'Fragancias / Esencias';

            const matGroup = document.createElement('optgroup');
            matGroup.label = 'Materiales e Insumos';

            resultado.data.forEach(item => {
                const name = item.insumo || String(item.id);
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = name;

                if (name.toLowerCase().startsWith('esencia')) {
                    fragGroup.appendChild(option);
                } else {
                    matGroup.appendChild(option);
                }
            });

            if (fragGroup.children.length > 0) selectInsumo.appendChild(fragGroup);
            if (matGroup.children.length > 0) selectInsumo.appendChild(matGroup);
        }
    } catch (error) {
        console.warn('Error al cargar fragancias:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const topbarDate = document.getElementById('topbarDate');
    if (topbarDate) {
        topbarDate.textContent = new Date().toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    const logoutBtn = document.getElementById('btnLogout');
    if (logoutBtn && typeof backendLogout === 'function') {
        logoutBtn.addEventListener('click', backendLogout);
    }

    const fechaEl = document.getElementById('fecha');
    if (fechaEl && !fechaEl.value) {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        fechaEl.value = now.toISOString().slice(0, 16);
    }

    try {
        if (typeof checkExistingSession === 'function') {
            await checkExistingSession();
        }
        await cargarFragances();
        await cargarProveedores();
        if (typeof fetchBackendReloads === 'function') {
            await fetchBackendReloads();
        }
    } catch (e) {
        console.warn('Supply Recharge init error', e);
    }

    const btnGuardar = document.getElementById('btnGuardarRecarga') || document.getElementById('btnReload');
    if (btnGuardar) {
        btnGuardar.onclick = (e) => {
            e.preventDefault();
            guardarRecarga();
        };
    }

    const btnLimpiar = document.getElementById('btnLimpiar');
    if (btnLimpiar) {
        btnLimpiar.onclick = (e) => {
            e.preventDefault();
            limpiarFormulario();
        };
    }
});
