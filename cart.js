let movieCartList = document.getElementById("movieCartList");
let foodCartList = document.getElementById("foodCartList");
let ticketArray = JSON.parse(localStorage.getItem('ticketData')) || [];

// function to update local storage with the current cart state
function updateCart() {
  localStorage.setItem("cartData", JSON.stringify(myCart));
  localStorage.setItem("refcartData", JSON.stringify(refCart));
}


function calculateTotal() {
  let totalPrice = 0;
  for (let i = 0; i < refCart.length; i++) {
    totalPrice += refCart[i].refreshmentPrice * refCart[i].refreshmentQuantity;
  }

  let totalMoviePrice = 0;
  for (let i = 0; i < myCart.length; i++) {
    let movie = myCart[i];
    let movieTotal = movie.MoviePrice * movie.MovieQuantity;
    totalMoviePrice += movieTotal;
  }

  let grandTotal = totalPrice + totalMoviePrice;

  let totalPriceDisplay = document.getElementById("totalprice-container")
  totalPriceDisplay.innerHTML = `<h3 class = "ticketpricetext">Total Price: NGN ${grandTotal}</h3>`;
}

// function to calculate the total price of all items in the cart
function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < refCart.length; i++) {
    totalPrice += refCart[i].refreshmentPrice * refCart[i].refreshmentQuantity;
  }
}
// render the initial cart items from the cart arrays
for (let i = 0; i < refCart.length; i++) {
  let food = refCart[i];
  console.log(food);
  foodCartList.innerHTML += `
  <div class = "cart-list-flex">
  <img class = "food-image" src="${food.refreshmentImage}" alt="${food.refreshmentTitle}">
  <div class = "maincart-info">
  <h2 class = "refreshmenttitle">${food.refreshmentTitle}</h2>
  <h3 class = "refreshmentsubtitle">${food.refreshmentSubtitle}</h3>
  <h4 class = "refreshmentprice">NGN <span id="total-${i}">${food.refreshmentPrice * food.refreshmentQuantity}</span></h4>
  </div>
  <div class = "qtybtns">
  <button class = "decreasebtn" onclick="decrementQuantity(${i})">-</button>
  <span>${food.refreshmentQuantity}</span>
  <button class = "increasebtn" onclick="incrementQuantity(${i})">+</button>
  </div>
  <div class = "removebtncontainer">
  <button class = "removebtn" onclick="removeFood(${i})">Remove</button>
  </div>
  </div>
`;
}
calculateTotalPrice()
calculateTotal();

function incrementQuantity(index) {
  if (refCart[index].refreshmentQuantity < 5) {
    refCart[index].refreshmentQuantity++;
    let quantityElement = foodCartList.querySelectorAll("span")[index];
    quantityElement.innerText = refCart[index].refreshmentQuantity;
    updateCart();
    updateFoodCartList(index);
  }
  calculateTotalPrice()
  calculateTotal();
}

function decrementQuantity(index) {
  if (refCart[index].refreshmentQuantity > 1) {
    refCart[index].refreshmentQuantity--;
    let quantityElement = foodCartList.querySelectorAll("span")[index];
    quantityElement.innerText = refCart[index].refreshmentQuantity;
    updateCart();
    updateFoodCartList(index);
  }
  calculateTotalPrice()
  calculateTotal();
}


function updateFoodCartList(index) {
  let food = refCart[index];
  let totalElement = document.getElementById(`total-${index}`);
  totalElement.innerText = food.refreshmentPrice * food.refreshmentQuantity;
}
calculateTotalPrice()
calculateTotal();
// function to remove a food item from the cart
function removeFood(index) {
  refCart.splice(index, 1);
  foodCartList.innerHTML = ""; // clear the current list
  updateCart(); // update local storage
  for (let i = 0; i < refCart.length; i++) {
    let food = refCart[i];
    console.log(food);
    foodCartList.innerHTML += `
    <div class = "cart-list-flex">
    <img class = "food-image" src="${food.refreshmentImage}" alt="${food.refreshmentTitle}">
    <div class = "maincart-info">
    <h2 class = "refreshmenttitle">${food.refreshmentTitle}</h2>
    <h3 class = "refreshmentsubtitle">${food.refreshmentSubtitle}</h3>
    <h4 class = "refreshmentprice">NGN <span id="total-${i}">${food.refreshmentPrice * food.refreshmentQuantity}</span></h4>
    </div>
    <div class = "qtybtns">
    <button class = "decreasebtn" onclick="decrementQuantity(${i})">-</button>
    <span>${food.refreshmentQuantity}</span>
    <button class = "increasebtn" onclick="incrementQuantity(${i})">+</button>
    </div>
    <div class = "removebtncontainer">
    <button class = "removebtn" onclick="removeFood(${i})">Remove</button>
    </div>
    </div>
  `;
  }
  calculateTotalPrice()
  calculateTotal();
}


