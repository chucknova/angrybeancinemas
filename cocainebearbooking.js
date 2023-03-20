let movieCartsix = [];
let cocainebearDate = document.getElementById("inputcocainebeardate");
let cocainebearTime = document.getElementById("inputcocainebeartime");
let cocainebearTitle = document.getElementById("cocainebeartitle");
let moviePrice = 2500;
function addCocaineBearCart() {
    if (cocainebearDate.value == "" || cocainebearTime.value == "") {
        alert("Field cannot be empty")
    } else {
        myCart.push(
            {
                MovieImage: "Images/cocainebearposter.webp",
                MovieTitle: cocainebearTitle.innerHTML,
                MovieDate: cocainebearDate.value,
                MovieTime: cocainebearTime.value,
                MoviePrice: `${moviePrice}`,
                MovieQuantity: 1
            }
        )
        cocainebearDate.value = "";
        cocainebearTime.value = "";
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