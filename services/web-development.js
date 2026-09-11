(function(){
'use strict';
const T={
'en':{},
'ru':{'WEB DEVELOPMENT':'РАЗРАБОТКА САЙТОВ','Business websites, landing pages, catalogues and web solutions built around a clear business goal.':'Корпоративные сайты, лендинги, каталоги и веб-решения, созданные под конкретную бизнес-цель.','Start a project':'Начать проект','Back home':'На главную','WEB FORMATS':'ФОРМАТЫ САЙТОВ','Choose the format that fits your business.':'Выберите формат, который подходит вашему бизнесу.','Landing':'Лендинг','Business Card Website':'Сайт-визитка','Online Catalogue':'Онлайн-каталог','Business Website':'Бизнес-сайт','Landing Page':'Лендинг','View offer':'Подробнее','SITE PREVIEW':'ПРЕДПРОСМОТР САЙТА','PRICE RANGE':'ЦЕНА','Order':'Заказать'},
'hy':{'WEB DEVELOPMENT':'ԿԱՅՔԵՐԻ ՄՇԱԿՈՒՄ','Business websites, landing pages, catalogues and web solutions built around a clear business goal.':'Կորպորատիվ կայքեր, լենդինգներ, կատալոգներ և վեբ լուծումներ՝ ստեղծված հստակ բիզնես նպատակի համար։','Start a project':'Սկսել նախագիծը','Back home':'Վերադառնալ գլխավոր էջ','WEB FORMATS':'ԿԱՅՔԵՐԻ ՁԵՎԱՉԱՓԵՐ','Choose the format that fits your business.':'Ընտրեք ձեր բիզնեսին համապատասխան ձևաչափը։','Landing':'Լենդինգ','Business Card Website':'Կայք-վիզիտկա','Online Catalogue':'Առցանց կատալոգ','Business Website':'Բիզնես կայք','Landing Page':'Լենդինգ','View offer':'Դիտել առաջարկը','SITE PREVIEW':'ԿԱՅՔԻ ՆԱԽԱԴԻՏՈՒՄ','PRICE RANGE':'ԳԻՆ','Order':'Պատվիրել'}
};
const original=new Map();
function tr(s){const l=localStorage.getItem('siteLang')||'en';return (T[l]&&T[l][s])||s}
function translate(){document.querySelectorAll('body *').forEach(el=>{if(el.children.length)return;if(!original.has(el))original.set(el,el.textContent);el.textContent=tr(original.get(el))});const order=document.getElementById('modalOrder');if(order){order.innerHTML=tr('Order')+' <span>↗</span>'}}
function init(){
 const header=document.querySelector('.header');
 if(header&&!header.querySelector('.lang-switch')){
  const sw=document.createElement('div');sw.className='lang-switch';sw.setAttribute('aria-label','Language');
  sw.innerHTML='<button type="button" data-lang="en"><span class="flag flag-en"></span><span>EN</span></button><button type="button" data-lang="ru"><span class="flag flag-ru"></span><span>RU</span></button><button type="button" data-lang="hy"><span class="flag flag-am"></span><span>AM</span></button>';
  header.appendChild(sw);sw.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;e.preventDefault();e.stopPropagation();localStorage.setItem('siteLang',b.dataset.lang);apply(b.dataset.lang)});
 }
 apply(localStorage.getItem('siteLang')||'en');
 document.querySelectorAll('.web-offer-card').forEach(card=>{const p=card.dataset.price;if(p)card.dataset.price='From $100';});
 document.querySelectorAll('.web-offer-card').forEach(card=>{card.addEventListener('click',()=>setTimeout(()=>{const price=document.getElementById('modalPrice');if(price)price.textContent='From $100';const order=document.getElementById('modalOrder');if(order)order.innerHTML=tr('Order')+' <span>↗</span>'},0))});
}
function apply(lang){document.documentElement.lang=lang;document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));translate()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
