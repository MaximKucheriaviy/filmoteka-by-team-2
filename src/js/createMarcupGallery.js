// export default createMarcupGallery = (data, flag) => {
//   localStorage.setItem('reneredCards', JSON.stringify(data));
//   if (flag) {
//     return data.reduce(
//       (
//         acc,
//         { poster_path, title, genre_ids, id, release_date = [], vote_average }
//       ) =>
//         acc +
//         `<li >
//       <button type="button" data-id="${id}" data-click>
//           <img src="https://image.tmdb.org/t/p/w500/${poster_path}"  alt="${title}"  loading="lazy">
//         </button>
//            <p class>
//              <span class=>${title}</span> </br>
//               ${genre_ids} | ${release_date.slice(
//           0,
//           4
//         )} <span>${vote_average}</span>
//              </p>

//         </li>`,
//       ''
//     );
//   }
//   return data.reduce(
//     (acc, { poster_path, title, genre_ids, id, release_date = [] }) =>
//       acc +
//       `<li >
//       <button type="button" data-id="${id}" data-click>
//           <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}"  loading="lazy">
//         </button>
//            <p>
//              <span >${title}</span> </br>
//               ${genre_ids} | ${release_date.slice(0, 4)}
//              </p>

//         </li>`,
//     ''
//   );
// };

export default createMarcupGallery = (data, flag) => {
  // вносим объект как строку в LocalStorage
  localStorage.setItem('reneredCards', JSON.stringify(data));
  console.log('true', flag);

  return data.map(
    ({
      poster_path,
      title,
      genre_ids,
      id,
      release_date = [],
      vote_average,
    }) => {
      // ссылки на каждый элемент ,если нужно будет ,то все в один объект потом впихну,ну и название тоже изменю,если надо будет
      const liInGallaryEl = document.createElement('li');
      const buttonInGallaryEl = document.createElement('button');
      const imgInButtonEl = document.createElement('img');
      const brInGallarryEl = document.createElement('br');
      const pInGallaryEl = document.createElement('p');
      const spanTextInGallaryEl = document.createElement('span');
      const spanRangeInGallaryEl = document.createElement('span');

      //наполнение контентом карточки ,классы добавлю позже
      imgInButtonEl.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
      imgInButtonEl.alt = `${title}`;
      pInGallaryEl.textContent = `${genre_ids} | ${release_date.slice(0, 4)}`;
      spanTextInGallaryEl.textContent = `${title}`;
      buttonInGallaryEl.dataset.id = `${id}`;
      buttonInGallaryEl.dataset.click = '';
      spanRangeInGallaryEl.textContent = `${vote_average.toFixed(1)}`;

      //вставка элеметов в DOM нужном порядке
      buttonInGallaryEl.append(imgInButtonEl);
      pInGallaryEl.prepend(spanTextInGallaryEl);
      spanTextInGallaryEl.append(brInGallarryEl);
      if (flag) {
        //ранг добавляется когда есть True ,но он сливается с другим тегом ,надо класс добавить что бы разделить
        pInGallaryEl.append(spanRangeInGallaryEl);
      }
      // сборка все в 'виноградную гроздь'
      liInGallaryEl.append(buttonInGallaryEl, pInGallaryEl);
      return liInGallaryEl;
    }
  );
};

//  использовать что бы вставть в галерею , флаг true нужен для того что бы ранг показывть,лучше вынести его в одельную переменную
// refs.cardList.append(...createMarcupGallery(response.data.results, true));
