document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
  const field = document.getElementById('paper-search');
  if (!field) return;
  const papers = [...document.querySelectorAll('.paper')];
  const groups = [...document.querySelectorAll('.paper-section')];
  const count = document.getElementById('search-count');
  function update() {
    const term = field.value.trim().toLocaleLowerCase();
    let visible = 0;
    for (const p of papers) {
      const matches = !term || p.dataset.search.includes(term);
      p.hidden = !matches;
      if (matches) visible++;
    }
    groups.forEach(g => g.hidden = ![...g.querySelectorAll('.paper')].some(p => !p.hidden));
    if (count) count.textContent = term ? `${visible} result${visible === 1 ? '' : 's'}` : '';
  }
  field.addEventListener('input', update);
});
