const searchInput = document.getElementById('search-input');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const location = searchInput.value;
    // Use weather API to fetch data based on the location input
    // Update weatherDescription and temperature with fetched data
    // Example:
    weatherDescription.textContent = "Sunny";
    temperature.textContent = "25°C";
});
