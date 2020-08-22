import fetchData from './fetchData';
import api from './config';
const weatherForm = document.querySelector(".weather__form");
const weatherInput = document.querySelector(".weather__input");
const getWeatherByInput = (cityname) => {
    let apiGeoCity = `${api.base}/weather?q=${cityname}&appid=${api.key}`;
    fetchData(apiGeoCity)
};

const submitForm = () => {
    weatherForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let inputValue = weatherInput.value;
        getWeatherByInput(inputValue)
    });
}

export default submitForm