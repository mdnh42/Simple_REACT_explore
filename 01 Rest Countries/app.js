const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    console.log(allCountriesHTML[0]);

    const container = document.getElementById('countries'); 
    container.innerHTML = allCountriesHTML.join(" "); 
}
/*
const getCountryHTML = country =>{
    
    // Template String 
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div> 
    
    `
}
*/
// Parameter Destructing 
const getCountryHTML = ({name, flags, area, region}) =>{
    // Destructuring Option 1 
    // const {name, flags} = country; 
    
    return `
        <div class="country">
            <h2>Country Name: ${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Region: ${region}</p>
            <img src="${flags.png}">
        </div> 
    
    `
}

loadCountries();