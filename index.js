
}const error= document.querySelector('.error');
const search = document.querySelector('#search');
search.addEventListener('click', (e) => {
   const searchbar = document.querySelector("#searchbar").value
   fetchData(searchbar);
})

function fetchData(query) {
   fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?/${query}`)
    .then((resp) => resp.json())
    .then((Data) => {
         if (Data.error) {
            console.log(Data.error);
            error.setAttribute('style', 'display: block');
         }else
         {
            error.setAttribute('style', 'display: none');
    const children= document.querySelector('.data').children;
    children[0].innerHTML = Data.data.Drink;
         }
     
  })}
  
  document.querySelector("._submit_btn").addEventListener("click", (e) => {
   e.preventDefault();
   console.log("Submitting");
 });