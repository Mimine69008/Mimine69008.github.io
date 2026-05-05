// ── Custom cursor ──
const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');
 
document.addEventListener('mousemove', e => {
  if (cursor) { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; }
  setTimeout(() => {
    if (cursorTrail) { cursorTrail.style.left = e.clientX + 'px'; cursorTrail.style.top = e.clientY + 'px'; }
  }, 100);
});
 
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor?.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor?.classList.remove('hover'));
});
 
// ── Scroll reveal ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
 
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
 
// ── Skill bars animation ──
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.3 });
 
document.querySelectorAll('.skills-list').forEach(el => skillObserver.observe(el));
 
// ── Navbar scroll ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});
 
// ── Active nav link ──
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
 