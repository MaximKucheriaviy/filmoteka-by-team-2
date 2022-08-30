
export default function meaningForm (){
    const refs = {
        searchForm :document.querySelector('.search-form')
    }
     
    refs.searchForm.addEventListener('submit', onSearch);
    let searchFilm = '';
    function onSearch(e) {
        e.preventDefault();
        refs.searchForm.reset(); 
        searchFilm = e.currentTarget.elements.searchQuery.value.trim();
        if (searchFilm !== 0) {
            return searchFilm;}
                  
   }
}
