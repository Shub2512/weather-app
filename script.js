const apiKey = "05c51f17504d41a2c264cf80d7610a82";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather? units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    let cel = data.main.temp - 273.15;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(cel) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        WeatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Clear") {
        WeatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        WeatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        WeatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        WeatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


