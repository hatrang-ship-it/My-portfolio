/**
 * lang-toggle.js — Shared language toggle for all pages
 * Works with:
 *   - data-i18n / data-i18n-html attributes (index.html)
 *   - data-lang="vi" / data-lang="en" blocks (project pages)
 */
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const langToggleMobile = document.getElementById('lang-toggle-mobile');

    function applyLangBlocks(lang) {
        // Show/hide data-lang blocks
        document.querySelectorAll('[data-lang]').forEach(el => {
            if (el.getAttribute('data-lang') === lang) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
    }

    function updateToggleLabels(lang) {
        const nextLang = lang === 'vi' ? 'EN' : 'VI';
        const langLabel = document.getElementById('lang-label');
        const langLabelMobile = document.getElementById('lang-label-mobile');
        if (langLabel) langLabel.textContent = nextLang;
        if (langLabelMobile) langLabelMobile.textContent = nextLang;
    }

    window.setLanguageGlobal = function(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('lang', lang);
        applyLangBlocks(lang);
        updateToggleLabels(lang);
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    };

    function toggleLanguage(e) {
        if (e) e.preventDefault();
        const current = localStorage.getItem('lang') || 'vi';
        const next = current === 'vi' ? 'en' : 'vi';
        window.setLanguageGlobal(next);
    }

    // Attach toggle events
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
    if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);

    // Apply saved language on load
    const savedLang = localStorage.getItem('lang') || 'vi';
    window.setLanguageGlobal(savedLang);
});
