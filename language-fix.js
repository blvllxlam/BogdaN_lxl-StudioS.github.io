(function () {
  function injectFlagStyles() {
    if (document.getElementById('language-flag-styles')) return;

    var style = document.createElement('style');
    style.id = 'language-flag-styles';
    style.textContent = `
      .lang-switch button i,
      .lang-switch button[data-lang="en"] i,
      .lang-switch button[data-lang="ru"] i,
      .lang-switch button[data-lang="hy"] i {
        display: inline-block !important;
        flex: 0 0 22px !important;
        width: 22px !important;
        height: 15px !important;
        min-width: 22px !important;
        min-height: 15px !important;
        padding: 0 !important;
        margin: 0 !important;
        border-radius: 2px !important;
        overflow: hidden !important;
        box-shadow: 0 0 0 1px rgba(255,255,255,.22) !important;
        background-clip: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
      }

      /* United States */
      .lang-switch button[data-lang="en"] i {
        background:
          linear-gradient(to bottom,
            #b22234 0 7.69%, #fff 7.69% 15.38%,
            #b22234 15.38% 23.07%, #fff 23.07% 30.76%,
            #b22234 30.76% 38.45%, #fff 38.45% 46.14%,
            #b22234 46.14% 53.83%, #fff 53.83% 61.52%,
            #b22234 61.52% 69.21%, #fff 69.21% 76.90%,
            #b22234 76.90% 84.59%, #fff 84.59% 92.28%,
            #b22234 92.28% 100%) !important;
        position: relative !important;
      }

      .lang-switch button[data-lang="en"] i::before {
        content: '' !important;
        display: block !important;
        width: 9px !important;
        height: 8px !important;
        background: #3c3b6e !important;
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
        z-index: 2 !important;
      }

      /* Russia */
      .lang-switch button[data-lang="ru"] i {
        background: linear-gradient(
          to bottom,
          #fff 0 33.33%,
          #0039a6 33.33% 66.66%,
          #d52b1e 66.66% 100%
        ) !important;
      }

      /* Armenia */
      .lang-switch button[data-lang="hy"] i {
        background: linear-gradient(
          to bottom,
          #d90012 0 33.33%,
          #0033a0 33.33% 66.66%,
          #f2a800 66.66% 100%
        ) !important;
      }

      .lang-switch button b {
        display: inline-block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
    `;

    document.head.appendChild(style);
  }

  function fixLanguageLabels() {
    document.querySelectorAll('.lang-switch button[data-lang="en"]').forEach(function (button) {
      var text = button.querySelector('b');
      if (text) text.textContent = 'EN';
      button.setAttribute('aria-label', 'English');
      button.title = 'English';
    });

    document.querySelectorAll('.lang-switch button[data-lang="ru"]').forEach(function (button) {
      var text = button.querySelector('b');
      if (text) text.textContent = 'RU';
      button.setAttribute('aria-label', 'Русский');
      button.title = 'Русский';
    });

    document.querySelectorAll('.lang-switch button[data-lang="hy"]').forEach(function (button) {
      var text = button.querySelector('b');
      if (text) text.textContent = 'AM';
      button.setAttribute('aria-label', 'Հայերեն');
      button.title = 'Հայերեն';
    });
  }

  function start() {
    injectFlagStyles();
    fixLanguageLabels();

    var observer = new MutationObserver(function () {
      injectFlagStyles();
      fixLanguageLabels();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
