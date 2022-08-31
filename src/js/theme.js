// Меняет тему

export default function onTheme() {
  bodyEl = document.querySelector('body');
  btnThemeEl = document.querySelector('.btn-theme');

  btnThemeEl.addEventListener('click', switchTheme);
  function switchTheme(eve) {
    if (bodyEl.classList !== '.dark-theme') {
      bodyEl.classList.add('.dark-theme');
    } else {
      bodyEl.classList.remove('.dark-theme');
    }
  }
}
