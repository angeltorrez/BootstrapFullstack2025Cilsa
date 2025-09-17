const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
  document.documentElement.setAttribute(
    'data-bs-theme',
    themeSwitch.checked ? 'dark' : 'light'
  );
});
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
