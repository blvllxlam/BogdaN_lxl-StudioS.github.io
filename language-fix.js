(function(){
  function fixLanguageSwitcher(){
    document.querySelectorAll('[data-lang="en"], [data-language="en"]').forEach(function(el){
      el.innerHTML='<span class="lang-flag" aria-hidden="true">🇺🇸</span> <span class="lang-code">EN</span>';
      el.setAttribute('aria-label','English');
      el.title='English';
    });

    document.querySelectorAll('[data-lang="hy"], [data-language="hy"]').forEach(function(el){
      el.innerHTML='<span class="lang-flag" aria-hidden="true">🇦🇲</span> <span class="lang-code">AM</span>';
      el.setAttribute('aria-label','Հայերեն');
      el.title='Հայերեն';
    });

    document.querySelectorAll('.lang-switcher *').forEach(function(el){
      if(el.children.length>0) return;
      var t=(el.textContent||'').trim();
      if(t==='GB' || t==='🇬🇧 EN' || t==='EN') el.textContent='🇺🇸 EN';
      if(t==='HY' || t==='🇭🇾 HY' || t==='AM') el.textContent='🇦🇲 AM';
    });
  }

  function start(){
    fixLanguageSwitcher();
    var observer=new MutationObserver(function(){
      fixLanguageSwitcher();
    });
    observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start);
  else start();
})();
