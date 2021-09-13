const API_KEY ="3a05f2bfdd4d7b77d2351f829e8a0e99";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const nameSpan = document.querySelector("#weatherContainer span:first-child");
        const weatherSpan = document.querySelector("#weatherContainer span:last-child");
        nameSpan.innerHTML = data.name;
        weatherSpan.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
};

function onGeoError(){
    alert("no weather");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
