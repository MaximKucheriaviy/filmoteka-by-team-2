export default createMarcupGallery = data =>
  data.reduce(
    (acc, { poster_path, title, genre_ids, id, release_date = [] }) =>
      acc +
      `<li class="gallery__item">
      <button type="button" data-id="${id}">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" class="gallery__img" loading="lazy">
        </button>
           <p class="gallery__text gallery__text--red">
             <span class="gallery__text--black">${title}</span> </br>
              ${genre_ids} | ${release_date.slice(0, 4)}
             </p> 
        </li>`,
    ''
  );
