const screen = document.querySelector('.screen')
window.addEventListener('load', onLoad);

function onLoad() {
    setTimeout(() => {
        screen.remove();
    }, 400);
}