import dataBuilder from './dateBuilder';
const weatherCity = document.querySelector('.weather__city');
const weatherDate = document.querySelector('.weather__date');
const weatherCelsius = document.querySelector('.weather__celsius');
const weatherStatus = document.querySelector('.weather__status');
const weatherHiLow = document.querySelector('.weather__hi-low');
const Kelvin = 273.15
const now = new Date();
const weatherDetails = (weather) => {
    weatherCity.innerHTML = `${weather.name},${weather.sys.country}`;
    weatherDate.innerHTML = dataBuilder(now);
    weatherCelsius.innerHTML = `${Math.round(weather.main.temp - Kelvin)}<span>°c</span>`;
    weatherStatus.innerHTML = `${weather.weather[0].description}`;
    weatherHiLow.innerHTML = `${Math.round(weather.main.temp_min - Kelvin)}<span>°c</span> / ${Math.round(weather.main.temp_max - Kelvin)}<span>°c</span>`
}
export default weatherDetails