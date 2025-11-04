const btn = document.querySelector('#btn');
const msg = document.querySelector('#msg');
btn.addEventListener('click', () => {
  const hidden = msg.hasAttribute('hidden');
  if (hidden) msg.removeAttribute('hidden');
  else msg.setAttribute('hidden', '');
});
