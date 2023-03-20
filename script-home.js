let myCart = JSON.parse(localStorage.getItem('cartData')) || [];
let refCart = JSON.parse(localStorage.getItem('refcartData')) || [];
console.log(myCart);
console.log(refCart);
let cartNo = document.getElementById("cartno")
let numRef = 0;
cartNo.innerHTML = numRef + myCart.concat(refCart).length;

const toggleButton = document.getElementById("toggle-mode");
let body = document.querySelector("body");
let weekmovies = document.querySelector("week-movies")

toggleButton.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
  weekmovies.classList.toggle("weekmovie-dark")
});