// Movie Cart (myCart)

// function to calculate the total price of all items in the cart

function calculateMovieTotalPrice() {
  let totalMoviePrice = 0;
  for (let i = 0; i < myCart.length; i++) {
    let movie = myCart[i];
    let movieTotal = movie.MoviePrice * movie.MovieQuantity;
    totalMoviePrice += movieTotal;
  }
  console.log(totalMoviePrice);
}

for (let i = 0; i < myCart.length; i++) {
  let movie = myCart[i];
  console.log(movie);
  movieCartList.innerHTML += `
  <div class = "cart-list-flex">
  <img class = "food-image" src="${movie.MovieImage}" alt="${movie.MovieTitle}">
  <div class = "maincart-info">
  <h2 class = "refreshmenttitle">${movie.MovieTitle}</h2>
  <h4 class = "refreshmentsubtitle">${movie.MovieTime}</h4>
  <h4 class = "refreshmentprice">NGN <span id="totalmovie-${i}">${movie.MoviePrice * movie.MovieQuantity}</span></h4>
  </div>
  <div class = "qtybtns">
    <button class = "decreasebtn" onclick="movieDecrementQuantity(${i})">-</button>
    <span>${movie.MovieQuantity}</span>
    <button class = "increasebtn" onclick="movieIncrementQuantity(${i})">+</button>
  </div>
  <div class = "removebtncontainer">
  <button class = "removebtn" onclick="removeMovie(${i})">Remove</button>
  </div>
  </div>
  `;
}
calculateMovieTotalPrice()
calculateTotal();

function movieIncrementQuantity(index) {
  if (myCart[index].MovieQuantity < 5) {
    myCart[index].MovieQuantity++;
    updateCart();
    updateMovieCartList(index);
    let quantityElement = movieCartList.querySelectorAll("span")[index];
    quantityElement.innerText = myCart[index].MovieQuantity;
  }
  calculateMovieTotalPrice()
  calculateTotal();
}

function movieDecrementQuantity(index) {
  if (myCart[index].MovieQuantity > 1) {
    myCart[index].MovieQuantity--;
    updateCart();
    updateMovieCartList(index);
    let quantityElement = movieCartList.querySelectorAll("span")[index];
    quantityElement.innerText = myCart[index].MovieQuantity;
  }
  calculateMovieTotalPrice()
  calculateTotal();
}

function updateMovieCartList(index) {
  let movie = myCart[index];
  let totalmovieElement = document.getElementById(`totalmovie-${index}`);
  totalmovieElement.innerText = movie.MoviePrice * movie.MovieQuantity;
  calculateMovieTotalPrice()
  calculateTotal();
}

function removeMovie(index) {
  myCart.splice(index, 1);
  movieCartList.innerHTML = ""; // clear the current list
  updateCart(); // update local storage
  for (let i = 0; i < myCart.length; i++) {
    let movie = myCart[i];
    console.log(movie);
    movieCartList.innerHTML += `
    <div class = "cart-list-flex">
    <img class = "food-image" src="${movie.MovieImage}" alt="${movie.MovieTitle}">
    <div class = "maincart-info">
    <h2 class = "refreshmenttitle">${movie.MovieTitle}</h2>
    <h4 class = "refreshmentsubtitle">${movie.MovieTime}</h4>
    <h4 class = "refreshmentprice">NGN <span id="totalmovie-${i}">${movie.MoviePrice * movie.MovieQuantity}</span></h4>
    </div>
    <div class = "qtybtns">
      <button class = "decreasebtn" onclick="movieDecrementQuantity(${i})">-</button>
      <span>${movie.MovieQuantity}</span>
      <button class = "increasebtn" onclick="movieIncrementQuantity(${i})">+</button>
    </div>
    <div class = "removebtncontainer">
    <button class = "removebtn" onclick="removeMovie(${i})">Remove</button>
    </div>
    </div>
    `;
    console.log(movie);
  }
  calculateMovieTotalPrice()
  calculateTotal();
}

function makePayment() {
  ticketArray.push(
    myCart.concat(refCart)
  );
  console.log(ticketArray);
  if (myCart.length === 0 && refCart.length === 0) {
    alert("Fill your Cart!")
    document.getElementById("exampleModal").style.display = "none"
  }
   else {
    setTimeout(() => {
      window.location.href = "ticket.html"
    }, 4500);    
  }
}
