document.addEventListener('click', (event) => {
  const open = event.target.closest('[data-dialog]');
  if (open) document.getElementById(open.dataset.dialog).showModal();
  const close = event.target.closest('[data-close]');
  if (close) close.closest('dialog').close();
  if (event.target.tagName === 'DIALOG') {
    const rect = event.target.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.target.close();
  }
});
