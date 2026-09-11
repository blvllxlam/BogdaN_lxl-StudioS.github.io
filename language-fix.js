(function(){
  function fixLanguageSwitcher(){
    document.querySelectorAll('[data-lang="en"], [data-language="en"]').forEach(function(el){
      el.innerHTML='<span class="lang-flag">🇺🇸</span> <span>EN</span>';
      el.setAttribute('aria-label','English');
      el.title='English';
    });
    document.querySelectorAll('[data-lang="hy"], [data-language="hy"]').forEach(function(el){
      el.innerHTML='<span class="lang-flag">🇦🇲</span> <span>AM</span>';
      el.setAttribute('aria-label','Հայերեն');
      el.title='Հայերեն';
    });

    document.querySelectorAll('.lang-switcher *').forEach(function(el){
      if(el.children.length>0) return;
      var t=(el.textContent||'').trim();
      if(t==='GB' || t==='🇬🇧 EN' || t==='EN'){
        el.innerHTML='<span class="lang-flag">🇺🇸</span> <span>EN</span>';
      }
      if(t==='HY' || t==='🇭🇾 HY' || t==='AM'){
        el.innerHTML='<span class="lang-flag">🇦🇲</span> <span>AM</span>';
      }
    });
  }

  document.addEventListener('DOMContentLoaded',fixLanguageSwitcher);
  setTimeout(fixLanguageSwitcher,300);
  setTimeout(fixLanguageSwitcher,1000);
  setTimeout(fixLanguageSwitcher,2000);
})();
