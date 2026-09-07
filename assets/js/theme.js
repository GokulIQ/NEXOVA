/**
 * Theme & RTL Utility
 * Handles Light/Dark mode and LTR/RTL switching using Storage utility.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dark/Light Mode ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;
    
    const applyTheme = (theme) => {
        if(theme === 'dark') {
            htmlEl.setAttribute('data-theme', 'dark');
            if(themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
            }
        } else {
            htmlEl.removeAttribute('data-theme');
            if(themeToggleBtn) {
                themeToggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
            }
        }
    };
    
    // Initialize Theme
    const savedTheme = Storage.get('agency_theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Detect system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            Storage.set('agency_theme', newTheme);
        });
    }

    // --- RTL/LTR Mode ---
    const rtlToggleBtn = document.getElementById('rtlToggle');
    
    const applyRTL = (isRtl) => {
        if(isRtl) {
            htmlEl.setAttribute('dir', 'rtl');
            htmlEl.setAttribute('lang', 'ar'); // example
            if(rtlToggleBtn) rtlToggleBtn.innerHTML = '<span class="fw-bold">LTR</span>';
        } else {
            htmlEl.setAttribute('dir', 'ltr');
            htmlEl.setAttribute('lang', 'en');
            if(rtlToggleBtn) rtlToggleBtn.innerHTML = '<span class="fw-bold">RTL</span>';
        }
    };
    
    // Initialize RTL
    const savedRTL = Storage.get('agency_rtl');
    if (savedRTL !== null) {
        applyRTL(savedRTL);
    }
    
    if (rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', () => {
            const isRtl = htmlEl.getAttribute('dir') === 'rtl';
            applyRTL(!isRtl);
            Storage.set('agency_rtl', !isRtl);
        });
    }

});
