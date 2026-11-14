/* The title plate on both maps: which place (a menu of the overview and the eight states) and which map (water or power).
   Shared by the water map (index.html, body data-topic="water") and the electricity map (power/index.html, data-topic="power").
   Switching map keeps the same view: both maps of a place share one base map, so the camera is passed along as #v=x,y,zoom. */
(() => {
  const topic = document.body.dataset.topic === 'power' ? 'power' : 'water';
  const PLACES = [['west', 'The West'], ['az', 'Arizona'], ['ca', 'California'], ['co', 'Colorado'], ['id', 'Idaho'], ['mt', 'Montana'], ['nv', 'Nevada'], ['nm', 'New Mexico'], ['ut', 'Utah']];
  let id = (new URLSearchParams(location.search).get('s') || 'west').toLowerCase();
  if (!PLACES.some(p => p[0] === id)) id = 'west';
  const name = PLACES.find(p => p[0] === id)[1];
  const other = (topic === 'water' ? 'power/' : '../') + '?s=' + id;
  const title = document.querySelector('#hud .title');

  const menu = document.createElement('details');
  menu.className = 'place';
  menu.innerHTML = `<summary aria-label="${name}. Choose another place">${name}</summary>`
    + `<nav class="plate" aria-label="Places">${PLACES.map(([k, n]) => k === id ? `<a aria-current="page">${n}</a>` : `<a href="?s=${k}">${n}</a>`).join('')}</nav>`;

  const sw = document.createElement('div');
  sw.className = 'topic'; sw.setAttribute('role', 'group'); sw.setAttribute('aria-label', 'Map');
  const tab = (t, label) => t === topic ? `<a class="${t} on" aria-current="page">${label}</a>` : `<a class="${t}" href="${other}">${label}</a>`;
  sw.innerHTML = tab('water', 'Water') + tab('power', 'Power');
  title.append(menu, sw);

  sw.querySelector('a[href]').addEventListener('click', e => {
    const c = window.AZMAP && window.AZMAP.cam;
    if (!c || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    location.href = other + '#v=' + Math.round(c.x) + ',' + Math.round(c.y) + ',' + c.z.toFixed(4);
  });
  document.addEventListener('click', e => { if (menu.open && !menu.contains(e.target)) menu.open = false; });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); } });
})();
