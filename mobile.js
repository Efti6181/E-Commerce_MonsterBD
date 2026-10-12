document.addEventListener('DOMContentLoaded',function(){
  var menu=document.getElementById('navLinks'),toggle=document.getElementById('navToggle');
  function closeMenu(){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});
  document.addEventListener('click',function(e){if(!menu.contains(e.target)&&!toggle.contains(e.target))closeMenu();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('open')){closeMenu();toggle.focus();}});
  if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.08});
    document.querySelectorAll('.brand-experience,.site-footer,.section-head').forEach(function(el){el.classList.add('reveal-ready');observer.observe(el);});
  }
});
