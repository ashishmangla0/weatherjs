import fetchData from './fetchData'
import api from './config'
const getWeatherGeo = (latitude, longitude) => {
    console.log(api.key);
    let apiGeo = `${api.base}/weather?lat=${longitude}&lon=${latitude}&appid=${api.key}`;
    fetchData(apiGeo)
}
export default getWeatherGeo