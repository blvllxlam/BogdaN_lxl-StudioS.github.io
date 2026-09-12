(function(){'use strict';
function apply(){
  var title=document.getElementById('modalTitle');
  var price=document.getElementById('modalPrice');
  if(!title||!price)return;
  var text=title.textContent.trim();
  var lang=localStorage.getItem('siteLang')||'en';
  if(text==='Web Development'||text==='Разработка сайтов'||text==='Կայքերի մշակում'){
    var desired=lang==='ru'
      ?'Лендинг от 100$<br>Визитка от 100$<br>Каталог от 200$'
      :lang==='hy'
        ?'Լենդինգ՝ սկսած 100$-ից<br>Վիզիտկա՝ սկսած 100$-ից<br>Կատալոգ՝ սկսած 200$-ից'
        :'Landing from $100<br>Business Card from $100<br>Catalogue from $200';
    if(price.innerHTML!==desired) price.innerHTML=desired;
  }
  if(text==='Marketing'||text==='Маркетинг'||text==='Մարքեթինգ'){
    var marketing=lang==='ru'
      ?'SEO от 200$<br>Target от 200$<br>SMM от 150$'
      :lang==='hy'
        ?'SEO՝ սկսած 200$-ից<br>Target՝ սկսած 200$-ից<br>SMM՝ սկսած 150$-ից'
        :'SEO from $200<br>Target from $200<br>SMM from $150';
    if(price.innerHTML!==marketing) price.innerHTML=marketing;
  }
}
var timer=null;
new MutationObserver(function(){clearTimeout(timer);timer=setTimeout(apply,0)}).observe(document.body,{childList:true,subtree:true,characterData:true});
window.addEventListener('siteLanguageChanged',apply);
apply();
})();