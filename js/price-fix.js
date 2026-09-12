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

    // Add the contact section's social links and keep their labels localized.
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

    // Add isolated contact styles without changing the stable global stylesheet.
    function addContactStyles() {
        if (document.getElementById('contact-fix-styles')) return;

        const style = document.createElement('style');
        style.id = 'contact-fix-styles';
        style.textContent = `
            .contact-actions {
                min-width: min(420px, 100%);
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 8px;
            }

            .contact-social {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 18px;
                min-height: 54px;
                padding: 8px 10px 8px 18px;
                border: 1px solid transparent;
                border-radius: 6px;
                color: #c9d8eb;
                text-decoration: none;
                font-size: 12px;
                transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
            }

            .contact-social:hover {
                background: #0b141e;
                border-color: #1b3047;
                transform: translateX(-4px);
            }

            .contact-social-label {
                text-align: right;
                white-space: nowrap;
            }

            .contact-social-icon {
                width: 42px;
                height: 42px;
                flex: 0 0 42px;
                display: grid;
                place-items: center;
                border: 1px solid #1b3047;
                border-radius: 6px;
                background: #091018;
            }

            .contact-social-icon img {
                width: 25px;
                height: 25px;
                display: block;
                object-fit: contain;
            }

            @media (max-width: 950px) {
                .contact-actions {
                    width: 100%;
                    min-width: 0;
                }

                .contact-social {
                    justify-content: flex-start;
                }

                .contact-social-label {
                    text-align: left;
                }
            }

            @media (max-width: 650px) {
                .contact-social {
                    padding: 8px 4px;
                }
            }
        `;

        document.head.appendChild(style);
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

    addContactStyles();
    applyPrices();
    setupContact();
})();
