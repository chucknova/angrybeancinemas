const images = ["https://media.giphy.com/media/u7uiWWbRFC2TC/giphy.gif", "https://media.giphy.com/media/10nQVrNmo9klUI/giphy.gif", "https://media.giphy.com/media/1MTLxzwvOnvmE/giphy.gif", "https://media.giphy.com/media/kVRBvsiOyBM8o/giphy.gif", "https://media.giphy.com/media/ftGTY1fO9ARUI/giphy.gif","https://media.giphy.com/media/d2YWTOsVtuHgOHhC/giphy.gif","https://media.giphy.com/media/fFwCFxTTb8DoIsO1pu/giphy.gif","https://media.giphy.com/media/1swyiBn1dH31LgBMZg/giphy.gif","https://media.giphy.com/media/Simo212Q7g9Vknx9uN/giphy.gif","https://media.giphy.com/media/5cZbRBLhW4tc4/giphy.gif","https://media.giphy.com/media/5vYs7UnswNp3auv8bo/giphy.gif"]; // Array of image sources
let index = 0; // Index of the current image
const img = document.querySelector(".gif-container img");

function changeImage() {
  img.src = images[index];
  index = (index + 1) % images.length;
}

setInterval(changeImage, 2500);