(function () {
    'use strict';

    // Keep legacy price overrides for services that still use plain text prices.
    function apply() {
        const title = document.getElementById('modalTitle');
        const price = document.getElementById('modalPrice');

        if (!title || !price) return;

        // Web pricing is now rendered as interactive options by home.js.
        if (price.querySelector('.web-price-option')) return;

        const text = title.textContent.trim();
        const language = localStorage.getItem('siteLang') || 'en';

        if (text === 'Marketing' || text === 'Маркетинг' || text === 'Մարքեթինգ') {
            const marketing = language === 'ru'
                ? 'SEO от 200$<br>Target от 200$<br>SMM от 150$'
                : language === 'hy'
                    ? 'SEO՝ սկսած 200$-ից<br>Target՝ սկսած 200$-ից<br>SMM՝ սկսած 150$-ից'
                    : 'SEO from $200<br>Target from $200<br>SMM from $150';

            if (price.innerHTML !== marketing) {
                price.innerHTML = marketing;
            }
        }
    }

    let timer = null;

    // Re-check after modal content changes without creating a mutation loop.
    new MutationObserver(() => {
        clearTimeout(timer);
        timer = setTimeout(apply, 0);
    }).observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });

    window.addEventListener('siteLanguageChanged', apply);
    apply();
})();
