
export default function meaningForm (){
    const refs = {
        searchForm :document.querySelector('.search-form')
    }
     
    refs.searchForm.addEventListener('submit', onSearch);
    
    function onSearch(e) {
        e.preventDefault();
        const data = e.currentTarget.elements.searchQuery.value;
        console.log(data);    
    };
}
