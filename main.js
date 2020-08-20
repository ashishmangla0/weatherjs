(()=>{
  const api = {
    key: "461922f8c501577043bfdebd0e912a5b",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const weatherForm = document.querySelector(".weather__form");
  const weatherInput = document.querySelector(".weather__input");
  const notification = document.querySelector('.notification');
  const Kelvin = 273.15
  
  // values data
  const weatherCity = document.querySelector('.weather__city');
  const weatherDate = document.querySelector('.weather__date');
  const weatherCelsius = document.querySelector('.weather__celsius');
  const weatherStatus =  document.querySelector('.weather__status');
  const weatherHiLow = document.querySelector('.weather__hi-low');
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
        console.log(data)
        weatherDetail(data);
      });
  }
  
  
  
  const getWeatherByInput = (cityname) => {
    let apiGeoCity = `${api.base}/weather?q=${cityname}&appid=${api.key}`;
    fetchUrl(apiGeoCity)
  };
  const weatherDetail = (weather) => {
    weatherCity.innerHTML = `${weather.name},${weather.sys.country}`;
    weatherDate.innerHTML = dateBuilder(now);
    weatherCelsius.innerHTML = `${Math.round(weather.main.temp - Kelvin)}<span>°c</span>`;
    weatherStatus.innerHTML = `${weather.weather[0].description}`;
    weatherHiLow.innerHTML =`${Math.round(weather.main.temp_min - Kelvin)}<span>°c</span> / ${Math.round(weather.main.temp_max - Kelvin)}<span>°c</span>`
  }
  window.addEventListener('load', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition, showError)
    }
    else {
      notification.style.display = "block";
      notification.innerHTML = `<p>Browser dont support Geolocation</p>`
    }
  });
  //form sunbmit
  weatherForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputValue = weatherInput.value;
    getWeatherByInput(inputValue);
  });
  getWeatherGeo =(latitude, longitude)=>{
    let apiGeo = `${api.base}/weather?lat=${longitude}&lon=${latitude}&appid=${api.key}`;
    fetchUrl(apiGeo)
  }
  setPosition = (position) =>{
      let long = position.coords.longitude;
      let lat = position.coords.latitude;
      getWeatherGeo(long,lat)
  }
  showError = (error) =>{
      notification.style.display = "block";
      notification.innerHTML =`<p>${error.message}</p>`
  }
})();
