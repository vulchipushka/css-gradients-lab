const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  themeBtn.textContent = document.body.classList.contains('theme-dark') ? '☀️ Светлая тема' : ' Темная тема';
});