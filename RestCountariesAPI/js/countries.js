
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then (response => response.json())
    .then (data => displayCountries(data));
}

const displayCountries = (countries) => {
    const countriesHTML = countries.map(country => getCountryHTML(country));

    const container = document.getElementById('countries');

    container.innerHTML = countriesHTML.join(' ');
}


   //option 1
// const getCountryHTML = country => {

 
//     
//     const {name, flags} = country;
//     return `
    
//         <div class="single-country bg-cyan-500 m-6 p-6 rounded border-2 border-indigo-200 border-x-indigo-500">
//                 <h2 class="text-3xl pb-3 text-white">${name.common}</h2>
//                 <img src="${flags.png}">
//         </div>
    
//     `;
// }



// //option two Original
// const getCountryHTML = country => {    
  
//     return `
    
//         <div class="single-country bg-cyan-500 m-6 p-6 rounded border-2 border-indigo-200 border-x-indigo-500">
//                 <h2 class="text-3xl pb-3 text-white">${country.name.common}</h2>
//                 <img src="${country.flags.png}">
//         </div>
    
//     `;
// }




//option three
// destructuring  
const getCountryHTML = ({name, flags}) => {
       
    return `
    
        <div class="single-country bg-cyan-500 m-6 p-6 rounded border-2 border-indigo-200 border-x-indigo-500">
                <h2 class="text-3xl pb-3 text-white">${name.common}</h2>
                <img src="${flags.png}">
        </div>
    
    `;
}



loadCountries();