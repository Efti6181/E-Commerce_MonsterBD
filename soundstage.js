document.addEventListener('DOMContentLoaded',function(){
  var stage=document.getElementById('soundStage');if(!stage)return;
  var hero=document.getElementById('soundHero');
  var pulse=document.getElementById('pulseButton');
  var motion=document.getElementById('motionToggle');
  var reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  pulse.addEventListener('click',function(){var active=hero.classList.toggle('bass-boost');pulse.setAttribute('aria-pressed',String(active));pulse.textContent=active?'◉ Bass in motion':'◉ Feel the bass';});
  motion.addEventListener('click',function(){var paused=document.documentElement.classList.toggle('motion-paused');motion.setAttribute('aria-pressed',String(paused));motion.textContent=paused?'Play animation ▷':'Pause animation Ⅱ';});
  if(reduced.matches){motion.textContent='Reduced motion enabled';motion.disabled=true;pulse.disabled=true;pulse.textContent='Reduced motion enabled';}
  stage.addEventListener('pointermove',function(e){if(reduced.matches||document.documentElement.classList.contains('motion-paused'))return;var r=stage.getBoundingClientRect();stage.style.setProperty('--scene-y',((e.clientX-r.left)/r.width-.5)*26+'deg');stage.style.setProperty('--scene-x',((e.clientY-r.top)/r.height-.5)*-16+'deg');});
  stage.addEventListener('pointerleave',function(){stage.style.setProperty('--scene-y','0deg');stage.style.setProperty('--scene-x','0deg');});
  var featured=document.getElementById('heroCard');featured.addEventListener('click',function(e){e.preventDefault();});
  document.querySelector('.stage-assurance b').textContent=PRODUCTS.length;
});
