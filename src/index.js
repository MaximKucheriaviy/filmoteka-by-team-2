// import { Loading } from 'notiflix/build/notiflix-loading-aio';
import API from './js/api';
import createMarcupGallery from './js/createMarcupGallery';
// import markup from './js/markup';

const refs = {
  cardList: document.querySelector('[data-gallery]'),
};

API.fetchTrendingMovies(1).then(response => {
  console.log(response.data.results);
  refs.cardList.innerHTML = createMarcupGallery(response.data.results);
});

// сначало нужно сделать import { Loading } from 'notiflix/build/notiflix-loading-aio' (смотри наверху);
// и удалить вот этот код выше:

// API.fetchTrendingMovies(1).then(response => {
//   console.log(response.data.results);
//   refs.cardList.innerHTML = createMarcupGallery(response.data.results);
// });

// Потом добавить вот это:
// Начало готового проверенный код вместе с готовым screenloader (из библиотеки notiflix) вместо старого:

// function onFirstLoad() {
//   Loading.pulse();

//   API.fetchTrendingMovies(1)
//     .then(response => {
//       console.log(response.data.results);
//       refs.cardList.innerHTML = createMarcupGallery(response.data.results);
//     })
//     .catch(error => console.log(error))
//     .finally(() => Loading.remove());
// }

// onFirstLoad();

// Конец готового проверенный код вместе с готовым screenloader (из библиотеки notiflix)

// Если делать всё отдельными файлами js (смотри markup.js) тогда в этом файле останется только что - то по типу этого:
// function onFirstLoad(page) {
// const data = markup.fetchTrendings(page)
// markup.drawGallery(data)
// }

// onFirstLoad(page);

// А ЭТО:
// Если всё таки делать наш скринлоадер, но так будет сложнее по идее.
// Тогда в файле API надо раскоментить запросы с callback. А другие закоментить.

// function onFirstLoad() {
//     //тут должен вызываться скринлоадер (при вызове навесить класс "любой класс, например show")
//     // screenLoader();

//     Promise.all([API.fetchTrendingMovies(1), API.fetchGenres]).then(data =>
//     //До этого должно быть сделано:
//         // обрезка даты выпуска фильма
//       // замена айди жанров на имя жанра (map по fetchTrendingMovie) и (filter по fetchGenres)

//       createMarcupGallery(data[0].data.results)
//     ) .catch (error => console.log(error)).finally(() => Loading.remove();( или убираем класс со screenLoader в случае нашего лоадера) );
// }

// Желательно сделать markup отдельным классом чтобы было меньше барахла в index.js
