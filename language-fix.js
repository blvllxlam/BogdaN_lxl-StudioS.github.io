(function () {
  function setLangButton(el, flag, code, label) {
    var icon = el.querySelector('i');
    var text = el.querySelector('b');

    if (!icon) {
      icon = document.createElement('i');
      el.insertBefore(icon, el.firstChild);
    }

    icon.textContent = flag;
    icon.style.cssText = [
      'display:flex!important',
      'align-items:center!important',
      'justify-content:center!important',
      'width:auto!important',
      'height:auto!important',
      'min-width:18px!important',
      'border:0!important',
      'box-shadow:none!important',
      'background:none!important',
      'overflow:visible!important',
      'font-family:Arial,sans-serif!important',
      'font-size:15px!important',
      'line-height:1!important'
    ].join(';');

    if (!text) {
      text = document.createElement('b');
      el.appendChild(text);
    }

    text.textContent = code;
    el.setAttribute('aria-label', label);
    el.title = label;
  }

  function fixLanguageSwitcher() {
    document
      .querySelectorAll('[data-lang="en"], [data-language="en"]')
      .forEach(function (el) {
        setLangButton(el, '🇺🇸', 'EN', 'English');
      });

    document
      .querySelectorAll('[data-lang="ru"], [data-language="ru"]')
      .forEach(function (el) {
        setLangButton(el, '🇷🇺', 'RU', 'Русский');
      });

    document
      .querySelectorAll('[data-lang="hy"], [data-language="hy"]')
      .forEach(function (el) {
        setLangButton(el, '🇦🇲', 'AM', 'Հայերեն');
      });
  }

  function start() {
    fixLanguageSwitcher();

    var observer = new MutationObserver(function () {
      fixLanguageSwitcher();
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
