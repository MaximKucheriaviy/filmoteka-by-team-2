
export default function meaningForm (){
    const searchForm = document.getElementById('search-form');
     
    searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = e.currentTarget.elements.searchQuery.value;
    console.log(data);
 
    });
}
