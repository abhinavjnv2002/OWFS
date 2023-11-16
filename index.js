{/* <script>
    document.addEventListener('DOMContentLoaded', function () {
        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const apiKey = 'ec9a7523860e45cafea6b7d724c4d9d7';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=City,Country&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherIcon = document.querySelector('.weather-icon');
                const temperature = document.querySelector('.temperature');
                const location = document.querySelector('.location');
                const description = document.querySelector('.description');

                weatherIcon.src = `icons/${data.weather[0].icon}.png`;
                temperature.textContent = `${data.main.temp}°C`;
                location.textContent = `${data.name}, ${data.sys.country}`;
                description.textContent = data.weather[0].description;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                const temperature = document.querySelector('.temperature');
                temperature.textContent = 'Error fetching data';
            });
    });
</script> */}
