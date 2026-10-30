/* History Module JS */
'use strict';

document.addEventListener('DOMContentLoaded', async () => {
    const topbarDate = document.getElementById('topbarDate');
    if (topbarDate) {
        topbarDate.textContent = new Date().toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    const logoutBtn = document.getElementById('btnLogout');
    if (logoutBtn && typeof backendLogout === 'function') {
        logoutBtn.addEventListener('click', backendLogout);
    }

    const filterSelect = document.getElementById('historialFilter');
    if (filterSelect) {
        filterSelect.addEventListener('change', () => {
            if (typeof fetchBackendSalesHistory === 'function') {
                fetchBackendSalesHistory(filterSelect.value);
            }
        });
    }

    const btnSaveEdit = document.getElementById('btnSaveSaleEdit');
    if (btnSaveEdit) {
        btnSaveEdit.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof saveSaleEditBackend === 'function') {
                saveSaleEditBackend();
            }
        });
    }

    try {
        if (typeof checkExistingSession === 'function') {
            await checkExistingSession();
        }
        if (typeof fetchBackendSalesHistory === 'function') {
            await fetchBackendSalesHistory();
        }
    } catch (e) {
        console.warn('History init error', e);
    }
});
