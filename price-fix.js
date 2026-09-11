(function(){'use strict';
function apply(){
  var title=document.getElementById('modalTitle');
  var price=document.getElementById('modalPrice');
  if(!title||!price)return;
  var text=title.textContent.trim();
  if(text==='Web Development'||text==='Разработка сайтов'||text==='Կայքերի մշակում'){
    price.innerHTML='Landing <span>от 100$</span><br>Визитка <span>от 100$</span><br>Каталог <span>от 200$</span>';
  }
}
new MutationObserver(apply).observe(document.body,{childList:true,subtree:true,characterData:true});
apply();
})();