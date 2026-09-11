(function(){
  function fixLanguageSwitcher(){
    document.querySelectorAll('[data-lang="en"], [data-language="en"]').forEach(function(el){
      if(el.getAttribute('data-lang-fixed')==='en') return;
      el.innerHTML='<span class="lang-flag" aria-hidden="true">🇺🇸</span> <span class="lang-code">EN</span>';
      el.setAttribute('aria-label','English');
      el.title='English';
      el.setAttribute('data-lang-fixed','en');
    });

    document.querySelectorAll('[data-lang="hy"], [data-language="hy"]').forEach(function(el){
      if(el.getAttribute('data-lang-fixed')==='hy') return;
      el.innerHTML='<span class="lang-flag" aria-hidden="true">🇦🇲</span> <span class="lang-code">AM</span>';
      el.setAttribute('aria-label','Հայերեն');
      el.title='Հայերեն';
      el.setAttribute('data-lang-fixed','hy');
    });

    document.querySelectorAll('.lang-switcher *').forEach(function(el){
      if(el.children.length>0) return;
      var t=(el.textContent||'').trim();
      if((t==='GB' || t==='🇬🇧 EN' || t==='EN') && !el.closest('[data-lang="en"],[data-language="en"]')) el.textContent='🇺🇸 EN';
      if((t==='HY' || t==='🇭🇾 HY' || t==='AM') && !el.closest('[data-lang="hy"],[data-language="hy"]')) el.textContent='🇦🇲 AM';
    });
  }

  document.addEventListener('DOMContentLoaded',function(){
    fixLanguageSwitcher();
    var observer=new MutationObserver(function(){
      observer.disconnect();
      fixLanguageSwitcher();
      observer.observe(document.body,{childList:true,subtree:true,characterData:true});
    });
    observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  });
})();
