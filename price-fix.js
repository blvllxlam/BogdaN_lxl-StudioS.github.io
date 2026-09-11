(function(){'use strict';
function apply(){
  var title=document.getElementById('modalTitle');
  var price=document.getElementById('modalPrice');
  if(!title||!price)return;
  var text=title.textContent.trim();
  if(text==='Web Development'||text==='Разработка сайтов'||text==='Կայքերի մշակում'){
    var lang=localStorage.getItem('siteLang')||'en';
    var desired=lang==='ru'
      ?'Лендинг от 100$<br>Визитка от 100$<br>Каталог от 200$'
      :lang==='hy'
        ?'Լենդինգ՝ սկսած 100$-ից<br>Վիզիտկա՝ սկսած 100$-ից<br>Կատալոգ՝ սկսած 200$-ից'
        :'Landing from $100<br>Business Card from $100<br>Catalogue from $200';
    if(price.innerHTML!==desired) price.innerHTML=desired;
  }
}
var timer=null;
new MutationObserver(function(){clearTimeout(timer);timer=setTimeout(apply,0)}).observe(document.body,{childList:true,subtree:true,characterData:true});
window.addEventListener('siteLanguageChanged',apply);
apply();
})();