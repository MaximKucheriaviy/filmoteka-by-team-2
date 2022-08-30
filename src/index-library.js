import generateObjectsFormLS from './js/generateObjectsFormLS';

const wached = JSON.parse(localStorage.getItem('wachedFilms'));
const queue = JSON.parse(localStorage.getItem('queueFilms'));

console.log(wached);
console.log(queue);
console.log(generateObjectsFormLS());
