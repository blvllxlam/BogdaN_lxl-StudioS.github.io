(function(){
'use strict';

function init(){
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();

  const menu=document.getElementById('menuBtn');
  const nav=document.getElementById('nav');
  if(menu&&nav){
    menu.addEventListener('click',function(){nav.classList.toggle('open')});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open')})});
  }

  const header=document.querySelector('.header');
  if(!header)return;

  const sw=document.createElement('div');
  sw.className='lang-switch';
  sw.setAttribute('aria-label','Language');
  sw.innerHTML='<button type="button" data-lang="en" aria-label="English"><span class="flag flag-en">🇬🇧</span><span>EN</span></button><button type="button" data-lang="ru" aria-label="Russian"><span class="flag flag-ru">🇷🇺</span><span>RU</span></button><button type="button" data-lang="hy" aria-label="Armenian"><span class="flag flag-am">🇦🇲</span><span>AM</span></button>';
  header.appendChild(sw);

  sw.addEventListener('click',function(e){
    const button=e.target.closest('button');
    if(!button)return;
    e.preventDefault();
    e.stopPropagation();
    setLanguage(button.dataset.lang);
  });

  setLanguage(localStorage.getItem('siteLang')||'en');
}

function setLanguage(lang){
  document.documentElement.lang=lang;
  localStorage.setItem('siteLang',lang);
  document.querySelectorAll('.lang-switch button').forEach(function(button){
    button.classList.toggle('active',button.dataset.lang===lang);
  });
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',init,{once:true});
}else{
  init();
}
})();
