const screen = document.querySelector('.screen')
window.addEventListener('load', onLoad);

export default function onLoad() {
    setTimeout(() => {
        screen.remove();
    }, 400);
} 