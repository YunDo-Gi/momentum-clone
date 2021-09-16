const clock = document.querySelector("#clock");
const greet = document.querySelector("#greeting");
let user = localStorage.getItem(USERNAME_KEY);

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    if(user === null) {user = localStorage.getItem(USERNAME_KEY);}
    if(hours >= 4 && hours < 12){
        greet.innerText = `Good morning, ${user}`
    } else if(hours >= 12 && hours < 17) {
        greet.innerText = `Good afternoon, ${user}`
    } else if(hours >= 17 && hours <=23) {
        greet.innerText = `Good evening, ${user}`
    } else {
        greet.innerText = `It's midnight, ${user}`
    }
}

getClock();
setInterval(getClock, 1000);



