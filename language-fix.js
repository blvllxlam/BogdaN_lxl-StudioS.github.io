(function(){
  function fixLanguageSwitcher(){
    document.querySelectorAll('[data-lang="en"], [data-language="en"]').forEach(function(el){
      el.textContent='🇺🇸 EN';
      el.setAttribute('aria-label','English');
      el.title='English';
    });
    document.querySelectorAll('[data-lang="hy"], [data-language="hy"]').forEach(function(el){
      el.textContent='🇦🇲 AM';
      el.setAttribute('aria-label','Հայերեն');
      el.title='Հայերեն';
    });
    document.querySelectorAll('.lang-switcher *').forEach(function(el){
      var t=(el.textContent||'').trim();
      if(t==='GB' || t==='🇬🇧 EN' || t==='EN'){el.textContent='🇺🇸 EN';}
      if(t==='HY' || t==='🇭🇾 HY' || t==='AM'){el.textContent='🇦🇲 AM';}
    });
  }
  document.addEventListener('DOMContentLoaded',fixLanguageSwitcher);
  setTimeout(fixLanguageSwitcher,300);
  setTimeout(fixLanguageSwitcher,1000);
})();
