const cityInput = document.getElementById('city');
const searchBtn = document.querySelector('#searchBtn'); // Updated query selector
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const locationInfo = document.querySelector('.location');
const description = document.querySelector('.description');
const footerInfo = document.querySelector('.footer');

const locationNotFound = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.weather-body');

async function checkWeather(city) {
    const apiKey = "ec9a7523860e45cafea6b7d724c4d9d7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const weatherData = await fetch(url).then(response => response.json());

        if (weatherData.cod === '404') {
            if (locationNotFound) {
                locationNotFound.style.display = "flex";
            }
            if (weatherBody) {
                weatherBody.style.display = "none";
            }
            console.log("error");
            return;
        }

        console.log("run");
        if (locationNotFound) {
            locationNotFound.style.display = "none";
        }
        if (weatherBody) {
            weatherBody.style.display = "flex";
        }

        temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
        description.innerHTML = `${weatherData.weather[0].description}`;
        locationInfo.innerHTML = `${city}, ${weatherData.sys.country}`;

        switch (weatherData.weather[0].main) {
            case 'Clouds':
                weatherIcon.src = "icons/sun/27.png";
                break;
            case 'Clear':
                weatherIcon.src = "icons/sun/26.png";
                break;
            case 'Rain':
                weatherIcon.src = "icons/rain/39.png";
                break;
            case 'Mist':
                weatherIcon.src = "icons/moon/10.png";
                break;
            case 'Snow':
                weatherIcon.src = "icons/moon/15.png";
                break;
        }

        console.log(weatherData);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    checkWeather(cityInput.value);
});
