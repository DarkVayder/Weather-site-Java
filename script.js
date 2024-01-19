function getWeather() {
    const apiKey = '40d63d1eab14b4af104671e72155d518'; 
    const city = document.getElementById('city').value;

    if (city.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = '';

    const cityName = data.name;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;

    const weatherInfo = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature} &#8451;</p>
        <p>Humidity: ${humidity} </p>
        <p>Description: ${description}</p>
    `;

    weatherInfoDiv.innerHTML = weatherInfo;
}