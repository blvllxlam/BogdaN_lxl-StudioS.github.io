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
  title.textContent=trText(card.dataset.title||card.querySelector('h3')?.textContent||'Service');
  type.textContent=trText(card.dataset.type||card.querySelector('.project-meta')?.textContent||'SERVICE');
  text.textContent=trText(card.dataset.text||card.querySelector('p')?.textContent||'');
  price.textContent=card.dataset.price||'PRICE — PRICE';
  preview.innerHTML='<span>SITE PREVIEW</span>';
  if(v){
   const clone=v.cloneNode(true);
   clone.querySelectorAll('.visual-corner,.service-visual>span').forEach(x=>x.remove());
   clone.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;';
   preview.appendChild(clone);
  }
  order.innerHTML=trText('Order')+' <span>↗</span>';
  order.href=location.pathname.includes('/services/')?'../#contact':'#contact';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
 };
 document.addEventListener('click',function(e){
  const card=e.target.closest('.project-card');
  if(card){
   e.preventDefault();
   e.stopImmediatePropagation();
   open(card);
   return;
  }
 },true);
 document.getElementById('modalClose')?.addEventListener('click',close);
 document.getElementById('modalBackdrop')?.addEventListener('click',close);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
