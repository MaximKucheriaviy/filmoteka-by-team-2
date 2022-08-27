export default createMarcupGallery = (data, flag) => {
  localStorage.setItem('reneredCards', JSON.stringify(data));
  if (flag) {
    return data.reduce(
      (
        acc,
        { poster_path, title, genre_ids, id, release_date = [], vote_average }
      ) =>
        acc +
        `<li class="gallery__item">
      <button type="button" data-id="${id}" data-click class ="gallery__button">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}"  alt="${title}" class ="gallery__img"  loading="lazy">
        </button>
           <p class =" gallery__text">
             <span class="gallery__text-title">${title}</span> </br>
              ${genre_ids} | ${release_date.slice(0, 4)}
              <span class = "gallery__text-range">${vote_average}</span>
             </p>
        </li>`,
      ''
    );
  }
  return data.reduce(
    (acc, { poster_path, title, genre_ids, id, release_date = [] }) =>
      acc +
      `<li class="gallery__item">
      <button type="button" data-id="${id}" data-click class ="gallery__button">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}"  alt="${title}" class ="gallery__img"  loading ="lazy">
        </button>
           <p class =" gallery__text">
             <span class="gallery__text-title">${title}</span> </br>
              ${genre_ids} | ${release_date.slice(0, 4)}
             </p>
        </li>`,
    ''
  );
};

// export default createMarcupGallery = (data, flag) => {
//   // вносим объект как строку в LocalStorage
//   localStorage.setItem('reneredCards', JSON.stringify(data));
//   console.log(flag);

//   return data.map(
//     ({
//       poster_path,
//       title,
//       genre_ids,
//       id,
//       release_date = [],
//       vote_average,
//     }) => {
//       // ссылки на каждый элемент ,если нужно будет ,то все в один объект потом впихну,ну и название тоже изменю,если надо будет
//       const liInGallaryEl = document.createElement('li');
//       const buttonInGallaryEl = document.createElement('button');
//       const imgInButtonEl = document.createElement('img');
//       const brInGallarryEl = document.createElement('br');
//       const pInGallaryEl = document.createElement('p');
//       const spanTextInGallaryEl = document.createElement('span');

//       //наполнение контентом карточки ,классы добавлю позже
//       imgInButtonEl.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
//       imgInButtonEl.alt = `${title}`;
//       pInGallaryEl.textContent = `${genre_ids} | ${release_date.slice(0, 4)}`;
//       spanTextInGallaryEl.textContent = `${title}`;
//       imgInButtonEl.setAttribute('loading', 'lazy');
//       buttonInGallaryEl.dataset.id = `${id}`;
//       buttonInGallaryEl.dataset.click = '';

//       // добавляем классы
//       liInGallaryEl.classList.add('gallery__item');
//       buttonInGallaryEl.classList.add('gallery__button');
//       imgInButtonEl.classList.add('gallery__img');
//       pInGallaryEl.classList.add('gallery__text');
//       spanTextInGallaryEl.classList.add('gallery__text-title');

//       //вставка элеметов в DOM нужном порядке
//       buttonInGallaryEl.append(imgInButtonEl);
//       pInGallaryEl.prepend(spanTextInGallaryEl);
//       spanTextInGallaryEl.append(brInGallarryEl);
//       if (flag) {
//         //ранг добавляется когда есть флаг ,но он сливается с другим тегом ,надо класс добавить что бы разделить
//         const spanRangeInGallaryEl = document.createElement('span');
//         spanRangeInGallaryEl.textContent = `${vote_average.toFixed(1)}`;
//         spanRangeInGallaryEl.classList.add('gallery__text-range');
//         pInGallaryEl.append(spanRangeInGallaryEl);
//       }
//       // сборка все в 'виноградную гроздь'
//       liInGallaryEl.append(buttonInGallaryEl, pInGallaryEl);
//       console.log(liInGallaryEl);
//       return liInGallaryEl;
//     }
//   );
// };

//  использовать что бы вставть в галерею , флаг true нужен для того что бы ранг показывть,лучше вынести его в одельную переменную
// refs.cardList.append(...createMarcupGallery(response.data.results, true));
