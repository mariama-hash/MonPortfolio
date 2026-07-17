// Typing effect
  const phrases = ["Développeuse Web", "Développeuse Mobile", "Étudiante en Génie Logiciel", "Passionnée par la modélisation UML"];
  const typedEl = document.getElementById('typed');
  let pIndex = 0, cIndex = 0, deleting = false;

  function type(){
    const current = phrases[pIndex];
    if(!deleting){
      cIndex++;
      typedEl.textContent = current.slice(0, cIndex);
      if(cIndex === current.length){ deleting = true; setTimeout(type, 1400); return; }
    } else {
      cIndex--;
      typedEl.textContent = current.slice(0, cIndex);
      if(cIndex === 0){ deleting = false; pIndex = (pIndex+1) % phrases.length; }
    }
    setTimeout(type, deleting ? 40 : 70);
  }
  type();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el=>io.observe(el));

  // Animated counters (triggered once when visible)
  const counters = document.querySelectorAll('.counter-num');
  const counterIO = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = Math.max(1, Math.round(target / 40));
        const tick = ()=>{
          current += step;
          if(current >= target){ el.textContent = target; return; }
          el.textContent = current;
          requestAnimationFrame(tick);
        };
        tick();
        counterIO.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el=>counterIO.observe(el));

  // Design gallery filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const designItems = document.querySelectorAll('.design-item');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      designItems.forEach(item=>{
        const match = filter === 'all' || item.dataset.cat === filter;
        item.classList.toggle('hidden', !match);
      });
    });
  });
