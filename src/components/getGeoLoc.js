const notification = document.querySelector('.notification');
import setPosition from './setPosition';
import setError from './setError';
const getGeoLoc = () => {
  window.addEventListener('load', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition, setError)
    }
    else {
      notification.style.display = "block";
      notification.innerHTML = `<p>Browser dont support Geolocation</p>`
    }
  });
}
export default getGeoLoc