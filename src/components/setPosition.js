import getWeatherGeo from './getWeatherGeo';
const setPosition = (position) => {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
    getWeatherGeo(long, lat)

}


export default setPosition