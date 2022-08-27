export default createMarcupGallery = (data, flag) => {
  localStorage.setItem('reneredCards', JSON.stringify(data));
  if (flag) {
    return data.reduce(
      (
        acc,
        { poster_path, title, genre_ids, id, release_date = [], vote_average }
      ) =>
        acc +
        `<li >
      <button type="button" data-id="${id}" data-click>
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}"  alt="${title}"  loading="lazy">
        </button>
           <p class>
             <span class=>${title}</span> </br>
              ${genre_ids} | ${release_date.slice(
          0,
          4
        )} <span>${vote_average}</span>
             </p> 
             
        </li>`,
      ''
    );
  }
  return data.reduce(
    (acc, { poster_path, title, genre_ids, id, release_date = [] }) =>
      acc +
      `<li >
      <button type="button" data-id="${id}" data-click>
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}"  loading="lazy">
        </button>
           <p class>
             <span class=>${title}</span> </br>
              ${genre_ids} | ${release_date.slice(0, 4)}
             </p> 
             
        </li>`,
    ''
  );
};
