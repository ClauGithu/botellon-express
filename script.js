const menu = document.getElementById('whatsappMenu');
  const toggleBtn = document.getElementById('whatsappToggle');
  const heroBtn = document.getElementById('heroPedidoBtn');

  function positionMenuNearFloat() {
    menu.classList.add('flotante');
    menu.style.bottom = '95px';
    menu.style.right = '25px';
    menu.style.top = 'auto';
    menu.style.left = 'auto';
  }
  function positionMenuNearHero(btn) {
    menu.classList.remove('flotante');
    const rect = btn.getBoundingClientRect();
    menu.style.top = (rect.bottom + window.scrollY + 10) + 'px';
    menu.style.left = (rect.left + window.scrollX) + 'px';
    menu.style.bottom = 'auto';
    menu.style.right = 'auto';
  }
  toggleBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    positionMenuNearFloat();
    menu.classList.toggle('open');
  });
  heroBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    positionMenuNearHero(heroBtn);
    menu.classList.toggle('open');
  });
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target) && !heroBtn.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

  // Desplazamiento a secciones del menú sin recargar la página (funciona en cualquier hosting)
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const destino = document.getElementById(link.getAttribute('href').slice(1));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', link.getAttribute('href'));
      }
    });
  });