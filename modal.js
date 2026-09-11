(function(){
function trText(value){return typeof window.tr==='function'?window.tr(value):value}
function init(){
 const modal=document.getElementById('modal');
 if(!modal)return;
 const title=document.getElementById('modalTitle');
 const type=document.getElementById('modalType');
 const text=document.getElementById('modalText');
 const preview=document.getElementById('modalPreview');
 const price=document.getElementById('modalPrice');
 const order=document.getElementById('modalOrder');
 const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''};
 const open=(card)=>{
  const v=card.querySelector('.project-visual');
  title.textContent=trText(card.dataset.title||card.querySelector('h3')?.textContent||'Project');
  type.textContent=trText(card.dataset.type||card.querySelector('.project-meta')?.textContent||'PROJECT');
  text.textContent=trText(card.dataset.text||card.querySelector('p')?.textContent||'');
  price.textContent=card.dataset.price||'PRICE — PRICE';
  if(v){preview.innerHTML=v.innerHTML;preview.querySelectorAll('em,.visual-corner').forEach(x=>x.remove())}
  order.textContent=trText('Order');
  order.href=location.pathname.includes('/services/')?'../#contact':'#contact';
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
 };
 document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('click',e=>{e.preventDefault();open(card)});
  card.querySelector('.arrow')?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();open(card)});
 });
 document.getElementById('modalClose')?.addEventListener('click',close);
 document.getElementById('modalBackdrop')?.addEventListener('click',close);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
