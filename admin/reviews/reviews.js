/* Reviews Module JS */
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
        if (typeof renderReviews === 'function') {
            renderReviews();
        }
    } catch (e) {
        console.warn('Reviews init error', e);
    }
});
