import findJanres from './findJanreWithId';
const createMarcupGallery = (data, flag) => {
  localStorage.setItem('reneredCards', JSON.stringify(data));
  if (flag) {
    return data.reduce(
      (
        acc,
        {
          poster_path,
          title,
          genre_ids,
          id,
          release_date,
          vote_average,
          name,
          first_air_date,
        }
      ) =>
        acc +
        `<li class="gallery__item">
      <button type="button" data-id="${id}" data-click class ="gallery__button">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}"  alt="${
          title || name
        }" class ="gallery__img"  loading="lazy">
           <h3 class =" gallery__title">${title || name}</h3>
             <p class="gallery__text">${renderGenres(genre_ids)} | ${(
          release_date ||
          first_air_date ||
          '2010'
        ).slice(0, 4)}
        <span class = "gallery__text-range">${vote_average}</span> </p>
             </button>
        </li>`,
      ''
    );
  }
  return data.reduce(
    (
      acc,
      { poster_path, title, genre_ids, id, release_date, name, first_air_date }
    ) =>
      acc +
      `  <li class="gallery__item">
      <button type="button" data-id="${id}" data-click class ="gallery__button">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}"  alt="${
        title || name
      }" class ="gallery__img"  loading="lazy">
           <h3 class ="gallery__title">${title || name}</h3>
             <p class="gallery__text">${renderGenres(genre_ids)} | ${(
        release_date ||
        first_air_date ||
        '2010'
      ).slice(0, 4)}
      </p>
             </button>
        </li>`,
    ''
  );
};
const createMarcupGalleryAlt = (data, flag) => {
  // вносим объект как строку в LocalStorage
  localStorage.setItem('reneredCards', JSON.stringify(data));

  return data.map(
    ({
      base_url_post = 'https://image.tmdb.org/t/p/w500/',
      poster_path,
      title,
      genre_ids,
      id,
      name,
      release_date,
      first_air_date,
      vote_average,
      known_for,
    }) => {
      // ссылки на каждый элемент ,если нужно будет ,то все в один объект потом впихну,ну и название тоже изменю,если надо будет
      const liInGallaryEl = document.createElement('li');
      const buttonInGallaryEl = document.createElement('button');
      const imgInButtonEl = document.createElement('img');
      const h3InGallaryEl = document.createElement('h3');
      const pInGallaryEl = document.createElement('p');

      //наполнение контентом карточки ,
      imgInButtonEl.src = `${CaptchaPosterPath(base_url_post, poster_path)}`;
      imgInButtonEl.alt = `${title || name}`;
      pInGallaryEl.textContent = `${renderGenres(genre_ids)} | ${(
        release_date ||
        first_air_date ||
        '2010'
      ).slice(0, 4)}`;
      h3InGallaryEl.textContent = `${title || name}`;
      imgInButtonEl.setAttribute('loading', 'lazy');
      buttonInGallaryEl.dataset.id = `${id}`;
      buttonInGallaryEl.dataset.click = '';

      // добавляем классы
      liInGallaryEl.classList.add('gallery__item');
      buttonInGallaryEl.classList.add('gallery__button');
      imgInButtonEl.classList.add('gallery__img');
      h3InGallaryEl.classList.add('gallery__title');
      pInGallaryEl.classList.add('gallery__text');

      //вставка элеметов в DOM нужном порядке
      buttonInGallaryEl.append(imgInButtonEl);
      buttonInGallaryEl.append(h3InGallaryEl);
      buttonInGallaryEl.append(pInGallaryEl);

      if (flag) {
        //ранг добавляется когда есть флаг ,но он сливается с другим тегом ,надо класс добавить что бы разделить
        const spanRangeInGallaryEl = document.createElement('span');
        spanRangeInGallaryEl.textContent = `${vote_average.toFixed(1)}`;
        spanRangeInGallaryEl.classList.add('gallery__text-range');
        pInGallaryEl.append(spanRangeInGallaryEl);
      }
      // сборка все в 'виноградную гроздь'
      liInGallaryEl.append(buttonInGallaryEl);

      return liInGallaryEl;
    }
  );
};

function renderGenres(array = []) {
  if (!array.length) {
    return 'Other';
  }

  const janresArr = [];

  for (let i = 0; i <= array.length; i += 1) {
    if (i === 2) {
      janresArr[i] = 'Other';
      break;
    }
    janresArr.push(findJanres(array[i]));
  }

  return janresArr;
}

function CaptchaPosterPath(base_url, url_patch) {
  if (!url_patch) {
    return 'https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png';
  }
  return `${base_url + url_patch}`;
}

export { createMarcupGalleryAlt, createMarcupGallery };

//  использовать что бы вставть в галерею , флаг true нужен для того что бы ранг показывть,лучше вынести его в одельную переменную
// refs.cardList.append(...createMarcupGallery(response.data.results, true));
