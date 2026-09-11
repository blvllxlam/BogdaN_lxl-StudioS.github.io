(function () {
  function setLanguageButton(button, code, label, flagBackground) {
    var icon = button.querySelector('i');
    var text = button.querySelector('b');

    // Create the flag element if it does not exist.
    if (!icon) {
      icon = document.createElement('i');
      button.insertBefore(icon, button.firstChild);
    }

    // Keep the flag as a CSS-rendered rectangle.
    icon.textContent = '';
    icon.style.cssText = [
      'display:block!important',
      'width:18px!important',
      'height:12px!important',
      'min-width:18px!important',
      'border-radius:2px!important',
      'overflow:hidden!important',
      'box-shadow:0 0 0 1px rgba(255,255,255,.14)!important',
      'background:' + flagBackground + '!important'
    ].join(';');

    // Create the language code if it does not exist.
    if (!text) {
      text = document.createElement('b');
      button.appendChild(text);
    }

    text.textContent = code;
    button.setAttribute('aria-label', label);
    button.title = label;
  }

  function fixLanguageSwitcher() {
    document.querySelectorAll('[data-lang="en"], [data-language="en"]').forEach(function (button) {
      setLanguageButton(
        button,
        'EN',
        'English',
        '#1b4b91'
      );
    });

    document.querySelectorAll('[data-lang="ru"], [data-language="ru"]').forEach(function (button) {
      setLanguageButton(
        button,
        'RU',
        'Русский',
        'linear-gradient(#fff 0 33.33%, #2457a6 33.33% 66.66%, #d52b1e 66.66%)'
      );
    });

    document.querySelectorAll('[data-lang="hy"], [data-language="hy"]').forEach(function (button) {
      setLanguageButton(
        button,
        'AM',
        'Հայերեն',
        'linear-gradient(#d90012 0 33.33%, #0033a0 33.33% 66.66%, #f2a800 66.66%)'
      );
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
