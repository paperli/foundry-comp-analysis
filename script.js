// Mobile nav toggle
const topbar = document.querySelector('.topbar');
const toggle = document.querySelector('.navtoggle');
toggle?.addEventListener('click', () => {
  const open = topbar.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
// close mobile nav after click
document.querySelectorAll('.nav a').forEach((a) =>
  a.addEventListener('click', () => topbar.classList.remove('is-open'))
);

// Active section highlighting
const links = [...document.querySelectorAll('.nav a')];
const map = new Map();
links.forEach((l) => {
  const id = l.getAttribute('href').slice(1);
  const sec = document.getElementById(id);
  if (sec) map.set(sec, l);
});
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.remove('is-active'));
        map.get(e.target)?.classList.add('is-active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
);
map.forEach((_, sec) => io.observe(sec));

// Lightbox
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('.lightbox__img');
const closeLb = () => { lb.hidden = true; lbImg.src = ''; document.body.style.overflow = ''; };
document.querySelectorAll('.fig img').forEach((img) => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});
lb.addEventListener('click', closeLb);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lb.hidden) closeLb(); });

// Year in footer not needed; static. Done.
