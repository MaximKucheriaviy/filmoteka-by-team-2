
export default function meaningForm (){
    const searchForm = document.querySelector('.search-form');
     
    searchForm.addEventListener('submit', onSearch);

    function onSearch(e) {
        e.preventDefault();
        const data = e.currentTarget.elements.searchQuery.value;
        console.log(data); 
    };
}
