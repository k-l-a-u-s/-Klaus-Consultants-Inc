const error= document.querySelector('.error');
const search = document.querySelector('#search');
search.addEventListener('click', (e) => {
   const searchbar = document.querySelector("#searchbar").value
   fetchData(searchbar);
})

function fetchData(query) {
   fetch(`https://api.coincap.io/v2/assets/${query}`)
    .then((resp) => resp.json())
    .then((Data) => {
         if (Data.error) {
            console.log(Data.error);
            error.setAttribute('style', 'display: block');
         }else
         {
            error.setAttribute('style', 'display: none');
    const children= document.querySelector('.data').children;
    children[0].innerHTML = Data.data.name;
    children[1].innerHTML = Data.data.explorer;
    children[2].innerHTML = Data.data.changePercent24Hr;
   children[3].innerHTML = Data.data.marketCapUsd;
         }
     
  })}
  
  document.querySelector("._submit_btn").addEventListener("click", (e) => {
   e.preventDefault();
   console.log("Submitting");
 });