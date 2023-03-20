let movieCartfour = [];
let bukastreetDate = document.getElementById("inputbukastreetdate");
let bukastreetTime = document.getElementById("inputbukastreettime");
let bukastreetTitle = document.getElementById("bukastreettitle");
let moviePrice = 2500;
function addBukaStreetCart() {
    if (bukastreetDate.value == "" || bukastreetTime.value == "") {
        alert("Field cannot be empty")
    } else {
        myCart.push(
            {
                MovieImage: "Images/battleonbukastreetposter.jpg",
                MovieTitle: bukastreetTitle.innerHTML,
                MovieDate: bukastreetDate.value,
                MovieTime: bukastreetTime.value,
                MoviePrice: `${moviePrice}`,
                MovieQuantity: 1
            }
        )
        bukastreetDate.value = "";
        bukastreetTime.value = "";
        // Store the updated cart data in localStorage
        localStorage.setItem('cartData', JSON.stringify(myCart));
        alert("Item added to cart");
        window.location.href = "refreshment-question.html"
    }
}
// Get the cart items
function getCartItems() {
    console.log(myCart);
}
getCartItems();