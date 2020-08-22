(()=>{
  const api = {
    key: "461922f8c501577043bfdebd0e912a5b",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const notification = document.querySelector('.notification');
  const Kelvin = 273.15
  
  // values data
  const weatherCity = document.querySelector('.weather__city');
  const weatherDate = document.querySelector('.weather__date');
  const weatherCelsius = document.querySelector('.weather__celsius');
  const weatherStatus =  document.querySelector('.weather__status');
  const weatherHiLow = document.querySelector('.weather__hi-low');
  const now = new Date();
  

  
  
  
  const getWeatherByInput = (cityname) => {
    let apiGeoCity = `${api.base}/weather?q=${cityname}&appid=${api.key}`;
    fetchUrl(apiGeoCity)
  };

  
  //form sunbmit
  weatherForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputValue = weatherInput.value;
    getWeatherByInput(inputValue);
  });


})();
