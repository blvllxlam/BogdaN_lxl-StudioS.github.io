(function(){
  function fixLanguageSwitcher(){
    document.querySelectorAll('[data-lang="en"], [data-language="en"]').forEach(function(el){
      if (!el.querySelector('.lang-flag')) {
        el.innerHTML='<span class="lang-flag" aria-hidden="true">🇺🇸</span> <span class="lang-code">EN</span>';
      } else {
        var flag=el.querySelector('.lang-flag');
        var code=el.querySelector('.lang-code');
        if(flag) flag.textContent='🇺🇸';
        if(code) code.textContent='EN';
      }
      el.setAttribute('aria-label','English');
      el.title='English';
    });

    document.querySelectorAll('[data-lang="hy"], [data-language="hy"]').forEach(function(el){
      if (!el.querySelector('.lang-flag')) {
        el.innerHTML='<span class="lang-flag" aria-hidden="true">🇦🇲</span> <span class="lang-code">AM</span>';
      } else {
        var flag=el.querySelector('.lang-flag');
        var code=el.querySelector('.lang-code');
        if(flag) flag.textContent='🇦🇲';
        if(code) code.textContent='AM';
      }
      el.setAttribute('aria-label','Հայերեն');
      el.title='Հայերեն';
    });
  }

  function start(){
    fixLanguageSwitcher();
    var observer=new MutationObserver(function(){
      fixLanguageSwitcher();
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start);
  else start();
})();
