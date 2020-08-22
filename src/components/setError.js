const notification = document.querySelector('.notification');
const setError = (error, showerror) => {
    notification.style.display = "block";
    notification.innerHTML = `<p>${error.message}</p>`
}
export default setError