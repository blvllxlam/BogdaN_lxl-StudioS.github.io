(function () {
  var STYLE_ID = 'language-flag-fix';

  function addStyles() {
    if (document.getElementById(STYLE_ID)) return;

    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .lang-flag-fix {
        display: inline-flex !important;
        align-items: center !important;
        gap: 7px !important;
      }

      .lang-flag-fix::before {
        content: '' !important;
        display: inline-block !important;
        width: 18px !important;
        height: 12px !important;
        min-width: 18px !important;
        border-radius: 2px !important;
        overflow: hidden !important;
        box-shadow: 0 0 0 1px rgba(255,255,255,.18) !important;
        flex: 0 0 18px !important;
      }

      .lang-flag-en::before {
        background:
          linear-gradient(
            to bottom,
            #b22234 0 7.69%,
            #fff 7.69% 15.38%,
            #b22234 15.38% 23.07%,
            #fff 23.07% 30.76%,
            #b22234 30.76% 38.45%,
            #fff 38.45% 46.14%,
            #b22234 46.14% 53.83%,
            #fff 53.83% 61.52%,
            #b22234 61.52% 69.21%,
            #fff 69.21% 76.90%,
            #b22234 76.90% 84.59%,
            #fff 84.59% 92.28%,
            #b22234 92.28% 100%
          ) !important;
        position: relative !important;
      }

      .lang-flag-en::after {
        content: '' !important;
        position: absolute !important;
        width: 7px !important;
        height: 6px !important;
        margin-left: 0 !important;
        background: #3c3b6e !important;
        border-radius: 1px !important;
      }

      .lang-flag-ru::before {
        background: linear-gradient(
          to bottom,
          #fff 0 33.33%,
          #2457a6 33.33% 66.66%,
          #d52b1e 66.66% 100%
        ) !important;
      }

      .lang-flag-am::before {
        background: linear-gradient(
          to bottom,
          #d90012 0 33.33%,
          #0033a0 33.33% 66.66%,
          #f2a800 66.66% 100%
        ) !important;
      }
    `;
    document.head.appendChild(style);
  }

  function getLanguage(button) {
    var text = (button.textContent || '').trim().toUpperCase();
    var dataLang = (
      button.getAttribute('data-lang') ||
      button.getAttribute('data-language') ||
      button.getAttribute('lang') ||
      ''
    ).toLowerCase();

    if (dataLang === 'en' || text === 'EN' || text === 'ENGLISH') return 'en';
    if (dataLang === 'ru' || text === 'RU' || text === 'RUSSIAN') return 'ru';
    if (
      dataLang === 'hy' ||
      dataLang === 'am' ||
      text === 'HY' ||
      text === 'AM' ||
      text === 'ARMENIAN' ||
      text === 'ՀԱՅԵՐԵՆ'
    ) return 'am';

    return null;
  }

  function fixLanguageSwitcher() {
    addStyles();

    var elements = document.querySelectorAll('button, a, [role="button"]');

    elements.forEach(function (button) {
      var language = getLanguage(button);
      if (!language) return;

      // Only touch compact language controls, not normal page content.
      var text = (button.textContent || '').trim();
      var isCompact = text.length <= 12 || button.hasAttribute('data-lang') || button.hasAttribute('data-language');
      if (!isCompact) return;

      button.classList.remove('lang-flag-en', 'lang-flag-ru', 'lang-flag-am');
      button.classList.add('lang-flag-fix', 'lang-flag-' + language);

      if (language === 'en') {
        button.setAttribute('aria-label', 'English');
        button.title = 'English';
      } else if (language === 'ru') {
        button.setAttribute('aria-label', 'Русский');
        button.title = 'Русский';
      } else {
        button.setAttribute('aria-label', 'Հայերեն');
        button.title = 'Հայերեն';
      }
    });
  }

  function start() {
    addStyles();
    fixLanguageSwitcher();

    var observer = new MutationObserver(function () {
      fixLanguageSwitcher();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
