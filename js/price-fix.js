(function () {
    'use strict';

    // Keep legacy price overrides for services that still use plain text prices.
    function applyPrices() {
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

    // Render the contact links with the supplied social SVG icons.
    function setupContact() {
        const actions = document.querySelector('.contact-actions');
        if (!actions) return;

        const language = localStorage.getItem('siteLang') || 'en';
        const labels = {
            en: 'Order via',
            ru: 'Заказать через',
            hy: 'Պատվիրել՝'
        };

        const label = labels[language] || labels.en;

        actions.innerHTML = `
            <a class="contact-social" href="https://t.me/bogdan_lxl" target="_blank" rel="noopener noreferrer">
                <span class="contact-social-label">${label} Telegram</span>
                <span class="contact-social-icon">
                    <img src="assets/social/Telegram.svg" alt="Telegram">
                </span>
            </a>
            <a class="contact-social" href="https://wa.me/37477998752" target="_blank" rel="noopener noreferrer">
                <span class="contact-social-label">${label} WhatsApp</span>
                <span class="contact-social-icon">
                    <img src="assets/social/whatsapp.svg" alt="WhatsApp">
                </span>
            </a>
            <a class="contact-social" href="https://www.facebook.com/share/1Hh8wfAQoG/" target="_blank" rel="noopener noreferrer">
                <span class="contact-social-label">${label} Facebook</span>
                <span class="contact-social-icon">
                    <img src="assets/social/facebook.svg" alt="Facebook">
                </span>
            </a>
        `;

        // Normalize the first contact heading line for all supported languages.
        const heading = document.querySelector('#contact h2');
        if (heading) {
            const firstLine = heading.querySelector('br');
            if (firstLine && firstLine.previousSibling) {
                firstLine.previousSibling.textContent = language === 'ru'
                    ? 'Давайте создадим'
                    : language === 'hy'
                        ? 'Եկեք ստեղծենք'
                        : 'Let’s build';
            }
        }
    }

    let timer = null;

    // Re-check after modal content changes without creating a mutation loop.
    new MutationObserver(() => {
        clearTimeout(timer);
        timer = setTimeout(applyPrices, 0);
    }).observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });

    window.addEventListener('siteLanguageChanged', () => {
        applyPrices();
        setupContact();
    });

    applyPrices();
    setupContact();
})();
