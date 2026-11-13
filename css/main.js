
const $=s=>document.querySelector(s);
try{localStorage.removeItem('folio-felipa-v2')}catch(e){}
document.querySelectorAll('.mt').forEach(t=>{const g=t.querySelectorAll('.mg');if(g.length>1)g[1].innerHTML=g[0].innerHTML});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.card,.svc>div,.xp,.st,.ph').forEach(e=>{if(!e.classList.contains('in')){e.classList.add('rv');io.observe(e)}});
document.querySelectorAll('header nav a').forEach(a=>{const t=a.textContent;a.setAttribute('aria-label',t);a.innerHTML='<span class="rl">'+[...t].map((c,i)=>'<span style="--i:'+i+'" aria-hidden="true"><b>'+c+'</b><b>'+c+'</b></span>').join('')+'</span>'});
document.addEventListener('submit',async ev=>{if(ev.target.id!=='cf')return;ev.preventDefault();const cf=ev.target,st=$('#st'),b=cf.querySelector('button');b.disabled=true;st.textContent='Enviando...';try{const r=await fetch('https://formsubmit.co/ajax/felipapereira96@gmail.com',{method:'POST',headers:{Accept:'application/json'},body:new FormData(cf)});if(!r.ok)throw 0;cf.reset();st.textContent='¡Gracias! Recibí tu mensaje y te respondo pronto.'}catch(e){st.innerHTML='No se pudo enviar. Escribime a <a href="mailto:felipapereira96@gmail.com">felipapereira96@gmail.com</a> o por LinkedIn.'}b.disabled=false});
