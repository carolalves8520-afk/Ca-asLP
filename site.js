(function(){
  var hdr=document.getElementById('hdr');
  function s(){hdr.classList.toggle('scrolled',window.scrollY>20)}
  addEventListener('scroll',s,{passive:true});s();
  var btn=document.getElementById('menubtn'),menu=document.getElementById('menu');
  btn.addEventListener('click',function(){
    var o=menu.classList.toggle('open');
    btn.setAttribute('aria-expanded',o);
    btn.innerHTML=o?'&#10005;':'&#9776;';
  });
  menu.addEventListener('click',function(e){
    if(e.target.tagName==='A'){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.innerHTML='&#9776;'}
  });
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},
    {threshold:.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){io.observe(el)});
})();
