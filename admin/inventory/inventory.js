/* Inventory Module JS */
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

    try {
        if (typeof checkExistingSession === 'function') {
            await checkExistingSession();
        }
        if (typeof renderInventoryGrid === 'function') renderInventoryGrid();
        if (typeof fetchBackendInventoryEssences === 'function') {
            await fetchBackendInventoryEssences();
        } else if (typeof renderInventoryEssencesGrid === 'function') {
            renderInventoryEssencesGrid();
        }
        if (typeof renderManualSupplies === 'function') renderManualSupplies();
    } catch (e) {
        console.warn('Inventory init error', e);
    }
});
