/* Record Sale Module JS */
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

    const btnContinue = document.getElementById('btnStep1Continue');
    if (btnContinue) {
        btnContinue.addEventListener('click', () => {
            if (typeof validateAndGoToStep2 === 'function') {
                validateAndGoToStep2();
            }
        });
    }

    const btnBack = document.getElementById('btnStep2Back');
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            if (typeof goBackToStep1 === 'function') {
                goBackToStep1();
            }
        });
    }

    const channelSelect = document.getElementById('saleChannel');
    if (channelSelect) {
        channelSelect.addEventListener('change', () => {
            if (typeof toggleExternalSellerField === 'function') {
                toggleExternalSellerField();
            }
        });
    }

    try {
        if (typeof checkExistingSession === 'function') {
            await checkExistingSession();
        }
        if (typeof fetchBackendProducts === 'function') {
            await fetchBackendProducts();
        }
        if (typeof initSalesForm === 'function') {
            initSalesForm();
        }
        if (typeof bindBackendLoginEvents === 'function') {
            bindBackendLoginEvents();
        }
    } catch (e) {
        console.warn('Record Sale init error', e);
    }
});
