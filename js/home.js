(function () {
    'use strict';

    // Translation dictionary for the three supported languages.
    const T = {
        ru: {
            'Home': 'Главная',
            'Services': 'Услуги',
            'Contact': 'Контакты',
            "HI, I'M BOGDAN": 'ПРИВЕТ, Я БОГДАН',
            'DIGITAL SOLUTIONS': 'ЦИФРОВЫЕ РЕШЕНИЯ',
            'I help businesses turn ideas into practical digital products — from websites and automation to creative, marketing and custom technical solutions.': 'Помогаю бизнесу превращать идеи в практичные цифровые продукты — от сайтов и автоматизации до креативных, маркетинговых и технических решений.',
            'Explore services': 'Смотреть услуги',
            'Contact me': 'Связаться со мной',
            'DIGITAL SOLUTIONS FOR BUSINESS': 'ЦИФРОВЫЕ РЕШЕНИЯ ДЛЯ БИЗНЕСА',
            'Web Development': 'Разработка сайтов',
            'Landing pages, business websites, catalogues and custom web solutions.': 'Лендинги, сайты для бизнеса, каталоги и индивидуальные веб-решения.',
            'View service': 'Подробнее',
            'Marketing': 'Маркетинг',
            'SEO, target advertising, SMM and digital growth solutions for businesses.': 'SEO, таргетированная реклама, SMM и решения для цифрового роста бизнеса.',
            'AI & Automation': 'AI и Автоматизация',
            'AI assistants, workflow automation, data processing and smart business tools.': 'AI-ассистенты, автоматизация процессов, обработка данных и интеллектуальные бизнес-инструменты.',
            'Design': 'Дизайн',
            'Visual concepts, graphics, digital assets and design support for brands and products.': 'Визуальные концепции, графика, цифровые материалы и дизайн для брендов и продуктов.',
            'GET IN TOUCH': 'СВЯЗАТЬСЯ',
            'Let’s build': 'Давайте создадим',
            'something great.': 'что-то отличное.',
            'Have a project in mind or want to discuss an opportunity?': 'Есть проект или хотите обсудить сотрудничество?',
            'Email me': 'Написать на Email',
            'Order': 'Заказать',
            'SITE PREVIEW': 'ПРЕДПРОСМОТР',
            'PRICE RANGE': 'ЦЕНА'
        },
        hy: {
            'Home': 'Գլխավոր',
            'Services': 'Ծառայություններ',
            'Contact': 'Կապ',
            "HI, I'M BOGDAN": 'ԲԱՐԵՎ, ԵՍ ԲՈԳԴԱՆՆ ԵՄ',
            'DIGITAL SOLUTIONS': 'ԹՎԱՅԻՆ ԼՈՒԾՈՒՄՆԵՐ',
            'I help businesses turn ideas into practical digital products — from websites and automation to creative, marketing and custom technical solutions.': 'Օգնում եմ բիզնեսներին գաղափարները վերածել գործնական թվային պրոդուկտների՝ կայքերից և ավտոմատացումից մինչև ստեղծարար, մարքեթինգային և տեխնիկական լուծումներ։',
            'Explore services': 'Դիտել ծառայությունները',
            'Contact me': 'Կապվել ինձ հետ',
            'DIGITAL SOLUTIONS FOR BUSINESS': 'ԹՎԱՅԻՆ ԼՈՒԾՈՒՄՆԵՐ ԲԻԶՆԵՍԻ ՀԱՄԱՐ',
            'Web Development': 'Կայքերի մշակում',
            'Landing pages, business websites, catalogues and custom web solutions.': 'Լենդինգներ, բիզնես կայքեր, կատալոգներ և անհատական վեբ լուծումներ։',
            'View service': 'Դիտել ծառայությունը',
            'Marketing': 'Մարքեթինգ',
            'SEO, target advertising, SMM and digital growth solutions for businesses.': 'SEO, թիրախային գովազդ, SMM և բիզնեսի թվային աճի լուծումներ։',
            'AI & Automation': 'AI և Ավտոմատացում',
            'AI assistants, workflow automation, data processing and smart business tools.': 'AI օգնականներ, աշխատանքային գործընթացների ավտոմատացում, տվյալների մշակում և խելացի բիզնես գործիքներ։',
            'Design': 'Դիզայն',
            'Visual concepts, graphics, digital assets and design support for brands and products.': 'Վիզուալ կոնցեպտներ, գրաֆիկա, թվային նյութեր և դիզայն բրենդների ու պրոդուկտների համար։',
            'GET IN TOUCH': 'ԿԱՊՎԵԼ',
            'Let’s build': 'Եկեք ստեղծենք',
            'something great.': 'ինչ-որ հիանալի բան։',
            'Have a project in mind or want to discuss an opportunity?': 'Ունե՞ք նախագիծ կամ ցանկանում եք քննարկել համագործակցությունը։',
            'Email me': 'Գրել Email-ով',
            'Order': 'Պատվիրել',
            'SITE PREVIEW': 'ԿԱՅՔԻ ՆԱԽԱԴԻՏՈՒՄ',
            'PRICE RANGE': 'ԳԻՆ'
        }
    };

    // Service definitions used by the homepage modals.
    const S = {
        'web-development.html': {
            name: 'Web Development',
            type: '01 / WEB',
            text: 'Landing pages, business websites, catalogues and custom web solutions.',
            price: 'From $100'
        },
        'seo.html': {
            name: 'Marketing',
            type: '02 / MARKETING',
            text: 'SEO, target advertising, SMM and digital growth solutions for businesses.',
            price: 'Marketing'
        },
        'ai-automation.html': {
            name: 'AI & Automation',
            type: '04 / AUTOMATION',
            text: 'AI assistants, workflow automation, data processing and smart business tools.',
            price: 'AI'
        },
        'design.html': {
            name: 'Design',
            type: '04 / DESIGN',
            text: 'Visual concepts, graphics, digital assets and design support for brands and products.',
            price: 'From $50'
        }
    };

    const original = new Map();
    let current = null;

    // Return the selected-language version of a text value.
    function tr(text) {
        const language = localStorage.getItem('siteLang') || 'en';
        return language === 'en' ? text : (T[language]?.[text] || text);
    }

    // Translate only leaf text nodes so existing markup is preserved.
    function translate() {
        document.querySelectorAll('body *').forEach((element) => {
            if (element.children.length) return;

            const text = element.textContent.trim();
            if (!text) return;

            if (!original.has(element)) {
                original.set(element, text);
            }

            element.textContent = tr(original.get(element));
        });
    }

    // Build the language switcher with the uploaded SVG flags.
    function addLanguages() {
        if (document.querySelector('.lang-switch')) return;

        const header = document.querySelector('.header');
        if (!header) return;

        const switcher = document.createElement('div');
        switcher.className = 'lang-switch';
        switcher.innerHTML = `
            <button data-lang="en">
                <img src="assets/flags/4x3/us.svg" alt="">
                <span>EN</span>
            </button>
            <button data-lang="ru">
                <img src="assets/flags/4x3/ru.svg" alt="">
                <span>RU</span>
            </button>
            <button data-lang="hy">
                <img src="assets/flags/4x3/am.svg" alt="">
                <span>AM</span>
            </button>
        `;

        header.appendChild(switcher);

        switcher.addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (!button) return;

            localStorage.setItem('siteLang', button.dataset.lang);
            applyLanguage();
            window.dispatchEvent(new Event('siteLanguageChanged'));
        });
    }

    // Create the reusable service modal.
    function createModal() {
        if (document.querySelector('.modal')) return;

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-card">
                <button class="modal-close" aria-label="Close">×</button>
                <div class="modal-type" id="modalType"></div>
                <h2 id="modalTitle"></h2>
                <p id="modalText"></p>
                <div class="modal-content-grid">
                    <div>
                        <div class="modal-side-label" id="modalPreviewLabel">SITE PREVIEW</div>
                        <div id="modalPreview"></div>
                    </div>
                    <div>
                        <div class="modal-side-label" id="modalPriceLabel">PRICE RANGE</div>
                        <div id="modalPrice"></div>
                        <a class="btn primary modal-order" id="modalOrder" href="#contact">
                            Order <span>↗</span>
                        </a>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
        modal.querySelector('.modal-order').addEventListener('click', (event) => {
            event.preventDefault();
            closeModal();

            setTimeout(() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        });
    }

    // Return localized pricing for services with multi-line price lists.
    function modalPrice(service) {
        const language = localStorage.getItem('siteLang') || 'en';

        if (service.price === 'Marketing') {
            if (language === 'ru') {
                return 'SEO от 200$<br>Target от 200$<br>SMM от 150$';
            }

            if (language === 'hy') {
                return 'SEO՝ սկսած 200$-ից<br>Թիրախային գովազդ՝ սկսած 200$-ից<br>SMM՝ սկսած 150$-ից';
            }

            return 'SEO from $200<br>Target from $200<br>SMM from $150';
        }

        if (service.price === 'AI') {
            if (language === 'ru') {
                return 'Телеграм бот от 100$<br>AI ассистент от 200$<br>Автоматизация процессов от 500$<br>Автоматизация FOREX / CRYPTO от 1000$';
            }

            if (language === 'hy') {
                return 'Telegram բոտ՝ սկսած 100$-ից<br>AI օգնական՝ սկսած 200$-ից<br>Գործընթացների ավտոմատացում՝ սկսած 500$-ից<br>FOREX / CRYPTO ավտոմատացում՝ սկսած 1000$-ից';
            }

            return 'Telegram Bot from $100<br>AI Assistant from $200<br>Process Automation from $500<br>FOREX / CRYPTO Automation from $1000';
        }

        return price(service.price);
    }

    // Localize simple single-value prices.
    function price(value) {
        const language = localStorage.getItem('siteLang') || 'en';

        if (language === 'ru') return value.replace('From', 'От');
        if (language === 'hy') return value.replace('From', 'Սկսած');

        return value;
    }

    // Open a service card inside the shared homepage modal.
    function openModal(card) {
        createModal();

        const key = (card.getAttribute('href') || '').split('/').pop();
        const service = S[key];
        if (!service) return;

        current = service;

        document.querySelector('#modalType').textContent = service.type;
        document.querySelector('#modalTitle').textContent = tr(service.name);
        document.querySelector('#modalText').textContent = tr(service.text);
        document.querySelector('#modalPrice').innerHTML = modalPrice(service);
        document.querySelector('#modalPreviewLabel').textContent = tr('SITE PREVIEW');
        document.querySelector('#modalPriceLabel').textContent = tr('PRICE RANGE');
        document.querySelector('#modalOrder').innerHTML = `${tr('Order')} <span>↗</span>`;

        const preview = document.querySelector('#modalPreview');
        preview.innerHTML = '';

        const visual = card.querySelector('.project-visual');
        if (visual) {
            preview.appendChild(visual.cloneNode(true));
        }

        document.querySelector('.modal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    // Close the active service modal.
    function closeModal() {
        document.querySelector('.modal')?.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Apply language changes to the page and the currently open modal.
    function applyLanguage() {
        translate();

        const language = localStorage.getItem('siteLang') || 'en';
        document.documentElement.lang = language;

        document.querySelectorAll('.lang-switch button').forEach((button) => {
            button.classList.toggle('active', button.dataset.lang === language);
        });

        if (!current) return;

        document.querySelector('#modalType').textContent = current.type;
        document.querySelector('#modalTitle').textContent = tr(current.name);
        document.querySelector('#modalText').textContent = tr(current.text);
        document.querySelector('#modalPrice').innerHTML = modalPrice(current);
        document.querySelector('#modalPreviewLabel').textContent = tr('SITE PREVIEW');
        document.querySelector('#modalPriceLabel').textContent = tr('PRICE RANGE');
        document.querySelector('#modalOrder').innerHTML = `${tr('Order')} <span>↗</span>`;
    }

    // Initialize language switching, service modals and the mobile menu.
    function init() {
        addLanguages();

        document.querySelectorAll('.service-project-card').forEach((card) => {
            card.addEventListener('click', (event) => {
                event.preventDefault();
                openModal(card);
            });
        });

        const year = document.querySelector('#year');
        if (year) {
            year.textContent = new Date().getFullYear();
        }

        const menuButton = document.querySelector('#menuBtn');
        const nav = document.querySelector('#nav');

        if (menuButton && nav) {
            menuButton.addEventListener('click', () => {
                nav.classList.toggle('open');
            });
        }

        applyLanguage();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
