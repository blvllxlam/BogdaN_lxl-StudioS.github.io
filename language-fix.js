(function () {
  function injectFlagStyles() {
    if (document.getElementById('language-flag-styles')) return;

    var style = document.createElement('style');
    style.id = 'language-flag-styles';
    style.textContent = `
      .lang-switch {
        display: flex !important;
        align-items: center !important;
        gap: 6px !important;
      }

      .lang-switch button {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 6px !important;
        box-sizing: border-box !important;
      }

      .lang-switch button .lang-flag {
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
        position: relative !important;
        box-shadow: 0 0 0 1px rgba(255,255,255,.25) !important;
        opacity: 1 !important;
        visibility: visible !important;
      }

      .lang-switch button[data-lang="en"] .lang-flag {
        background: linear-gradient(to bottom,
          #b22234 0 7.69%, #fff 7.69% 15.38%,
          #b22234 15.38% 23.07%, #fff 23.07% 30.76%,
          #b22234 30.76% 38.45%, #fff 38.45% 46.14%,
          #b22234 46.14% 53.83%, #fff 53.83% 61.52%,
          #b22234 61.52% 69.21%, #fff 69.21% 76.90%,
          #b22234 76.90% 84.59%, #fff 84.59% 92.28%,
          #b22234 92.28% 100%) !important;
      }

      .lang-switch button[data-lang="en"] .lang-flag::before {
        content: '' !important;
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
        width: 9px !important;
        height: 8px !important;
        background: #3c3b6e !important;
      }

      .lang-switch button[data-lang="ru"] .lang-flag {
        background: linear-gradient(to bottom,
          #fff 0 33.33%, #0039a6 33.33% 66.66%, #d52b1e 66.66% 100%) !important;
      }

      .lang-switch button[data-lang="hy"] .lang-flag {
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

  function ensureFlag(button) {
    var flag = button.querySelector('.lang-flag');

    if (!flag) {
      flag = document.createElement('i');
      flag.className = 'lang-flag';
      button.insertBefore(flag, button.firstChild);
    }

    flag.setAttribute('aria-hidden', 'true');
  }

  function setTextIfNeeded(node, value) {
    if (node && node.textContent !== value) node.textContent = value;
  }

  function fixLanguageLabels() {
    document.querySelectorAll('.lang-switch button[data-lang="en"]').forEach(function (button) {
      ensureFlag(button);
      var text = button.querySelector('b');
      if (text) setTextIfNeeded(text, 'EN');
      else if (button.childNodes.length > 1 && button.lastChild.nodeType === 3) {
        setTextIfNeeded(button.lastChild, 'EN');
      }
      button.setAttribute('aria-label', 'English');
      if (button.title !== 'English') button.title = 'English';
    });

    document.querySelectorAll('.lang-switch button[data-lang="ru"]').forEach(function (button) {
      ensureFlag(button);
      var text = button.querySelector('b');
      if (text) setTextIfNeeded(text, 'RU');
      else if (button.childNodes.length > 1 && button.lastChild.nodeType === 3) {
        setTextIfNeeded(button.lastChild, 'RU');
      }
      button.setAttribute('aria-label', 'Русский');
      if (button.title !== 'Русский') button.title = 'Русский';
    });

    document.querySelectorAll('.lang-switch button[data-lang="hy"]').forEach(function (button) {
      ensureFlag(button);
      var text = button.querySelector('b');
      if (text) setTextIfNeeded(text, 'AM');
      else if (button.childNodes.length > 1 && button.lastChild.nodeType === 3) {
        setTextIfNeeded(button.lastChild, 'AM');
      }
      button.setAttribute('aria-label', 'Հայերեն');
      if (button.title !== 'Հայերեն') button.title = 'Հայերեն';
    });
  }

  function start() {
    injectFlagStyles();
    fixLanguageLabels();

    var observer = new MutationObserver(function (mutations) {
      var languageChanged = mutations.some(function (mutation) {
        return Array.from(mutation.addedNodes).some(function (node) {
          if (node.nodeType !== 1) return false;
          return node.matches?.('.lang-switch, .lang-switch button') ||
                 node.querySelector?.('.lang-switch, .lang-switch button');
        });
      });

      if (languageChanged) fixLanguageLabels();
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
