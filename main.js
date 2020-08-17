const api = {
  key: "461922f8c501577043bfdebd0e912a5b",
  base: "https://api.openweathermap.org/data/2.5/",
};
const weatherForm = document.querySelector(".weather__form");
const weatherInput = document.querySelector(".weather__input");
const Kelvin = 273.15

// values data
const weatherCity = document.querySelector('.weather__city');
const weatherDate = document.querySelector('.weather__date');
const weatherCelsius = document.querySelector('.weather__celsius');
const now = new Date();
// date  function
function dateBuilder(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
//fetch function url is parameter
const fetchUrl = (apiurl) => {
  let apiurlVar = apiurl;
  fetch(apiurlVar)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      weatherDetail(data);
    });
}


//form sunbmit
weatherForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = weatherInput.value;
  getWeatherByInput(inputValue);
});

const getWeatherByInput = (cityname) => {
  let apiGeoCity = `${api.base}/weather?q=${cityname}&appid=${api.key}`;
  fetchUrl(apiGeoCity)
};
const weatherDetail = (weather) => {
  console.log(weather);
  weatherCity.innerHTML = `${weather.name},${weather.sys.country}`;
  weatherDate.innerHTML = dateBuilder(now);
  weatherCelsius.innerHTML = `${Math.round(weather.main.temp - Kelvin)}`
}
window.addEventListener('load', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, showError)
  }
  else {
    notification.style.display = "block";
    notification.innerHTML = `<p>Browser dont support Geolocation</p>`
  }
})
getWeatherGeo =(latitude, longitude)=>{
  let apiGeo = `${api.base}/weather?lat=${latitude}&lon=${longitude}&appid=${api.key}`;
  fetchUrl(apiGeo)
}
setPosition = (position) =>{
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
    console.log(Math.round(long))
    console.log(`this are the coordinates this is long:${long}, this is lat:${lat}`);
    getWeatherGeo(long,lat)
}
showError = (error) =>{
    notification.style.display = "block";
        notification.innerHTML =`<p>${error.message}</p>`
}