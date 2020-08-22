import weatherDetails from './weatherDetail';
const fetchData = (apiurl) => {
    let apiurlVar = apiurl;
    fetch(apiurlVar)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            weatherDetails(data);
        });
}
export default fetchData