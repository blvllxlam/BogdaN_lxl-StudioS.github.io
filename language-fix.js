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

      .lang-switch button[data-lang="en"] i {
        background: linear-gradient(to bottom,
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

      .lang-switch button[data-lang="ru"] i {
        background: linear-gradient(to bottom,
          #fff 0 33.33%, #0039a6 33.33% 66.66%, #d52b1e 66.66% 100%) !important;
      }

      .lang-switch button[data-lang="hy"] i {
        background: linear-gradient(to bottom,
          #d90012 0 33.33%, #0033a0 33.33% 66.66%, #f2a800 66.66% 100%) !important;
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

  function installFavicon() {
    if (document.querySelector('link[data-lxl-favicon]')) return;

    var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#07111d"/><stop offset="1" stop-color="#000308"/></linearGradient><linearGradient id="l" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#55d8ff"/><stop offset=".45" stop-color="#087cff"/><stop offset="1" stop-color="#0638c9"/></linearGradient></defs><rect width="512" height="512" rx="112" fill="url(#b)"/><circle cx="256" cy="256" r="184" fill="none" stroke="#1169ff" stroke-width="5"/><g fill="url(#l)" stroke="#57d8ff" stroke-width="2"><path d="M155 169h34v132l35-35h42l-77 77h-34z"/><path d="M222 178h43l25 31-22 27-46-58zm90 0h43l-67 84-28-31zm-42 105 27-32 69 80h-43z"/><path d="M323 169h34v132h-34z"/></g></svg>';
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    link.setAttribute('data-lxl-favicon', 'true');
    document.head.appendChild(link);
  }

  function start() {
    injectFlagStyles();
    fixLanguageLabels();
    installFavicon();

    var observer = new MutationObserver(function () {
      injectFlagStyles();
      fixLanguageLabels();
      installFavicon();
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
