export default function meaningForm (){
    const searchForm = document.getElementById('search-form');
     
    searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(search-form); 
    const name = formData.get('name'); 
    });
}