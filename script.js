// Show/hide all paper abstracts on the Research page.
const toggle = document.getElementById('summaries-toggle');
if (toggle) toggle.addEventListener('change', () => {
  document.querySelectorAll('details.abstract').forEach(d => {d.open = toggle.checked;});
});
