(function(){'use strict';
function apply(){
  var title=document.getElementById('modalTitle');
  var price=document.getElementById('modalPrice');
  if(!title||!price)return;
  var text=title.textContent.trim();
  if(text==='Web Development'||text==='Разработка сайтов'||text==='Կայքերի մշակում'){
    var desired='Landing <span>от 100$</span><br>Визитка <span>от 100$</span><br>Каталог <span>от 200$</span>';
    if(price.innerHTML!==desired) price.innerHTML=desired;
  }
}
new MutationObserver(apply).observe(document.body,{childList:true,subtree:true,characterData:true});
apply();
})();