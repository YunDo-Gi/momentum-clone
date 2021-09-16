const images =["cat(1).jpg","cat(2).jpg","cat(3).jpg","cat(4).jpg","cat(5).jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// const bgImage = `img/${chosenImage}`;
// const url = url(`${bgImage}`);
document.body.style.backgroundImage = "url('img/cat(2).jpg')";

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// bgImage.className = "background-image";
// document.body.appendChild(bgImage);
