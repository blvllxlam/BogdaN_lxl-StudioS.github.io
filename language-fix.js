(function(){
  function fixLanguageSwitcher(){
    document.querySelectorAll('[data-lang="en"], [data-language="en"]').forEach(function(el){
      el.innerHTML='<span class="lang-flag" aria-hidden="true" style="display:inline-block!important;visibility:visible!important;opacity:1!important;font-family:Arial,sans-serif!important;font-size:1em!important;line-height:1!important;">🇺🇸</span> <span class="lang-code">EN</span>';
      el.setAttribute('aria-label','English');
      el.title='English';
    });

    document.querySelectorAll('[data-lang="hy"], [data-language="hy"]').forEach(function(el){
      el.innerHTML='<span class="lang-flag" aria-hidden="true" style="display:inline-block!important;visibility:visible!important;opacity:1!important;font-family:Arial,sans-serif!important;font-size:1em!important;line-height:1!important;">🇦🇲</span> <span class="lang-code">AM</span>';
      el.setAttribute('aria-label','Հայերեն');
      el.title='Հայերեն';
    });

    document.querySelectorAll('.lang-switcher').forEach(function(switcher){
      switcher.querySelectorAll('button,a,[role="button"]').forEach(function(el){
        var text=(el.textContent||'').trim();
        if(text==='EN' || text==='GB' || text==='🇬🇧 EN'){
          el.innerHTML='<span class="lang-flag" aria-hidden="true" style="display:inline-block!important;visibility:visible!important;opacity:1!important;font-family:Arial,sans-serif!important;font-size:1em!important;line-height:1!important;">🇺🇸</span> <span class="lang-code">EN</span>';
          el.title='English';
        }
        if(text==='AM' || text==='HY' || text==='🇭🇾 HY'){
          el.innerHTML='<span class="lang-flag" aria-hidden="true" style="display:inline-block!important;visibility:visible!important;opacity:1!important;font-family:Arial,sans-serif!important;font-size:1em!important;line-height:1!important;">🇦🇲</span> <span class="lang-code">AM</span>';
          el.title='Հայերեն';
        }
      });
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
