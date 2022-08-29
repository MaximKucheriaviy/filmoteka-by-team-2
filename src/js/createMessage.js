// выводит сообщение об ошибке под ИНПУТОМ.

export default function createMessage(fetchResult) {
  const messageEl = document.querySelector('.message');
  if (fetchResult !== true) {
    refs.messageEl.classList.remove('ishidden');
  } else {
    return;
  }
}
